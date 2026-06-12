import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [nightMode, setNightMode] = useState(() => {
    const savedMode = localStorage.getItem("nightMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    document.body.className = nightMode ? "nightMode" : "";
    localStorage.setItem("nightMode", JSON.stringify(nightMode));
  }, [nightMode]);

  const toggleDarkMode = () => {
    setNightMode(prevMode => !prevMode);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    const navbarCollapse = document.getElementById("collapsibleNavbar");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const toggleButton = document.querySelector(".navbar-toggler");
      if (toggleButton) toggleButton.click();
    }
  };

  // Add event listener to close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector(".navbar");
      const navbarCollapse = document.getElementById("collapsibleNavbar");

      // If menu is open and click is outside the navbar
      if (
        navbarCollapse &&
        navbarCollapse.classList.contains("show") &&
        navbar &&
        !navbar.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 px-3 fixed-top shadow-sm">
        <div className="container-fluid d-flex flex-column flex-lg-row">
          <div className="d-flex align-items-center justify-content-between w-100 d-lg-none mb-2 mb-lg-0">
            {/* Left side: Brand Logo */}
            <Link to="/" aria-label="Home" onClick={closeMenu} className="navbar-brand d-flex align-items-center m-0">
              <img src="/logo-brand.svg" alt="Logo" className="navbar-logo" />
            </Link>

            {/* Mobile Toggle & Theme Toggle Together on Mobile */}
            <div className="d-flex align-items-center gap-2">
              {/* Theme Toggle Visible on Mobile (Next to hamburger) */}
              <button
                className="BtN_Mood d-flex align-items-center"
                onClick={() => toggleDarkMode()}
                title="Toggle theme"
              >
                {nightMode ? (
                  <BsSun className="BTn_Sun" />
                ) : (
                  <BsMoon className="BTn_Moon" />
                )}
              </button>

              <button
                className="navbar-toggler border-0 shadow-none p-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
                aria-controls="collapsibleNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" style={{ width: '24px', height: '24px' }}></span>
              </button>
            </div>
          </div>

          {/* Desktop Brand Logo (Hidden on mobile as it's in the mobile-only div above) */}
          <Link to="/" aria-label="Home" onClick={closeMenu} className="navbar-brand d-none d-lg-flex align-items-center">
            <img src="/logo-brand.svg" alt="Logo" className="navbar-logo" />
          </Link>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto align-items-center gap-lg-3 gap-2 mt-3 mt-lg-0 text-center">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-white nav-hover-effect" onClick={closeMenu}>About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white nav-hover-effect" to="/worldclocks" onClick={closeMenu}>
                  World Clocks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white nav-hover-effect" to="/holidays" onClick={closeMenu}>
                  Holidays
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white nav-hover-effect" to="/blog" onClick={closeMenu}>
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white nav-hover-effect"
                  to="#"
                  id="toolsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end shadow-lg border-0" aria-labelledby="toolsDropdown">
                  <li>
                    <NavLink className="dropdown-item py-2" to="/" onClick={closeMenu}>
                      Clock
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item py-2" to="/timer" onClick={closeMenu}>
                      Timer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item py-2" to="/stopwatch" onClick={closeMenu}>
                      Stopwatch
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/privacy" className="nav-link text-white nav-hover-effect" onClick={closeMenu}>Privacy Policy</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/terms" className="nav-link text-white nav-hover-effect" onClick={closeMenu}>Terms & Conditions</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-white nav-hover-effect" onClick={closeMenu}>Contact</NavLink>
              </li>
              {/* Theme Toggle Visible on Desktop Only */}
              <button
                className="BtN_Mood d-none d-lg-flex align-items-center"
                onClick={() => toggleDarkMode()}
                title="Toggle theme"
              >
                {nightMode ? (
                  <BsSun className="BTn_Sun" />
                ) : (
                  <BsMoon className="BTn_Moon" />
                )}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
