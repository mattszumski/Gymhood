import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Navbar from "../../layouts/Navbar";
import Post from "../dashboard/components/Post";
import { ProfilePageContainer } from "../dashboard/components/styled/ProfilePage.styled";

const Profile = () => {
  //get profile data for user id
  //determine if user is checking its own profile
  //get post for the user to shopw in the profile
  //add abilities to edit account
  // if not own profile check if user is friends with the view profile if yes, show that they're friends if not give ability to invite

  const [userData, setUserData] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const { auth } = useAuth();
  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const [userOwnProfile, setUserOwnProfile] = useState(parseInt(id) === parseInt(auth.userId));
  const [userFriend, setUserFriend] = useState(false);

  //check if user and profile user are friends

  useEffect(() => {
    axiosPrivate
      .get(`/user/data/${id}`)
      .then((result) => {
        setUserData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosPrivate
      .get(`/post/user/${id}`)
      .then((result) => {
        setUserPosts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <style>
        {`
        .profile-page-container {
            display: flex;
            justify-content: space-around;
        }

        .profile-box,
        .photos-box,
        .user-board {
            background-color: #123456;
        }

    `}
      </style>
      <ProfilePageContainer>
        <div className="columns-left">
          <div className="profile-box">
            <div className="profile-photo-container">PHOTO</div>
            <div className="info-container">
              <p>{userData?.userProfile?.city ? `City: ${userData.userProfile.city}` : ""}</p>
              <p>{userData?.userProfile?.gym ? `Gym: ${userData.userProfile.gym}` : ""}</p>
              <p>{userData?.userProfile?.about ? `About: ${userData.userProfile.about}` : ""}</p>
              <p>{userData?.userProfile?.interests ? `Interests: ${userData.userProfile.interests}` : ""}</p>
            </div>
            <div className="userdata-container">
              <p>{userData.username}</p>
              <p>{userData.firstname ? userData.firstname : ""}</p>
              <p>{userData.lastname ? userData.lastname : ""}</p>
              {!userOwnProfile && !userFriend && <p>Add Friend</p>}
            </div>
          </div>
          <div className="friends-box">FRIENDS BOX</div>
          <div className="photos-box">PHOTOS BOX</div>
        </div>
        <div className="columns-right">
          <div className="user-board">
            {userPosts.map((post) => {
              return <Post key={post.id} post={{ ...post, user: { userId: userData.id, username: userData.username } }} />;
            })}
          </div>
        </div>
      </ProfilePageContainer>
    </>
  );
};

export default Profile;
