
import React, { useState, useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import "./DarkMode.css";

function DarkMode() {
  const [darkMode, setDarkMode] = useState("darkmode");

  function toggleDarkMode() {
    if (darkMode === "darkmode") {
      setDarkMode("lightmode");
    } else {
      setDarkMode("darkmode");
    }
  }

  useEffect(() => {
    document.body.className = darkMode;
  }, [darkMode]);

  return (
    <div>
      <button className="darkmodebtn" onClick={toggleDarkMode}>
        {darkMode === "darkmode" ? (
          <MdOutlineWbSunny />
        ) : (
          <LuMoon />
        )}
      </button>
    </div>
  );
}

export default DarkMode;
