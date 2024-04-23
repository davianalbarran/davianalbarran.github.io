import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">Davian</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/experience" className="hover:underline">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/work" className="hover:underline">
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
