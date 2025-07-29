import { useRef, useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const [recentTimers, setRecentTimers] = useState([]);
    const intervalRef = useRef(null);

    const FetchData = async () => {
        try {
            const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
            const data = await res.json();
            const now = new Date(data.datetime);
            const target = new Date("2025-07-28T16:00:00+05:30");

            const diffInSeconds = Math.floor((target - now) / 1000);
            setSeconds(diffInSeconds > 0 ? diffInSeconds : 0);
        } catch (err) {
            console.error(err);
        }
    };

    const handleStart = () => {
        if (!running && seconds > 0) {
            setRunning(true);
            intervalRef.current = setInterval(() => {
                setSeconds(prev => {
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
        const hrs = String(Math.floor(secs / 3600)).padStart(2, '0');
        const min = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
        const sec = String(secs % 60).padStart(2, '0');
        return `${hrs}:${min}:${sec}`;
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setRunning(false);
        if (seconds > 0) {
            const formatted = formatTime(seconds);
            setRecentTimers(prev => {
                const updated = [formatted, ...prev.filter(t => t !== formatted)];
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
        <div className='container-fluid'>
            {/* Top Display */}
            <div className="row d-flex justify-content-center align-items-center vh-100 text-center bg-light">
                <div className="col-12">
                    <h1 style={{ fontFamily: "'Digital-7 Mono', monospace", fontSize: "60px" }}>
                        {formatTime(seconds)}
                    </h1>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                        <button className="btn btn-primary" style={{ minWidth: "110px" }} onClick={handleEdit}>Edit</button>
                        <button className="btn btn-warning text-white" onClick={handleReset}>Reset</button>
                        <button
                            className="btn btn-success"
                            onClick={async () => {
                                await FetchData();
                                handleStart();
                            }}
                            disabled={running || seconds === 0}
                        >
                            Start
                        </button>
                    </div>
                </div>
            </div>

            {/* Predefined + Recent Timers */}
            <div className="row mb-4">
                <div className="col-12 col-md-6 p-3 border">
                    <h6 className="fw-bold">Set the timer for the specified time</h6>
                    <div className="row">
                        <div className="col-6">
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
                        <div className="col-6">
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

                <div className="col-12 col-md-6 p-3 border">
                    <h6 className="fw-bold">Recently Used</h6>
                    <hr />
                    <div className="fs-5">
                        {recentTimers.length === 0 ? <p>No timers yet.</p> :
                            recentTimers.map((time, idx) => (
                                <div key={idx} style={{ fontFamily: 'monospace' }}>{time}</div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* How to Use + Holidays */}
            <div className="row">
                <div className="col-12 col-md-6 p-3 border">
                    <h6 className="fw-bold">How to use the online timer</h6>
                    <p>Set the hour, minute, and second... (trimmed for brevity)</p>
                    <p>Click the "Reset" button to start again. You can also bookmark timers.</p>
                </div>

                <div className="col-12 col-md-6 p-3 border">
                    <h6 className="fw-bold">Holidays</h6>
                    <div className="d-flex justify-content-between"><h5>New Year</h5><p>Jan 1, 2026</p></div>
                    <div className="d-flex justify-content-between"><h5>Groundhog Day</h5><p>Feb 2, 2026</p></div>
                    <div className="d-flex justify-content-between"><h5>Easter</h5><p>Apr 5, 2026</p></div>
                    <div className="d-flex justify-content-between"><h5>Independence Day</h5><p>Jul 4, 2025</p></div>
                    <div className="d-flex justify-content-between"><h5>Christmas</h5><p>Dec 25, 2025</p></div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
