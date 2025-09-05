import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Set_4 = () => {
  const [alarmTime, setAlarmTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [hour, setHour] = useState("4 AM");
  const [minute, setMinute] = useState("00");
  const [sound, setSound] = useState("Childhood");
  const [repeat, setRepeat] = useState(true);
  const [title, setTitle] = useState("Alarm 4:00 AM");
  const [alramList, setAlarmList] = useState([]);

  const location = useLocation();
  // const navigate = useNavigate();
  // const history = useHistory();

  useEffect(() => {
    // console.log(location.state);
    const alarmTimel = location.state.time;
    createListDinamicAlaram(alarmTimel);
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [location.state.time]);

  const createListDinamicAlaram = (alaramtime) => {
    console.log("alaramtime", alaramtime);
    const alaramH = alaramtime.getHours();
    const alaramM = alaramtime.getMinutes();
    if (alaramM <= 59) {
      console.log("alaramtime", alaramM);
      const tempAlaramList = [];
      for (let i = alaramM - 1; i < alaramM + 11; i++) {
        if (i >= 0) {
          const time = new Date(1970, 1, 1, alaramH, i);
          tempAlaramList.push(time);
          // console.log(time);
        }
        // console.log(i);
      }
      setAlarmList(tempAlaramList);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date
      .toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .toUpperCase();
  };

  // const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const formatNumber = (num) => {
    let formattedNumber = num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    return formattedNumber;
  };

  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  const onAlaramChag = (time) => {
    // console.log(history);

    // navigate({ time: time }, '', "/Alaram_1");

    // push('/Alaram_1', { state: time });
    // history('/Alaram_1', { state: time })
    setAlarmTime(time);
    createListDinamicAlaram(time);
    // handleGoBack();
  };

  return (
    <div className="container-fluid">
      <div className="row Home_Main flex flex-column justify-content-center align-items-center vh-100 bg-traslate mb-3">
        <div className="col-md-12 col-sm-12 col-xs-12 Time_NOw text-center">
          {alarmTime && <h1>Set Alarm for {formatTime(alarmTime)}</h1>}
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
              letterSpacing: "2px",
            }}
          >
            {formatDate(currentTime)}
          </p>
        </div>

        <div className="col-md-12 text-center thrEE_BTn">
          <Button variant="light">Test</Button>
          <Button variant="info" onClick={() => setShowModal(false)}>
            Edit
          </Button>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Set Alarm
          </Button>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header
            style={{
              backgroundColor: "#0099dd",
              color: "white",
              paddingTop: "20px",
            }}
          >
            <Modal.Title>Edit Alarm</Modal.Title>
            <IoCloseSharp className="Close_Icon" onClick={handleClose} />
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div className="d-flex mb-3">
                <div className="me-3 w-50">
                  <Form.Label>Hours</Form.Label>
                  <Form.Select
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                  >
                    <option>6 AM</option>
                    <option>7 AM</option>
                    <option>8 AM</option>
                    <option>9 AM</option>
                  </Form.Select>
                </div>
                <div className="w-50">
                  <Form.Label>Minutes</Form.Label>
                  <Form.Select
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
                  >
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
                  <Form.Select
                    className="me-2"
                    value={sound}
                    onChange={(e) => setSound(e.target.value)}
                  >
                    <option>Childhood</option>
                    <option>Birdsong</option>
                  </Form.Select>
                  <Button
                    variant="outline-secondary"
                    className="Dot_Btn"
                    size="sm"
                  >
                    ...
                  </Button>
                  <br />
                  <Form.Check
                    type="checkbox"
                    label="Repeat sound"
                    className="ms-3"
                    checked={repeat}
                    onChange={(e) => setRepeat(e.target.checked)}
                  />
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light">Test</Button>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="success" onClick={() => setShowModal(false)}>
              Start
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="container-fluid">
        <div className="row Home_Main mb-4">
          <div className="col-md-12 BTN_Timer2 text-start bg-translate border">
            <span className="time_Set">
              Set the alarm for the specified time
            </span>
            <br />
            <p className="Row_Bottom"></p>
            {alramList.map((time, index) => (
              <button
                key={`${time.getHours()}-${time.getMinutes()}-${index}`}
                onClick={() => onAlaramChag(time)}
              >
                {formatNumber(time.getHours())}:
                {formatNumber(time.getMinutes())}
              </button>
            ))}
            {/* <a href='/Set-4'>
                            <button>4:00 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-1'>
                            <button>4:01 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-2'>
                            <button>4:02 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-3'>
                            <button>4:03 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-4'>
                            <button>4:04 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-5'>
                            <button>4:05 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-6'>
                            <button>4:06 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-7'>
                            <button>4:07 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-8'>
                            <button>4:08 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-9'>
                            <button>4:09 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-10'>
                            <button>4:10 AM</button>{' '}
                        </a>
                        <a href='/Set-4-1-11'>
                            <button>4:11 AM</button>{' '}
                        </a> */}
            <br />
            <br />
            <p className="Row_Bottom"></p>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 0))}>
              12:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 5))}>
              12:05 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 10))}>
              12:10 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 15))}>
              12:15 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 20))}>
              12:20 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 25))}>
              12:25 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 30))}>
              12:30 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 35))}>
              12:35 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 40))}>
              12:40 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 45))}>
              12:45 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 50))}>
              12:50 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 55))}>
              12:55 AM
            </button>
            <br />
            <br />
            <p className="Row_Bottom"></p>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 0, 0))}>
              12:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 1, 0))}>
              1:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 2, 0))}>
              2:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 3, 0))}>
              3:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 4, 0))}>
              4:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 5, 0))}>
              5:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 6, 0))}>
              6:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 7, 0))}>
              7:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 8, 0))}>
              8:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 9, 0))}>
              9:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 10, 0))}>
              10:00 AM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 11, 0))}>
              11:00 AM
            </button>
            <br />
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 12, 0))}>
              12:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 13, 0))}>
              1:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 14, 0))}>
              2:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 15, 0))}>
              3:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 16, 0))}>
              4:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 17, 0))}>
              5:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 18, 0))}>
              6:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 19, 0))}>
              7:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 20, 0))}>
              8:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 21, 0))}>
              9:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 22, 0))}>
              10:00 PM
            </button>
            <button onClick={() => onAlaramChag(new Date(1970, 1, 1, 23, 0))}>
              11:00 PM
            </button>
            <br />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row Home_Main">
          <div className="col-md-12 BTN_Timer2 text-start bg-traslate border">
            <h1>Wake me up at 4:01 AM</h1>
            <div className="Row_Bottom"></div>
            <p>
              Set the alarm for 4:01 AM. Set my alarm for 4:01 AM. This free
              alarm clock will wake you up in time.
            </p>
            <p>
              Set the hour and minute for the online alarm clock. The alarm
              message will appear, and the preselected sound will be played at
              the set time.
            </p>
            <p>
              When setting the alarm, you can click the "Test" button to preview
              the alert and check the sound volume.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Set_4;
