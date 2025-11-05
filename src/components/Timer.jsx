import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [recentTimers, setRecentTimers] = useState([]);
  const intervalRef = useRef(null);

  // ✅ Load saved timers from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentTimers")) || [];
    setRecentTimers(stored);
  }, []);

  // ✅ Save timers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("recentTimers", JSON.stringify(recentTimers));
  }, [recentTimers]);

  useEffect(() => {
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
    FetchData();
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
        return updated.slice(0, 100);
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

  // ✅ Edit saved record
  const handleEditRecord = (index) => {
    const input = prompt("Edit this timer (hh:mm:ss or seconds):", recentTimers[index]);
    if (!input) return;

    let newValue = input;
    if (!isNaN(parseInt(input))) {
      // convert seconds to formatted time
      newValue = formatTime(parseInt(input));
    }

    setRecentTimers((prev) => {
      const updated = [...prev];
      updated[index] = newValue;
      return updated;
    });
  };

  // ✅ Delete saved record
  const handleDeleteRecord = (index) => {
    if (window.confirm("Delete this timer record?")) {
      setRecentTimers((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container">
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
              disabled={running}
            >
              Edit
            </button>
            <button
              className="btn btn-warning"
              value={recentTimers}
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="start-button btn btn-success"
              onClick={handleStart}
              disabled={running}
            >
              Start
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Recently Used Timers List with Edit/Delete */}
      <div className="p-3 border rounded">
        <h6 className="fw-bold">Recently Used Timers</h6>
        <hr />
        {recentTimers.length === 0 ? (
          <p>No timers yet.</p>
        ) : (
          <ul
            className="list-unstyled"
            style={{
              maxHeight: "405px",  // limit the visible height
              overflowY: "auto",   // add vertical scrollbar
              paddingRight: "5px", // optional: avoid scrollbar overlap
            }}
          >
            {recentTimers.map((time, idx) => (
              <li
                key={idx}
                className="d-flex justify-content-between align-items-center mb-2"
                style={{ fontFamily: "monospace" }}
              >
                <span>{time}</span>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleEditRecord(idx)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDeleteRecord(idx)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Timer;
