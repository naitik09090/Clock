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
import Timer from "./components/Timer.jsx";
import StopWatch from "./components/StopWatch.jsx";
import Clock from "./components/Clock.jsx";
import BackToTopButton from "./components/BottomToTop.jsx";
import Holidays from "./components/Holidays.jsx";
import SideNavbar from "./components/SideNavbar.jsx";
import WorldClocks from "./components/WorldClocks.jsx"
import "./css/login.css";
// import SettingsSidebar from './components/SettingsSidebar.jsx';
// import Nav from '../src/components/Nav.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/worldclocks" element={<WorldClocks />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <BackToTopButton />
        <SideNavbar />
      </Router>
      {/* <Nav /> */}
    </>
  );
}

export default App;
