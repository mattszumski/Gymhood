import React from "react";
import { useNavigate } from "react-router-dom";
import useInputState from "../../../hooks/useInputState";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useInputState();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    navigate("/search", { state: { query: searchValue } });
  };

  return (
    <div className="search-bar">
      <label htmlFor="search">Search friends:</label>
      <input type="text" name="search" id="search" onChange={setSearchValue} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
