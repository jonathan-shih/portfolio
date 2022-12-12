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
    <link rel="preload" as="image" href="./assets/covey_editnotes.png" />
    <link rel="preload" as="image" href="./assets/covey_ingame.png" />
    <link rel="preload" as="image" href="./assets/covey_profile.png" />
    <link rel="preload" as="image" href="./assets/memedb_interact.png" />
    <link rel="preload" as="image" href="./assets/memedb_search.png" />
    <link rel="preload" as="image" href="./assets/memedb_topmeme.png" />
    <link rel="preload" as="image" href="./assets/maze_player.png" />
    <link rel="preload" as="image" href="./assets/maze_bfs.gif" />
    <link rel="preload" as="image" href="./assets/maze_dfs.gif" />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
