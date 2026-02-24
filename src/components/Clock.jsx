import { useEffect, useState } from "react";
import "../css/Clock.css";
import "../css/AlarmClock.css";
import Button from "react-bootstrap/Button";
import FavoriteClocks from "./FavoriteClocks";
import { cities } from "./WorldClocks";

const Clock = () => {
  const [is24Hour, setIs24Hour] = useState(false);
  const [favorites] = useState({});
  const [showDate] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [digitalFont] = useState(true);
  const [clockType, setClockType] = useState("watch");
  const [selectedCity, setSelectedCity] = useState(null); // State to track selected city

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format functions helper
  const formatDateOptions = (tz) => ({
    timeZone: tz || undefined,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !is24Hour,
  });

  const getFormattedTime = (date, tz) => {
    return date.toLocaleTimeString([], formatDateOptions(tz));
  };

  const getFormattedDate = (date, tz) => {
    return date.toLocaleDateString([], {
      timeZone: tz || undefined,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Helper to get hand angles for a specific timezone
  const getHandAngles = (date, tz) => {
    const timeString = date.toLocaleTimeString('en-US', {
      timeZone: tz || undefined,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const [h, m, s] = timeString.split(':').map(Number);

    return {
      hourDeg: (h % 12) * 30 + m * 0.5,
      minuteDeg: m * 6,
      secondDeg: s * 6
    };
  };

  const { hourDeg, minuteDeg, secondDeg } = getHandAngles(currentTime, selectedCity?.timezone);

  return (
    <>
      <div className="container">
        <div className="row flex-column justify-content-center align-items-center">
          <div className="col-md-12 text-center mb-1">
            {/* Display Selected City Name */}
            {clockType === "watch" ? (
              <div className="clock mb-4">
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
                  style={{ transform: `rotate(${secondDeg}deg)`, backgroundColor: "red" }}
                ></div>

                {[...Array(12)].map((_, i) => {
                  const num = i + 1;
                  return (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        transform: `rotate(${num * 30}deg) translateY(-125px) rotate(-${num * 30}deg)`,
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                        left: "135px",
                        top: "125px",
                      }}
                    >
                      {num}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h1
                  style={{ fontSize: "70px" }}
                  className={digitalFont ? "digital-font-active" : ""}
                >
                  {getFormattedTime(currentTime, selectedCity?.timezone)}
                </h1>
              </div>
            )}
            <h2 className="fw-bold" style={{ color: selectedCity ? "" : "inherit" }}>
              {selectedCity ? selectedCity.name : ""}
              {/* {selectedCity && (
                <button
                  className="btn btn-sm btn-outline-secondary ms-3"
                  onClick={() => setSelectedCity(null)}
                  style={{ borderRadius: "20px", fontSize: "12px" }}
                >
                  Reset to Local
                </button>
              )} */}
            </h2>

            {showDate && (
              <p
                style={{
                  fontSize: "19px",
                  letterSpacing: "2px",
                  fontWeight: "500",
                }}
              >
                {getFormattedDate(currentTime, selectedCity?.timezone)}
              </p>
            )}

            <div className="mb-4">
              <Button
                variant={clockType === "watch" ? "primary" : "dark"}
                className="mx-2 px-4 shadow-sm"
                onClick={() => setClockType("watch")}
              >
                Analog
              </Button>
              <Button
                variant={clockType === "digital" ? "primary" : "dark"}
                className="mx-2 px-4 shadow-sm"
                onClick={() => setClockType("digital")}
              >
                Digital
              </Button>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
              <span
                onClick={() => setIs24Hour(false)}
                className={`clock-mode px-3 py-1 rounded-pill ${!is24Hour ? "" : ""}`}
                style={{ cursor: "pointer", transition: "all 0.3s" }}
              >
                12H
              </span>
              <span
                onClick={() => setIs24Hour(true)}
                className={`clock-mode px-3 py-1 rounded-pill ${is24Hour ? "" : ""}`}
                style={{ cursor: "pointer", transition: "all 0.3s" }}
              >
                24H
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <h4 className="text-center mb-4 fw-bold">Select a City to sync with Main Clock</h4>
        <div className="row CArd_4 justify-content-center text-center">
          {cities.map((city) => (
            <div
              key={city.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              onClick={() => {
                setSelectedCity(city);
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll up to see the main clock
              }}
              style={{ cursor: "pointer" }}
            >
              <div className={`card shadow-sm h-100 border-0 clock-card-hover ${selectedCity?.id === city.id ? "border border-primary border-3" : ""}`}
                style={{ transition: "transform 0.2s" }}>
                <div className="card-body d-flex flex-column justify-content-center py-4">
                  <h6 className="fw-bold">{city.name}</h6>
                  <h5 className="mb-1" style={{ fontFamily: "monospace" }}>{getFormattedTime(currentTime, city.timezone)}</h5>
                  <p className="text-muted mb-0 small">{getFormattedDate(currentTime, city.timezone).split(',').slice(1).join(',')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <FavoriteClocks favorites={favorites} />
      </div>
    </>
  );
};

export default Clock;
