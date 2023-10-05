import React, { useState } from "react";

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={() => handleButtonClick(1)}>CHI</button>
        <button onClick={() => handleButtonClick(2)}>VIS</button>
        <button onClick={() => handleButtonClick(3)}>ETRA</button>
        <button onClick={() => handleButtonClick(4)}>ex.1</button>
        <button onClick={() => handleButtonClick(5)}>ex.2</button>
        <button onClick={() => handleButtonClick(6)}>ex.3</button>
      </div>
      <div className="content-container">
        {selectedButton === 1 && (
          <p>
            CHI is one of the most significant conferences in the field of
            computer science, focusing on topics related to human-computer
            interaction, user experience, user interface design, and related
            research areas..
          </p>
        )}
        {selectedButton === 2 && (
          <p>
            {" "}
            Visualization papers are presented in the field of information
            visualization, exploring research on methods to visually represent
            and interpret information. InfoVis focuses on general information
            visualization, SciVis on scientific data visualization, and VAST on
            visual analysis and exploration.
          </p>
        )}
        {selectedButton === 3 && (
          <p>
            ETRA is a conference that showcases research on eye-tracking
            technology and its applications, primarily analyzing users' eye
            movements for interface and user experience research.
          </p>
        )}
        {selectedButton === 4 && <p>예시 1에 대한 내용을 여기에 표시합니다.</p>}
        {selectedButton === 5 && <p>예시 2에 대한 내용을 여기에 표시합니다.</p>}
        {selectedButton === 6 && <p>예시 3에 대한 내용을 여기에 표시합니다.</p>}
      </div>
    </div>
  );
}

export default App;
