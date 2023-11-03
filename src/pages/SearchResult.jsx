import React, { useState, useEffect } from "react";
import "../styles/searchResult.css";
import { useLocation } from "react-router-dom";
import BasicComponent from "../components/basicComponent";

// 검색 결과 페이지
function SearchResult() {
  const location = useLocation();
  const { searchName, searchType, jsonData } = location.state;
  const [searchResults, setSearchResults] = useState([]);
  const searchText = searchName ? searchName.toLowerCase() : "";

  useEffect(() => {
    if (jsonData && jsonData.length > 0) {
      const results = jsonData.filter((item) => {
        if (!item) {
          return false;
        }

        // 각 item에서 검색어가 포함된 필드가 있는지 확인합니다.
        return Object.keys(item).some((key) => {
          const value = item[key]?.toString().toLowerCase();
          return value && value.includes(searchText);
        });
      });

      setSearchResults(results);
    }
  }, [searchName, jsonData]);

  useEffect(() => {
    return () => {
      setSearchResults([]);
    };
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
