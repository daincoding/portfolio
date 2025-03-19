"use client";

const Navbar = ({ activePage, setActivePage }) => {
  const handleNavClick = (page) => {
    setActivePage(page);
    console.log("Active Page Changed To:", page);
    window.scrollTo(0, 0); // Scroll to top when switching sections
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {["About", "Resume", "Portfolio", "Contact"].map((page) => (
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