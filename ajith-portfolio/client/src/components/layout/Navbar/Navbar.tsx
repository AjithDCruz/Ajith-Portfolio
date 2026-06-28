import "./Navbar.css";
import { navigationLinks } from "../../../data/navigation";
import Button from "../../common/Button/Button";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">AJITH.</div>

        <ul className="nav-links">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <Button>Resume</Button>
      </div>
    </nav>
  );
}

export default Navbar;