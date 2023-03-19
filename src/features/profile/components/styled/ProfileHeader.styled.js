import styled from "styled-components";

export const ProfileHeader = styled.div`
  .profile-photo-container {
    position: relative;
    float: left;
    margin-bottom: 1rem;
  }
  .upload-button {
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: -5px;
    right: -5px;

    :hover {
      background-color: white;
    }
  }
`;
