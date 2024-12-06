import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";


const App = () => {
  useEffect(() => {
        // Create and load the Ko-Fi script
        const script = document.createElement("script");
        script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
        script.async = true;
        script.onload = () => {
            // Initialize the Ko-Fi widget after the script has loaded
            if (window.kofiWidgetOverlay) {
                window.kofiWidgetOverlay.draw('davianalbarran', {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': 'Support me',
                    'floating-chat.donateButton.background-color': '#ff38b8', // Changed to match your site's pink theme
                    'floating-chat.donateButton.text-color': '#fff'
                });
            }
        };
        
        document.body.appendChild(script);

        // Cleanup function to remove the script and widget when component unmounts
        return () => {
            document.body.removeChild(script);
            // Remove the Ko-Fi iframe if it exists
            const kofiFrame = document.getElementById('ko-fi-iframe');
            if (kofiFrame) {
                kofiFrame.remove();
            }
        };
  }, []);

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
