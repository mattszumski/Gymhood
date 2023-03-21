import { useState, useEffect } from "react";
import defaultThumbnail from "../../../assets/default-profile-pic-t.png";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import getConsts from "../../../utils/getConsts";
import { ProfileHeader as StyledHeader } from "./styled/ProfileHeader.styled";
import ChooseProfilePhoto from "./ChooseProfilePhoto";

export const ProfileHeader = (props) => {
  const { username, firstname, lastname, userProfile } = props.userData;
  const isOwnProfile = props.isOwnProfile;
  const [profilePhoto, setProfilePhoto] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  //   const profilePhoto = userProfile?.profilePhotoId ? "GET URL" : <img src={defaultThumbnail} />;

  useEffect(() => {
    if (userProfile?.profilePhotoId) {
      axiosPrivate
        .get(`/file/photo/${userProfile.profilePhotoId}`)
        .then((result) => {
          const baseUrl = getConsts("BASE_URL");
          setProfilePhoto(<img src={`${baseUrl}${result.data.path}`} width="300px" />);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setProfilePhoto(<img src={defaultThumbnail} />);
    }
  }, [userProfile?.profilePhotoId]);

  return (
    <StyledHeader>
      <div className="profile-photo-container">
        {profilePhoto}
        <div className="upload-button">
          <ChooseProfilePhoto />
        </div>
      </div>
      <h2>{username}</h2>
      <h3>
        {firstname} {lastname}
      </h3>
    </StyledHeader>
  );
};
