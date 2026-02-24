import { useEffect, useState } from "react";
import moment from "moment-timezone";
import { Button } from "react-bootstrap";
import FavoriteClocks from "./FavoriteClocks";

const Clock = () => {
  const [now, setNow] = useState(moment()),
    [zone, setZone] = useState("delhi/india"),
    [is24Hour, setIs24Hour] = useState(false),
    [favorites, setFavorites] = useState({}),
    [showDate, setShowDate] = useState(true),
    [time1, setTime] = useState(new Date()),
    [digitalFont, setDigitalFont] = useState(true),
    [clockType, setClockType] = useState("watch");


  // const handleFavoriteChange = (e) => {
  //   let t = {};
  //   e.forEach((e) => {
  //     t[e] = !0;
  //   }),
  //     setFavorites(t);
  // };

  // useEffect(() => {
  //   let e = setInterval(() => {
  //     setNow(moment());
  //   }, 1e3);
  //   return () => clearInterval(e);
  // }, []);

  // const fetchTimezones = async () => {
  //   try {
  //     let e = Intl.DateTimeFormat().resolvedOptions().timeZone,
  //       t = await fetch(
  //         `https://timeapi.io/api/time/current/zone?timeZone=${encodeURIComponent(
  //           e
  //         )}`
  //       ),
  //       o = await t.json(),
  //       [i, s, n] = o.time.split(":").map(Number),
  //       r = new Date();
  //     r.setHours(i, s, n), setTime(new Date(r));
  //   } catch (m) {
  //     console.error("Error fetching time:", m);
  //   }
  // };

  // useEffect(() => {
  //   fetchTimezones();
  //   let e = setInterval(() => {
  //     setTime(new Date());
  //   }, 1e3);
  //   return () => clearInterval(e);
  // }, []);
  // const time = moment(now).tz(zone),
  //   seconds = time.seconds(),
  //   minutes = time.minutes();
  // console.log(setZone);
  // console.log(setShowDate);
  // console.log(setDigitalFont);
  // console.log(setFavorites);


  // useEffect(() => {
  //   let e = setInterval(() => setTime(new Date()), 1e3);
  //   return () => clearInterval(e);
  // }, []);

  // const hours1 = time1.getHours() % (is24Hour ? 24 : 12),
  //   hourDeg1 = (hours1 + minutes / 60) * 30,
  //   minuteDeg1 = (minutes + seconds / 60) * 6,
  //   secondDeg1 = 6 * seconds;



  // const getTime = (timezone) => {
  //   const date = new Date().toLocaleString("en-US", { timeZone: timezone });
  //   return new Date(date).toLocaleTimeString([], {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //     hour12: !is24Hour,
  //   });
  // };

  // const getDate = (timezone) => {
  //   const date = new Date().toLocaleString("en-US", { timeZone: timezone });
  //   return new Date(date).toLocaleDateString();
  // };

  // const formatTime = (time) => {
  //   return time.toLocaleTimeString([], {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //     hour12: !is24Hour,
  //   });
  // };

  // const formatDate = (time) => {
  //   return time.toLocaleDateString();
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime1(new Date());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

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

          {/* New York */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>New York</h6>
                <h5>{getTime('America/New_York')}</h5>
                <p className="text-muted">{getDate('America/New_York')}</p>
              </div>
            </div>
          </div>

          {/* London */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>London, UK</h6>
                <h5>{getTime('Europe/London')}</h5>
                <p className="text-muted">{getDate('Europe/London')}</p>
              </div>
            </div>
          </div>

          {/* Tokyo */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>Tokyo, Japan</h6>
                <h5>{getTime('Asia/Tokyo')}</h5>
                <p className="text-muted">{getDate('Asia/Tokyo')}</p>
              </div>
            </div>
          </div>

          {/* Sydney */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>Sydney, Australia</h6>
                <h5>{getTime('Australia/Sydney')}</h5>
                <p className="text-muted">{getDate('Australia/Sydney')}</p>
              </div>
            </div>
          </div>

          {/* Add more cities manually below the same way */}

          {/* Berlin */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>Berlin, Germany</h6>
                <h5>{getTime('Europe/Berlin')}</h5>
                <p className="text-muted">{getDate('Europe/Berlin')}</p>
              </div>
            </div>
          </div>

          {/* Dubai */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>Dubai, UAE</h6>
                <h5>{getTime('Asia/Dubai')}</h5>
                <p className="text-muted">{getDate('Asia/Dubai')}</p>
              </div>
            </div>
          </div>

          {/* Los Angeles */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>Los Angeles, CA</h6>
                <h5>{getTime('America/Los_Angeles')}</h5>
                <p className="text-muted">{getDate('America/Los_Angeles')}</p>
              </div>
            </div>
          </div>

          {/* New Delhi */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>New Delhi, India</h6>
                <h5>{getTime('Asia/Kolkata')}</h5>
                <p className="text-muted">{getDate('Asia/Kolkata')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="container">
        <FavoriteClocks favorites={favorites} />
      </div>
    </>
  );
};

export default Clock;
