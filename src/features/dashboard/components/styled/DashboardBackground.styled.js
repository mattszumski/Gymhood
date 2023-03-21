import styled from "styled-components";
import backgroundImage from "../../../../assets/dashboard-background.png";

export const DashboardBackground = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;
