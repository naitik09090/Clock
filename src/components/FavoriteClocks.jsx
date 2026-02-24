import { useEffect, useState } from "react";
import { cities } from "./WorldClocks.jsx";
import { FaStar } from "react-icons/fa";
import "../css/Clock.css";

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
  const hour = parseInt(parts.find((e) => e.type === "hour")?.value || "0", 10);
  const minute = parseInt(parts.find((e) => e.type === "minute")?.value || "0", 10);
  const second = parseInt(parts.find((e) => e.type === "second")?.value || "0", 10);
  const dayPeriod = parts.find((e) => e.type === "dayPeriod")?.value || "";

  const secondDeg = (second / 60) * 360;
  const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;
  const hourDeg = ((hour % 12) / 12) * 360 + (minute / 60) * 30;

  return { h: hour, m: minute, s: second, dayPeriod, hourDeg, minuteDeg, secondDeg };
};

const getDateString = (timezone) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

const FavoriteClocksView = () => {
  const [cityTimes, setCityTimes] = useState({});
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const update = () => {
      const updatedTimes = {};
      cities.forEach((city) => {
        try {
          updatedTimes[city.id] = getCityTime(city.timezone);
        } catch (error) {
          console.error(`Error for ${city.id}:`, error);
        }
      });
      setCityTimes(updatedTimes);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const favoriteCities = cities.filter((c) => favorites[c.id]);

  return (
    <div className="container py-5">
      {favoriteCities.length > 0 ? (
        <div className="mt-4">
          <h3 className="mb-5 fw-bold text-center" style={{ letterSpacing: "1px" }}>Your Favorite Clocks</h3>
          <div className="row g-4 justify-content-center">
            {favoriteCities.map((city) => (
              <div
                key={city.id}
                className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4"
              >
                <div className="card h-100 border-0 shadow-lg p-4 text-center bg-translate border align-items-center clock-card-hover" style={{
                  backdropFilter: "blur(5px)",
                  borderRadius: "20px",
                  transition: "all 0.3s ease"
                }}>
                  <div className="position-relative mb-4" style={{ width: "fit-content" }}>
                    {/* Star Icon */}
                    <FaStar
                      onClick={() => toggleFavorite(city.id)}
                      style={{
                        position: "absolute",
                        top: "-5px",
                        right: "-15px",
                        fontSize: "1.6rem",
                        cursor: "pointer",
                        color: favorites[city.id] ? "gold" : "gray",
                        transition: "all 0.3s ease",
                        zIndex: 20
                      }}
                    />

                    {/* Clock Face - Responsive Size */}
                    <div
                      className="clock-face shadow-lg d-flex justify-content-center align-items-center"
                      style={{
                        background: "#111",
                        borderRadius: "50%",
                        width: "160px",
                        height: "160px",
                        position: "relative",
                        border: "5px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05)"
                      }}
                    >
                      {/* Center Dot */}
                      <div style={{
                        width: "8px", height: "8px", background: "#fff", borderRadius: "50%", zIndex: 10,
                        boxShadow: "0 0 10px rgba(255,255,255,0.5)"
                      }} />

                      {/* Hands */}
                      <div style={{
                        position: "absolute", width: "4px", height: "40px", background: "#fff", bottom: "50%",
                        transformOrigin: "bottom center", borderRadius: "4px",
                        transform: `rotate(${cityTimes[city.id]?.hourDeg || 0}deg)`,
                        zIndex: 4
                      }} />
                      <div style={{
                        position: "absolute", width: "3px", height: "55px", background: "#ccc", bottom: "50%",
                        transformOrigin: "bottom center", borderRadius: "4px",
                        transform: `rotate(${cityTimes[city.id]?.minuteDeg || 0}deg)`,
                        zIndex: 5
                      }} />
                      <div style={{
                        position: "absolute", width: "2px", height: "65px", background: "#ff3b3b", bottom: "50%",
                        transformOrigin: "bottom center", borderRadius: "2px",
                        transform: `rotate(${cityTimes[city.id]?.secondDeg || 0}deg)`,
                        zIndex: 6,
                        boxShadow: "0 0 5px rgba(255, 59, 59, 0.3)"
                      }} />

                      {/* All 12 Numbers */}
                      {[...Array(12)].map((_, i) => {
                        const num = i + 1;
                        return (
                          <div key={num} style={{
                            position: "absolute",
                            transform: `rotate(${num * 30}deg) translateY(-65px) rotate(${-num * 30}deg)`,
                            color: "rgba(255,255,255,0.9)",
                            fontWeight: "bold",
                            fontSize: "0.9rem",
                            fontFamily: "'Inter', sans-serif"
                          }}>{num}</div>
                        );
                      })}
                    </div>
                  </div>

                  {/* City Info */}
                  <div className="city-info">
                    <h5 className="fw-bold mb-1" style={{ letterSpacing: "0.5px" }}>{city.name}</h5>
                    <h6 className="mb-1 fw-bold" style={{ letterSpacing: "1px", fontFamily: "monospace", fontSize: "1.1rem" }}>
                      {cityTimes[city.id]
                        ? `${String(cityTimes[city.id].h).padStart(2, '0')}:${String(cityTimes[city.id].m).padStart(2, '0')}:${String(cityTimes[city.id].s).padStart(2, '0')} ${cityTimes[city.id].dayPeriod}`
                        : "--:--:--"}
                    </h6>
                    <small className="text-muted d-block mt-1">{getDateString(city.timezone)}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-5">
          <p className="text-muted fs-5">No favorite clocks selected. Go to World Clocks to add some!</p>
        </div>
      )}
    </div>
  );
};

export default FavoriteClocksView;
