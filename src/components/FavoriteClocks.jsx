import { useEffect, useState } from "react";
import { cities } from "./WorldClocks";
import { FaStar } from "react-icons/fa";

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

const FavoriteClocksView = () => {
  const [cityTimes, setCityTimes] = useState({});
  const [favorites, setFavorites] = useState({});
  // Star click handle karva mate
  const toggleFavorite = (id) => {
    const updated = { ...favorites, [id]: !favorites[id] };
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  // 🔹 Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);

  // 🔹 Update city times every second
  useEffect(() => {
    const updateCityTimes = async () => {
      const updatedTimes = {};

      await Promise.all(
        cities.map(async (city) => {
          try {
            const time = await getCityTime(city.timezone);
            updatedTimes[city.id] = time;
          } catch (error) {
            console.error(`Error fetching time for ${city.id}:`, error);
            updatedTimes[city.id] = "N/A"; // fallback
          }
        })
      );

      setCityTimes(updatedTimes);
    };

    updateCityTimes();
    const interval = setInterval(updateCityTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Filter only favorite cities
  const favoriteCities = cities.filter((c) => favorites[c.id]);

  return (
    <div>
      {favoriteCities.length > 0 ? (
        <div className="mt-4">
          <h3>Your Favorite Clocks:</h3>
          <div className="row g-3 text-center">
            {favoriteCities.map((city) => (
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
                      transform: `rotate(${
                        cityTimes[city.id]?.hourDeg || 0
                      }deg)`,
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
                      transform: `rotate(${
                        cityTimes[city.id]?.minuteDeg || 0
                      }deg)`,
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
                      transform: `rotate(${
                        cityTimes[city.id]?.secondDeg || 0
                      }deg)`,
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
                  <h4 className="fw-bold mb-1">{city.name}</h4>
                  <h5 className="mb-0">
                    {cityTimes[city.id]
                      ? `${String(cityTimes[city.id].h).padStart(
                          2,
                          "0"
                        )}:${String(cityTimes[city.id].m).padStart(
                          2,
                          "0"
                        )}:${String(cityTimes[city.id].s).padStart(2, "0")} ${
                          cityTimes[city.id].dayPeriod
                        }`
                      : "--:--:--"}
                  </h5>

                  <p className="mb-0">{getDate(city.timezone)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No favorite clocks selected.</p>
      )}
    </div>
  );
};

export default FavoriteClocksView;
