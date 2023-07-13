import React, { useState, useEffect } from 'react';
import '../css/index.css';
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add scroll event listener to show/hide the button
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Cleanup: remove the scroll event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // Show the button when scrolling beyond a specific threshold (e.g., 300px)
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </button>
    );
}

export default ScrollToTopButton;