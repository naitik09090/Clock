import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { GiHeavyTimer } from "react-icons/gi";

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    return (
        <Button
            className="back-to-top-btn text-black"
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: "40px",
                right: "20px",
                display: visible ? "inline" : "none",
                borderRadius: "30%",
                padding: "10px 15px",
                zIndex: 1000
            }}
        >
            <GiHeavyTimer className="top_To-Bottom" />
        </Button>
    );
};

export default BackToTopButton;
