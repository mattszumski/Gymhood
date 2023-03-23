import { useState } from "react";
import { AddCommentBox } from "./styled/AddCommentBox.styled";

const AddPostComment = ({ addComment }) => {
  const [text, setText] = useState("");

  const handleInput = (event) => {
    setText(event.target.innerHTML);
  };

  const handleAddComment = () => {
    addComment(text);
  };

  return (
    <AddCommentBox>
      <div className="add-comment-prompt" contentEditable onInput={handleInput}></div>
      <div className="add-comment-actions">
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </AddCommentBox>
  );
};

export default AddPostComment;
