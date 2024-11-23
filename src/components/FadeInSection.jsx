import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const currentElement = domRef.current;

    if (currentElement) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (observerRef.current && currentElement) {
              observerRef.current.unobserve(currentElement);
            }
          }
        });
      });

      observerRef.current.observe(currentElement);
    }

    return () => {
      if (observerRef.current && currentElement) {
        observerRef.current.unobserve(currentElement);
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeInSection;