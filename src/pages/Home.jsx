import "../styles/Home.css";
import ButtonContent from "../components/mainButton";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search() {
  const [name, setName] = useState("");
  const movePage = useNavigate();

  const goResult = (searchName) => {
    movePage("/searchResult", {
      state: {
        paperName: name,
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

    // JSON 데이터에서 Title 값과 입력한 name을 비교하여 일치하는 결과를 검색
    const searchResults = jsonData.filter((item) =>
      item.Title.toLowerCase().includes(name.toLowerCase())
    );

    setList(updatedList);
    setResults(searchResults); // 검색 결과를 상태 변수에 저장

    // 로컬 스토리지에서 검색 기록을 저장
    localStorage.setItem("searchHistory", JSON.stringify(updatedList));

    goResult(name); // 검색 결과 페이지로 이동

    // name 상태를 업데이트한 후에 비워줌
    setName("");
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
          <Link to="/searchResult" state={{ paperName: name }}>
            <button className="search-button">Search</button>
          </Link>
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
