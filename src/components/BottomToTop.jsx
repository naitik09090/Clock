import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { GiHeavyTimer } from "react-icons/gi";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const toggleScrollBtn = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 200);
    };

    window.addEventListener("scroll", toggleScrollBtn);
    return () => window.removeEventListener("scroll", toggleScrollBtn);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="d-flex flex-column justify-content-center align-items-center shadow"
        style={{
          position: "fixed",
          top: "90%",
          right: "10px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background:"linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(35, 38, 38, 1) 73%, rgba(0, 0, 0, 1) 100%)",
          color: "white",
          zIndex: 1050,
        }}
      >
        <GiHeavyTimer size={22} />
      </button>
    )
  );
};

export default BackToTopButton;
