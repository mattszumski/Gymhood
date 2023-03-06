import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Navbar from "../../layouts/Navbar";
import FriendRequestItem from "./components/FriendRequestItem";
import SentRequestItem from "./components/SentRequestItem";

const FriendRequests = () => {
  //get received requests with options to accept or refuse
  //get sent requests

  const [receivedRequests, setReceivedRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get("/friend/request")
      .then((result) => {
        setReceivedRequests(result.data);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosPrivate
      .get("/friend/request/sent")
      .then((result) => {
        setSentRequests(result.data);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2>Received:</h2>
        <div>
          {receivedRequests.length === 0 ? (
            <p>No pending requests</p>
          ) : (
            receivedRequests.map((item) => {
              return <FriendRequestItem key={item.id} {...item} />;
            })
          )}
        </div>
        <h2>Sent:</h2>
        <div>
          {sentRequests.length === 0 ? (
            <p>No pending requests</p>
          ) : (
            sentRequests.map((item) => {
              return <SentRequestItem key={item.id} {...item} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default FriendRequests;
