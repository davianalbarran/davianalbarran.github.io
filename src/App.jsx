import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import MouseEffect from "./components/MouseEffect";

const App = () => {
  return (
    <div>
      <MouseEffect />
      <Navbar />
      <div className="relative">
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;
