import React from "react";

export const ProfileHeader = (props) => {
  const { username, firstname, lastname } = props.userData;
  return (
    <>
      <div className="profile-photo-container">PHOTO</div>
      <h2>{username}</h2>
      <h3>
        {firstname} {lastname}
      </h3>
    </>
  );
};
