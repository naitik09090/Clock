import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import FavoriteClocks from "./FavoriteClocks";

const Clock = () => {
  const [is24Hour, setIs24Hour] = useState(false);
  const [favorites] = useState({});
  const [showDate] = useState(true);
  const [time1, setTime] = useState(new Date());
  const [digitalFont] = useState(true);
  const [clockType, setClockType] = useState("watch");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format functions
  const formatTime = (date) =>
    date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24Hour,
    });

  const formatDate = (date) => date.toLocaleDateString();

  const getTime = (tz) =>
    new Date().toLocaleTimeString([], {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24Hour,
    });

  const getDate = (tz) =>
    new Date().toLocaleDateString([], { timeZone: tz });

  // Calculate clock hand angles
  const hourDeg1 = (time1.getHours() % 12) * 30 + time1.getMinutes() * 0.5;
  const minuteDeg1 = time1.getMinutes() * 6;
  const secondDeg1 = time1.getSeconds() * 6;

  return (
    <>
      <div className="container">
        <div className="row flex-column justify-content-center align-items-center">
          <div className="col-md-12 text-center mb-1">
            {clockType === "watch" ? (
              <div className="clock">
                <div className="dot center"></div>
                <div
                  className="hand hour"
                  style={{ transform: `rotate(${hourDeg1}deg)` }}
                ></div>
                <div
                  className="hand minute"
                  style={{ transform: `rotate(${minuteDeg1}deg)` }}
                ></div>
                <div
                  className="hand second"
                  style={{ transform: `rotate(${secondDeg1}deg)` }}
                ></div>

                {[...Array(12)].map((_, i) => {
                  const number = i === 0 ? 12 : i;
                  return (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        transform: `rotate(${i * 30}deg) translateY(-125px) rotate(-${i * 30}deg)`,
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                        left: "135px",
                        top: "125px",
                      }}
                    >
                      {number}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h1
                  style={{ fontSize: "60px" }}
                  className={digitalFont ? "digital-font-active" : ""}
                >
                  {formatTime(time1)}
                </h1>
              </div>
            )}

            {showDate && (
              <p
                style={{
                  fontSize: "19px",
                  letterSpacing: "2px",
                  fontWeight: "500",
                }}
              >
                {formatDate(time1)}
              </p>
            )}

            <div className="mb-3">
              <Button
                variant="dark"
                className={`mx-2 ${clockType === "watch" ? "active" : ""}`}
                onClick={() => setClockType("watch")}
              >
                Watch
              </Button>
              <Button
                variant="dark"
                className={`mx-2 ${clockType === "digital" ? "active" : ""}`}
                onClick={() => setClockType("digital")}
              >
                Digital
              </Button>
            </div>

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

      <div className="container py-4">
        <div className="row CArd_4 justify-content-center text-center">
          {[
            { name: "New York", tz: "America/New_York" },
            { name: "London, UK", tz: "Europe/London" },
            { name: "Tokyo, Japan", tz: "Asia/Tokyo" },
            { name: "Sydney, Australia", tz: "Australia/Sydney" },
            { name: "Berlin, Germany", tz: "Europe/Berlin" },
            { name: "Dubai, UAE", tz: "Asia/Dubai" },
            { name: "Los Angeles, CA", tz: "America/Los_Angeles" },
            { name: "New Delhi, India", tz: "Asia/Kolkata" },
          ].map((city) => (
            <div key={city.tz} className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h6>{city.name}</h6>
                  <h5>{getTime(city.tz)}</h5>
                  <p className="text-muted">{getDate(city.tz)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <FavoriteClocks favorites={favorites} />
      </div>
    </>
  );
};

export default Clock;
