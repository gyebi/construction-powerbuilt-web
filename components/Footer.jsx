import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import {
  getPowerbuiltWhatsAppUrl,
  POWERBUILT_WHATSAPP_NUMBER,
} from "../lib/contact";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        <div className="footer-brand">
          <Link
            href="/"
            aria-label="J. A. Powerbuilt Construction home"
          >
            <div className="brand-name">J. A. POWERBUILT</div>
            <div className="brand-subtitle">CONSTRUCTION</div>
          </Link>

          {POWERBUILT_WHATSAPP_NUMBER ? (
            <a
              href={getPowerbuiltWhatsAppUrl(
                "Hello J. A. POWERBUILT CONSTRUCTION. I would like to discuss a project."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>WhatsApp Us</span>
            </a>
          ) : null}

          <Link
            className="footer-staff-login"
            //href="/admin"
            href="/admin/login"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            Staff Login
          </Link>
        </div>

        <div>
          <strong>Services</strong>
          <Link href="/services">Construction</Link>
          <Link href="/estimate">Estimation</Link>
          <Link href="/electrical">Electrical</Link>
        </div>

        <div>
          <strong>Company</strong>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <strong>Start a Project</strong>
          <Link href="/estimate">Request Estimate</Link>
          <Link href="/estimate">Upload Floor Plan</Link>
        </div>
      </div>

      <div className="footer-ghana">
        <span className="ghana-red" />
        <span className="ghana-gold" />
        <span className="ghana-green" />
      </div>
    </footer>
  );
}
