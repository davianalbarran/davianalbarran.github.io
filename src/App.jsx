import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <Home />
        <About />
        <Education />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;