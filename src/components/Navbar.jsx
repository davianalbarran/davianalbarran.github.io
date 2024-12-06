import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleResumeDownload = () => {
    const resumeURL = "/Davian Albarran - Software Engineer.pdf";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Davian_Albarran_Resume.pdf";
    link.click();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-white fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-gray-900">
      <div className="text-2xl font-bold group">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent cursor-pointer"
        >
          DVN
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L21.586 10l-3.293-3.293a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isMobileMenuOpen ? "block md:hidden mobile-menu" : "hidden"
        } md:flex items-center space-x-4`}
      >
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://dvnscience.blog"
            >
            Blog
            </a>
        </li>
        <li>
          <button
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded hover:from-purple-700 hover:to-pink-700"
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;