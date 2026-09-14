import Link from "next/link";
import { redirect } from "next/navigation";

import { getAdminSession } from "../../lib/admin-auth";
import LogoutButton from "./components/LogoutButton";

import "./admin.css";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <main className="admin-page">
      <div className="admin-shell">
        <div className="admin-heading">
          <div>
            <span className="admin-eyebrow">
              POWERBUILT TEAM
            </span>

            <h1>Admin Dashboard</h1>

            <p>
              Manage estimate requests,
              uploaded drawings and project enquiries.
            </p>
          </div>

          <div className="admin-user">
            <span>Signed in as</span>

            <strong>
              {session.email ?? "Team Member"}
            </strong>

            <LogoutButton />
          </div>
        </div>

        <div className="admin-grid">
          <Link
            href="/admin/estimates"
            className="admin-card"
          >
            <span className="admin-card-label">
              ESTIMATES
            </span>

            <h2>Estimate Requests</h2>

            <p>
              Review incoming requests and
              uploaded floor plans.
            </p>

            <span className="admin-card-link">
              View Requests →
            </span>
          </Link>

          <div className="admin-card admin-card-disabled">
            <span className="admin-card-label">
              ENQUIRIES
            </span>

            <h2>Contact Enquiries</h2>

            <p>
              Customer contact enquiries will
              appear here.
            </p>

            <span className="admin-card-link">
              Coming Soon
            </span>
          </div>

          <div className="admin-card admin-card-disabled">
            <span className="admin-card-label">
              INVOICES
            </span>

            <h2>Invoices</h2>

            <p>
              Quotes, invoices and payment
              tracking.
            </p>

            <span className="admin-card-link">
              Phase 2
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}