import React from "react";
import { RightMenuStyled } from "./styled/RightMenu.styled";

const NavbarRightMenu = (props) => {
  return (
    <RightMenuStyled>
      <ul className="right-menu-nav">{props.children}</ul>
    </RightMenuStyled>
  );
};

export default NavbarRightMenu;
