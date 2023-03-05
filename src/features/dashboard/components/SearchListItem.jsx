import React from "react";
import { NavLink } from "react-router-dom";
import { SearchItem } from "./styled/SearchItem.styled";

const SearchListItem = (props) => {
  const { id, username, firstname, lastname, city, gym } = props;
  return (
    <SearchItem>
      <NavLink to={`/profile/${id}`}>
        <h3>User: {username}</h3>
      </NavLink>
      <h5>{firstname && lastname}</h5>
      <h6>
        {city} {gym}
      </h6>
    </SearchItem>
  );
};

export default SearchListItem;
