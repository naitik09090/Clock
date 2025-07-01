import { useEffect, useState } from 'react'
import { Modal, Button, Form, ModalHeader } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [hour, setHour] = useState('6 AM');
    const [minute, setMinute] = useState('00');
    const [sound, setSound] = useState('Childhood');
    const [repeat, setRepeat] = useState(true);
    const [title, setTitle] = useState('Alarm 6:00 AM');

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

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className="row flex flex-column justify-content-center align-items-center vh-100 bg-traslate mb-3">
                        <div className="col-md-12 col-sm-12 col-xs-12 Time_NOw justify-content-center text-center">
                            <h1
                                style={{
                                    fontFamily: "'Digital-7 Mono', monospace",
                                    fontSize: "60px",
                                }}
                            >
                                {formatTime(currentTime)}
                            </h1>
                            <p
                                className="mb-4"
                                style={{
                                    fontFamily: "'Digital-7 Mono', monospace",
                                    fontSize: "20px",
                                    letterSpacing: "2px"
                                }}
                            >
                                {formatDate(currentTime)}
                            </p>
                        </div>
                        <div className='row flex flex-column justify-content-center align-items-center text-center'>
                            <div className="col-md-12">
                                <button type="button" className="Set_Alarm" onClick={() => setShowModal(true)}>
                                    Set Alarm
                                </button>
                            </div>
                        </div>

                        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                            <Modal.Header style={{ backgroundColor: '#0099dd', color: 'white', paddingTop: '20px' }}>
                                <Modal.Title>Edit Alarm</Modal.Title>
                                <IoCloseSharp className='Close_Icon' onClick={handleClose} />
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <div className="d-flex mb-3">
                                        <div className="me-3 w-50">
                                            <Form.Label>Hours</Form.Label>
                                            <Form.Select value={hour} onChange={e => setHour(e.target.value)}>
                                                <option>6 AM</option>
                                                <option>7 AM</option>
                                                <option>8 AM</option>
                                                <option>9 AM</option>
                                            </Form.Select>
                                        </div>
                                        <div className="w-50">
                                            <Form.Label>Minutes</Form.Label>
                                            <Form.Select value={minute} onChange={e => setMinute(e.target.value)}>
                                                <option>00</option>
                                                <option>15</option>
                                                <option>30</option>
                                                <option>45</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Sound</Form.Label>
                                        <div className="d-flex align-items-center">
                                            <Form.Select className="me-2" value={sound} onChange={e => setSound(e.target.value)}>
                                                <option>Childhood</option>
                                                <option>Birdsong</option>
                                            </Form.Select>
                                            <Button variant="outline-secondary" className='Dot_Btn' size="sm">...</Button><br />
                                            <Form.Check
                                                type="checkbox"
                                                label="Repeat sound"
                                                className="ms-3"
                                                checked={repeat}
                                                onChange={e => setRepeat(e.target.checked)}
                                            />
                                        </div>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="light">Test</Button>
                                <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                                <Button variant="success" onClick={() => setShowModal(false)}>Start</Button>
                            </Modal.Footer>
                        </Modal>
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