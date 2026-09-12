import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

import { db } from "../../../../../src/prisma/db";
import { adminStorage } from "../../../../../lib/firebase-admin";

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
]);

function sanitizeFileName(name) {
  return name
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[-.]+|[-.]+$/g, "")
    .slice(0, 180);
}

export async function POST(request, { params }) {
  try {
    const { id } = await params;

    const estimate = await db.orm.public.EstimateRequest
      .where({ id })
      .first();

    if (!estimate) {
      return NextResponse.json(
        { error: "Estimate request was not found." },
        { status: 404 }
      );
    }

    const formData = await request.formData();
    const files = formData.getAll("files");

    if (!files.length) {
      return NextResponse.json(
        { error: "Select at least one drawing to upload." },
        { status: 400 }
      );
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { error: `A maximum of ${MAX_FILES} files can be uploaded.` },
        { status: 400 }
      );
    }

    const bucket = adminStorage.bucket();
    let uploadedCount = 0;

    for (const file of files) {
      if (!(file instanceof File)) {
        return NextResponse.json(
          { error: "Invalid uploaded file." },
          { status: 400 }
        );
      }

      if (!ALLOWED_TYPES.has(file.type)) {
        return NextResponse.json(
          { error: "Only PDF, JPG and PNG files are supported." },
          { status: 400 }
        );
      }

      if (file.size <= 0 || file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Each file must be 10 MB or smaller." },
          { status: 400 }
        );
      }

      const safeName = sanitizeFileName(file.name) || "drawing";
      const objectName = `${randomUUID()}-${safeName}`;

      const storagePath =
        `estimate-requests/${estimate.referenceNumber}/${objectName}`;

      const storageFile = bucket.file(storagePath);
      const buffer = Buffer.from(await file.arrayBuffer());

      await storageFile.save(buffer, {
        resumable: false,
        contentType: file.type,
        metadata: {
          cacheControl: "private, no-store",
          contentDisposition: `attachment; filename="${safeName}"`,
          metadata: {
            estimateId: estimate.id,
            referenceNumber: estimate.referenceNumber,
          },
        },
      });

      try {
        await db.orm.public.EstimateFile.create({
          estimateRequestId: estimate.id,
          fileName: safeName,
          storagePath,
          fileType: file.type,
          fileSize: file.size,
        });

        uploadedCount += 1;
      } catch (error) {
        await storageFile.delete({ ignoreNotFound: true });
        throw error;
      }
    }

    return NextResponse.json(
      {
        success: true,
        referenceNumber: estimate.referenceNumber,
        uploadedCount,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Estimate file upload failed:");
    console.error(error);
    console.error(error?.stack);

    return NextResponse.json(
      { error: "We could not upload your drawings. Please try again." },
      { status: 500 }
    );
  }
}