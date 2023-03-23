import styled from "styled-components";

export const PostCommentContainer = styled.div`
  display: flex;
  padding: 5px;
  margin: 0.5rem 5px;

  .comment-profile-photo {
    width: 75px;
  }
  .comment-body {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.4);
    color: #000;
    border-radius: 10px;
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    max-width: 75%;

    .comment-body-username {
      font-weight: 700;
    }
    .comment-body-content {
      display: flex;
      flex-wrap: wrap;
      word-break: break-all;
    }
  }
`;
