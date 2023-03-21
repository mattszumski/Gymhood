import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import FriendBox from "./FriendBox";
import { FriendsContainer as StyledContainer } from "./styled/FriendsContainer.styled";

const FriendsContainer = (props) => {
  const [friends, setFriends] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get(`/friend/user/${props.userId}`)
      .then((result) => {
        setFriends(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.userId]);

  return (
    <StyledContainer>
      {friends.length > 0 &&
        friends.map((friendData) => {
          const userData = { userId: friendData.id, username: friendData.username, firstname: friendData.firstname, lastname: friendData.lastname, imgPath: friendData.userProfile?.File?.path };
          return <FriendBox userData={userData} />;
        })}
      {!friends.length && <p>This user does not have any friends yet!</p>}
    </StyledContainer>
  );
};

export default FriendsContainer;
