import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";

const Set_4 = () => {
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
        <div className='container-fluid'>
            <div className="row Home_Main flex flex-column justify-content-center align-items-center vh-100 bg-traslate mb-3">
                <div className="col-md-12 col-sm-12 col-xs-12 Time_NOw text-center">
                    <h1>Set Alarm for 12:19 AM</h1>
                    <h1
                        style={{
                            fontFamily: "'Digital-7 Mono', monospace",
                            fontSize: "80px",
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

                <div className="col-md-12 text-center thrEE_BTn">
                    <Button variant="light">Test</Button>
                    <Button variant="info" onClick={() => setShowModal(false)}>Edit</Button>
                    <Button variant="success" onClick={() => setShowModal(false)}>Set Alarm</Button>
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
            <div className='container-fluid'>
                <div className='row Home_Main mb-4'>
                    <div className='col-md-12 BTN_Timer2 text-start bg-traslate border'>
                        <span className='time_Set'>Set the alarm for the specified time</span>
                        <br />
                        <p className='Row_Bottom'></p>
                        <a href='/Set-12-1-18'>
                            <button>12:18 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-19'>
                            <button>12:19 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-20'>
                            <button>12:20 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-21'>
                            <button>12:21 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-22'>
                            <button>12:22 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-23'>
                            <button>12:23 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-24'>
                            <button>12:24 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-25'>
                            <button>12:25 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-26'>
                            <button>12:26 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-27'>
                            <button>12:27 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-28'>
                            <button>12:28 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-29'>
                            <button>12:29 AM</button>{' '}
                        </a>
                        <br />
                        <br />
                        <p className='Row_Bottom'></p>
                        <a href='/Set-12'>
                            <button>12:00 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-5'>
                            <button>12:05 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-10'>
                            <button>12:10 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-15'>
                            <button>12:15 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-20'>
                            <button>12:20 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-25'>
                            <button>12:25 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-30'>
                            <button>12:30 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-35'>
                            <button>12:35 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-40'>
                            <button>12:40 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-45'>
                            <button>12:45 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-50'>
                            <button>12:50 AM</button>{' '}
                        </a>
                        <a href='/Set-12-1-55'>
                            <button>12:55 AM</button>{' '}
                        </a>
                        <br />
                        <br />
                        <p className='Row_Bottom'></p>

                        <button>12:00 AM</button>{' '}
                        <button>1:00 AM</button>{' '}
                        <button>2:00 AM</button>{' '}
                        <button>3:00 AM</button>{' '}
                        <button>4:00 AM</button>{' '}
                        <button>5:00 AM</button>{' '}
                        <button>6:00 AM</button>{' '}
                        <button>7:00 AM</button>{' '}
                        <button>8:00 AM</button>{' '}
                        <button>9:00 AM</button>{' '}
                        <button>10:00 AM</button>{' '}
                        <button>11:00 AM</button>{' '}
                        <br />
                        <button>12:00 PM</button>{' '}
                        <button>1:00 PM</button>{' '}
                        <button>2:00 PM</button>{' '}
                        <button>3:00 PM</button>{' '}
                        <button>4:00 PM</button>{' '}
                        <button>5:00 PM</button>{' '}
                        <button>6:00 PM</button>{' '}
                        <button>7:00 PM</button>{' '}
                        <button>8:00 PM</button>{' '}
                        <button>9:00 PM</button>{' '}
                        <button>10:00 PM</button>{' '}
                        <button>11:00 PM</button>{' '}
                        <br />
                        <br />
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row Home_Main'>
                    <div className='col-md-12 BTN_Timer2 text-start bg-traslate border'>
                        <h1>Wake me up at 12:19 AM</h1>
                        <div className='Row_Bottom'></div>
                        <p>Set the alarm for 12:19 AM. Set my alarm for 12:19 AM. This free alarm clock will wake you up in time.</p>
                        <p>Set the hour and minute for the online alarm clock. The alarm message will appear, and the preselected sound will be played at the set time.</p>
                        <p>When setting the alarm, you can click the "Test" button to preview the alert and check the sound volume.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Set_4