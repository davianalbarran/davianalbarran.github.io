import { useState } from "react";
import { Link } from "react-scroll";
import { portfolio } from "../data/portfolio.js";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleResumeDownload = () => {
    const resumeURL = "/Davian Albarran - Software Engineer Public Release.pdf";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Davian_Albarran_Resume.pdf";
    link.click();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="notebook-nav">
      <div className="notebook-brand">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          aria-label={`${portfolio.name} home`}
        >
          <span className="notebook-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" role="img">
              <path className="brand-mark-shell" d="M10 33C10 20.3 20.3 10 33 10h21v21c0 12.7-10.3 23-23 23H10V33Z" />
              <text className="brand-mark-text" x="31.5" y="39.5">DA</text>
              <path className="brand-mark-rule" d="M18 45h25" />
            </svg>
          </span>
        </Link>
      </div>
      <button
        type="button"
        onClick={toggleMobileMenu}
        className={`notebook-menu-button ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <ul
        className={`notebook-links ${isMobileMenuOpen ? "is-open" : ""}`}
      >
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-88}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            offset={-88}
            className="cursor-pointer"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-88}
            className="cursor-pointer"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            offset={-88}
            className="cursor-pointer"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-88}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
        <li>
          <a href={portfolio.links.blog}>Blog</a>
        </li>
        <li>
          <button
            onClick={handleResumeDownload}
            className="notebook-resume-button"
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
