import React from "react";
import { PostCommentContainer } from "./styled/PostCommentContainer.styled";

const PostComment = ({ comment }) => {
  return (
    <PostCommentContainer>
      <div className="comment-profile-photo">photo_</div>
      <div className="comment-body">
        <div className="comment-body-username">username_placeholder</div>
        <div className="comment-body-content">{comment.text}</div>
      </div>
    </PostCommentContainer>
  );
};

export default PostComment;
