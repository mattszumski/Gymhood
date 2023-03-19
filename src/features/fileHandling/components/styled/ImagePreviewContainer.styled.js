import styled from "styled-components";

export const ImagePreviewContainer = styled.div`
  position: relative;
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.8);

  img {
    display: block;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 1px;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #008cba;
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: 0.5s ease;
  }

  :hover .overlay {
    width: 100%;
  }

  .text {
    white-space: nowrap;
    color: white;
    font-size: 20px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;
