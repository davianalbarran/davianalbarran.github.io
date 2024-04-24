import { Link } from "react-scroll";

const Navbar = () => {
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
      <ul className="flex space-x-4">
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
          <Link
            to="resume"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded hover:from-purple-700 hover:to-pink-700"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
