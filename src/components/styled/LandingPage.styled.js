import styled from "styled-components";
import backgroundImage from "./../../assets/gh-hero.jpg";

export const LandingPage = styled.div`
  background-image: url(${backgroundImage});
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-box {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5rem 3rem;
    min-width: 15rem;

    .input-box {
      display: flex;
      flex-direction: column;
      min-width: 4rem;
      padding-bottom: 1.5rem;

      input {
        background-color: rgba(255, 255, 255, 0.75);
        border: none;
        margin-top: 0.25rem;
        padding: 0.5rem 0.25rem;
        font-weight: bold;
      }
    }

    .button-box {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .action-button {
      color: #000;
      background-color: #fff;
      border-radius: 15px;
      padding: 0.25rem;
      width: 5rem;
    }
  }
`;
