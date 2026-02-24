import "./App.css";
import "./css/Navbar.css";
import "./css/AlarmClock.css";
import "./css/Timer.css";
import "./css/StopWatch.css";
import "./css/Clock.css";
import "./css/Contacts.css";
import "./css/Holidays.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import BackToTopButton from "./components/BottomToTop.jsx";
import SideNavbar from "./components/SideNavbar.jsx";
import "./css/login.css";

// Lazy load components to reduce initial bundle size (Reduce unused JavaScript)
const Timer = lazy(() => import("./components/Timer.jsx"));
const StopWatch = lazy(() => import("./components/StopWatch.jsx"));
const Clock = lazy(() => import("./components/Clock.jsx"));
const Holidays = lazy(() => import("./components/Holidays.jsx"));
const WorldClocks = lazy(() => import("./components/WorldClocks.jsx"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Suspense fallback={<div className="container text-center py-5"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>}>
            <Routes>
              <Route path="/" element={<Clock />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/stopwatch" element={<StopWatch />} />
              <Route path="/holidays" element={<Holidays />} />
              <Route path="/worldclocks" element={<WorldClocks />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </Suspense>
        </main>
        <BackToTopButton />
        <SideNavbar />
      </Router>
    </>
  );
}

export default App;
