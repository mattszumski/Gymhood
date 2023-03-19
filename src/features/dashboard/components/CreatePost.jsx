import React, { useState } from "react";

import CreatePostModal from "./CreatePostModal";
import { PostCreationContainer } from "./styled/CreatePost.styled";

const CreatePost = (props) => {
  const { refreshFn } = props;
  const [isOpen, setIsOpen] = useState(false);

  // send request to add new post and refresh the dashboard for user
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <PostCreationContainer>
      {isOpen && <CreatePostModal refreshFn={refreshFn} closeFn={closeModal} />}
      <textarea placeholder="Start typing new post..." onFocus={openModal}></textarea>
    </PostCreationContainer>
  );
};

export default CreatePost;
