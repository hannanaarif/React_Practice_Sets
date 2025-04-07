/*
Create a React app with ThemeSwitcher component that allows the
user to toggle between light
and dark themes. Use the useContext hook to obtain the current
theme from
a ThemeContext and update it when the user switches between 
themes on click of the button.
*/

import { createContext, useState } from "react";
import ThemeSwitcherChild from "./ThemeSwitcherChild";

export const ThemeContext = createContext();

function Theme() {
  const [isDark, setIsDark] = useState(false);

  const containerStyle = {
    backgroundColor: isDark ? "#000000" : "#ffffff",
    color: isDark ? "#ffffff" : "#000000",
    height: "100vh",
    width: "100vw",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div style={containerStyle}>
        <ThemeSwitcherChild />
      </div>
    </ThemeContext.Provider>
  );
}
export default Theme;
