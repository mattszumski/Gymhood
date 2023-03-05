import React from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useInputState from "../../../hooks/useInputState";
import { PostCreationContainer } from "./styled/CreatePost.styled";

const CreatePost = (props) => {
  console.log(props);
  const { refreshFn } = props;
  const [text, setText, resetText] = useInputState("");
  const axiosPrivate = useAxiosPrivate();

  const handleCreatePost = (event) => {
    axiosPrivate
      .post("/post/", { text })
      .then((result) => {
        console.log(result);
        resetText();
        refreshFn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // send request to add new post and refresh the dashboard for user

  return (
    <PostCreationContainer>
      <textarea placeholder="Start typing new post..." onChange={setText} value={text}></textarea>
      <button onClick={handleCreatePost}>Add post</button>
    </PostCreationContainer>
  );
};

export default CreatePost;
