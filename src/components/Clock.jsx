import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone';
import { Col } from 'react-bootstrap';

const Clock = () => {
    const [now, setNow] = useState(moment());
    const [zone, setZone] = useState('America/New_York');
    const [zone2, setZone2] = useState('Europe/London');
    const [zone3, setZone3] = useState('Asia/Tokyo');
    const [zone4, setZone4] = useState('Australia/Sydney');
    const [zone5, setZone5] = useState('Europe/Berlin');
    const [zone6, setZone6] = useState('Asia/Dubai');
    const [zone7, setZone7] = useState('America/Los_Angeles');
    const [zone8, setZone8] = useState('Asia/Kolkata');

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(moment());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const [time1111, setTime1111] = useState(new Date());

    useEffect(() => {
        // Fetch timezone based on IP
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                setTimezone(data.timezone || "UTC");
            });
    }, []);



    const time = moment(now).tz(zone);
    const time2 = moment(now).tz(zone2);
    const time3 = moment(now).tz(zone3);
    const time4 = moment(now).tz(zone4);
    const time5 = moment(now).tz(zone5);
    const time6 = moment(now).tz(zone6);
    const time7 = moment(now).tz(zone7);
    const time8 = moment(now).tz(zone8);


    // Delhi

    const seconds8 = time8.seconds();
    const minutes8 = time8.minutes();
    const hours8 = time8.hours() % 12 + minutes8 / 60;

    const hourDeg8 = hours8 * 30;
    const minuteDeg8 = minutes8 * 6;
    const secondDeg8 = seconds8 * 6;

    // Los_Angeles

    const seconds7 = time7.seconds();
    const minutes7 = time7.minutes();
    const hours7 = time7.hours() % 12 + minutes7 / 60;

    const hourDeg7 = hours7 * 30;
    const minuteDeg7 = minutes7 * 6;
    const secondDeg7 = seconds7 * 6;


    // Dubai

    const seconds6 = time6.seconds();
    const minutes6 = time6.minutes();
    const hours6 = time6.hours() % 12 + minutes6 / 60;

    const hourDeg6 = hours6 * 30;
    const minuteDeg6 = minutes6 * 6;
    const secondDeg6 = seconds6 * 6;

    // Berlin

    const seconds5 = time5.seconds();
    const minutes5 = time5.minutes();
    const hours5 = time5.hours() % 12 + minutes5 / 60;

    const hourDeg5 = hours5 * 30;
    const minuteDeg5 = minutes5 * 6;
    const secondDeg5 = seconds5 * 6;


    // sydney

    const seconds4 = time4.seconds();
    const minutes4 = time4.minutes();
    const hours4 = time4.hours() % 12 + minutes4 / 60;

    const hourDeg4 = hours4 * 30;
    const minuteDeg4 = minutes4 * 6;
    const secondDeg4 = seconds4 * 6;

    // tokyo

    const seconds3 = time3.seconds();
    const minutes3 = time3.minutes();
    const hours3 = time3.hours() % 12 + minutes3 / 60;

    const hourDeg3 = hours3 * 30;
    const minuteDeg3 = minutes3 * 6;
    const secondDeg3 = seconds3 * 6;

    // London

    const seconds2 = time2.seconds();
    const minutes2 = time2.minutes();
    const hours2 = time2.hours() % 12 + minutes2 / 60;

    const hourDeg2 = hours2 * 30;
    const minuteDeg2 = minutes2 * 6;
    const secondDeg2 = seconds2 * 6;

    // New York

    const seconds = time.seconds();
    const minutes = time.minutes();
    const hours = time.hours() % 12 + minutes / 60;

    const hourDeg = hours * 30;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;



    const getTime = (zone) => moment(now).tz(zone).format('h:mm:ss A');
    const getDate = (zone) => moment(now).tz(zone).format('dddd, MMM D');


    const [time1, setTime] = useState(new Date());
    const [is24Hour, setIs24Hour] = useState(false);
    const [clockType, setClockType] = useState('watch');

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        if (!is24Hour) {
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; // Convert 0 to 12
            return `${hours}:${minutes}:${seconds} ${ampm}`;
        }

        return `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    };


    const formatDate = (date) => {
        return date.toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };


    // Clock calculations
    const hours1 = time1.getHours() % (is24Hour ? 24 : 12);
    const minutes1 = time1.getMinutes();
    const seconds1 = time1.getSeconds();

    const hourDeg1 = (hours1 + minutes / 60) * 30;
    const minuteDeg1 = (minutes1 + seconds / 60) * 6;
    const secondDeg1 = seconds1 * 6;
    return (
        <div className='container-fluid'>
            <div className="container-fluid" style={{ minHeight: '100vh' }}>
                <div className="row flex-column justify-content-center align-items-center vh-100">
                    <div className="col-md-12 text-center mb-4">
                        {clockType === "watch" ? (
                            <div className="clock">
                                <div className="dot center"></div>
                                <div className="hand hour" style={{ transform: `rotate(${hourDeg1}deg)` }}></div>
                                <div className="hand minute" style={{ transform: `rotate(${minuteDeg1}deg)` }}></div>
                                <div className="hand second" style={{ transform: `rotate(${secondDeg1}deg)` }}></div>
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
                                <h1 style={{ fontFamily: "'Digital-7 Mono', monospace", fontSize: "60px" }}>
                                    {time.toLocaleString(DateTime.TIME_WITH_SECONDS)}
                                </h1>
                            </div>
                        )}
                        <p
                            className=""
                            style={{
                                fontFamily: "'Digital-7 Mono', monospace",
                                fontSize: '20px',
                                letterSpacing: '2px',
                            }}
                        >
                            {formatDate(time1)}
                        </p>

                        <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
                            <button
                                className={`btn-sm ${clockType === 'watch' ? '' : 'btn-outline-light'}`}
                                onClick={() => setClockType('watch')}
                            >
                                watch
                            </button>
                            <button
                                className={`btn-sm ${clockType === 'digital' ? '' : 'btn-outline-light'}`}
                                onClick={() => setClockType('digital')}
                            >
                                Digital
                            </button>
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
            <div className="container-fluid py-4">
                <div className="row CArd_4 justify-content-start text-center">

                    {/* New York */}
                    <div className='row mb-5'>
                        <div
                            className="col-md-3 d-flex flex-column align-items-center justify-content-between p-5 mb-5 shadow"
                            style={{ height: '37vh', width: '37vh', margin: '30px', background: '#111', borderRadius: '50%' }}
                        >
                            <h6 className="mb-3 text-start txt_New_York">New York</h6>
                            {/* Top: Country Name */}

                            {/* Middle: Analog Clock */}
                            <div className="clock_analog position-relative">
                                <span className="dot center" />
                                <span className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
                                <span className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }} />
                                <span className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }} />
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        className="dot"
                                        key={i}
                                        style={{ transform: `rotate(${i * 30}deg) translateY(-130px)` }}
                                    ></div>
                                ))}
                            </div>

                            {/* Bottom: Time + Date */}
                            <div className="txt_New_Yor2 text-start mt-2">
                                <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>{getTime('America/New_York')}</h5>
                                <p className="mb-0" style={{ fontSize: '12px' }}>{getDate('America/New_York')}</p>
                            </div>
                        </div>

                        {/* London */}

                        <div
                            className="col-md-3 d-flex flex-column align-items-center justify-content-between p-5 mb-5 shadow"
                            style={{ height: '37vh', width: '37vh', margin: '30px', background: '#111', borderRadius: '50%' }}
                        >
                            <h6 className="mb-3 text-start txt_New_York">London, UK</h6>
                            {/* Top: Country Name */}

                            {/* Middle: Analog Clock */}
                            <div className="position-relative" style={{ width: '90px', height: '250px' }}>
                                <span className="dot center" />
                                <span className="hand hour" style={{ transform: `rotate(${hourDeg2}deg)` }} />
                                <span className="hand minute" style={{ transform: `rotate(${minuteDeg2}deg)` }} />
                                <span className="hand second" style={{ transform: `rotate(${secondDeg2}deg)` }} />
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        className="dot mb-4"
                                        key={i}
                                        style={{ transform: `rotate(${i * 30}deg) translateY(-130px)` }}
                                    ></div>
                                ))}
                            </div>

                            {/* Bottom: Time + Date */}
                            <div className="txt_New_Yor2 text-start">
                                <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>{getTime('Europe/London')}</h5>
                                <p className="mb-0" style={{ fontSize: '12px' }}>{getDate('Europe/London')}</p>
                            </div>
                        </div>

                        {/* Tokyo */}

                        <div
                            className="col-md-3 d-flex flex-column align-items-center justify-content-between p-5 mb-5 shadow"
                            style={{ height: '37vh', width: '37vh', margin: '30px', background: '#111', borderRadius: '50%' }}
                        >
                            <h6 className="mb-3 text-start txt_New_York">Tokyo, Japan</h6>
                            {/* Top: Country Name */}

                            {/* Middle: Analog Clock */}
                            <div className="position-relative" style={{ width: '90px', height: '250px' }}>
                                <span className="dot center" />
                                <span className="hand hour" style={{ transform: `rotate(${hourDeg3}deg)` }} />
                                <span className="hand minute" style={{ transform: `rotate(${minuteDeg3}deg)` }} />
                                <span className="hand second" style={{ transform: `rotate(${secondDeg3}deg)` }} />
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        className="dot mb-4"
                                        key={i}
                                        style={{ transform: `rotate(${i * 30}deg) translateY(-130px)` }}
                                    ></div>
                                ))}
                            </div>

                            {/* Bottom: Time + Date */}
                            <div className="txt_New_Yor2 text-start mt-2">
                                <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>{getTime('Asia/Tokyo')}</h5>
                                <p className="mb-0" style={{ fontSize: '12px' }}>{getDate('Asia/Tokyo')}</p>
                            </div>
                        </div>

                        {/* Sydney */}

                        <div
                            className="col-md-3 d-flex flex-column align-items-center justify-content-between p-5 mb-5 shadow"
                            style={{ height: '37vh', width: '37vh', margin: '30px', background: '#111', borderRadius: '50%' }}
                        >
                            <h6 className="mb-3 text-start txt_New_York">Sydney, Australia</h6>
                            {/* Top: Country Name */}

                            {/* Middle: Analog Clock */}
                            <div className="position-relative" style={{ width: '90px', height: '250px' }}>
                                <span className="dot center" />
                                <span className="hand hour" style={{ transform: `rotate(${hourDeg4}deg)` }} />
                                <span className="hand minute" style={{ transform: `rotate(${minuteDeg4}deg)` }} />
                                <span className="hand second" style={{ transform: `rotate(${secondDeg4}deg)` }} />
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        className="dot mb-4"
                                        key={i}
                                        style={{ transform: `rotate(${i * 30}deg) translateY(-130px)` }}
                                    ></div>
                                ))}
                            </div>

                            {/* Bottom: Time + Date */}
                            <div className="txt_New_Yor2 text-start mt-2">
                                <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>{getTime('Australia/Sydney')}</h5>
                                <p className="mb-0" style={{ fontSize: '12px' }}>{getDate('Australia/Sydney')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Add more cities manually below the same way */}

                    {/* Berlin */}
                    <div className="row mb-5 py-3">
                        <div
                            className="col-md-3 d-flex flex-column align-items-center justify-content-between p-5 mt-5 shadow"
                            style={{ height: '37vh', width: '37vh', margin: '30px', background: '#111', borderRadius: '50%' }}
                        >
                            <h6 className="mb-3 text-start txt_New_York">Berlin, Germany</h6>
                            {/* Top: Country Name */}

                            {/* Middle: Analog Clock */}
                            <div className="position-relative" style={{ width: '90px', height: '250px' }}>
                                <span className="dot center" />
                                <span className="hand hour" style={{ transform: `rotate(${hourDeg5}deg)` }} />
                                <span className="hand minute" style={{ transform: `rotate(${minuteDeg5}deg)` }} />
                                <span className="hand second" style={{ transform: `rotate(${secondDeg5}deg)` }} />
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        className="dot mb-4"
                                        key={i}
                                        style={{ transform: `rotate(${i * 30}deg) translateY(-130px)` }}
                                    ></div>
                                ))}
                            </div>

                            {/* Bottom: Time + Date */}
                            <div className="txt_New_Yor2 text-start mt-2">
                                <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>{getTime('Europe/Berlin')}</h5>
                                <p className="mb-0" style={{ fontSize: '12px' }}>{getDate('Europe/Berlin')}</p>
                            </div>
                        </div>

                        {/* Dubai */}

                        <div
                            className="col-md-3 d-flex flex-column align-items-center justify-content-between p-5 mt-5 shadow"
                            style={{ height: '37vh', width: '37vh', margin: '30px', background: '#111', borderRadius: '50%' }}
                        >
                            <h6 className="mb-3 text-start txt_New_York">Dubai, UAE</h6>
                            {/* Top: Country Name */}

                            {/* Middle: Analog Clock */}
                            <div className="position-relative" style={{ width: '90px', height: '250px' }}>
                                <span className="dot center" />
                                <span className="hand hour" style={{ transform: `rotate(${hourDeg6}deg)` }} />
                                <span className="hand minute" style={{ transform: `rotate(${minuteDeg6}deg)` }} />
                                <span className="hand second" style={{ transform: `rotate(${secondDeg6}deg)` }} />
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        className="dot mb-4"
                                        key={i}
                                        style={{ transform: `rotate(${i * 30}deg) translateY(-130px)` }}
                                    ></div>
                                ))}
                            </div>

                            {/* Bottom: Time + Date */}
                            <div className="txt_New_Yor2 text-start mt-2">
                                <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>{getTime('Asia/Dubai')}</h5>
                                <p className="mb-0" style={{ fontSize: '12px' }}>{getDate('Asia/Dubai')}</p>
                            </div>
                        </div>

                        {/* Los Angeles */}

                        <div
                            className="col-md-3 d-flex flex-column align-items-center justify-content-between p-5 mt-5 shadow"
                            style={{ height: '37vh', width: '37vh', margin: '30px', background: '#111', borderRadius: '50%' }}
                        >
                            <h6 className="mb-3 text-start txt_New_York">Los Angeles, CA</h6>
                            {/* Top: Country Name */}

                            {/* Middle: Analog Clock */}
                            <div className="position-relative" style={{ width: '90px', height: '250px' }}>
                                <span className="dot center" />
                                <span className="hand hour" style={{ transform: `rotate(${hourDeg7}deg)` }} />
                                <span className="hand minute" style={{ transform: `rotate(${minuteDeg7}deg)` }} />
                                <span className="hand second" style={{ transform: `rotate(${secondDeg7}deg)` }} />
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        className="dot mb-4"
                                        key={i}
                                        style={{ transform: `rotate(${i * 30}deg) translateY(-130px)` }}
                                    ></div>
                                ))}
                            </div>

                            {/* Bottom: Time + Date */}
                            <div className="txt_New_Yor2 text-start mt-2">
                                <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>{getTime('America/Los_Angeles')}</h5>
                                <p className="mb-0" style={{ fontSize: '12px' }}>{getDate('America/Los_Angeles')}</p>
                            </div>
                        </div>

                        {/* New Delhi */}

                        <div
                            className="col-md-3 d-flex flex-column align-items-center justify-content-between p-5 mt-5 shadow"
                            style={{ height: '37vh', width: '37vh', margin: '30px', background: '#111', borderRadius: '50%' }}
                        >
                            <h6 className="mb-3 text-start txt_New_York">New Delhi, India</h6>
                            {/* Top: Country Name */}

                            {/* Middle: Analog Clock */}
                            <div className="position-relative" style={{ width: '90px', height: '250px' }}>
                                <span className="dot center" />
                                <span className="hand hour" style={{ transform: `rotate(${hourDeg8}deg)` }} />
                                <span className="hand minute" style={{ transform: `rotate(${minuteDeg8}deg)` }} />
                                <span className="hand second" style={{ transform: `rotate(${secondDeg8}deg)` }} />
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        className="dot mb-2"
                                        key={i}
                                        style={{ transform: `rotate(${i * 30}deg) translateY(-130px)` }}
                                    ></div>
                                ))}
                            </div>

                            {/* Bottom: Time + Date */}
                            <div className="txt_New_Yor2 text-start mt-2">
                                <h5 style={{ fontSize: '16px', fontWeight: 'bold' }}>{getTime('Asia/Kolkata')}</h5>
                                <p className="mb-0" style={{ fontSize: '12px' }}>{getDate('Asia/Kolkata')}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid Home_Main2 bg-traslate py-4 mb-4">
                <div className="row ColcK_Data_3 p-4 border">
                    <h5 className="mb-4">Most Popular Time Zones and Cities</h5>
                    <Col md={3}>
                        <p>New York</p>
                        <p>Philadelphia, Pennsylvania</p>
                        <p>Chicago, Illinois</p>
                        <p>Houston, Texas</p>
                        <p>San Antonio, Texas</p>
                        <p>Dallas, Texas</p>
                        <p>Denver, Colorado</p>
                        <p>Los Angeles, California</p>
                        <p>San Diego, California</p>
                        <p>San Jose, California</p>
                        <p>Phoenix, Arizona</p>
                        <p>Anchorage, Alaska</p>
                        <p>Adak, Alaska</p>
                        <p>Honolulu, Hawaii</p>
                        <p>Toronto, Canada</p>
                        <p>Montreal, Canada</p>
                    </Col>

                    <Col md={3}>
                        <p>Winnipeg, Canada</p>
                        <p>Calgary, Canada</p>
                        <p>Vancouver, Canada</p>
                        <p>London, United Kingdom</p>
                        <p>Dublin, Ireland</p>
                        <p>Sydney, Australia</p>
                        <p>Melbourne, Australia</p>
                        <p>Brisbane, Australia</p>
                        <p>Perth, Australia</p>
                        <p>Adelaide, Australia</p>
                        <p>Wellington, New Zealand</p>
                        <p>Manila, Philippines</p>
                        <p>Singapore, Singapore</p>
                        <p>Tokyo, Japan</p>
                        <p>Seoul, Korea</p>
                        <p>Taipei, Taiwan</p>
                    </Col>

                    <Col md={3}>
                        <p>Beijing, China</p>
                        <p>Shanghai, China</p>
                        <p>Urumqi, China</p>
                        <p>Berlin, Germany</p>
                        <p>Paris, France</p>
                        <p>Copenhagen, Denmark</p>
                        <p>Rome, Italy</p>
                        <p>Madrid, Spain</p>
                        <p>Ceuta, Africa, Spain</p>
                        <p>Canary Islands, Spain</p>
                        <p>Stockholm, Sweden</p>
                        <p>Lisbon, Portugal</p>
                        <p>Madeira, Portugal</p>
                        <p>Azores, Portugal</p>
                        <p>Helsinki, Finland</p>
                        <p>Athens, Greece</p>
                    </Col>

                    <Col md={3}>
                        <p>Istanbul, Turkey</p>
                        <p>Warsaw, Poland</p>
                        <p>Kiev, Ukraine</p>
                        <p>Moscow, Russia</p>
                        <p>Jerusalem, Israel</p>
                        <p>New Delhi, India</p>
                        <p>Kolkata, India</p>
                        <p>Noronha, Brazil</p>
                        <p>São Paulo, Brazil</p>
                        <p>Rio de Janeiro, Brazil</p>
                        <p>Manaus, Brazil</p>
                        <p>Rio Branco, Brazil</p>
                        <p>Mexico City, Mexico</p>
                        <p>Santiago, Chile</p>
                        <p>Buenos Aires, Argentina</p>
                        <p>Dubai, United Arab Emirates</p>
                    </Col>
                </div>
            </div>
            <div className='container-fluid'>
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
    )
}

export default Clock