import { useEffect, useRef, useState } from "react";
import "../css/Timer.css";

const STORAGE_KEY_SECONDS = "timer_seconds";
const STORAGE_KEY_RUNNING = "timer_isRunning";
const STORAGE_KEY_START_AT = "timer_startedAt"; // epoch ms when last started
const STORAGE_KEY_RECENT = "recentTimers";

const Timer = () => {
  // ── Initialise from localStorage ─────────────────────────────────────────
  const initSeconds = () => {
    try {
      const savedSecs = Number(localStorage.getItem(STORAGE_KEY_SECONDS));
      const wasRunning = localStorage.getItem(STORAGE_KEY_RUNNING) === "true";
      const startedAt = Number(localStorage.getItem(STORAGE_KEY_START_AT)) || 0;

      if (!isNaN(savedSecs) && savedSecs > 0) {
        if (wasRunning && startedAt) {
          const elapsed = Math.floor((Date.now() - startedAt) / 1000);
          const remaining = savedSecs - elapsed;
          return remaining > 0 ? remaining : 0;
        }
        return savedSecs;
      }
    } catch { /* ignore */ }
    return 0;
  };

  const initRunning = () => {
    try {
      const wasRunning = localStorage.getItem(STORAGE_KEY_RUNNING) === "true";
      const savedSecs = Number(localStorage.getItem(STORAGE_KEY_SECONDS));
      const startedAt = Number(localStorage.getItem(STORAGE_KEY_START_AT)) || 0;
      if (wasRunning && startedAt) {
        const elapsed = Math.floor((Date.now() - startedAt) / 1000);
        return elapsed < savedSecs; // only resume if time hasn't expired
      }
      return false;
    } catch {
      return false;
    }
  };

  const initRecent = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY_RECENT)) || [];
    } catch {
      return [];
    }
  };

  const [seconds, setSeconds] = useState(initSeconds);
  const [running, setRunning] = useState(initRunning);
  const [recentTimers, setRecentTimers] = useState(initRecent);
  const intervalRef = useRef(null);

  // Keep a ref so callbacks always have the latest value
  const secondsRef = useRef(seconds);
  useEffect(() => { secondsRef.current = seconds; }, [seconds]);

  // ── Persist seconds ───────────────────────────────────────────────────────
  useEffect(() => {
    if (seconds > 0) {
      localStorage.setItem(STORAGE_KEY_SECONDS, seconds);
    } else {
      localStorage.removeItem(STORAGE_KEY_SECONDS);
    }
  }, [seconds]);

  // ── Persist running state + start timestamp ───────────────────────────────
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_RUNNING, running);
    if (running) {
      localStorage.setItem(STORAGE_KEY_START_AT, Date.now());
    } else {
      localStorage.removeItem(STORAGE_KEY_START_AT);
    }
  }, [running]);

  // ── Persist recent timers ─────────────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(recentTimers));
  }, [recentTimers]);

  // ── Interval ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            localStorage.setItem(STORAGE_KEY_RUNNING, "false");
            localStorage.removeItem(STORAGE_KEY_START_AT);
            return 0;
          }
          // Keep start-at fresh so refresh recovery stays accurate
          localStorage.setItem(STORAGE_KEY_START_AT, Date.now());
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  // ── Format ────────────────────────────────────────────────────────────────
  const formatTime = (secs) => {
    const hrs = String(Math.floor(secs / 3600)).padStart(2, "0");
    const min = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const sec = String(secs % 60).padStart(2, "0");
    return `${hrs}:${min}:${sec}`;
  };

  const parseTime = (input) => {
    if (!input) return null;
    const parts = input.split(':').map(p => parseInt(p.trim()));

    if (parts.some(p => isNaN(p))) {
      // Maybe it was just a number of seconds
      const raw = parseInt(input);
      return !isNaN(raw) ? raw : null;
    }

    if (parts.length === 3) {
      // hh:mm:ss
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      // mm:ss
      return parts[0] * 60 + parts[1];
    } else if (parts.length === 1) {
      return parts[0];
    }
    return null;
  };

  // ── Controls ──────────────────────────────────────────────────────────────
  const handleStart = () => {
    if (!running) {
      if (seconds === 0) setSeconds(60);
      setRunning(true);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    if (secondsRef.current > 0) {
      const formatted = formatTime(secondsRef.current);
      setRecentTimers((prev) => {
        const updated = [formatted, ...prev.filter((t) => t !== formatted)];
        return updated.slice(0, 50); // limit to 50
      });
    }
    setSeconds(0);
    localStorage.removeItem(STORAGE_KEY_SECONDS);
    localStorage.setItem(STORAGE_KEY_RUNNING, "false");
    localStorage.removeItem(STORAGE_KEY_START_AT);
  };

  const handleEdit = () => {
    const input = prompt("Enter timer (e.g. 01:30:00 or 90):", formatTime(seconds));
    if (input === null) return;
    const secs = parseTime(input);
    if (secs !== null && secs >= 0) {
      setSeconds(secs);
    } else {
      alert("Invalid format. Use hh:mm:ss or total seconds.");
    }
  };

  const handleApplyRecord = (timeStr) => {
    if (running) return;
    const secs = parseTime(timeStr);
    if (secs !== null) {
      setSeconds(secs);
    }
  };

  const handleEditRecord = (index) => {
    const input = prompt("Edit this timer (hh:mm:ss):", recentTimers[index]);
    if (input === null) return;
    const secs = parseTime(input);
    if (secs !== null) {
      const newValue = formatTime(secs);
      setRecentTimers((prev) => {
        const updated = [...prev];
        updated[index] = newValue;
        return updated;
      });
    }
  };

  const handleDeleteRecord = (index) => {
    if (window.confirm("Delete this timer record?")) {
      setRecentTimers((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="container">
      {/* Top Display */}
      <div className="row d-flex justify-content-center align-items-center text-center mb-5 py-5">
        <div className="col-md-12 BTN_Timer234 d-flex justify-content-center align-items-center text-center">
          <span
            style={{
              fontFamily: "'Digital-7 Mono', monospace",
              fontSize: "60px",
              cursor: !running ? "pointer" : "default",
              color: "#00d4ff",
              textShadow: "0 0 10px rgba(0, 212, 255, 0.4)"
            }}
            onClick={!running ? handleEdit : undefined}
            title={!running ? "Click to set time" : ""}
          >
            {formatTime(seconds)}
          </span>
        </div>
        <div className="col-md-12 d-flex justify-content-center align-items-center text-center">
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <button
              className="btn btn-outline-info px-4 border-2"
              onClick={handleEdit}
              disabled={running}
            >
              Set Time
            </button>
            <button
              className="btn btn-outline-warning px-4 border-2"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className={`btn px-5 border-2 fw-bold ${running ? "btn-danger" : "btn-success"}`}
              onClick={running ? () => setRunning(false) : handleStart}
            >
              {running ? "Pause" : "Start"}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Recently Used Timers List with Edit/Delete */}
      <div className="p-4 border rounded bg-dark border-secondary shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold text-white mb-0">Recently Used Timers</h6>
          <small className="text-muted">Click a timer to apply it</small>
        </div>
        <hr className="border-secondary" />
        {recentTimers.length === 0 ? (
          <p className="text-muted text-center py-3">No recent timers.</p>
        ) : (
          <ul
            className="list-unstyled mb-0"
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              paddingRight: "8px",
            }}
          >
            {recentTimers.map((time, idx) => (
              <li
                key={idx}
                className="d-flex justify-content-between align-items-center p-2 mb-2 rounded record-item"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  transition: "background 0.2s"
                }}
              >
                <span
                  className="text-white-50 flex-grow-1 cursor-pointer"
                  style={{ fontFamily: "monospace", fontSize: "1.1rem" }}
                  onClick={() => handleApplyRecord(time)}
                  title="Apply this timer"
                >
                  {time}
                </span>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-link text-info p-0 text-decoration-none"
                    onClick={() => handleEditRecord(idx)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-link text-danger p-0 text-decoration-none"
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
