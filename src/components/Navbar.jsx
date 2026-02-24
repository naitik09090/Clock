import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiClockwork } from "react-icons/gi";
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
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 mb-3 fixed-top shadow-sm">
        <div className="container-fluid">
          {/* Left side: Brand Logo */}
          <Link to="/" aria-label="Home" onClick={closeMenu} className="navbar-brand d-flex align-items-center">
            <GiClockwork size={35} color="white" className="me-2" />
          </Link>

          {/* Mobile Toggle & Theme Toggle Together on Mobile */}
          <div className="d-flex align-items-center gap-2">

            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              aria-controls="collapsibleNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-3 mt-3 mt-sm-0">
              <li className="nav-item">
                <Link className="nav-link text-white nav-hover-effect" to="/worldclocks" onClick={closeMenu}>
                  World Clocks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-hover-effect" to="/holidays" onClick={closeMenu}>
                  Holidays
                </Link>
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
                    <Link className="dropdown-item py-2" to="/" onClick={closeMenu}>
                      Clock
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item py-2" to="/timer" onClick={closeMenu}>
                      Timer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item py-2" to="/stopwatch" onClick={closeMenu}>
                      Stopwatch
                    </Link>
                  </li>
                </ul>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
