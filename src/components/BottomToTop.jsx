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
      <Button
        onClick={scrollToTop}
        className="d-flex flex-column justify-content-center align-items-center shadow"
        style={{
          position: "fixed",
          top: "87%",
          right: "20px",
          width: "70px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "#fff",
          zIndex: 1050,
        }}
      >
        <GiHeavyTimer size={22} />
      </Button>
    )
  );
};

export default BackToTopButton;
