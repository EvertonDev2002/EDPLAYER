import React from "react";
import "./Theme/theme.css";
import Route from "./route.jsx";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.querySelector("#root")
);