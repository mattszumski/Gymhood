import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Navbar from "../../layouts/Navbar";
import FriendRequestItem from "./components/FriendRequestItem";
import SentRequestItem from "./components/SentRequestItem";
import { Container } from "./components/styled/Container.styled";
import { Page } from "./components/styled/Page.styled";

const FriendRequests = () => {
  const [receivedRequests, setReceivedRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get("/friend/request")
      .then((result) => {
        setReceivedRequests(result.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosPrivate
      .get("/friend/request/sent")
      .then((result) => {
        setSentRequests(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Page>
        <Container>
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
        </Container>
        <Container>
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
        </Container>
      </Page>
    </>
  );
};

export default FriendRequests;
