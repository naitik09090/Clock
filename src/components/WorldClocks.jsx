import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "../css/Clock.css";

export const cities = [
  { id: 1, name: "New York", timezone: "America/New_York" },
  { id: 2, name: "London, UK", timezone: "Europe/London" },
  { id: 3, name: "Tokyo, Japan", timezone: "Asia/Tokyo" },
  { id: 4, name: "Sydney, Australia", timezone: "Australia/Sydney" },
  { id: 5, name: "Berlin, Germany", timezone: "Europe/Berlin" },
  { id: 6, name: "Dubai, UAE", timezone: "Asia/Dubai" },
  { id: 7, name: "Los Angeles, CA", timezone: "America/Los_Angeles" },
  { id: 8, name: "New Delhi, India", timezone: "Asia/Kolkata" },
  { id: 9, name: "Paris, France", timezone: "Europe/Paris" },
  { id: 10, name: "Singapore", timezone: "Asia/Singapore" },
  { id: 11, name: "Seoul, S. Korea", timezone: "Asia/Seoul" },
  { id: 12, name: "Moscow, Russia", timezone: "Europe/Moscow" },
  { id: 13, name: "Rome, Italy", timezone: "Europe/Rome" },
  { id: 14, name: "Cairo, Egypt", timezone: "Africa/Cairo" },
  { id: 15, name: "Johannesburg, SA", timezone: "Africa/Johannesburg" },
  { id: 16, name: "Sao Paulo, Brazil", timezone: "America/Sao_Paulo" },
  { id: 17, name: "Mexico City", timezone: "America/Mexico_City" },
  { id: 18, name: "Mumbai, India", timezone: "Asia/Kolkata" },
  { id: 19, name: "Hong Kong", timezone: "Asia/Hong_Kong" },
  { id: 20, name: "Bangkok, Thailand", timezone: "Asia/Bangkok" },
  { id: 21, name: "Istanbul, Turkey", timezone: "Europe/Istanbul" },
  { id: 22, name: "Amsterdam, NL", timezone: "Europe/Amsterdam" },
  { id: 23, name: "Zurich, Swiss", timezone: "Europe/Zurich" },
  { id: 24, name: "Madrid, Spain", timezone: "Europe/Madrid" },
  { id: 25, name: "Toronto, Canada", timezone: "America/Toronto" },
  { id: 26, name: "Vancouver, Canada", timezone: "America/Vancouver" },
  { id: 27, name: "Auckland, NZ", timezone: "Pacific/Auckland" },
  { id: 28, name: "Nairobi, Kenya", timezone: "Africa/Nairobi" },
];

const getCityTime = (timezone) => {
  const n = new Date();
  const t = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const parts = t.formatToParts(n);
  const h = parseInt(parts.find((e) => e.type === "hour")?.value || "0", 10);
  const m = parseInt(parts.find((e) => e.type === "minute")?.value || "0", 10);
  const s = parseInt(parts.find((e) => e.type === "second")?.value || "0", 10);
  const dayPeriod = parts.find((e) => e.type === "dayPeriod")?.value || "";

  const sDeg = (s / 60) * 360;
  const mDeg = (m / 60) * 360 + (s / 60) * 6;
  const hDeg = ((h % 12) / 12) * 360 + (m / 60) * 30;

  return { h, m, s, dayPeriod, hDeg, mDeg, sDeg };
};

const getDateString = (timezone) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

const WorldClocks = ({ onFavoriteChange = () => { } }) => {
  const [favorites, setFavorites] = useState({});
  const [cityTimes, setCityTimes] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(saved);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem("favorites", JSON.stringify(updated));
      const favIds = Object.keys(updated).filter(k => updated[k]).map(Number);
      onFavoriteChange(favIds);
      return updated;
    });
  };

  useEffect(() => {
    const update = () => {
      const times = {};
      cities.forEach((c) => {
        times[c.id] = getCityTime(c.timezone);
      });
      setCityTimes(times);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-4">
      <div className="row g-4 justify-content-center">
        {cities.map((city) => (
          <div
            key={city.id}
            className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
          >
            <div className="card h-100 border-0 shadow-sm clock-card-hover p-4 text-center bg-translate border">
              <div className="position-relative mx-auto mb-3" style={{ width: "fit-content" }}>
                {/* Star Icon */}
                <FaStar
                  onClick={() => toggleFavorite(city.id)}
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-15px",
                    fontSize: "1.4rem",
                    cursor: "pointer",
                    color: favorites[city.id] ? "#f5c242" : "#ccc",
                    transition: "all 0.3s ease",
                    zIndex: 20
                  }}
                />

                {/* Clock Face */}
                <div
                  className="clock-face shadow-lg d-flex justify-content-center align-items-center"
                  style={{
                    background: "#111",
                    borderRadius: "50%",
                    width: "160px",
                    height: "160px",
                    position: "relative",
                    border: "4px solid rgba(255,255,255,0.05)"
                  }}
                >
                  <div style={{
                    width: "8px", height: "8px", background: "#fff", borderRadius: "50%", zIndex: 10
                  }} />

                  <div style={{
                    position: "absolute", width: "4px", height: "45px", background: "#fff", bottom: "50%",
                    transformOrigin: "bottom center", borderRadius: "2px",
                    transform: `rotate(${cityTimes[city.id]?.hDeg || 0}deg)`,
                    zIndex: 4
                  }} />
                  <div style={{
                    position: "absolute", width: "3px", height: "60px", background: "#aaa", bottom: "50%",
                    transformOrigin: "bottom center", borderRadius: "2px",
                    transform: `rotate(${cityTimes[city.id]?.mDeg || 0}deg)`,
                    zIndex: 5
                  }} />
                  <div style={{
                    position: "absolute", width: "2px", height: "65px", background: "#fd0202", bottom: "50%",
                    transformOrigin: "bottom center", borderRadius: "2px",
                    transform: `rotate(${cityTimes[city.id]?.sDeg || 0}deg)`,
                    zIndex: 6
                  }} />

                  {/* All 12 Numbers */}
                  {[...Array(12)].map((_, i) => {
                    const num = i + 1;
                    return (
                      <div key={num} style={{
                        position: "absolute",
                        transform: `rotate(${num * 30}deg) translateY(-60px) rotate(${-num * 30}deg)`,
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "0.85rem",
                        fontFamily: "sans-serif"
                      }}>{num}</div>
                    );
                  })}
                </div>
              </div>

              <div className="city-info">
                <h5 className="fw-bold mb-1">{city.name}</h5>
                <h6 className="mb-1" style={{ letterSpacing: "1px", fontFamily: "monospace" }}>
                  {cityTimes[city.id]
                    ? `${String(cityTimes[city.id].h).padStart(2, '0')}:${String(cityTimes[city.id].m).padStart(2, '0')}:${String(cityTimes[city.id].s).padStart(2, '0')} ${cityTimes[city.id].dayPeriod}`
                    : "--:--:--"}
                </h6>
                <small className="text-muted d-block">{getDateString(city.timezone)}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClocks;
