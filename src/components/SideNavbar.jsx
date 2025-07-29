import React from 'react';
import { TfiAlarmClock } from "react-icons/tfi";
import { IoTimerOutline } from "react-icons/io5";
import { RxStopwatch } from "react-icons/rx";
import { WiTime9 } from "react-icons/wi";
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <nav
            className="fixed-bottom bg-white border-top d-flex justify-content-around align-items-center py-2 px-1"
            style={{ zIndex: 1030 }}
        >
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `d-flex flex-column align-items-center text-decoration-none px-2 ${isActive ? "text-primary" : "text-dark"}`
                }
            >
                <WiTime9 size={22} />
                <small className="fw-bold">Clock</small>
            </NavLink>

            <NavLink
                to="/clock"
                className={({ isActive }) =>
                    `d-flex flex-column align-items-center text-decoration-none px-2 ${isActive ? "text-primary" : "text-dark"}`
                }
            >
                <TfiAlarmClock size={20} />
                <small className="fw-bold">Alarm</small>
            </NavLink>

            <NavLink
                to="/timer"
                className={({ isActive }) =>
                    `d-flex flex-column align-items-center text-decoration-none px-2 ${isActive ? "text-primary" : "text-dark"}`
                }
            >
                <IoTimerOutline size={22} />
                <small className="fw-bold">Timer</small>
            </NavLink>

            <NavLink
                to="/stopwatch"
                className={({ isActive }) =>
                    `d-flex flex-column align-items-center text-decoration-none px-2 ${isActive ? "text-primary" : "text-dark"}`
                }
            >
                <RxStopwatch size={20} />
                <small className="fw-bold">Stopwatch</small>
            </NavLink>
        </nav>
    );
};

export default SideNavbar;
