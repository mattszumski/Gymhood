import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 2rem;
  margin: 3rem;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(5px);
  border-radius: 15px;

  .request-received,
  .request-accepted,
  .request-refused,
  .request-sent,
  .request-canceled {
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    padding: 0.25rem 0.75rem;
    min-height: 75px;

    button {
      margin-left: auto;
      color: #fff;
      background-color: rgba(255, 255, 255, 0.35);
      border: none;
      padding: 0.25rem 0.75rem;
      border-radius: 2px;
      transition: background-color 500ms;

      :hover {
        color: #000;
        background-color: rgba(255, 255, 255, 0.95);
      }
    }
  }
`;
