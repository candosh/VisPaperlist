import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import BasicComponent from "../components/basicComponent";
import ButtonContent from "../components/mainButton"; //
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search() {
  const [name, setName] = useState("");
  const [searchType, setSearchType] = useState("title");
  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading data:", err);
        setIsLoading(false);
      });
  }, []);

  const goResult = () => {
    navigate("/searchResult", {
      state: {
        searchType: searchType,
        searchName: name,
        jsonData: jsonData,
      },
    });
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      goResult();
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="search-app">
      <div className="center-fixed-container">
        <BasicComponent />
        <div className="input-container">
          <input
            className="inputName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => activeEnter(e)}
            placeholder="🔍 Paper name or keywords..."
          ></input>
          <select
            className="search-type"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="authors">Author</option>
            <option value="abstract">Abstract</option>
          </select>
          <button className="search-button" onClick={goResult}>
            Search
          </button>
        </div>
      </div>
      <div className="history-container">
        <h2>
          Click on the paper
          <br /> you are curious about!
        </h2>
        <div className="buttonContainer">
          <ButtonContent />
        </div>
      </div>
      <div className="footer-container">
        <p className="footer-text">ⓒ VisPaperlist. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Search;
