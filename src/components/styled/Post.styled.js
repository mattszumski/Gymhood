import styled from "styled-components";

export const Post = styled.div`
  width: 25vw;
  padding-bottom: 0.5rem;
  margin: 1rem;
  margin-bottom: 3rem;
  background-color: #414141;
  color: #fff;
  display: flex;
  flex-direction: column;
  border: 0.5px solid #606060;

  .title {
    font-size: 0.75rem;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    padding: 0.25rem;

    img {
      width: 40px;
      height: 40px;
      border-radius: 25px;
      margin-right: 1rem;
    }

    .createdUser {
      margin-right: 1rem;
    }

    .createdTimestamp {
      margin-right: 0;
      margin-left: auto;
    }
  }

  .body {
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0.25);
    padding: 1.5rem 0.5rem;
  }

  .media {
    img {
      width: 150px;
    }
  }

  .actions {
    padding: 0.25rem;
    display: flex;
    justify-content: space-around;

    .btn {
      flex-grow: 1;
      max-width: 40%;
      text-align: center;
      color: #fff;
      background-color: rgba(25, 25, 25, 0.25);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      margin: 0.25rem 1rem;

      :hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;
