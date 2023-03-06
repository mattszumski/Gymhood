import React, { useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const SentRequestItem = (props) => {
  const { username } = props.user;
  const [isCanceled, setIsCanceled] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  //handle cancel request
  const handleCancel = (event) => {
    setIsCanceled(true);
    //TODO: no proper route on the backend
  };

  return !isCanceled ? (
    <div>
      <p>Request pending for: {username}</p>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  ) : (
    <div>Friend request for user {username} has been canceled</div>
  );
};

export default SentRequestItem;
