import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #ffffff55;
  border-radius: 5px;
  padding: 7px;
  display: flex;
  flex-direction: column;
`;
