import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [now, setNow] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(moment());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getTime = (zone) => moment(now).tz(zone).format('h:mm:ss A');
    const getDate = (zone) => moment(now).tz(zone).format('dddd, MMM D');


    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        }).toUpperCase();
    };
    return (
        <div className='container-fluid'>
            <div className='container-fluid'>
                <div className="row Home_Main d-flex justify-content-center align-items-center vh-100 bg-traslate">
                    <div className="text-center Time_NOw col-md-12 col-sm-12 col-xs-12">
                        <h5 className="text-muted mb-3">Time Now</h5>
                        <h1
                            style={{
                                fontFamily: "'Digital-7 Mono', monospace",
                                fontSize: "60px",
                            }}
                        >
                            {formatTime(currentTime)}
                        </h1>
                        <p
                            className="mt-2"
                            style={{
                                fontFamily: "'Digital-7 Mono', monospace",
                                fontSize: "20px",
                                letterSpacing: "2px"
                            }}
                        >
                            {formatDate(currentTime)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4">
                <div className="row CArd_4 justify-content-center text-center">

                    {/* New York */}
                    <div className="col-md-3 mb-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h6>New York</h6>
                                <h5>{getTime('America/New_York')}</h5>
                                <p className="text-muted">{getDate('America/New_York')}</p>
                            </div>
                        </div>
                    </div>

                    {/* London */}
                    <div className="col-md-3 mb-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h6>London, UK</h6>
                                <h5>{getTime('Europe/London')}</h5>
                                <p className="text-muted">{getDate('Europe/London')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Tokyo */}
                    <div className="col-md-3 mb-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h6>Tokyo, Japan</h6>
                                <h5>{getTime('Asia/Tokyo')}</h5>
                                <p className="text-muted">{getDate('Asia/Tokyo')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sydney */}
                    <div className="col-md-3 mb-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h6>Sydney, Australia</h6>
                                <h5>{getTime('Australia/Sydney')}</h5>
                                <p className="text-muted">{getDate('Australia/Sydney')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Add more cities manually below the same way */}

                    {/* Berlin */}
                    <div className="col-md-3 mb-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h6>Berlin, Germany</h6>
                                <h5>{getTime('Europe/Berlin')}</h5>
                                <p className="text-muted">{getDate('Europe/Berlin')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Dubai */}
                    <div className="col-md-3 mb-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h6>Dubai, UAE</h6>
                                <h5>{getTime('Asia/Dubai')}</h5>
                                <p className="text-muted">{getDate('Asia/Dubai')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Los Angeles */}
                    <div className="col-md-3 mb-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h6>Los Angeles, CA</h6>
                                <h5>{getTime('America/Los_Angeles')}</h5>
                                <p className="text-muted">{getDate('America/Los_Angeles')}</p>
                            </div>
                        </div>
                    </div>

                    {/* New Delhi */}
                    <div className="col-md-3 mb-4">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h6>New Delhi, India</h6>
                                <h5>{getTime('Asia/Kolkata')}</h5>
                                <p className="text-muted">{getDate('Asia/Kolkata')}</p>
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
                <div className='row Home_Main mb-5'>
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