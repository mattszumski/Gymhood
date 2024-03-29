import { useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const FriendRequestItem = (props) => {
  const { id, username } = props.user;
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRefused, setIsRefused] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  //handle accept request
  const handleAccept = (event) => {
    setIsAccepted(true);
    axiosPrivate.post("/friend/request/accept", { recipientId: id }).catch((error) => {
      console.log(error);
    });
  };
  //handle refuse request
  const handleRefuse = (event) => {
    setIsRefused(true);
    axiosPrivate.delete("/friend/request", { params: { senderId: id } }).catch((error) => {
      console.log(error);
    });
  };

  return isAccepted ? (
    <div className="request-accepted">Accepted</div>
  ) : isRefused ? (
    <div className="request-refused">Refused</div>
  ) : (
    <div className="request-received">
      <h4>New request from:</h4>
      <p>{username}</p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleRefuse}>Refuse</button>
    </div>
  );
};

export default FriendRequestItem;
