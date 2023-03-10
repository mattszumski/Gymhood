import { NavLink } from "react-router-dom";
import { Navbar as NavDiv } from "../components/styled/Navbar.styled";
import SearchBar from "../features/dashboard/components/SearchBar";
import logo from "../assets/gh-logo-b.svg";

const Navbar = () => {
  return (
    <NavDiv>
      <div id="logo-container">
        <NavLink to={"/dashboard"}>
          <img id="logo" src={logo} />
        </NavLink>
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
