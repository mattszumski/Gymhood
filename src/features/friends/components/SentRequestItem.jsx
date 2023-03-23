import React, { useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const SentRequestItem = (props) => {
  const { id, username } = props.user;
  const [isCanceled, setIsCanceled] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  //handle cancel request
  const handleCancel = (event) => {
    axiosPrivate
      .post("/friend/request/cancel", { recipientId: id })
      .then((result) => {
        //TODO
      })
      .catch((error) => {
        //TODO
        console.log(error);
      });
    setIsCanceled(true);
  };

  return !isCanceled ? (
    <div className="request-sent">
      <p>Request pending for: {username}</p>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  ) : (
    <div className="request-canceled">Friend request for user {username} has been canceled</div>
  );
};

export default SentRequestItem;
