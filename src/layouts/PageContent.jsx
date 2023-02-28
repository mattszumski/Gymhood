import React from "react";

import { PageContent as StyledPage } from "../components/styled/PageContent.styled";

const PageContent = (props) => {
  return <StyledPage>{props.children}</StyledPage>;
};

export default PageContent;
