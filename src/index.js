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
    <link
      rel="preload"
      as="image"
      href="./assets/cs_project_screenshots/covey_editnotes.png"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/cs_project_screenshots/covey_ingame.png"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/cs_project_screenshots/covey_profile.png"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/cs_project_screenshots/memedb_interact.png"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/cs_project_screenshots/memedb_search.png"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/cs_project_screenshots/memedb_topmeme.png"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/cs_project_screenshots/maze_player.png"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/cs_project_screenshots/maze_bfs.gif"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/cs_project_screenshots/maze_dfs.gif"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/siddhartha_blue.jpg"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/siddhartha_yellow.jpg"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/siddhartha_red.jpg"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/minion_pro.jpg"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/minion_pro_alt.jpg"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/futura.jpg"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/garamond.jpg"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/ramen.png"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/doughnuts.png"
    />
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/project_proposal_1.jpg"
    />
    \
    <link
      rel="preload"
      as="image"
      href="./assets/design_projects_screenshots/project_proposal_2.jpg"
    />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
