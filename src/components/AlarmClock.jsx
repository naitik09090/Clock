import { useEffect, useState } from 'react'
import { Button } from "react-bootstrap";

const Home = () => {
    const [time, setTime] = useState(new Date());
    const [is24Hour, setIs24Hour] = useState(false);
    const [clockType, setClockType] = useState('watch');

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: !is24Hour,
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        }).toUpperCase();
    };

    // Clock calculations
    const hours = time.getHours() % (is24Hour ? 24 : 12);
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDeg = (hours + minutes / 60) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;
    return (
        <>
            <div className='container-fluid'>
                <div className="container-fluid" style={{ minHeight: '100vh' }}>
                    <div className="row flex-column justify-content-center align-items-center vh-100">
                        <div className="col-md-12 text-center mb-4">
                            {clockType === 'watch' ? (
                                <div className="clock">
                                    <div className="dot center"></div>
                                    <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
                                    <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
                                    <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            className="dot mb-4"
                                            key={i}
                                            style={{ transform: `rotate(${i * 30}deg) translateY(-100px)` }}
                                        ></div>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <h1 style={{ fontSize: '60px' }}>
                                        {formatTime(time)}
                                    </h1>
                                </div>
                            )}
                            <p
                                className="mb-4"
                                style={{
                                    fontSize: '20px',
                                    letterSpacing: '2px',
                                }}
                            >
                                {formatDate(time)}
                            </p>

                            <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
                                <Button
                                    className={`btn-sm ${clockType === 'watch'}`}
                                    onClick={() => setClockType('watch')}
                                >
                                    watch
                                </Button>
                                <Button
                                    className={`btn-sm ${clockType === 'digital'}`}
                                    onClick={() => setClockType('digital')}
                                >
                                    Digital
                                </Button>
                            </div>

                            {/* 12H/24H Toggle */}
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                <span
                                    onClick={() => setIs24Hour(false)}
                                    className={`clock-mode ${!is24Hour ? 'active' : ''}`}
                                >
                                    12H
                                </span>
                                <span
                                    onClick={() => setIs24Hour(true)}
                                    className={`clock-mode ${is24Hour ? 'active' : ''}`}
                                >
                                    24H
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='BTN_Timer col-md-6 bg-traslate border'>
                            <span className='time_Set'>Set the alarm for the specified time</span> <br />
                            <p className='Row_Bottom'></p>
                            <a href='/Set-4'>
                                <button>4:00 AM</button>{' '}
                            </a>
                            <a href='/Set-4-3'>
                                <button>4:30 AM</button>
                            </a>
                            <br />
                            <a href='/Set-5'>
                                <button>5:00 AM</button>{' '}
                            </a>
                            <a href='/Set-5-1'>
                                <button>5:15 AM</button>{' '}
                            </a>
                            <a href='/Set-5-2'>
                                <button>5:30 AM</button>{' '}
                            </a>
                            <a href='/Set-5-3'>
                                <button>5:45 AM</button>{' '}
                            </a>
                            <br />
                            <a href='/Set-6'>
                                <button>6:00 AM</button>{' '}
                            </a>
                            <a href='/Set-6-1'>
                                <button>6:15 AM</button>{' '}
                            </a>
                            <a href='/Set-6-2'>
                                <button>6:30 AM</button>{' '}
                            </a>
                            <a href='/Set-6-3'>
                                <button>6:45 AM</button>{' '}
                            </a>
                            <br />
                            <a href='/Set-7'>
                                <button>7:00 AM</button>{' '}
                            </a>
                            <a href='/Set-7-1'>
                                <button>7:15 AM</button>{' '}
                            </a>
                            <a href='/Set-7-2'>
                                <button>7:30 AM</button>{' '}
                            </a>
                            <a href='/Set-7-3'>
                                <button>7:45 AM</button>{' '}
                            </a>
                            <br />
                            <a href='/Set-8'>
                                <button>8:00 AM</button>{' '}
                            </a>
                            <a href='/Set-8-1'>
                                <button>8:15 AM</button>{' '}
                            </a>
                            <a href='/Set-8-2'>
                                <button>8:30 AM</button>{' '}
                            </a>
                            <a href='/Set-8-3'>
                                <button>8:45 AM</button>{' '}
                            </a>
                            <br />
                            <a href='/Set-9'>
                                <button>9:00 AM</button>{' '}
                            </a>
                            <a href='/Set-10'>
                                <button>10:00 AM</button>{' '}
                            </a>
                            <a href='/Set-11'>
                                <button>11:00 AM</button>{' '}
                            </a>
                            <a href='/Set-12'>
                                <button>12:00 PM</button>{' '}
                            </a>
                            <a href='/Set-1'>
                                <button>1:00 PM</button>{' '}
                            </a>
                            <a href='/Set-2'>
                                <button>2:00 PM</button>{' '}
                            </a>
                        </div>
                        <div className='BTN_Timer_5 col-md-6 text-start bg-traslate border'>
                            <span className='time_Set'>Recently used</span>
                            <div className='Row_Bottom'></div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mb-5'>
                    <div className='row Home_Main'>
                        <div className='col-md-12 BTN_Timer2 text-start bg-traslate border'>
                            <h1>How to use the online alarm clock</h1>
                            <div className='Row_Bottom'></div>
                            <p>Set the hour and minute for the online alarm clock. The alarm message will appear, and the preselected sound will be played at the set time.</p>
                            <p>When setting the alarm, you can click the "Test" button to preview the alert and check the sound volume.</p>
                            <p>You can configure the alarm clock appearance (text color, type, and size), and these settings will be saved; they will be used when you open your web browser next time.</p>
                            <p>The online alarm clock will not work if you close your browser or shut down your computer, but it can work without an internet connection.</p>
                            <p>You can add links to online alarm clocks with different time settings to your browser's Favorites. Opening such a link will set the alarm clock to the predefined time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home