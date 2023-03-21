import { NavLink } from "react-router-dom";

const DropdownItem = (props) => {
  const linkTo = props.linkTo || "#";
  const handleClick = props.handleClick || null;

  return (
    <NavLink to={linkTo} className="nav-menu-item" onClick={handleClick}>
      <span className="icon-button-left">{props.leftIcon}</span>
      {props.children}
      <span className="icon-button-right">{props.rightIcon}</span>
    </NavLink>
  );
};

export default DropdownItem;
