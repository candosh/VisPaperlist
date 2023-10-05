import React, { useState } from "react";
import "../styles/mainButton.css";

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div>
      <div className="button-container">
        <button
          onClick={() => handleButtonClick(1)}
          className={selectedButton === 1 ? "selected" : ""}
        >
          CHI
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={selectedButton === 2 ? "selected" : ""}
        >
          VIS
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={selectedButton === 3 ? "selected" : ""}
        >
          ETRA
        </button>
        <button
          onClick={() => handleButtonClick(4)}
          className={selectedButton === 4 ? "selected" : ""}
        >
          IEEE
        </button>
        <button
          onClick={() => handleButtonClick(5)}
          className={selectedButton === 5 ? "selected" : ""}
        >
          INFOVIS
        </button>
        <button
          onClick={() => handleButtonClick(6)}
          className={selectedButton === 6 ? "selected" : ""}
        >
          SCIVIS
        </button>
        <button
          onClick={() => handleButtonClick(7)}
          className={selectedButton === 7 ? "selected" : ""}
        >
          VAST
        </button>
      </div>
      <div className="content-container">
        {selectedButton === 1 && (
          <p>
            CHI is one of the most significant conferences in the field of
            computer science.
            <br /> It primarily focuses on research related to human-computer
            interaction (HCI), user experience, user interface design, and
            related research areas.
            <br /> Researchers and practitioners gather at CHI to present and
            discuss innovations and advancements in making technology more
            user-friendly and efficient for humans.
          </p>
        )}
        {selectedButton === 2 && (
          <p>
            Visualization papers are presented in the field of information
            visualization, exploring research on methods to visually represent
            and interpret information.
            <br /> InfoVis focuses on general information visualization, SciVis
            on scientific data visualization, and VAST on visual analysis and
            exploration.
          </p>
        )}
        {selectedButton === 3 && (
          <p>
            ETRA is a conference that highlights research related to
            eye-tracking technology and its applications.
            <br /> It primarily involves the analysis of users' eye movements
            for interface design, usability testing, and user experience
            research.
            <br /> This conference provides a platform for researchers to share
            insights and developments in eye-tracking technology and its
            practical uses.
          </p>
        )}
        {selectedButton === 4 && (
          <p>
            IEEE is an international technical society that operates in the
            field of electrical and electronics engineering.
            <br /> IEEE supports and publishes research papers, scholarly
            studies, and develops technical standards across various
            technological domains.
            <br /> IEEE societies play a pivotal role in promoting worldwide
            research and technological innovation.
          </p>
        )}
        {selectedButton === 5 && (
          <p>
            InfoVis is a conference dedicated to research and publication in the
            field of information visualization.
            <br /> Information visualization focuses on techniques and methods
            for visually representing data and information to make it more
            understandable.
            <br /> It encompasses areas such as data visualization, charts,
            graphs, and interactive visualization.
          </p>
        )}
        {selectedButton === 6 && (
          <p>
            SciVis refers to the field of scientific visualization, which is
            dedicated to visualizing complex scientific data and phenomena.
            <br />
            Scientific visualization is used to create visual representations of
            scientific and engineering data, helping researchers and scientists
            gain insights from large and complex datasets.
            <br /> This field often employs 3D graphics and interactive
            techniques.
          </p>
        )}
        {selectedButton === 7 && (
          <p>
            VAST is a conference that focuses on the interdisciplinary field of
            visual analytics,
            <br /> which combines data analysis, interactive visualization, and
            human-computer interaction to solve complex problems.
            <br /> VAST aims to advance research and technologies that enable
            users to gain insights and make decisions through visual
            representations of data and analytical tools.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
