import React, { useContext } from "react";
import { UserPreferencesContext } from "../context/UserPreferencesContext";

const Notes = () => {
  const { preferences } = useContext(UserPreferencesContext);

  return (
    <div
      style={{
        fontSize: preferences.fontSize,
        color: preferences.colorScheme === "dark" ? "#fff" : "#000",
        backgroundColor: preferences.colorScheme === "dark" ? "#333" : "#fff",
        padding: "1rem",
      }}
    >
      <h2>Notes Page</h2>
      <p>Here are your noteslore</p>
    </div>
  );
};
export default Notes;
