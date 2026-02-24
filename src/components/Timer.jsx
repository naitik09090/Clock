import { useEffect, useRef, useState } from "react";

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
        return updated.slice(0, 100);
      });
    }
    setSeconds(0);
    localStorage.removeItem(STORAGE_KEY_SECONDS);
    localStorage.setItem(STORAGE_KEY_RUNNING, "false");
    localStorage.removeItem(STORAGE_KEY_START_AT);
  };

  const handleEdit = () => {
    const input = prompt("Enter timer in seconds:", "60");
    const num = parseInt(input);
    if (!isNaN(num) && num >= 0) {
      setSeconds(num);
    }
  };

  const handleEditRecord = (index) => {
    const input = prompt("Edit this timer (hh:mm:ss or seconds):", recentTimers[index]);
    if (!input) return;
    let newValue = input;
    if (!isNaN(parseInt(input))) {
      newValue = formatTime(parseInt(input));
    }
    setRecentTimers((prev) => {
      const updated = [...prev];
      updated[index] = newValue;
      return updated;
    });
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
              maxHeight: "405px",
              overflowY: "auto",
              paddingRight: "5px",
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
