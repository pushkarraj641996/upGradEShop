import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ResponsiveAppBar from "./components/AppBar/AppBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResponsiveAppBar />
  </React.StrictMode>
);
