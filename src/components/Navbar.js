"use client"; // Required for Next.js when using useState

import { useState } from "react";

const Navbar = () => {
  // Define state for active page
  const [activePage, setActivePage] = useState("About");

  // Function to handle navigation click
  const handleNavClick = (page) => {
    setActivePage(page); // Update active page
    window.scrollTo(0, 0);
    console.log(activePage) // Scroll to top
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {["About", "Resume", "Portfolio", "Blog", "Contact"].map((page) => (
          <li key={page} className="navbar-item">
            <button
              className={`navbar-link ${activePage === page ? "active" : ""}`}
              onClick={() => handleNavClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;