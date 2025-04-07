import React, { useContext } from "react";
import { ThemeContext } from "./ThemeSwitcher";

const ThemeSwitcherChild = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: isDark ? "#ffffff" : "#000000",
    color: isDark ? "#000000" : "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
        <button style={buttonStyle} onClick={() => setIsDark(!isDark)}>
          Toggle Mode
        </button>
      </div>
    </>
  );
};

export default ThemeSwitcherChild;
