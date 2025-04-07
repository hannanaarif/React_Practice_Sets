/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import UserDetails from "./Q1/UserDetails.jsx";
import Language from "./Q2/Language.jsx";
import Theme from "./Q3/ThemeSwitcher.jsx";
import Cart from "./Q4/Cart.jsx";
import Router from "./Q5/Route.jsx";
import UserPreferences from "./Q5/context/UserPreferencesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserPreferences />
    </BrowserRouter>
  </StrictMode>
);
