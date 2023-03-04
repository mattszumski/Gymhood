import styled from "styled-components";

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 2rem;

  .form-label-text {
    width: 10vw;
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
  }

  .form-action-container {
    min-width: 10vw;
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
  }
`;
