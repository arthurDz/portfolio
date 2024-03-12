import { useState, useEffect } from "react";
import { logCustomEvent } from "../config/LogGaEvents";

const DayNightMood = () => {
  const [night, setNight] = useState(true);
  
  useEffect(() => {
    const body = document.querySelector("body");
    if (night) {
      body.classList.remove("theme-light");
    } else {
      body.classList.add("theme-light");
    }
  }, [night]);

  const changeMood = () => {
    setNight((prevNight) => !prevNight);
    logCustomEvent("toggle-day-night-mode");
  };

  // Set the default theme based on the initial state 'night'
  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   if (!night) {
  //     body.classList.add("theme-light");
  //   }
  // }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <label className="color_switch" onClick={changeMood}>
      <i className={night ? "fas fa-sun" : "fas fa-moon"} title={night ? "Switch to Light Mode" : "Switch to Dark Mode"}/>
    </label>
  );
};

export default DayNightMood;

