import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

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
  };

  const resetStopwatch = () => {
    setTime(0);
    stopStopwatch();
  };

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center bg-translate mb-5 py-5">
        <div className="col-md-12 BTN_Timer234 text-center d-flex justify-content-center align-items-center">
          <span
            style={{
              fontFamily: "'Digital-7 Mono', monospace",
              fontSize: "50px",
            }}
          >
            {formatTime(time)}
          </span>
        </div>
        <div className="col-md-12 text-center d-flex justify-content-center align-items-center">
          <div className="mt-3">
            <button
              className="btn btn-warning me-2 px-4"
              onClick={resetStopwatch}
            >
              Reset
            </button>
            <button
              className={`btn px-4 ${isRunning ? "btn-danger" : "btn-success"}`}
              onClick={isRunning ? stopStopwatch : startStopwatch}
            >
              {isRunning ? "Stop" : "Start"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
