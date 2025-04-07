import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";  // ✅ Import BrowserRouter
import App from "./App.jsx";
import Listing from "./Q2/Listing.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Listing/>
    </BrowserRouter>
  </StrictMode>
);
