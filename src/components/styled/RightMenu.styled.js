import styled from "styled-components";

export const RightMenuStyled = styled.div`
  min-width: 15%;

  .right-menu-nav {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .right-nav-item {
    width: calc(var(--nav-size) * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-button {
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: #484a4d;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 300ms;
  }

  .icon-button img {
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
  }

  .icon-button:hover {
    filter: brightness(1.4);
  }

  .dropdown {
    position: absolute;
    top: 68px;
    width: 300px;
    transform: translateX(-45%);
    background-color: var(--bg);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: 1rem;
    overflow: hidden;
  }

  .nav-menu-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
  }

  .menu-item:hover {
    background-color: #525357;
  }

  .icon-right {
    margin-left: auto;
  }
`;
