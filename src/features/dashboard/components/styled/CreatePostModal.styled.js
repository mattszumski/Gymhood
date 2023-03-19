import styled from "styled-components";

export const PostCreationModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
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
    width: 100%;
    margin-bottom: 10px;
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
