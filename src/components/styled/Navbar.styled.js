import styled from "styled-components";

export const Navbar = styled.div`
  border: none;
  height: 3.5em;
  width: 100vw;
  max-width: 100%;
  background-color: #414141;
  display: flex;
  justify-content: space-around;

  #logo-container {
    align-self: center;

    #logo {
      max-width: 10rem;
    }
  }

  div {
    align-self: center;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
