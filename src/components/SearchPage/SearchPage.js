import React, { useEffect, useState } from "react";
import Heroes from "../Heroes/Heroes";

const SearchPage = ({ heroes, match }) => {



  const handleSearchInput = e => {
    e.preventDefault();
    console.log(e.target.value);

  };

  return (
    <div className="search-page">
      <h1>Search your favourite hero or villain</h1>
      <input 
      className="search-page-input"
        type="text"
        placeholder="Search..."
        onChange={e => handleSearchInput(e)}
      />
      <button className="search-page-button">Search</button>
    </div>
  );
};

export default SearchPage;
