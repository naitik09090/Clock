import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [digitalFont, setDigitalFont] = useState(true);
  const [is12Hour, setIs12Hour] = useState(true);
  const [showDate, setShowDate] = useState(true);
  const [nightMode, setNightMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#1976d2");

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const applySettings = () => {
    // Apply theme to document
    document.body.style.backgroundColor = nightMode ? "#000000" : "#ffffff";
    document.body.style.color = nightMode ? "#ffffff" : "#000000";
    document.documentElement.style.setProperty("--main-color", selectedColor);
    closeSidebar();
  };

  useEffect(() => {
    // Init color
    document.documentElement.style.setProperty("--main-color", selectedColor);
  }, []);

  const colors = ["#f5c242", "#e53935", "#ff9800", "#4caf50", "#1976d2"];

  // Add/remove class on body
  useEffect(() => {
    document.body.className = nightMode ? "nightMode" : "";
  }, [nightMode]);

  const toggleDarkMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <>
      <nav className="d-block navbar navbar-expand-sm navbar-dark bg-dark p-3 fixed-top">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="" height={60} width={60} />
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/holidays">
                  Holidays
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Tools
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Clock
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/clock">
                      Alarm Clock
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/timer">
                      Timer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/stopwatch">
                      Stopwatch
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
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
              </li>

              <li className="nav-item">
                <GrSettingsOption
                  className="Setting_icon text-center justify-content-center cursor-pointer"
                  onClick={toggleSidebar}
                />
              </li>

              {/* Sidebar Panel */}
              <div className={`custom-offcanvas ${isOpen ? "show" : ""}`}>
                <div className="offcanvas-header p-3">
                  <h5 className="text-white m-0">Settings</h5>
                  <CgClose
                    className="CloSe_BTn cursor-pointer"
                    onClick={closeSidebar}
                  />
                </div>
                <hr className="divider" />
                <div className="text-white p-3">
                  <div className="setting-row">
                    <span>Digital Font</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={digitalFont}
                        onChange={() => setDigitalFont(!digitalFont)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-row">
                    <span>12 hours (am/pm)</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={is12Hour}
                        onChange={() => setIs12Hour(!is12Hour)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-row">
                    <span>Show Date</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={showDate}
                        onChange={() => setShowDate(!showDate)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-row">
                    <span>Night Mode</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={nightMode}
                        onChange={() => setNightMode(!nightMode)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="mt-3">
                    <p className="mb-1">Colors</p>
                    <div className="color-options">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className={`color-circle ${
                            selectedColor === color ? "selected" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => {
                            setSelectedColor(color);
                            document.documentElement.style.setProperty(
                              "--main-color",
                              color
                            );
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <button
                    className="btn btn-primary w-100 mt-4"
                    onClick={applySettings}
                  >
                    OK
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
