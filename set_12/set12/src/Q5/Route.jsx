/*
Create a React app with 3 pages using React Router. Create 
UserPreferencesContext that
stores the user's preferences, such as font size and color scheme.
Implement
a PreferencesForm component with dropdown that allows the user to
customize their
preferences using the UserPreferencesContext and useContext.
On changing the preferences,
the changes should apply to the Profile and Notes page.
*/

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import Setting from "./pages/Setting";

const Router = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          background: "#f0f0f0",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "black",
          })}
        >
          Setting {"||"}
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "black",
          })}
        >
          Profile {"||"}
        </NavLink>
        <NavLink
          to="/notes"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "black",
          })}
        >
          Notes
        </NavLink>
      </nav>

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/" element={<Setting />} />
      </Routes>
    </>
  );
};

export default Router;
