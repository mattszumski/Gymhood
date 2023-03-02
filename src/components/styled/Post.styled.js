import styled from "styled-components";
import backgroundImage from "./../../assets/gh-hero.jpg";

export const Post = styled.div`
  width: 25vw;
  padding: 0.5rem;
  margin: 1rem;
  background-color: #123456;
  color: #fff;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 0.75rem;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .body {
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0.25);
    padding: 1.5rem 0.5rem;
  }

  .actions {
    padding: 0.25rem;
    display: flex;
    justify-content: space-around;

    .btn {
      flex-grow: 1;
      text-align: center;
      color: #fff;
      background-color: rgba(25, 25, 25, 0.25);
      border: none;

      :hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;
