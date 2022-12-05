import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Preloading images to prevent lazy loading */}
    <link rel="preload" as="image" href="./assets/logo_black.png" />
    <link rel="preload" as="image" href="./assets/white.png" />
    <link rel="preload" as="image" href="./assets/profile_img.jpg" />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
