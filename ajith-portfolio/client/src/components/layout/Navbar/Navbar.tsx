import { useState } from "react";
import "./Navbar.css";

import { navigationLinks } from "../../../data/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="#top" onClick={closeMenu}>
          AJITH.
        </a>

        <button
          className="navbar-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a
            className="navbar-resume-mobile"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>

        <a
          className="navbar-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;