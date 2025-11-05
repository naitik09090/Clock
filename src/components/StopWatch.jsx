import React, { useRef, useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [records, setRecords] = useState([]);
  const intervalRef = useRef(null);

  // ✅ Load saved records from localStorage on first render
  useEffect(() => {
    try {
      const saved = localStorage.getItem("stopwatchRecords");
      if (saved) {
        setRecords(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Failed to load records:", err);
    }
  }, []);

  // ✅ Save to localStorage whenever records change
  useEffect(() => {
    localStorage.setItem("stopwatchRecords", JSON.stringify(records));
  }, [records]);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);

    // ✅ Add record only if stopwatch ran
    if (time > 0) {
      const newRecord = {
        id: Date.now(),
        time,
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }) + " " + new Date().toLocaleTimeString(),
      };
      setRecords((prev) => [...prev, newRecord]);
    }
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
    setRecords([]);
    localStorage.removeItem("stopwatchRecords");
  };

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

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
        <h6 className="fw-bold">Stop Records</h6>
        <hr />
        <div
          style={{
            maxHeight: "360px",
            overflowY: "auto",
            paddingRight: "5px",
          }}
        >
          {records.length === 0 ? (
            <p>No records yet.</p>
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
