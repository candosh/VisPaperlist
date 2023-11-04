import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/searchResult.css";
import { useLocation } from "react-router-dom";
import BasicComponent from "../components/basicComponent";

// 검색 결과 페이지
function SearchResult() {
  const location = useLocation();
  const { searchName, searchType } = location.state;
  const [searchResults, setSearchResults] = useState([]);

  async function getPaper() {
    await axios
      .get("/paper/", {
        params: {
          search: searchType,
          query: searchName,
        },
      })
      .then((res) => {
        let papers = res.data;
        setSearchResults(papers);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  useEffect(() => {
    getPaper();
  }, []);

  return (
    <div className="search-app">
      <div className="center-fixed-container">
        <div className="logo-container">
          <BasicComponent />
        </div>
      </div>
      <div className="search-result-container">
        <h2 className="search-results-header">
          🔍 Search Results for {searchType}: "{searchName}"
        </h2>
        {searchResults.length > 0 ? (
          <div>
            {searchResults.map((result, index) => (
              <div key={index} className="search-result">
                <h2>{result.title}</h2>
                <p className="authors">Authors: {result.author}</p>
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
