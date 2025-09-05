import "./App.css";
import "./css/Navbar.css";
import "./css/AlarmClock.css";
import "./css/Timer.css";
import "./css/StopWatch.css";
import "./css/Clock.css";
import "./css/Contacts.css";
import "./css/Holidays.css";
import Navbar from "./components/Navbar.jsx";
import AlarmClock from "./components/AlarmClock.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer.jsx";
import StopWatch from "./components/StopWatch.jsx";
import Clock from "./components/Clock.jsx";
import BackToTopButton from "./components/BottomToTop.jsx";
import Footer from "./components/Footer.jsx";
import Holidays from "./components/Holidays.jsx";
import SideNavbar from "./components/SideNavbar.jsx";
import Alaram_4 from "./components/Alaram_4.jsx";
import Alaram_4_30 from "./components/Alaram_4_30.jsx";
import Alaram_5 from "./components/Alaram_5.jsx";
import Alaram_5_15 from "./components/Alaram_5_15.jsx";
import Alaram_5_30 from "./components/Alaram_5_30.jsx";
import Alaram_5_45 from "./components/Alaram_5_45.jsx";
import Alaram_6 from "./components/Alaram_6.jsx";
import Alaram_6_15 from "./components/Alaram_6_15.jsx";
import Alaram_6_30 from "./components/Alaram_6_30.jsx";
import Alaram_6_45 from "./components/Alaram_6_45.jsx";
import Alaram_7 from "./components/Alaram_7.jsx";
import Alaram_7_15 from "./components/Alaram_7_15.jsx";
import Alaram_7_30 from "./components/Alaram_7_30.jsx";
import Alaram_7_45 from "./components/Alaram_7_45.jsx";
import Alaram_8 from "./components/Alaram_8.jsx";
import Alaram_8_15 from "./components/Alaram_8_15.jsx";
import Alaram_8_30 from "./components/Alaram_8_30.jsx";
import Alaram_8_45 from "./components/Alaram_8_45.jsx";
import Alaram_9 from "./components/Alaram_9.jsx";
import Alaram_10 from "./components/Alaram_10.jsx";
import Alaram_11 from "./components/Alaram_11.jsx";
import Alaram_12 from "./components/Alaram_12.jsx";
import Alaram_1 from "./components/Alaram_1.jsx";
import Alaram_2 from "./components/Alaram_2.jsx";
import "./css/login.css";
// import SettingsSidebar from './components/SettingsSidebar.jsx';
// import Nav from '../src/components/Nav.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <BackToTopButton />
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/clock" element={<AlarmClock />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/alaram_4" element={<Alaram_4 />} />
          <Route path="/alaram_4_30" element={<Alaram_4_30 />} />
          <Route path="/alaram_5" element={<Alaram_5 />} />
          <Route path="/alaram_5_15" element={<Alaram_5_15 />} />
          <Route path="/alaram_5_30" element={<Alaram_5_30 />} />
          <Route path="/alaram_5_45" element={<Alaram_5_45 />} />
          <Route path="/alaram_6" element={<Alaram_6 />} />
          <Route path="/alaram_6_15" element={<Alaram_6_15 />} />
          <Route path="/alaram_6_30" element={<Alaram_6_30 />} />
          <Route path="/alaram_6_45" element={<Alaram_6_45 />} />
          <Route path="/alaram_7" element={<Alaram_7 />} />
          <Route path="/alaram_7_15" element={<Alaram_7_15 />} />
          <Route path="/alaram_7_30" element={<Alaram_7_30 />} />
          <Route path="/alaram_7_45" element={<Alaram_7_45 />} />
          <Route path="/alaram_8" element={<Alaram_8 />} />
          <Route path="/alaram_8_15" element={<Alaram_8_15 />} />
          <Route path="/alaram_8_30" element={<Alaram_8_30 />} />
          <Route path="/alaram_8_45" element={<Alaram_8_45 />} />
          <Route path="/alaram_9" element={<Alaram_9 />} />
          <Route path="/alaram_10" element={<Alaram_10 />} />
          <Route path="/alaram_11" element={<Alaram_11 />} />
          <Route path="/alaram_12" element={<Alaram_12 />} />
          <Route path="/alaram_1" element={<Alaram_1 />} />
          <Route path="/alaram_2" element={<Alaram_2 />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
        <SideNavbar />
      </Router>
      {/* <Nav /> */}
    </>
  );
}

export default App;
