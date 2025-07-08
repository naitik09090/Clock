import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSun, BsMoon } from 'react-icons/bs';
import { GrSettingsOption } from "react-icons/gr";
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);

    // Add/remove class on body
    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : '';
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <nav className="d-block navbar navbar-expand-sm navbar-dark bg-dark p-3 fixed-top">
                <div className="container-fluid">
                    <h3><a href='/' className='navbar-brand'>Logo</a></h3>

                    {/* Toggle Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/holidays">Holidays</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown">
                                    Tools
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Clock</Link></li>
                                    <li><Link className="dropdown-item" to="/clock">Alarm Clock</Link></li>
                                    <li><Link className="dropdown-item" to="/timer">Timer</Link></li>
                                    <li><Link className="dropdown-item" to="/stopwatch">Stopwatch</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="BtN_Mood d-flex align-items-center"
                                    onClick={() => toggleDarkMode()}
                                    title="Toggle theme"
                                >
                                    {darkMode ? <BsSun className='BTn_Sun' /> : <BsMoon className='BTn_Moon' />}
                                </button>
                            </li>

                            <li className="nav-item">
                                <GrSettingsOption className="setting text-white fs-5 cursor-pointer" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
