import React, { useState, useEffect } from "react";
import "../styles/searchResult.css";
import { useParams } from "react-router-dom";

function SearchResult() {
  const [searchResults, setSearchResults] = useState([]);
  const { name } = useParams(); // URL에서 검색어 추출

  useEffect(() => {
    // 검색 결과를 문자열로부터 파싱하여 가져옴
    const searchResultsString = window.localStorage.getItem("searchResults");
    if (searchResultsString) {
      const parsedResults = JSON.parse(searchResultsString);
      setSearchResults(parsedResults);
    }
  }, []);

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
      <div className="search-result-container">
        <h2 className="search-results-header">Search Results for: {name}</h2>
        {searchResults.length > 0 ? (
          <div>
            {searchResults.map((result, index) => (
              <div key={index} className="search-result">
                <h2>{result.title}</h2>
                <p className="authors">Authors: {result.authors}</p>
                <p className="abstract">{result.abstract}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results-message">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResult;
