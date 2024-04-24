import { useState, useEffect } from "react";

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-white bg-opacity-10 blur-3xl pointer-events-none"
      style={{
        width: "400px",
        height: "400px",
        left: position.x,
        top: position.y,
      }}
    ></div>
  );
};

export default MouseEffect;
