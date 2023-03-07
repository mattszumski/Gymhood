import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar as NavDiv } from "../components/styled/Navbar.styled";
import SearchBar from "../features/dashboard/components/SearchBar";

const Navbar = () => {
  return (
    <NavDiv>
      Welcome to GymHood
      <div>
        <NavLink to={"/dashboard"}>dashboard</NavLink>
      </div>
      <div>
        <NavLink to={"/profile/edit"}>edit profile</NavLink>
      </div>
      <div>
        <NavLink to={"/settings"}>Settings</NavLink>
      </div>
      <div>
        <NavLink to={"/friendRequests"}>Friend Requests</NavLink>
      </div>
      <div>
        <NavLink to={"/upload"}>Upload</NavLink>
      </div>
      <SearchBar />
    </NavDiv>
  );
};

export default Navbar;
