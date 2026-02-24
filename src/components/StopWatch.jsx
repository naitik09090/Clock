import React, { useState, useEffect, useRef } from "react";
import "../css/StopWatch.css";

const STORAGE_KEY_TIME = "stopwatch_time";
const STORAGE_KEY_RUNNING = "stopwatch_isRunning";
const STORAGE_KEY_START_AT = "stopwatch_startedAt";  // epoch ms when we last pressed Start
const STORAGE_KEY_RECORDS = "stopwatchRecords";

const StopWatch = () => {
  // ── Initialise from localStorage ─────────────────────────────────────────
  const initTime = () => {
    try {
      const savedTime = Number(localStorage.getItem(STORAGE_KEY_TIME)) || 0;
      const wasRunning = localStorage.getItem(STORAGE_KEY_RUNNING) === "true";
      const startedAt = Number(localStorage.getItem(STORAGE_KEY_START_AT)) || 0;

      if (wasRunning && startedAt) {
        // Compute how many ms elapsed since the tab was closed/hidden
        const elapsed = Date.now() - startedAt;
        return savedTime + elapsed;
      }
      return savedTime;
    } catch {
      return 0;
    }
  };

  const initRunning = () => {
    try {
      return localStorage.getItem(STORAGE_KEY_RUNNING) === "true";
    } catch {
      return false;
    }
  };

  const initRecords = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RECORDS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  const [time, setTime] = useState(initTime);
  const [isRunning, setIsRunning] = useState(initRunning);
  const [records, setRecords] = useState(initRecords);

  // Keep a ref so our interval always reads the latest time without stale closure
  const timeRef = useRef(time);
  useEffect(() => { timeRef.current = time; }, [time]);

  // ── Persist time + running state ─────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_TIME, time);
  }, [time]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_RUNNING, isRunning);
    if (isRunning) {
      // Record the wall-clock moment we started so we can catch up after refresh
      localStorage.setItem(STORAGE_KEY_START_AT, Date.now());
    } else {
      localStorage.removeItem(STORAGE_KEY_START_AT);
    }
  }, [isRunning]);

  // ── Persist records ───────────────────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(records));
  }, [records]);

  // ── Tick interval ─────────────────────────────────────────────────────────
  useEffect(() => {
    let interval;
    if (isRunning) {
      // Stamp the start-at every time the interval fires so that on refresh
      // we always have a very recent timestamp to diff against
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
        localStorage.setItem(STORAGE_KEY_START_AT, Date.now());
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // ── Format ────────────────────────────────────────────────────────────────
  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  // ── Controls ──────────────────────────────────────────────────────────────
  const startStopwatch = () => setIsRunning(true);

  const stopStopwatch = () => {
    setIsRunning(false);
    const newRecord = {
      id: Date.now(),
      time: timeRef.current,
      date: new Date().toLocaleString(),
    };
    setRecords((prev) => [...prev, newRecord]);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    localStorage.setItem(STORAGE_KEY_TIME, 0);
    localStorage.removeItem(STORAGE_KEY_START_AT);
    localStorage.setItem(STORAGE_KEY_RUNNING, "false");
  };

  const clearRecords = () => {
    setRecords([]);
    localStorage.removeItem(STORAGE_KEY_RECORDS);
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center bg-translate mb-5 py-5">
        <div className="col-md-12 BTN_Timer234 d-flex justify-content-center align-items-center text-center">
          <span
            style={{
              fontFamily: "'Digital-7 Mono', monospace",
              fontSize: "50px",
            }}
          >
            {formatTime(time)}
          </span>
        </div>

        <div className="col-md-12 text-center d-flex justify-content-center align-items-center mt-3">
          <button
            className="btn btn-warning me-4 p-2 px-4"
            onClick={resetStopwatch}
            style={{ minWidth: "110px" }}
          >
            Reset
          </button>
          <button
            className={`btn px-4 ${isRunning ? "btn-danger" : "btn-success"}`}
            onClick={isRunning ? stopStopwatch : startStopwatch}
            style={{ minWidth: "110px" }}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>
      </div>

      {/* Record List */}
      <div className="p-3 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="fw-bold mb-0">Stop Records</h6>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={clearRecords}
          >
            Reset Records
          </button>
        </div>
        <hr />
        <div
          style={{
            maxHeight: "360px",
            overflowY: "auto",
            paddingRight: "5px",
          }}
        >
          {records.length === 0 ? (
            <p className="text-muted mb-0">No records yet.</p>
          ) : (
            records.map((record, index) => (
              <div
                key={record.id}
                className="d-flex justify-content-between border-bottom py-1"
              >
                <span>
                  <strong>{index + 1}</strong> - {formatTime(record.time)}
                </span>
                <small>{record.date}</small>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
