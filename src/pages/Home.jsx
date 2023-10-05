import "../styles/Home.css";
import ButtonContent from "../components/mainButton";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const movePage = useNavigate();

  const goResult = (pdf) => {
    movePage("/searchResult", {
      state: {
        pdfName: `${pdf}`,
      },
    });
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };

  useEffect(() => {
    //컴포넌트가 마운트될 때 로컬 스토리지에서 검색 기록을 로드
    const savedList = localStorage.getItem("searchHistory");
    if (savedList && savedList !== "undefined") {
      try {
        setList(JSON.parse(savedList));
      } catch (e) {
        console.error("Error parsing search history:", e);
      }
    }
  }, []);

  const addList = () => {
    const currentDate = new Date();
    const dateString = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    const updatedList = [...list, { query: name, date: dateString }];
    setList(updatedList);

    //로컬 스토리지에서 검색 기록을 저장
    localStorage.setItem("searchHistory", JSON.stringify(updatedList));

    setName("");
    goResult(name);
  };

  const deleteList = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);

    //로컬 스토리지에서 검색 기록을 저장
    localStorage.setItem("searchHistory", JSON.stringify(updatedList));
  };

  const deleteAllList = () => {
    const updatedList = [];
    setList(updatedList);

    //로컬 스토리지에서 검색 기록을 저장
    localStorage.setItem("searchHistory", JSON.stringify(updatedList));
  };

  return (
    <div className="search-app">
      <div className="center-fixed-container">
        <div className="logo-container">
          <img src="src/assets/main-logo.png" alt="no image" width="450"></img>
        </div>
        <div className="logo-under-container">
          <p className="logo-under-text">
            This page contains a list of CHI, Vis (InfoVis, SciVis, VAST), and
            ETRA papers.
          </p>
        </div>
        <div className="input-container">
          <input
            className="inputName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => activeEnter(e)}
            placeholder="🔍 Paper name or keywords..."
          ></input>
          <button className="search-button" onClick={addList}>
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
        {/*<ul>
          {list.map((item, index) => (
            <li key={index}>
              <span
                onClick={() => {
                  goResult(item.query);
                }}
                className="query-item"
              >
                {item.query}
              </span>
              <span className="date-item">{item.date}</span>
              <button
                onClick={() => {
                  deleteList(index);
                }}
              >
                Delete
              </button>
            </li>
          ))}
          <button onClick={deleteAllList}>DeleteAllList</button>
              </ul>*/}
      </div>
      <div className="footer-container">
        <p className="footer-text">ⓒ VisPaperlist. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Search;
