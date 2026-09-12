"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/electrical", label: "Electrical" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header
      className={`site-header ${isHome ? "site-header-home" : "site-header-internal"
        }`}
    >
      <div className="container nav-wrap">
        <Link className="brand" href="/" onClick={() => setIsMenuOpen(false)}>
          <div className="brand-mark">JP</div>

          <div>
            <div className="brand-name">J. A. POWERBUILT</div>
            <div className="brand-subtitle">CONSTRUCTION</div>
          </div>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">{isMenuOpen ? "Close" : "Open"} menu</span>
          <i
            aria-hidden="true"
            className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
          />
        </button>

        <nav
          className={`main-nav${isMenuOpen ? " is-open" : ""}`}
          id="site-navigation"
          aria-label="Primary navigation"
        >
          {navigationLinks.map(({ href, label }) => (
            <Link href={href} key={href} onClick={() => setIsMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <Link
            className="nav-estimate"
            href="/estimate"
            onClick={() => setIsMenuOpen(false)}
          >
            Request Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
