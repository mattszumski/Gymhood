import styled from "styled-components";

export const UploadFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    padding: 1rem 2rem;
    max-width: 10rem;
    background-color: #12345644;
    box-shadow: 0px 0px 15px #12345644;
    transition: background-color 0.15s;
    margin-top: 10px;

    :hover {
      color: #fff;
      background-color: #123456bb;
      box-shadow: 0px 0px 15px #123456bb;
    }
  }

  .preview-container {
    max-width: 450px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
