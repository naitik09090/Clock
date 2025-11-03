import Home from "./Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Disable text selection for elements
    // with class "no-select"
    const noSelectElements = document.querySelectorAll(".no-select");
    noSelectElements.forEach((element) => {
      element.style.webkitUserSelect = "none";
      element.style.mozUserSelect = "none";
      element.style.msUserSelect = "none";
      element.style.userSelect = "none";
    });
  }, []);
  return (
    <div className="no-select">
      <Home />
    </div>
  )
};

export default App;
