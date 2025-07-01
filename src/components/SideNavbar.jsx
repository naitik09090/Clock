import React from 'react'
import { TfiAlarmClock } from "react-icons/tfi";
import { IoTimerOutline } from "react-icons/io5";
import { RxStopwatch } from "react-icons/rx";
import { WiTime9 } from "react-icons/wi";
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <>
            {/* Sidebar */}
            <div className="sidebar bg-dark text-light fixed-bottom d-flex justify-content-around" >
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `text-center flex-grow-1 ${isActive ? "bg-secondary" : ""}`
                    }
                >
                    <TfiAlarmClock className="fs-4" style={{ fontSize: "15px", position: "relative", top: "7px", color: "white" }} />
                    <div style={{ fontSize: "15px", color: "white", position: "relative", top: "10px" }}>Alarm</div>
                </NavLink>

                <NavLink
                    to="/timer"
                    className={({ isActive }) =>
                        `text-center py-2 flex-grow-1 ${isActive ? "bg-secondary" : ""}`
                    }
                >
                    <IoTimerOutline className="fs-4" style={{ fontSize: "15px", position: "relative", top: "-2px", color: "white" }} />
                    <div style={{ fontSize: "15px", color: "white" }}>Timer</div>
                </NavLink>

                <NavLink
                    to="/stopwatch"
                    className={({ isActive }) =>
                        `text-center py-2 flex-grow-1 ${isActive ? "bg-secondary" : ""}`
                    }
                >
                    <RxStopwatch className="fs-4" style={{ fontSize: "15px", position: "relative", top: "-2px", color: "white" }} />
                    <div style={{ fontSize: "15px", color: "white" }}>Stopwatch</div>
                </NavLink>

                <NavLink
                    to="/clock"
                    className={({ isActive }) =>
                        `text-center py-2 flex-grow-1 ${isActive ? "bg-secondary" : ""}`
                    }
                >
                    <WiTime9 className="fs-4" style={{ fontSize: "15px", position: "relative", top: "-2px", color: "white" }} />
                    <div style={{ fontSize: "15px", color: "white" }}>Clock</div>
                </NavLink>
            </div >
        </>
    )
}

export default SideNavbar