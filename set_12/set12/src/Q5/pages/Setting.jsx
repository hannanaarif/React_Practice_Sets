import React, { useContext } from "react";
import PreferencesForm from "../components/PreferencesForm";
import { UserPreferencesContext } from "../context/UserPreferencesContext";

const Setting = () => {
    const { preferences } = useContext(UserPreferencesContext);
  
  return (
    <div style={{
      fontSize: preferences.fontSize,
      color: preferences.colorScheme === "dark" ? "#fff" : "#000",
      backgroundColor: preferences.colorScheme === "dark" ? "#333" : "#fff",
      padding: "1rem",
    }}>
      <h1>Settings Page</h1>
      <PreferencesForm />
    </div>
  );
};

export default Setting;
