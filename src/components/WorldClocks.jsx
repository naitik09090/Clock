import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export const cities = [
  {
    id: 1,
    name: "New York",
    timezone: "America/New_York",
    hourDeg: 30,
    minuteDeg: 120,
    secondDeg: 270,
  },
  {
    id: 2,
    name: "London, UK",
    timezone: "Europe/London",
    hourDeg: 60,
    minuteDeg: 180,
    secondDeg: 300,
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    timezone: "Asia/Tokyo",
    hourDeg: 90,
    minuteDeg: 200,
    secondDeg: 20,
  },
  {
    id: 4,
    name: "Sydney, Australia",
    timezone: "Australia/Sydney",
    hourDeg: 150,
    minuteDeg: 250,
    secondDeg: 80,
  },
  {
    id: 5,
    name: "Berlin, Germany",
    timezone: "Europe/Berlin",
    hourDeg: 180,
    minuteDeg: 300,
    secondDeg: 120,
  },
  {
    id: 6,
    name: "Dubai, UAE",
    timezone: "Asia/Dubai",
    hourDeg: 210,
    minuteDeg: 100,
    secondDeg: 200,
  },
  {
    id: 7,
    name: "Los Angeles, CA",
    timezone: "America/Los_Angeles",
    hourDeg: 240,
    minuteDeg: 220,
    secondDeg: 280,
  },
  {
    id: 8,
    name: "New Delhi, India",
    timezone: "Asia/Kolkata",
    hourDeg: 300,
    minuteDeg: 330,
    secondDeg: 150,
  },
];

// ✅ Helper: compute time + angles for a timezone
const getCityTime = (e) => {
  let n = new Date(),
    t = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: !0,
    }),
    $ = t.formatToParts(n),
    i = parseInt($.find((e) => "hour" === e.type)?.value || "0", 10),
    u = parseInt($.find((e) => "minute" === e.type)?.value || "0", 10),
    r = parseInt($.find((e) => "second" === e.type)?.value || "0", 10),
    o = $.find((e) => "dayPeriod" === e.type)?.value || "",
    m = (r / 60) * 360,
    a = (u / 60) * 360 + (r / 60) * 6,
    d = ((i % 12) / 12) * 360 + (u / 60) * 30;
  return {
    h: i,
    m: u,
    s: r,
    dayPeriod: o,
    hourDeg: d,
    minuteDeg: a,
    secondDeg: m,
  };
};

const getDate = (e) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: e,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

const WorldClocks = ({ onFavoriteChange = () => {} }) => {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [cityTimes, setCityTimes] = useState({});

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    let e = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(e);
  }, []);

  const toggleFavorite = (t) => {
    setFavorites((e) => {
      let r = { ...e, [t]: !e[t] };
      localStorage.setItem("favorites", JSON.stringify(r));
      let i = Object.keys(r)
        .filter((t) => r[t])
        .map((t) => parseInt(t));
      return onFavoriteChange(i), r;
    });
  };

  // Update city times every second
  useEffect(() => {
    let e = () => {
      let e = {};
      cities.forEach((t) => {
        e[t.id] = getCityTime(t.timezone);
      }),
        setCityTimes(e);
    };
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t);
  }, []);

  const Cities = showFavoritesOnly
    ? cities.filter((c) => favorites[c.id])
    : cities;

  return (
    <div className="container-fluid">
      <div className="row g-3 text-center">
        {Cities.map((city) => (
          <div
            key={city.id}
            className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center shadow p-3"
          >
            {/* Clock UI */}
            <div
              className="position-relative d-flex justify-content-center align-items-center"
              style={{
                background: "#111",
                borderRadius: "50%",
                width: "90%", // 🔹 responsive width
                maxWidth: "220px", // 🔹 limit for big screen
                aspectRatio: "1 / 1", // 🔹 always perfect circle
                position: "relative",
              }}
            >
              {/* Center Dot */}
              <span
                style={{
                  position: "absolute",
                  width: "4%",
                  height: "4%",
                  background: "white",
                  borderRadius: "50%",
                  zIndex: 10,
                }}
              />

              {/* Hour Hand */}
              <span
                style={{
                  position: "absolute",
                  width: "7px",
                  height: "25%",
                  background: "white",
                  top: "25%",
                  transformOrigin: "bottom center",
                  transform: `rotate(${cityTimes[city.id]?.hourDeg || 0}deg)`,
                  borderRadius: "10px",
                }}
              />
              {/* Minute Hand */}
              <span
                style={{
                  position: "absolute",
                  width: "5px",
                  height: "35%",
                  background: "lightgray",
                  top: "15%",
                  transformOrigin: "bottom center",
                  transform: `rotate(${cityTimes[city.id]?.minuteDeg || 0}deg)`,
                  borderRadius: "10px",
                }}
              />
              {/* Second Hand */}
              <span
                style={{
                  position: "absolute",
                  width: "3px",
                  height: "40%",
                  background: "red",
                  top: "10%",
                  transformOrigin: "bottom center",
                  transform: `rotate(${cityTimes[city.id]?.secondDeg || 0}deg)`,
                  borderRadius: "10px",
                }}
              />

              {/* Clock Numbers */}
              {[...Array(12)].map((_, i) => {
                const number = i === 0 ? 12 : i;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      transform: `rotate(${
                        i * 30
                      }deg) translateY(calc(-50% - 220%)) rotate(-${
                        i * 30
                      }deg)`,
                      fontSize: "clamp(20px, 9.5vw, 22px)", // 🔹 responsive font-size
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {number}
                  </div>
                );
              })}

              {/* Star Icon */}
              <FaStar
                onClick={() => toggleFavorite(city.id)}
                style={{
                  position: "absolute",
                  top: "8px", // Adjust position for smaller screens
                  right: "-40px",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: favorites[city.id] ? "gold" : "gray",
                  transition: "color 0.3s ease",
                }}
              />
            </div>

            {/* City Info */}
            <div className="text-center mt-3 text-transparent">
              <h5>{city.name}</h5>
              <h6>
                {cityTimes[city.id]
                  ? `${String(cityTimes[city.id].h).padStart(2, "0")}:${String(
                      cityTimes[city.id].m
                    ).padStart(2, "0")}:${String(cityTimes[city.id].s).padStart(
                      2,
                      "0"
                    )} ${cityTimes[city.id].dayPeriod}`
                  : "--:--:--"}
              </h6>
              <span>{getDate(city.timezone)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClocks;
