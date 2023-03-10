import styled from "styled-components";

export const PostCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  padding: 0.5rem;
  margin: 1rem;
  background-color: #30303066;
  backdrop-filter: blur(5px);
  border-radius: 10px;

  textarea {
    resize: none;
    color: #fff;
    background-color: #30303066;
    backdrop-filter: blur(5px);
    border: none;
    outline: none;
  }

  button {
    margin: 1rem 2rem;
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: #30303066;
    backdrop-filter: blur(5px);
    border: none;
    outline: none;
    width: 50%;
    align-self: center;
    border-radius: 5px;
    transition: background-color 0.5s;
    transition: color 1s;

    :hover {
      color: #303030;
      background-color: #ffffff66;
    }
  }
`;
