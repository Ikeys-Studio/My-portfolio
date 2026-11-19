"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },\n  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Work" },
  { href: "#music-sound", label: "Music & Sound" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav">
        <a
          className="brand"
          href="#top"
          onClick={() => setOpen(false)}
          aria-label="Triple Thread Agency, back to top"
        >
          <BrandMark className="brand__mark" />
          <span className="brand__name">
            Triple Thread <span>Agency</span>
          </span>
        </a>

        <nav
          id="primary-navigation"
          className={`nav__links${open ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary btn--small nav__mobile-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </nav>

        <a className="btn btn--outline btn--small nav__cta" href="#contact">
          Start a project
        </a>

        <button
          type="button"
          className={`nav__toggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
