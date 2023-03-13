import { NavLink } from "react-router-dom";

const DropdownItem = (props) => {
  const linkTo = props.linkTo || "#";
  return (
    <NavLink to={linkTo} className="nav-menu-item">
      <span className="icon-button-left">{props.leftIcon}</span>
      {props.children}
      <span className="icon-button-right">{props.rightIcon}</span>
    </NavLink>
  );
};

export default DropdownItem;
