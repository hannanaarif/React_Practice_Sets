import React, { createContext, useState } from "react";
import Router from "../Route";

export const UserPreferencesContext = createContext();

const UserPreferences = () => {
  const [preferences, setPreferences] = useState({
    fontSize: "medium",
    colorScheme: "light",
  });

  return (
    <>
      <h2>Heelo from context</h2>
      <UserPreferencesContext.Provider value={{ preferences, setPreferences }}>
        <Router />
      </UserPreferencesContext.Provider>
    </>
  );
};

export default UserPreferences;
