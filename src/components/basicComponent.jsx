import React from "react";

function BasicComponent() {
  return (
    <div className="search-app">
      <div className="center-fixed-container">
        <div className="logo-container">
          <img src="src/assets/main-logo.png" alt="no image" width="450" />
        </div>
        <div className="logo-under-container">
          <p className="logo-under-text">
            This page contains a list of CHI, Vis (InfoVis, SciVis, VAST), and
            ETRA papers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasicComponent;
