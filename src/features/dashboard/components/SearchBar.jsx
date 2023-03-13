import React from "react";
import { useNavigate } from "react-router-dom";
import useInputState from "../../../hooks/useInputState";
import { SearchBarContainer } from "./styled/SearchBarContainer.styled";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useInputState();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/search", { state: { query: searchValue } });
  };

  return (
    <SearchBarContainer>
      <form className="search-form">
        <input type="text" name="search" id="search" onChange={setSearchValue} placeholder="Search Friends" />
        <button onClick={handleSearch}>Search</button>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
