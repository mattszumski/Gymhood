import styled from "styled-components";

export const Navbar = styled.nav`
  border: none;
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: 1px solid black;
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

    .profile-pic {
      width: 40px;
      height: 40px;
      border-radius: 25px;
      margin-right: 1rem;
    }
  }

  .user-info {
    display: flex;
    color: #fff;
  }
`;
