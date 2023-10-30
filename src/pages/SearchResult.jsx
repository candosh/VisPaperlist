import React, { useState, useEffect } from "react";
import "../styles/searchResult.css";
import { useLocation } from "react-router-dom";

//검색 결과 페이지
function SearchResult() {
  const location = useLocation();
  const { searchName, searchType, jsonData } = location.state;
  const [searchResults, setSearchResults] = useState([]);
  const searchText = searchName ? searchName.toLowerCase() : "";

  useEffect(() => {
    if (jsonData.length > 0) {
      const results = jsonData.filter((item) => {
        if (!item) {
          return false;
        }

        if (searchType === "title" && item.title) {
          return item.title.toLowerCase().includes(searchText);
        } else if (searchType === "authors" && item.authors) {
          return item.authors.toLowerCase().includes(searchText);
        } else if (searchType === "abstract" && item.abstract) {
          return item.abstract.toLowerCase().includes(searchText);
        }

        return false;
      });
      setSearchResults(results);
    }
  }, [searchName, jsonData, searchType]);

  useEffect(() => {
    return () => {
      setSearchResults([]);
    };
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
        <h2 className="search-results-header">
          🔍 Search Results for {searchType}: "{searchName}"
        </h2>
        {searchResults === null ? (
          <p>Loading...</p>
        ) : searchResults.length > 0 ? (
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
