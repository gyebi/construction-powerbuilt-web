import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getAdminSession } from "../../../../lib/admin-auth";
import { db } from "../../../../src/prisma/db";

export const dynamic = "force-dynamic";

export default async function EstimateDetailPage({ params }) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  const { id } = await params;

  const estimate =
    await db.orm.public.EstimateRequest
      .where({ id })
      .first();

  if (!estimate) {
    notFound();
  }

  const files =
    await db.orm.public.EstimateFile
      .where({
        estimateRequestId: id,
      })
      .all();

  return (
    <main style={{ padding: "48px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Link href="/admin/estimates">
          ← Back to Estimates
        </Link>

        <h1 style={{ marginTop: "24px" }}>
          {estimate.referenceNumber}
        </h1>

        <section style={{ marginTop: "32px" }}>
          <h2>Customer</h2>

          <p>
            <strong>Name:</strong>{" "}
            {estimate.customerName}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {estimate.phone || "—"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {estimate.email || "—"}
          </p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            {estimate.whatsapp || "—"}
          </p>
        </section>

        <section style={{ marginTop: "32px" }}>
          <h2>Project</h2>

          <p>
            <strong>Location:</strong>{" "}
            {estimate.projectLocation}
          </p>

          <p>
            <strong>Project Type:</strong>{" "}
            {estimate.projectType}
          </p>

          <p>
            <strong>Estimate Type:</strong>{" "}
            {estimate.estimateType}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {estimate.status}
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p>
            {estimate.description || "—"}
          </p>
        </section>

        <section style={{ marginTop: "32px" }}>
          <h2>Uploaded Drawings</h2>

          {files.length === 0 ? (
            <p>No uploaded files.</p>
          ) : (
            <div>
              {files.map((file) => (
                <div
                  key={file.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    padding: "16px 0",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <div>
                    <strong>{file.fileName}</strong>

                    <div style={{ marginTop: "4px" }}>
                      {file.fileType}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/api/admin/estimate-files/${file.id}?mode=view`}
                      target="_blank"
                    >
                      View Plan
                    </Link>

                    {" · "}

                    <Link
                      href={`/api/admin/estimate-files/${file.id}?mode=download`}
                    >
                      Download
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
