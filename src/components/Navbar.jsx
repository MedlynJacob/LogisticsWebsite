import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Highlighting active page
  const linkClass = (path) =>
    location.pathname === path
      ? "nav-link active-link"
      : "nav-link";

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">UNI-Q</Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/services" className={linkClass("/services")}>Services</Link>
          <Link to="/about" className={linkClass("/about")}>About</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
          <Link to="/quote" className={`${linkClass("/quote")} quote-link`}>Get a Quote</Link>
        </div>

        <div
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}
