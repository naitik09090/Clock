import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [recentTimers, setRecentTimers] = useState([]);
  const intervalRef = useRef(null);

  const FetchData = async () => {
    try {
      const res = await fetch(
        "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
      );
      const data = await res.json();
      const now = new Date(data.datetime);
      const target = new Date("2025-07-28T16:00:00+05:30");

      const diffInSeconds = Math.floor((target - now) / 1000);
      setSeconds(diffInSeconds > 0 ? diffInSeconds : 0);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/timer")
      .then((res) => res.json())
      .then((data) => {
        const recent = data.map((t) => t.time).slice(0, 10);
        setRecentTimers(recent);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleStart = () => {
    if (!running) {
      if (seconds === 0) {
        setSeconds(60);
      }

      setRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };


  const formatTime = (secs) => {
    const hrs = String(Math.floor(secs / 3600)).padStart(2, "0");
    const min = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const sec = String(secs % 60).padStart(2, "0");
    return `${hrs}:${min}:${sec}`;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    if (seconds > 0) {
      const formatted = formatTime(seconds);
      setRecentTimers((prev) => {
        const updated = [formatted, ...prev.filter((t) => t !== formatted)];
        return updated.slice(0, 10);
      });
    }
    setSeconds(0);
  };

  const handleEdit = () => {
    const input = prompt("Enter timer in seconds:", "60");
    const num = parseInt(input);
    if (!isNaN(num) && num >= 0) {
      setSeconds(num);
    }
  };

  return (
    <div className="container-fluid">
      {/* Top Display */}
      <div className="row d-flex justify-content-center align-items-center text-center mb-5 py-5">
        <div className="col-md-12 BTN_Timer234 d-flex justify-content-center align-items-center text-center">
          <span
            style={{
              fontFamily: "'Digital-7 Mono', monospace",
              fontSize: "50px",
            }}
          >
            {formatTime(seconds)}
          </span>
        </div>
        <div className="col-md-12 d-flex justify-content-center align-items-center text-center">
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
            <button
              className="btn btn-primary"
              style={{ minWidth: "110px" }}
              onClick={handleEdit}
            >
              Edit
            </button>
            <button className="btn btn-warning" onClick={handleReset}>
              Reset
            </button>
            <button
              className="btn btn-success"
              onClick={handleStart}
            >
              Start
            </button>
          </div>
        </div>
      </div>

      {/* Predefined + Recent Timers */}
      <div className="container-fluid mt-4">
        {/* Top Row: Predefined Timers + Recently Used */}
        {/* <div className="row g-3 Home_Main"> */}
        {/* Left: Timer Links */}
        {/* <div className="col-12 col-md-6 BTN_Timer23 bg-traslate p-3 border">
            <h6 className="fw-bold">Set the timer for the specified time</h6>
            <hr />
            <div className="row">
              <div className="col-6 col-sm-6">
                <ul className="list-unstyled">
                  <li>1 Minute Timer</li>
                  <li>3 Minute Timer</li>
                  <li>5 Minute Timer</li>
                  <li>10 Minute Timer</li>
                  <li>15 Minute Timer</li>
                  <li>20 Minute Timer</li>
                  <li>30 Minute Timer</li>
                  <li>40 Minute Timer</li>
                  <li>45 Minute Timer</li>
                  <li>60 Minute Timer</li>
                </ul>
              </div>
              <div className="col-6 col-sm-6">
                <ul className="list-unstyled">
                  <li>10 Second Timer</li>
                  <li>20 Second Timer</li>
                  <li>30 Second Timer</li>
                  <li>45 Second Timer</li>
                  <li>60 Second Timer</li>
                  <li>90 Second Timer</li>
                  <li>1 Hour Timer</li>
                  <li>2 Hour Timer</li>
                  <li>4 Hour Timer</li>
                  <li>8 Hour Timer</li>
                </ul>
              </div>
            </div>
          </div> */}

        {/* Right: Recently Used */}
        {/* <div className="col-12 col-md-6 p-3 border">
            <h6 className="fw-bold">Recently Used</h6>
            <hr />
            <div className="fs-5">
              {recentTimers.length === 0 ? (
                <p>No timers yet.</p>
              ) : (
                recentTimers.map((time, idx) => (
                  <div key={idx} style={{ fontFamily: "monospace" }}>
                    {time}
                  </div>
                ))
              )}
            </div>
          </div> */}
        {/* </div> */}

        {/* Bottom Row: How to Use + Holidays */}
        {/* <div className="row g-3 Home_Main mt-3"> */}
        {/* Left: How to Use */}
        {/* <div className="col-12 col-md-6 BTN_Timer23 bg-traslate p-3 border">
            <h6 className="fw-bold">How to use the online timer</h6>
            <hr />
            <p>
              Set the hour, minute, and second for the online countdown timer,
              and start it...
            </p>
            <p>
              Click the "Reset" button to start the timer from the initial
              value. Click the "Stop" ("Start") button to stop (start) the
              timer.
            </p>
            <p>
              You can add links to online timers with different time settings to
              your browser's Favorites.
            </p>
            <p>
              In the holiday list, you can launch a countdown timer for any
              holiday or create a new one.
            </p>
          </div> */}

        {/* Right: Holidays */}
        {/* <div className="col-12 col-md-6 p-3 border">
            <h6 className="fw-bold">Holidays</h6>
            <hr />
            <div className="d-flex justify-content-between">
              <h6>New Year</h6>
              <p>Jan 1, 2026</p>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Groundhog Day</h6>
              <p>Feb 2, 2026</p>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Easter</h6>
              <p>Apr 5, 2026</p>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Independence Day</h6>
              <p>Jul 4, 2025</p>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Christmas</h6>
              <p>Dec 25, 2025</p>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div >
  );
};

export default Timer;
