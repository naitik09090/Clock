import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);
  const [clockType, setClockType] = useState("watch");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24Hour,
    });
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
  const hours = time.getHours() % (is24Hour ? 24 : 12);
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid" style={{ minHeight: "100vh" }}>
          <div className="row flex-column justify-content-center align-items-center vh-100">
            <div className="col-md-12 text-center mb-4">
              {clockType === "watch" ? (
                <div className="clock">
                  <div className="dot center"></div>
                  <div
                    className="hand hour"
                    style={{ transform: `rotate(${hourDeg}deg)` }}
                  ></div>
                  <div
                    className="hand minute"
                    style={{ transform: `rotate(${minuteDeg}deg)` }}
                  ></div>
                  <div
                    className="hand second"
                    style={{ transform: `rotate(${secondDeg}deg)` }}
                  ></div>
                  {[...Array(12)].map((_, i) => (
                    <div
                      className="dot mb-4"
                      key={i}
                      style={{
                        transform: `rotate(${i * 30}deg) translateY(-130px)`,
                      }}
                    ></div>
                  ))}
                </div>
              ) : (
                <div>
                  <h1 style={{ fontSize: "60px" }}>{formatTime(time)}</h1>
                </div>
              )}
              <p
                className="mb-4"
                style={{
                  fontSize: "20px",
                  letterSpacing: "2px",
                }}
              >
                {formatDate(time)}
              </p>

              <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
                <Button
                  className={`btn-sm ${clockType === "watch"}`}
                  onClick={() => setClockType("watch")}
                >
                  watch
                </Button>
                <Button
                  className={`btn-sm ${clockType === "digital"}`}
                  onClick={() => setClockType("digital")}
                >
                  Digital
                </Button>
              </div>

              {/* 12H/24H Toggle */}
              <div className="d-flex justify-content-center align-items-center gap-2">
                <span
                  onClick={() => setIs24Hour(false)}
                  className={`clock-mode ${!is24Hour ? "active" : ""}`}
                >
                  12H
                </span>
                <span
                  onClick={() => setIs24Hour(true)}
                  className={`clock-mode ${is24Hour ? "active" : ""}`}
                >
                  24H
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="BTN_Timer col-md-6 bg-traslate border">
              <span className="time_Set">
                Set the alarm for the specified time
              </span>{" "}
              <br />
              <p className="Row_Bottom"></p>
              <Link to="/alaram_4" state={{ time: new Date(1970, 1, 1, 4, 0) }}>
                <button>4:00 AM</button>
              </Link>
              <Link
                to="/alaram_4_30"
                state={{ time: new Date(1970, 1, 1, 4, 30) }}
              >
                <button>4:30 AM</button>
              </Link>
              <br />
              <Link to="/alaram_5" state={{ time: new Date(1970, 1, 1, 5, 0) }}>
                <button>5:00 AM</button>
              </Link>
              <Link
                to="/alaram_5_15"
                state={{ time: new Date(1970, 1, 1, 5, 15) }}
              >
                <button>5:15 AM</button>
              </Link>
              <Link
                to="/alaram_5_30"
                state={{ time: new Date(1970, 1, 1, 5, 30) }}
              >
                <button>5:30 AM</button>
              </Link>
              <Link
                to="/alaram_5_45"
                state={{ time: new Date(1970, 1, 1, 5, 45) }}
              >
                <button>5:45 AM</button>
              </Link>
              <br />
              <Link to="/alaram_6" state={{ time: new Date(1970, 1, 1, 6, 0) }}>
                <button>6:00 AM</button>
              </Link>
              <Link
                to="/alaram_6_15"
                state={{ time: new Date(1970, 1, 1, 6, 15) }}
              >
                <button>6:15 AM</button>
              </Link>
              <Link
                to="/alaram_6_30"
                state={{ time: new Date(1970, 1, 1, 6, 30) }}
              >
                <button>6:30 AM</button>
              </Link>
              <Link
                to="/alaram_6_45"
                state={{ time: new Date(1970, 1, 1, 6, 45) }}
              >
                <button>6:45 AM</button>
              </Link>
              <br />
              <Link to="/alaram_7" state={{ time: new Date(1970, 1, 1, 7, 0) }}>
                <button>7:00 AM</button>
              </Link>
              <Link
                to="/alaram_7_15"
                state={{ time: new Date(1970, 1, 1, 7, 15) }}
              >
                <button>7:15 AM</button>
              </Link>
              <Link
                to="/alaram_7_30"
                state={{ time: new Date(1970, 1, 1, 7, 30) }}
              >
                <button>7:30 AM</button>
              </Link>
              <Link
                to="/alaram_7_45"
                state={{ time: new Date(1970, 1, 1, 7, 45) }}
              >
                <button>7:45 AM</button>
              </Link>
              <br />
              <Link to="/alaram_8" state={{ time: new Date(1970, 1, 1, 8, 0) }}>
                <button>8:00 AM</button>
              </Link>
              <Link
                to="/alaram_8_15"
                state={{ time: new Date(1970, 1, 1, 8, 15) }}
              >
                <button>8:15 AM</button>
              </Link>
              <Link
                to="/alaram_8_30"
                state={{ time: new Date(1970, 1, 1, 8, 30) }}
              >
                <button>8:30 AM</button>
              </Link>
              <Link
                to="/alaram_8_45"
                state={{ time: new Date(1970, 1, 1, 8, 45) }}
              >
                <button>8:45 AM</button>
              </Link>
              <br />
              <Link to="/alaram_9" state={{ time: new Date(1970, 1, 1, 9, 0) }}>
                <button>9:00 AM</button>
              </Link>
              <Link
                to="/alaram_10"
                state={{ time: new Date(1970, 1, 1, 10, 0) }}
              >
                <button>10:00 AM</button>
              </Link>
              <Link
                to="/alaram_11"
                state={{ time: new Date(1970, 1, 1, 11, 0) }}
              >
                <button>11:00 AM</button>
              </Link>
              <Link
                to="/alaram_12"
                state={{ time: new Date(1970, 1, 1, 12, 0) }}
              >
                <button>12:00 AM</button>
              </Link>
              <Link to="/alaram_1" state={{ time: new Date(1970, 1, 1, 1, 0) }}>
                <button>1:00 AM</button>
              </Link>
              <Link to="/alaram_2" state={{ time: new Date(1970, 1, 1, 2, 0) }}>
                <button>2:00 AM</button>
              </Link>
            </div>
            <div className="BTN_Timer_5 col-md-6 text-start bg-traslate border">
              <span className="time_Set">Recently used</span>
              <div className="Row_Bottom"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-5">
          <div className="row Home_Main">
            <div className="col-md-12 BTN_Timer2 text-start bg-traslate border">
              <h1>How to use the online alarm clock</h1>
              <div className="Row_Bottom"></div>
              <p>
                Set the hour and minute for the online alarm clock. The alarm
                message will appear, and the preselected sound will be played at
                the set time.
              </p>
              <p>
                When setting the alarm, you can click the "Test" button to
                preview the alert and check the sound volume.
              </p>
              <p>
                You can configure the alarm clock appearance (text color, type,
                and size), and these settings will be saved; they will be used
                when you open your web browser next time.
              </p>
              <p>
                The online alarm clock will not work if you close your browser
                or shut down your computer, but it can work without an internet
                connection.
              </p>
              <p>
                You can add links to online alarm clocks with different time
                settings to your browser's Favorites. Opening such a link will
                set the alarm clock to the predefined time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
