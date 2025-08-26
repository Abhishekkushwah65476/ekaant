import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Clear any existing timeout to reset the delay
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Hide navbar only when scrolling down significantly past 100vh
      if (currentScrollY > lastScrollY && currentScrollY > viewportHeight + 100) {
        setIsVisible(false);
      } else if (currentScrollY <= viewportHeight) {
        // Show navbar immediately when within top 100vh
        setIsVisible(true);
      }

      // Set a timeout to show navbar after scrolling stops (1 second delay)
      const timeout = setTimeout(() => {
        if (currentScrollY <= viewportHeight + 100) {
          setIsVisible(true);
        }
      }, 1000);

      setScrollTimeout(timeout);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <nav
      className={`fixed top-10 left-0 z-50 w-full flex justify-between items-center px-4 sm:px-6 py-4 bg-white/90 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="Ekaant Logo" className="h-10 w-auto" />
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="sm:hidden text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Menu */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row gap-12 absolute sm:static top-full left-0 w-full sm:w-auto bg-white/90 sm:bg-transparent p-4 sm:p-0 space-y-2 sm:space-y-0 sm:space-x-6 font-semibold text-gray-800`}
      >
        <li>
          <a href="#home" className="hover:text-green-700">
            HOME
          </a>
        </li>
        <li>
          <a href="#amenities" className="hover:text-green-700">
            AMENITIES
          </a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-green-700">
            PHOTO GALLERY
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-green-700">
            CONTACT US
          </a>
        </li>
      </ul>
    </nav>
  );
}