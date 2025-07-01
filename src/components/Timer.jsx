import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Timer = () => {
    const [seconds, setSeconds] = useState(0); // total seconds
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);

    // Format seconds to MM:SS
    const formatTime = (secs) => {
        const min = String(Math.floor(secs / 60)).padStart(2, '0');
        const sec = String(secs % 60).padStart(2, '0');
        return `${min}:${sec}`;
    };

    // Start Timer
    const handleStart = () => {
        if (!running && seconds > 0) {
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

    // Reset Timer
    const handleReset = () => {
        clearInterval(intervalRef.current);
        setRunning(false);
        setSeconds(0);
    };

    // Edit Timer
    const handleEdit = () => {
        const input = prompt("Enter timer in seconds:", "60");
        const num = parseInt(input);
        if (!isNaN(num) && num >= 0) {
            setSeconds(num);
        }
    };

    return (
        <>
            <div className='container-fluid'>
                <div className="container-fluid">
                    {/* Digital Display */}
                    <div className='row Home_Main d-flex justify-content-center align-items-center vh-100 bg-traslate mb-3'>
                        <div className="col-md-12 Time_NOw timers justify-content-center text-center align-items-center d-flex flex-column"
                            style={{
                                fontFamily: "'Digital-7 Mono', monospace",
                                fontSize: "60px",
                            }}>{formatTime(seconds)}

                            {/* Buttons */}
                            <div className="col-md-12 d-flex justify-content-center gap-3">
                                <button className="btn btn-primary" style={{
                                    width: "110px",
                                }} onClick={handleEdit}>Edit Timer</button>
                                <button className="btn btn-warning" onClick={handleReset}>Reset</button>
                                <button className="btn btn-success" onClick={handleStart} disabled={running || seconds === 0}>
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mb-4">

                    {/* Top Row: Predefined Timers + Recently Used */}
                    <div className="row Home_Main mb-1">
                        {/* Left: Timer Links */}
                        <div className="col-md-6 BTN_Timer23 bg-traslate p-3 border">
                            <h6 className="fw-bold">Set the timer for the specified time</h6>
                            <p className='Row_Bottom'></p>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-4">
                                    <p>1 Minute Timer</p>
                                    <p>3 Minute Timer</p>
                                    <p>5 Minute Timer</p>
                                    <p>10 Minute Timer</p>
                                    <p>15 Minute Timer</p>
                                    <p>20 Minute Timer</p>
                                    <p>30 Minute Timer</p>
                                    <p>40 Minute Timer</p>
                                    <p>45 Minute Timer</p>
                                    <p>60 Minute Timer</p>
                                </div>
                                <div className="col-md-4">
                                    <p>10 Second Timer</p>
                                    <p>20 Second Timer</p>
                                    <p>30 Second Timer</p>
                                    <p>45 Second Timer</p>
                                    <p>60 Second Timer</p>
                                    <p>90 Second Timer</p>
                                    <p>1 Hour Timer</p>
                                    <p>2 Hour Timer</p>
                                    <p>4 Hour Timer</p>
                                    <p>8 Hour Timer</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Recently Used */}
                        <div className="col-md-6 BTN_Timer24 bg-traslate p-3 border">
                            <h6 className="fw-bold">Recently used</h6>
                            <p className='Row_Bottom'></p>
                        </div>
                    </div>

                    {/* Bottom Row: How to Use + Holidays */}
                    <div className="row Home_Main">
                        {/* How to use */}
                        <div className="col-md-6 BTN_Timer23 bg-traslate p-3 border">
                            <h6 className="fw-bold">How to use the online timer</h6>
                            <p className='Row_Bottom'></p>
                            <p>Set the hour, minute, and second for the online countdown timer, and start it. Alternatively, you can set the date and time to count days, hours, minutes, and seconds till (or from) the event. The timer triggered alert will appear, and the pre-selected sound will be played at the set time.</p>
                            <p>Click the "Reset" button to start the timer from the initial value. Click the "Stop" ("Start") button to stop (start) the timer.</p>
                            <p>You can add links to online timers with different time settings to your browser's Favorites. Opening such a link will set the timer to the predefined time.</p>
                            <p>In the holiday list, you can launch a countdown timer for any holiday on the list, or you can create a new timer for your own event or holiday. Make sure to share your timer with your friends.</p>
                        </div>

                        {/* Holidays */}
                        <div className="col-md-6 BTN_Timer24 bg-traslate p-3 border">
                            <h6 className="fw-bold">Holidays</h6>
                            <p className='Row_Bottom'></p>
                            <div className="d-flex justify-content-between"><h5>New Year</h5><p>Jan 1, 2026 {'  '} 189 days</p></div>
                            <div className="d-flex justify-content-between"><h5>Groundhog Day</h5><p>Feb 2, 2026{'  '}221 days</p></div>
                            <div className="d-flex justify-content-between"><h5>Easter</h5><p>Apr 5, 2026{'  '}283 days</p></div>
                            <div className="d-flex justify-content-between"><h5>Independence Day</h5><p>Jul 4, 2025{' '}8 days</p></div>
                            <div className="d-flex justify-content-between"><h5>Christmas</h5><p>Dec 25, 2025{' '}182 days</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Timer