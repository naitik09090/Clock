import React, { useRef, useState } from 'react'

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
        <div className='container-fluid'>
            <div className='container-fluid'>
                <div className="row Home_Main d-flex justify-content-center align-items-center vh-100 bg-traslate mb-4">
                    <div className="col-md-12 Time_NOw BTN_Timer2 text-center">
                        <h1
                            style={{
                                fontFamily: "'Digital-7 Mono', monospace",
                                fontSize: "60px",
                            }}
                        >
                            {formatTime(time)}
                        </h1>
                        <div className="mt-3">
                            <button
                                className="btn btn-warning me-2 px-4"
                                onClick={resetStopwatch}
                            >
                                Reset
                            </button>
                            <button
                                className={`btn px-4 ${isRunning ? "btn-danger" : "btn-success"
                                    }`}
                                onClick={isRunning ? stopStopwatch : startStopwatch}
                            >
                                {isRunning ? "Stop" : "Start"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row Home_Main'>
                    <div className='col-md-12 BTN_Timer3 text-start bg-traslate border'>
                        <h1>How to use the online stopwatch</h1>
                        <div className='Row_Bottom'></div>
                        <p>The online stopwatch counts the time to the millisecond that passes after you click the "Start" button. It allows you to add laps.
                            If you close the stopwatch, the value and laps will be automatically saved.
                            If the period is sufficiently large, the number of days passed will be displayed, too.</p>
                        <p>You can configure the accuracy for displaying fractions of a second in the stopwatch settings.</p>
                        <p>Click the "Start" or "Stop" buttons to start or stop the stopwatch. Click the "Lap" button to add one lap and the current stopwatch value to the lap list.
                            To reset laps and the stopwatch value, click the "Reset" button (the button appears when the stopwatch is stopped).</p>
                        <p>You can configure the stopwatch appearance (text color, type, and size), and these settings will be saved; they will be used when you open your web browser next time.</p>
                        <p>You can add links to online stopwatches with various time values and lap lists to your browser's Favorites.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StopWatch