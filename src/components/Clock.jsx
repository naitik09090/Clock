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
    [digitalFont, setDigitalFont] = useState(true);


  // const handleFavoriteChange = (e) => {
  //   let t = {};
  //   e.forEach((e) => {
  //     t[e] = !0;
  //   }),
  //     setFavorites(t);
  // };

  useEffect(() => {
    let e = setInterval(() => {
      setNow(moment());
    }, 1e3);
    return () => clearInterval(e);
  }, []);

  const fetchTimezones = async () => {
    try {
      let e = Intl.DateTimeFormat().resolvedOptions().timeZone,
        t = await fetch(
          `https://timeapi.io/api/time/current/zone?timeZone=${encodeURIComponent(
            e
          )}`
        ),
        o = await t.json(),
        [i, s, n] = o.time.split(":").map(Number),
        r = new Date();
      r.setHours(i, s, n), setTime(new Date(r));
    } catch (m) {
      console.error("Error fetching time:", m);
    }
  };

  useEffect(() => {
    fetchTimezones();
    let e = setInterval(() => {
      setTime(new Date());
    }, 1e3);
    return () => clearInterval(e);
  }, []);
  const time = moment(now).tz(zone),
    seconds = time.seconds(),
    minutes = time.minutes(),
    [clockType, setClockType] = useState("watch");
  console.log(setZone);
  console.log(setShowDate);
  console.log(setDigitalFont);
  console.log(setFavorites);


  useEffect(() => {
    let e = setInterval(() => setTime(new Date()), 1e3);
    return () => clearInterval(e);
  }, []);
  const formatTime = (time) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    if (!is24Hour) {
      // 12-hour format
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")} ${ampm}`;
    }

    // 24-hour format
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  const formatDate = (e) =>
    e.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  const getTime = (zone) => moment(now).tz(zone).format('h:mm:ss A');
  const getDate = (zone) => moment(now).tz(zone).format('dddd, MMM D');

  const hours1 = time1.getHours() % (is24Hour ? 24 : 12),
        hourDeg1 = (hours1 + minutes / 60) * 30,
        minuteDeg1 = (minutes + seconds / 60) * 6,
        secondDeg1 = 6 * seconds;
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="row flex-column justify-content-center align-items-center">
          <div className="col-md-12 text-center mb-1">
            {clockType === "watch" ? (
              <div className="clock">
                <div className="dot center"></div>
                <div
                  className="hand hour"
                  style={{
                    transform: `rotate(${hourDeg1}deg)`,
                  }}
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
                        transform: `rotate(${i * 30
                          }deg) translateY(-125px) rotate(-${i * 30}deg)`,
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
                  className={digitalFont ? "digital-font-active" : ""} // 👈 Applies class when TRUE
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

            <div className="d-flex justify-content-center align-items-center gap-2">
              <Button
                className={`Btn_timer_1 btn-lg ${clockType === "watch"}`}
                onClick={() => setClockType("watch")}
              >
                watch
              </Button>
              <Button
                className={`Btn_timer_1 btn-lg ${clockType === "digital"}`}
                onClick={() => setClockType("digital")}
              >
                Digital
              </Button>
            </div>

            {/* 12H/24H Toggle */}
            <div className="d-flex justify-content-center align-items-center gap-2">
              <span
                onClick={() => setIs24Hour(false)} // Sets 12H mode
                className={`clock-mode ${!is24Hour ? "active" : ""}`}
              >
                12H
              </span>
              <span
                onClick={() => setIs24Hour(true)} // Sets 24H mode
                className={`clock-mode ${is24Hour ? "active" : ""}`}
              >
                24H
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-4">
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

      <div>
        <FavoriteClocks favorites={favorites} />
      </div>
      {/* <div className="container-fluid Home_Main2 bg-traslate py-4 mb-4">
        <div className="row ColcK_Data_3 p-4 border">
          <h5 className="mb-4">Most Popular Time Zones and Cities</h5>
          <Col md={3}>
            <p>New York</p>
            <p>Philadelphia, Pennsylvania</p>
            <p>Chicago, Illinois</p>
            <p>Houston, Texas</p>
            <p>San Antonio, Texas</p>
            <p>Dallas, Texas</p>
            <p>Denver, Colorado</p>
            <p>Los Angeles, California</p>
            <p>San Diego, California</p>
            <p>San Jose, California</p>
            <p>Phoenix, Arizona</p>
            <p>Anchorage, Alaska</p>
            <p>Adak, Alaska</p>
            <p>Honolulu, Hawaii</p>
            <p>Toronto, Canada</p>
            <p>Montreal, Canada</p>
          </Col>

          <Col md={3}>
            <p>Winnipeg, Canada</p>
            <p>Calgary, Canada</p>
            <p>Vancouver, Canada</p>
            <p>London, United Kingdom</p>
            <p>Dublin, Ireland</p>
            <p>Sydney, Australia</p>
            <p>Melbourne, Australia</p>
            <p>Brisbane, Australia</p>
            <p>Perth, Australia</p>
            <p>Adelaide, Australia</p>
            <p>Wellington, New Zealand</p>
            <p>Manila, Philippines</p>
            <p>Singapore, Singapore</p>
            <p>Tokyo, Japan</p>
            <p>Seoul, Korea</p>
            <p>Taipei, Taiwan</p>
          </Col>

          <Col md={3}>
            <p>Beijing, China</p>
            <p>Shanghai, China</p>
            <p>Urumqi, China</p>
            <p>Berlin, Germany</p>
            <p>Paris, France</p>
            <p>Copenhagen, Denmark</p>
            <p>Rome, Italy</p>
            <p>Madrid, Spain</p>
            <p>Ceuta, Africa, Spain</p>
            <p>Canary Islands, Spain</p>
            <p>Stockholm, Sweden</p>
            <p>Lisbon, Portugal</p>
            <p>Madeira, Portugal</p>
            <p>Azores, Portugal</p>
            <p>Helsinki, Finland</p>
            <p>Athens, Greece</p>
          </Col>

          <Col md={3}>
            <p>Istanbul, Turkey</p>
            <p>Warsaw, Poland</p>
            <p>Kiev, Ukraine</p>
            <p>Moscow, Russia</p>
            <p>Jerusalem, Israel</p>
            <p>New Delhi, India</p>
            <p>Kolkata, India</p>
            <p>Noronha, Brazil</p>
            <p>São Paulo, Brazil</p>
            <p>Rio de Janeiro, Brazil</p>
            <p>Manaus, Brazil</p>
            <p>Rio Branco, Brazil</p>
            <p>Mexico City, Mexico</p>
            <p>Santiago, Chile</p>
            <p>Buenos Aires, Argentina</p>
            <p>Dubai, United Arab Emirates</p>
          </Col>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row Home_Main">
          <div className="col-md-12 BTN_Timer2 text-start bg-translate border">
            <h1>How to use the online alarm clock</h1>
            <div className="Row_Bottom"></div>
            <p>
              Set the hour and minute for the online alarm clock. The alarm
              message will appear, and the preselected sound will be played at
              the set time.
            </p>
            <p>
              When setting the alarm, you can click the "Test" button to preview
              the alert and check the sound volume.
            </p>
            <p>
              You can configure the alarm clock appearance (text color, type,
              and size), and these settings will be saved; they will be used
              when you open your web browser next time.
            </p>
            <p>
              The online alarm clock will not work if you close your browser or
              shut down your computer, but it can work without an internet
              connection.
            </p>
            <p>
              You can add links to online alarm clocks with different time
              settings to your browser's Favorites. Opening such a link will set
              the alarm clock to the predefined time.
            </p>
          </div>
        </div>
      </div> */}
    </div >
  );
};

export default Clock;
