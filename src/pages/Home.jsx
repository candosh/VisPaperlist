import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import BasicComponent from "../components/basicComponent";
import ButtonContent from "../components/mainButton";
import InputContainer from "../components/InputContainer"; //검색 부분 컴포넌트로 뺌
import { useNavigate } from "react-router-dom";

//메인 홈 페이지
function Home() {
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
        <InputContainer
          name={name}
          setName={setName}
          searchType={searchType}
          setSearchType={setSearchType}
          goResult={goResult}
          activeEnter={activeEnter}
        />
      </div>
      <div className="paperContent-container">
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

export default Home;
