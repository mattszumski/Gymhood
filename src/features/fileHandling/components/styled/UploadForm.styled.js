import styled from "styled-components";

export const UploadFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 2rem;
  max-width: 10rem;
  background-color: #12345644;
  box-shadow: 0px 0px 15px #12345644;
  transition: background-color 0.15s;

  :hover {
    color: #fff;
    background-color: #123456bb;
    box-shadow: 0px 0px 15px #123456bb;
  }
`;
