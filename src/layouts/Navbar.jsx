import { NavLink } from "react-router-dom";
import { Navbar as NavDiv } from "../components/styled/Navbar.styled";
import SearchBar from "../features/dashboard/components/SearchBar";
import logo from "../assets/gh-logo-b.svg";
import defaultThumbnail from "../assets/default-profile-pic-t.png";
import useAuth from "../hooks/useAuth";
import NavbarRightMenu from "../components/NavbarRightMenu";
import NavItem from "../components/NavItem";
import settingsIcon from "../assets/settings.svg";
import personIcon from "../assets/person.svg";
import friendIcon from "../assets/friends.svg";
import DropdownMenu from "../components/DropdownMenu";
import DropdownItem from "../components/DropdownItem";
import useUserData from "../hooks/useUserData";

const Navbar = () => {
  const { auth } = useAuth();
  const { userData } = useUserData();
  return (
    <NavDiv>
      <div id="logo-container">
        <NavLink to={"/dashboard"}>
          <img id="logo" src={logo} />
        </NavLink>
      </div>
      <SearchBar />

      <NavbarRightMenu>
        <NavItem icon={<img src={friendIcon} />} linkTo={`/friendRequests`} />
        <NavItem icon={<img src={personIcon} />}>
          <DropdownMenu>
            <DropdownItem leftIcon={<img className={"profile-pic"} src={userData.profilePhoto ? userData.profilePhotoPath : defaultThumbnail} />} linkTo={`/profile/${auth.userId}`}>
              <p>Logged in as {auth.username}</p>
            </DropdownItem>
            <DropdownItem linkTo={`/profile/${auth.userId}`}>Profile</DropdownItem>
            <DropdownItem linkTo={`/dashboard`}>Dashboard</DropdownItem>
            <DropdownItem linkTo={`/profile/edit`}>Edit profile data</DropdownItem>
            <DropdownItem leftIcon={<img src={settingsIcon} />} linkTo={`/settings`}>
              Settings
            </DropdownItem>
          </DropdownMenu>
        </NavItem>
      </NavbarRightMenu>
    </NavDiv>
  );
};

export default Navbar;
