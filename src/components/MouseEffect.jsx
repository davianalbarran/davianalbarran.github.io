import { useState, useEffect } from "react";

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div
      className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-white bg-opacity-20 blur-3xl pointer-events-none"
      style={{
        width: "400px",
        height: "400px",
        left: isMobile ? "0" : position.x,
        top: isMobile ? "0" : position.y,
      }}
    ></div>
  );
};

export default MouseEffect;
