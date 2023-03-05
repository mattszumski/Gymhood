import React, { useState, useEffect } from "react";
import { DashboardBackground } from "./components/DashboardBackground.styled";
import { Dashboard as DashboardStyled } from "./components/styled/Dashboard.styled";
import Post from "./components/Post";
import Navbar from "../../layouts/Navbar";
import CreatePost from "./components/CreatePost";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [needRefresh, setNeedRefresh] = useState(true);
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (needRefresh) {
      const fetchedPosts = axiosPrivate
        .get("/post/user/my")
        .then((result) => {
          setPosts(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setNeedRefresh(false);
    return () => {
      //code to run when component unmounts
    };
  }, [needRefresh]);

  //get all post of his friends to fill the feed
  //menu to check profile
  //search for friends: by name, gym, city etc. (profile information)
  //sending friend requests
  // accepting/rejecting friend requests
  //showing/checking friends

  return (
    <>
      <Navbar />
      <DashboardBackground className="dashboard">
        <DashboardStyled>
          <CreatePost refreshFn={setNeedRefresh} />
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </DashboardStyled>
      </DashboardBackground>
    </>
  );
};

export default Dashboard;
