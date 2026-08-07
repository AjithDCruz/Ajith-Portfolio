import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

import { navigationLinks } from "../../../data/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarRef = useRef<HTMLElement | null>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      isMenuOpen &&
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <a className="navbar-logo" href="#top" onClick={closeMenu}>
          AJITH.
        </a>

        <button
          className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
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