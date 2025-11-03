import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { GiClockwork } from "react-icons/gi";



const Navbar = ({ is24Hour, setIs24Hour, digitalFont, setDigitalFont, showDate, setShowDate, setTime}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#1976d2");

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    // Init color
    document.documentElement.style.setProperty("--main-color", selectedColor);
  }, [selectedColor]);

  const colors = ["#f5c242", "#e53935", "#ff9800", "#4caf50", "#1976d2"];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Add/remove class on body
  useEffect(() => {
    document.body.className = nightMode ? "nightMode" : "";
  }, [nightMode]);

  const toggleDarkMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <>
      <nav className="d-block navbar navbar-expand-sm navbar-dark bg-dark p-3 mb-3 fixed-top">
        <div className="container-fluid">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            {/* Left side: Brand Clock */}
            <Link to="/">
              <GiClockwork size={40} color="white" />
            </Link>

            {/* Right side: Toggle Button */}
            <button
              className="navbar-toggler border-0"
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

          {/* Menu */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/worldclocks">
                  WorldClocks
                </Link>
              </li>
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

              {/* <li className="nav-item">
                <GrSettingsOption
                  className="Setting_icon text-center justify-content-center cursor-pointer"
                  onClick={toggleSidebar}
                />
              </li> */}

              {/* Sidebar Panel */}
              {/* <div className={`custom-offcanvas ${isOpen ? "show" : ""}`}>
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
                        checked={!digitalFont}
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
                        checked={is24Hour}
                        onChange={() => setIs24Hour(is24Hour)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>


                  <div className="setting-row">
                    <span>Show Date</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={!showDate}
                        onChange={() => setShowDate(!showDate)}
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
                          className={`color-circle ${selectedColor === color ? "selected" : ""
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
                </div>
              </div> */}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
