import React, { useState, useEffect } from "react";
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
        className="back-to-top shadow-lg"
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: "40px",
          right: "25px",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)",
          color: "white",
          zIndex: 1050,
          border: "2px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          padding: "0",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px) scale(1.1)";
          e.currentTarget.style.background = "linear-gradient(135deg, #333333 0%, #444444 100%)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.background = "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
        }}
      >
        <GiHeavyTimer size={28} />
      </button>
    )
  );
};

export default BackToTopButton;
