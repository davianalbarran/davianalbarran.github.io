import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

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
