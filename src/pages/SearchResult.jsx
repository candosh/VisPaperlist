import React, { useState } from "react";

// Import JSON files
import chi00 from "../data/chi00.json";
import chi01 from "../data/chi01.json";

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  // Determine which JSON data to display based on the selected button
  let selectedData = null;
  if (selectedButton === 1) {
    selectedData = chi00;
  } else if (selectedButton === 2) {
    selectedData = chi01;
  }

  return (
    <div>
      <div className="button-container">{/* Your buttons here */}</div>
      <div className="content-container">
        {selectedData !== null && (
          <div>
            {selectedData.map((result, index) => (
              <div key={index} className="search-result">
                <h2>{result.title}</h2>
                <p>Authors: {result.authors}</p>
                <p>{result.abstract}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
