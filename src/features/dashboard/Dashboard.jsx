import React, { useState, useEffect } from "react";
import { DashboardBackground } from "./components/DashboardBackground.styled";
import { Dashboard as DashboardStyled } from "./components/Dashboard.styled";
import Post from "./components/Post";
import Navbar from "../../layouts/Navbar";
import CreatePost from "./components/CreatePost";
import { axiosPrivate } from "../../lib/axios";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchedPosts = axiosPrivate
      .get("/post/user/my", { headers: { Authorization: `Bearer ${auth.accessToken}` } })
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      //code to run when component unmounts
    };
  }, []);

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
          {posts.map((post) => {
            return <Post post={post} />;
          })}
        </DashboardStyled>
      </DashboardBackground>
    </>
  );
};

export default Dashboard;
