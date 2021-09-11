import React from "react";
import "./Theme/theme.css";
import App from "./Page/app.jsx";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
