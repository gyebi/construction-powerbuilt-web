import { NextResponse } from "next/server";

import { getAdminSession } from "../../../../../lib/admin-auth";
import { adminStorage } from "../../../../../lib/firebase-admin";
import { db } from "../../../../../src/prisma/db";

export async function GET(request, { params }) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized." },
        { status: 401 }
      );
    }

    const { id } = await params;

    const fileRecord =
      await db.orm.public.EstimateFile
        .where({ id })
        .first();

    if (!fileRecord) {
      return NextResponse.json(
        { error: "File record not found." },
        { status: 404 }
      );
    }

    const { searchParams } = new URL(request.url);

    const mode =
      searchParams.get("mode") === "download"
        ? "download"
        : "view";

    const bucket = adminStorage.bucket();

    const storageFile = bucket.file(
      fileRecord.storagePath
    );

    const [exists] = await storageFile.exists();

    if (!exists) {
      return NextResponse.json(
        { error: "Stored file not found." },
        { status: 404 }
      );
    }

    const [buffer] = await storageFile.download();

    const disposition =
      mode === "download"
        ? `attachment; filename="${fileRecord.fileName}"`
        : `inline; filename="${fileRecord.fileName}"`;

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type":
          fileRecord.fileType ||
          "application/octet-stream",

        "Content-Disposition":
          disposition,

        "Content-Length":
          String(buffer.length),

        "Cache-Control":
          "private, no-store",
      },
    });
  } catch (error) {
    console.error(
      "Estimate file retrieval failed:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to retrieve this file.",
      },
      { status: 500 }
    );
  }
}
