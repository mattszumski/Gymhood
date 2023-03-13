import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  const linkTo = props.linkTo || "#";
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li className="right-nav-item">
      <NavLink to={linkTo} className="icon-button" onClick={handleClick}>
        {props.icon}
      </NavLink>
      {open && props.children}
    </li>
  );
};

export default NavItem;
