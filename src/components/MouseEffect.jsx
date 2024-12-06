import { useState, useEffect, useRef } from "react";

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });

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
    let animationFrameId;

    const handleMouseMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      // Smoothly interpolate between current position and target position
      setPosition(currentPos => ({
        x: currentPos.x + (targetRef.current.x - currentPos.x) * 0.1,
        y: currentPos.y + (targetRef.current.y - currentPos.y) * 0.1
      }));

      animationFrameId = requestAnimationFrame(animate);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile]);

  return (
    <div
      className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-white bg-opacity-20 blur-3xl pointer-events-none transition-transform duration-75 ease-out"
      style={{
        width: "400px",
        height: "400px",
        left: isMobile ? "0" : position.x,
        top: isMobile ? "0" : position.y,
        transform: `translate(-50%, -50%)`,
      }}
    ></div>
  );
};

export default MouseEffect;
