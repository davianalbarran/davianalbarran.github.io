import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  const MainPage = () => (
    <>
      <Home />
      <About />
      <Education />
      <Experience />
      <Work />
      <Contact />
    </>
  );

  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;