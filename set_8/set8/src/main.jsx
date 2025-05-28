import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";  // ✅ Import BrowserRouter
import App from "./App.jsx";
import ForumProvider from "./Q5/Context/Forum.jsx";
// import TodoProvider from "./Q4/Context/Todocontext.jsx";
// import Listing from "./Q2/Listing.jsx";
// import StoreProvider from "./Q2/Context/Cart.jsx";
// import Listing from "./Q3/Listing.jsx";
// import StoreProvider from "./Q3/Context/Cart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ForumProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ForumProvider>
  </StrictMode>
);
