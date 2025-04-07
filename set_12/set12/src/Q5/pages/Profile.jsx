import React, { useContext } from "react";
import { UserPreferencesContext } from "../context/UserPreferencesContext";

const Profile = () => {
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
      <h2>Profile Page</h2>
      <p fontSize="fontSize">Customize your preferences in the settings page.its a profile page</p>
    </div>
  );
};

export default Profile;
