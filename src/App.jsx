import { useState } from 'react'
import './App.css';
import './css/Navbar.css';
import './css/AlarmClock.css';
import './css/Timer.css';
import './css/StopWatch.css';
import './css/Clock.css';
import './css/Contacts.css';
import './css/Holidays.css';
import Navbar from './components/Navbar.jsx'
import AlarmClock from './components/AlarmClock.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timer from './components/Timer.jsx';
import StopWatch from './components/StopWatch.jsx';
import Clock from './components/Clock.jsx';
import Set_4 from './pages/Set_4.jsx'
import Set_4_1_1 from './pages/Set_4_1_1.jsx'
import Set_4_1_2 from './pages/Set_4_1_2.jsx'
import Set_4_1_3 from './pages/Set_4_1_3.jsx'
import Set_4_1_4 from './pages/Set_4_1_4.jsx'
import Set_4_1_5 from './pages/Set_4_1_5.jsx'
import Set_4_1_6 from './pages/Set_4_1_6.jsx'
import Set_4_1_7 from './pages/Set_4_1_7.jsx'
import Set_4_1_8 from './pages/Set_4_1_8.jsx'
import Set_4_1_9 from './pages/Set_4_1_9.jsx'
import Set_4_1_10 from './pages/Set_4_1_10.jsx'
import Set_4_1_11 from './pages/Set_4_1_11.jsx'
import Set_4_1_12 from './pages/Set_4_1_12.jsx'
import Set_4_1_13 from './pages/Set_4_1_13.jsx'
import Set_4_1_14 from './pages/Set_4_1_14.jsx'
import Set_4_1_15 from './pages/Set_4_1_15.jsx'
import Set_4_1_16 from './pages/Set_4_1_16.jsx'
import Set_4_1_17 from './pages/Set_4_1_17.jsx'
import Set_4_1_18 from './pages/Set_4_1_18.jsx'
import Set_4_1_19 from './pages/Set_4_1_19.jsx'
import Set_4_1_20 from './pages/Set_4_1_20.jsx'
import Set_4_1_21 from './pages/Set_4_1_21.jsx'
import Set_4_1_22 from './pages/Set_4_1_22.jsx'
import Set_4_1_23 from './pages/Set_4_1_23.jsx'
import Set_4_1_24 from './pages/Set_4_1_24.jsx'
import Set_4_1_25 from './pages/Set_4_1_25.jsx'
import Set_4_1_26 from './pages/Set_4_1_26.jsx'
import Set_4_1_27 from './pages/Set_4_1_27.jsx'
import Set_4_1_28 from './pages/Set_4_1_28.jsx'
import Set_4_1_29 from './pages/Set_4_1_29.jsx'
import Set_4_1_30 from './pages/Set_4_1_30.jsx'
import Set_4_1_31 from './pages/Set_4_1_31.jsx'
import Set_4_1_32 from './pages/Set_4_1_32.jsx'
import Set_4_1_33 from './pages/Set_4_1_33.jsx'
import Set_4_1_34 from './pages/Set_4_1_34.jsx'
import Set_4_1_35 from './pages/Set_4_1_35.jsx'
import Set_4_1_36 from './pages/Set_4_1_36.jsx'
import Set_4_1_37 from './pages/Set_4_1_37.jsx'
import Set_4_1_38 from './pages/Set_4_1_38.jsx'
import Set_4_1_39 from './pages/Set_4_1_39.jsx'
import Set_4_1_40 from './pages/Set_4_1_40.jsx'
import Set_4_1_41 from './pages/Set_4_1_41.jsx'
import Set_4_1_42 from './pages/Set_4_1_42.jsx'
import Set_4_1_43 from './pages/Set_4_1_43.jsx'
import Set_4_1_44 from './pages/Set_4_1_44.jsx'
import Set_4_1_45 from './pages/Set_4_1_45.jsx'
import Set_4_1_46 from './pages/Set_4_1_46.jsx'
import Set_4_1_47 from './pages/Set_4_1_47.jsx'
import Set_4_1_48 from './pages/Set_4_1_48.jsx'
import Set_4_1_49 from './pages/Set_4_1_49.jsx'
import Set_4_1_50 from './pages/Set_4_1_50.jsx'
import Set_4_1_51 from './pages/Set_4_1_51.jsx'
import Set_4_1_52 from './pages/Set_4_1_52.jsx'
import Set_4_1_53 from './pages/Set_4_1_53.jsx'
import Set_4_1_54 from './pages/Set_4_1_54.jsx'
import Set_4_1_55 from './pages/Set_4_1_55.jsx'
import Set_4_1_56 from './pages/Set_4_1_56.jsx'
import Set_4_1_57 from './pages/Set_4_1_57.jsx'
import Set_4_1_58 from './pages/Set_4_1_58.jsx'
import Set_4_1_59 from './pages/Set_4_1_59.jsx'
import Set_4_3 from './pages/Set_4_3.jsx'
import Set_5 from './pages/Set_5.jsx'
import Set_5_1_1 from './pages/Set_5_1_1.jsx'
import Set_5_1_2 from './pages/Set_5_1_2.jsx'
import Set_5_1_3 from './pages/Set_5_1_3.jsx'
import Set_5_1_4 from './pages/Set_5_1_4.jsx'
import Set_5_1_5 from './pages/Set_5_1_5.jsx'
import Set_5_1_6 from './pages/Set_5_1_6.jsx'
import Set_5_1_7 from './pages/Set_5_1_7.jsx'
import Set_5_1_8 from './pages/Set_5_1_8.jsx'
import Set_5_1_9 from './pages/Set_5_1_9.jsx'
import Set_5_1_10 from './pages/Set_5_1_10.jsx'
import Set_5_1_11 from './pages/Set_5_1_11.jsx'
import Set_5_1_12 from './pages/Set_5_1_12.jsx'
import Set_5_1_13 from './pages/Set_5_1_13.jsx'
import Set_5_1_14 from './pages/Set_5_1_14.jsx'
import Set_5_1_15 from './pages/Set_5_1_15.jsx'
import Set_5_1_16 from './pages/Set_5_1_16.jsx'
import Set_5_1_17 from './pages/Set_5_1_17.jsx'
import Set_5_1_18 from './pages/Set_5_1_18.jsx'
import Set_5_1_19 from './pages/Set_5_1_19.jsx'
import Set_5_1_20 from './pages/Set_5_1_20.jsx'
import Set_5_1_21 from './pages/Set_5_1_21.jsx'
import Set_5_1_22 from './pages/Set_5_1_22.jsx'
import Set_5_1_23 from './pages/Set_5_1_23.jsx'
import Set_5_1_24 from './pages/Set_5_1_24.jsx'
import Set_5_1_25 from './pages/Set_5_1_25.jsx'
import Set_5_1_26 from './pages/Set_5_1_26.jsx'
import Set_5_1_27 from './pages/Set_5_1_27.jsx'
import Set_5_1_28 from './pages/Set_5_1_28.jsx'
import Set_5_1_29 from './pages/Set_5_1_29.jsx'
import Set_5_1_30 from './pages/Set_5_1_30.jsx'
import Set_5_1_31 from './pages/Set_5_1_31.jsx'
import Set_5_1_32 from './pages/Set_5_1_32.jsx'
import Set_5_1_33 from './pages/Set_5_1_33.jsx'
import Set_5_1_34 from './pages/Set_5_1_34.jsx'
import Set_5_1_35 from './pages/Set_5_1_35.jsx'
import Set_5_1_36 from './pages/Set_5_1_36.jsx'
import Set_5_1_37 from './pages/Set_5_1_37.jsx'
import Set_5_1_38 from './pages/Set_5_1_38.jsx'
import Set_5_1_39 from './pages/Set_5_1_39.jsx'
import Set_5_1_40 from './pages/Set_5_1_40.jsx'
import Set_5_1_41 from './pages/Set_5_1_41.jsx'
import Set_5_1_42 from './pages/Set_5_1_42.jsx'
import Set_5_1_43 from './pages/Set_5_1_43.jsx'
import Set_5_1_44 from './pages/Set_5_1_44.jsx'
import Set_5_1_45 from './pages/Set_5_1_45.jsx'
import Set_5_1_46 from './pages/Set_5_1_46.jsx'
import Set_5_1_47 from './pages/Set_5_1_47.jsx'
import Set_5_1_48 from './pages/Set_5_1_48.jsx'
import Set_5_1_49 from './pages/Set_5_1_49.jsx'
import Set_5_1_50 from './pages/Set_5_1_50.jsx'
import Set_5_1_51 from './pages/Set_5_1_51.jsx'
import Set_5_1_52 from './pages/Set_5_1_52.jsx'
import Set_5_1_53 from './pages/Set_5_1_53.jsx'
import Set_5_1_54 from './pages/Set_5_1_54.jsx'
import Set_5_1_55 from './pages/Set_5_1_55.jsx'
import Set_5_1_56 from './pages/Set_5_1_56.jsx'
import Set_5_1_57 from './pages/Set_5_1_57.jsx'
import Set_5_1_58 from './pages/Set_5_1_58.jsx'
import Set_5_1_59 from './pages/Set_5_1_59.jsx'
import Set_6 from './pages/Set_6.jsx'
import Set_5_1 from './pages/Set_5_1.jsx'
import Set_6_1 from './pages/Set_6_1.jsx'
import Set_5_2 from './pages/Set_5_2.jsx'
import Set_7 from './pages/Set_7.jsx'
import Set_7_1 from './pages/Set_7_1.jsx'
import Set_7_2 from './pages/Set_7_2.jsx'
import Set_7_3 from './pages/Set_7_3.jsx'
import Set_8_1 from './pages/Set_8_1.jsx'
import Set_8_2 from './pages/Set_8_2.jsx'
import Set_8_3 from './pages/Set_8_3.jsx'
import Set_8 from './pages/Set_8.jsx'
import Set_9 from './pages/Set_9.jsx'
import Set_10 from './pages/Set_10.jsx'
import Set_11 from './pages/Set_11.jsx'
import Set_12 from './pages/Set_12.jsx'
import Set_1 from './pages/Set_1.jsx'
import Set_2 from './pages/Set_2.jsx'
import Set_6_2 from './pages/Set_6_2.jsx'
import Set_5_3 from './pages/Set_5_3.jsx'
import Set_6_3 from './pages/Set_6_3.jsx'
import BackToTopButton from './components/BottomToTop.jsx';
import Footer from './components/Footer.jsx';
import Contacts from './components/Contacts.jsx'
import Holidays from './components/Holidays.jsx';
import SideNavbar from './components/SideNavbar.jsx';
// import Nav from '../src/components/Nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BackToTopButton />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AlarmClock />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/Set-4" element={<Set_4 />} />
          <Route path="/Set-4-1-1" element={<Set_4_1_1 />} />
          <Route path="/Set-4-1-2" element={<Set_4_1_2 />} />
          <Route path="/Set-4-1-3" element={<Set_4_1_3 />} />
          <Route path="/Set-4-1-4" element={<Set_4_1_4 />} />
          <Route path="/Set-4-1-5" element={<Set_4_1_5 />} />
          <Route path="/Set-4-1-6" element={<Set_4_1_6 />} />
          <Route path="/Set-4-1-7" element={<Set_4_1_7 />} />
          <Route path="/Set-4-1-8" element={<Set_4_1_8 />} />
          <Route path="/Set-4-1-9" element={<Set_4_1_9 />} />
          <Route path="/Set-4-1-10" element={<Set_4_1_10 />} />
          <Route path="/Set-4-1-11" element={<Set_4_1_11 />} />
          <Route path="/Set-4-1-12" element={<Set_4_1_12 />} />
          <Route path="/Set-4-1-13" element={<Set_4_1_13 />} />
          <Route path="/Set-4-1-14" element={<Set_4_1_14 />} />
          <Route path="/Set-4-1-15" element={<Set_4_1_15 />} />
          <Route path="/Set-4-1-16" element={<Set_4_1_16 />} />
          <Route path="/Set-4-1-17" element={<Set_4_1_17 />} />
          <Route path="/Set-4-1-18" element={<Set_4_1_18 />} />
          <Route path="/Set-4-1-19" element={<Set_4_1_19 />} />
          <Route path="/Set-4-1-20" element={<Set_4_1_20 />} />
          <Route path="/Set-4-1-21" element={<Set_4_1_21 />} />
          <Route path="/Set-4-1-22" element={<Set_4_1_22 />} />
          <Route path="/Set-4-1-23" element={<Set_4_1_23 />} />
          <Route path="/Set-4-1-24" element={<Set_4_1_24 />} />
          <Route path="/Set-4-1-25" element={<Set_4_1_25 />} />
          <Route path="/Set-4-1-26" element={<Set_4_1_26 />} />
          <Route path="/Set-4-1-27" element={<Set_4_1_27 />} />
          <Route path="/Set-4-1-28" element={<Set_4_1_28 />} />
          <Route path="/Set-4-1-29" element={<Set_4_1_29 />} />
          <Route path="/Set-4-1-30" element={<Set_4_1_30 />} />
          <Route path="/Set-4-1-31" element={<Set_4_1_31 />} />
          <Route path="/Set-4-1-32" element={<Set_4_1_32 />} />
          <Route path="/Set-4-1-33" element={<Set_4_1_33 />} />
          <Route path="/Set-4-1-34" element={<Set_4_1_34 />} />
          <Route path="/Set-4-1-35" element={<Set_4_1_35 />} />
          <Route path="/Set-4-1-36" element={<Set_4_1_36 />} />
          <Route path="/Set-4-1-37" element={<Set_4_1_37 />} />
          <Route path="/Set-4-1-38" element={<Set_4_1_38 />} />
          <Route path="/Set-4-1-39" element={<Set_4_1_39 />} />
          <Route path="/Set-4-1-40" element={<Set_4_1_40 />} />
          <Route path="/Set-4-1-41" element={<Set_4_1_41 />} />
          <Route path="/Set-4-1-42" element={<Set_4_1_42 />} />
          <Route path="/Set-4-1-43" element={<Set_4_1_43 />} />
          <Route path="/Set-4-1-44" element={<Set_4_1_44 />} />
          <Route path="/Set-4-1-45" element={<Set_4_1_45 />} />
          <Route path="/Set-4-1-46" element={<Set_4_1_46 />} />
          <Route path="/Set-4-1-47" element={<Set_4_1_47 />} />
          <Route path="/Set-4-1-48" element={<Set_4_1_48 />} />
          <Route path="/Set-4-1-49" element={<Set_4_1_49 />} />
          <Route path="/Set-4-1-50" element={<Set_4_1_50 />} />
          <Route path="/Set-4-1-51" element={<Set_4_1_51 />} />
          <Route path="/Set-4-1-52" element={<Set_4_1_52 />} />
          <Route path="/Set-4-1-53" element={<Set_4_1_53 />} />
          <Route path="/Set-4-1-54" element={<Set_4_1_54 />} />
          <Route path="/Set-4-1-55" element={<Set_4_1_55 />} />
          <Route path="/Set-4-1-56" element={<Set_4_1_56 />} />
          <Route path="/Set-4-1-57" element={<Set_4_1_57 />} />
          <Route path="/Set-4-1-58" element={<Set_4_1_58 />} />
          <Route path="/Set-4-1-59" element={<Set_4_1_59 />} />
          <Route path="/Set-4-3" element={<Set_4_3 />} />
          <Route path="/Set-5" element={<Set_5 />} />
          <Route path="/Set-5-1-1" element={<Set_5_1_1 />} />
          <Route path="/Set-5-1-2" element={<Set_5_1_2 />} />
          <Route path="/Set-5-1-3" element={<Set_5_1_3 />} />
          <Route path="/Set-5-1-4" element={<Set_5_1_4 />} />
          <Route path="/Set-5-1-5" element={<Set_5_1_5 />} />
          <Route path="/Set-5-1-6" element={<Set_5_1_6 />} />
          <Route path="/Set-5-1-7" element={<Set_5_1_7 />} />
          <Route path="/Set-5-1-8" element={<Set_5_1_8 />} />
          <Route path="/Set-5-1-9" element={<Set_5_1_9 />} />
          <Route path="/Set-5-1-10" element={<Set_5_1_10 />} />
          <Route path="/Set-5-1-11" element={<Set_5_1_11 />} />
          <Route path="/Set-5-1-12" element={<Set_5_1_12 />} />
          <Route path="/Set-5-1-13" element={<Set_5_1_13 />} />
          <Route path="/Set-5-1-14" element={<Set_5_1_14 />} />
          <Route path="/Set-5-1-15" element={<Set_5_1_15 />} />
          <Route path="/Set-5-1-16" element={<Set_5_1_16 />} />
          <Route path="/Set-5-1-17" element={<Set_5_1_17 />} />
          <Route path="/Set-5-1-18" element={<Set_5_1_18 />} />
          <Route path="/Set-5-1-19" element={<Set_5_1_19 />} />
          <Route path="/Set-5-1-20" element={<Set_5_1_20 />} />
          <Route path="/Set-5-1-21" element={<Set_5_1_21 />} />
          <Route path="/Set-5-1-22" element={<Set_5_1_22 />} />
          <Route path="/Set-5-1-23" element={<Set_5_1_23 />} />
          <Route path="/Set-5-1-24" element={<Set_5_1_24 />} />
          <Route path="/Set-5-1-25" element={<Set_5_1_25 />} />
          <Route path="/Set-5-1-26" element={<Set_5_1_26 />} />
          <Route path="/Set-5-1-27" element={<Set_5_1_27 />} />
          <Route path="/Set-5-1-28" element={<Set_5_1_28 />} />
          <Route path="/Set-5-1-29" element={<Set_5_1_29 />} />
          <Route path="/Set-5-1-30" element={<Set_5_1_30 />} />
          <Route path="/Set-5-1-31" element={<Set_5_1_31 />} />
          <Route path="/Set-5-1-32" element={<Set_5_1_32 />} />
          <Route path="/Set-5-1-33" element={<Set_5_1_33 />} />
          <Route path="/Set-5-1-34" element={<Set_5_1_34 />} />
          <Route path="/Set-5-1-35" element={<Set_5_1_35 />} />
          <Route path="/Set-5-1-36" element={<Set_5_1_36 />} />
          <Route path="/Set-5-1-37" element={<Set_5_1_37 />} />
          <Route path="/Set-5-1-38" element={<Set_5_1_38 />} />
          <Route path="/Set-5-1-39" element={<Set_5_1_39 />} />
          <Route path="/Set-5-1-40" element={<Set_5_1_40 />} />
          <Route path="/Set-5-1-41" element={<Set_5_1_41 />} />
          <Route path="/Set-5-1-42" element={<Set_5_1_42 />} />
          <Route path="/Set-5-1-43" element={<Set_5_1_43 />} />
          <Route path="/Set-5-1-44" element={<Set_5_1_44 />} />
          <Route path="/Set-5-1-45" element={<Set_5_1_45 />} />
          <Route path="/Set-5-1-46" element={<Set_5_1_46 />} />
          <Route path="/Set-5-1-47" element={<Set_5_1_47 />} />
          <Route path="/Set-5-1-48" element={<Set_5_1_48 />} />
          <Route path="/Set-5-1-49" element={<Set_5_1_49 />} />
          <Route path="/Set-5-1-50" element={<Set_5_1_50 />} />
          <Route path="/Set-5-1-51" element={<Set_5_1_51 />} />
          <Route path="/Set-5-1-52" element={<Set_5_1_52 />} />
          <Route path="/Set-5-1-53" element={<Set_5_1_53 />} />
          <Route path="/Set-5-1-54" element={<Set_5_1_54 />} />
          <Route path="/Set-5-1-55" element={<Set_5_1_55 />} />
          <Route path="/Set-5-1-56" element={<Set_5_1_56 />} />
          <Route path="/Set-5-1-57" element={<Set_5_1_57 />} />
          <Route path="/Set-5-1-58" element={<Set_5_1_58 />} />
          <Route path="/Set-5-1-59" element={<Set_5_1_59 />} />
          <Route path="/Set-6" element={<Set_6 />} />
          <Route path="/Set-5-1" element={<Set_5_1 />} />
          <Route path="/Set-6-1" element={<Set_6_1 />} />
          <Route path="/Set-7" element={<Set_7 />} />
          <Route path="/Set-7-1" element={<Set_7_1 />} />
          <Route path="/Set-7-2" element={<Set_7_2 />} />
          <Route path="/Set-7-3" element={<Set_7_3 />} />
          <Route path="/Set-8-1" element={<Set_8_1 />} />
          <Route path="/Set-8-2" element={<Set_8_2 />} />
          <Route path="/Set-8-3" element={<Set_8_3 />} />
          <Route path="/Set-8" element={<Set_8 />} />
          <Route path="/Set-9" element={<Set_9 />} />
          <Route path="/Set-10" element={<Set_10 />} />
          <Route path="/Set-11" element={<Set_11 />} />
          <Route path="/Set-12" element={<Set_12 />} />
          <Route path="/Set-1" element={<Set_1 />} />
          <Route path="/Set-2" element={<Set_2 />} />
          <Route path="/Set-5-2" element={<Set_5_2 />} />
          <Route path="/Set-6-2" element={<Set_6_2 />} />
          <Route path="/Set-5-3" element={<Set_5_3 />} />
          <Route path="/Set-6-3" element={<Set_6_3 />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
        <SideNavbar />
      </Router>
      {/* <Nav /> */}
    </>
  )
}

export default App
