import Link from "next/link";
import { db } from "../../../src/prisma/db";

import "./estimates.css";

export const dynamic = "force-dynamic";

function formatDate(value) {
  if (!value) return "—";

  try {
    return new Date(
      value.toString()
    ).toLocaleDateString("en-GB");
  } catch {
    return "—";
  }
}

export default async function AdminEstimatesPage() {
  const estimates =
    await db.orm.public.EstimateRequest.all();

  estimates.sort((a, b) =>
    String(b.createdAt).localeCompare(
      String(a.createdAt)
    )
  );

    return (
        <main className="estimates-page">
            <div className="estimates-shell">
                <div className="estimates-header">
                    <div>
                        <span className="admin-eyebrow">
                            POWERBUILT TEAM
                        </span>

                        <h1>Estimate Requests</h1>

                        <p>
                            Incoming customer requests from
                            the website.
                        </p>
                    </div>

                    <Link
                        href="/admin"
                        className="back-link"
                    >
                        ← Dashboard
                    </Link>
                </div>

                {estimates.length === 0 ? (
                    <div className="empty-state">
                        No estimate requests yet.
                    </div>
                ) : (
                    <div className="estimate-table-wrap">
                        <table className="estimate-table">
                            <thead>
                                <tr>
                                    <th>Reference</th>
                                    <th>Customer</th>
                                    <th>Project</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                    <th>Submitted</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {estimates.map((estimate) => (
                                    <tr key={estimate.id}>
                                        <td>
                                            <strong>
                                                {estimate.referenceNumber}
                                            </strong>
                                        </td>

                                        <td>
                                            <div className="customer-name">
                                                {estimate.customerName}
                                            </div>

                                            <div className="customer-contact">
                                                {estimate.phone}
                                            </div>
                                        </td>

                                        <td>
                                            {estimate.projectType}
                                        </td>

                                        <td>
                                            {estimate.projectLocation}
                                        </td>

                                        <td>
                                            <span
                                                className={`status-badge status-${String(
                                                    estimate.status
                                                ).toLowerCase()}`}
                                            >
                                                {estimate.status}
                                            </span>
                                        </td>

                                        <td>
                                           {formatDate(estimate.createdAt)}
                                        </td>

                                        <td>
                                            <Link
                                                href={`/admin/estimates/${estimate.id}`}
                                                className="view-link"
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </main>
    );
}
