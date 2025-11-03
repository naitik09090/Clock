import React, { useEffect, useState } from "react";
// import { TfiAlarmClock } from "react-icons/tfi";
import { BsSun, BsMoon } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import { RxStopwatch } from "react-icons/rx";
import { WiTime9 } from "react-icons/wi";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <>
      <nav
        className="bottom_Nav fixed-bottom navbar-dark bg-dark d-flex justify-content-around align-items-center py-2"
        style={{ zIndex: 1030 }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `d-flex flex-column align-items-center text-decoration-none px-2 ${isActive ? "text-primary" : "text-dark"
            }`
          }
        >
          <WiTime9 size={22} className="text-white" />
          <small className="fw-bold text-white">Clock</small>
        </NavLink>

        <NavLink
          to="/timer"
          className={({ isActive }) =>
            `d-flex flex-column align-items-center text-decoration-none px-2 ${isActive ? "text-primary" : "text-dark"
            }`
          }
        >
          <IoTimerOutline size={22} className="text-white" />
          <small className="fw-bold text-white">Timer</small>
        </NavLink>

        <NavLink
          to="/stopwatch"
          className={({ isActive }) =>
            `d-flex flex-column align-items-center text-decoration-none px-2 ${isActive ? "text-primary" : "text-dark"
            }`
          }
        >
          <RxStopwatch size={22} className="text-white" />
          <small className="fw-bold text-white">Stopwatch</small>
        </NavLink>
      </nav>
    </>
  );
};

export default SideNavbar;
