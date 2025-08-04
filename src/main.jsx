import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 1. Import logo Anda dari folder assets
import logoIcon from "./assets/images/logo.png";

// 2. Atur href untuk favicon secara dinamis
document.querySelector("#favicon").setAttribute("href", logoIcon);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
