import styled from "styled-components";
import backgroundImage from "../../assets/friends-background.png";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 2rem;
  min-height: calc(100vh - var(--nav-size));
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;
