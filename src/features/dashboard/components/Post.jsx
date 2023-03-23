import { useState } from "react";
import { NavLink } from "react-router-dom";
import format from "date-fns/format";

import getConst from "../../../utils/getConsts";
import useInputState from "../../../hooks/useInputState";

import { Post as PostContainer } from "../../../components/styled/Post.styled";
import { AddCommentBox } from "./styled/AddCommentBox.styled";

import defaultThumbnail from "../../../assets/default-profile-pic-t.png";
import PostImage from "./PostImage";
import AddPostComment from "./AddPostComment";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import PostComment from "./PostComment";

const Post = ({ post }) => {
  const { id, text, createdAt } = post;
  const { id: userId, username } = post.user;
  const imgSrcPath = post.user?.userProfile?.File?.path;
  const base_url = getConst("BASE_URL");
  const createdDateString = format(new Date(Date.parse(createdAt)), "dd-MM-yyyy\tHH:mm");

  const axiosPrivate = useAxiosPrivate();

  const [postComments, setPostComments] = useState(post?.PostComments || []);
  const addComment = (newComment) => {
    axiosPrivate
      .post("/post/comment", { postId: id, text: newComment })
      .then((result) => {
        if (result) {
          return true;
        }
        return false;
      })
      .then((success) => {
        axiosPrivate.get("/post/comment", { params: { postId: id } }).then((result) => {
          if (result?.data) {
            setPostComments(result.data);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //request comments for this piece from server
  };

  return (
    <PostContainer>
      <div className="title">
        <NavLink to={`/profile/${userId}`}>
          <img className={"profile"} src={imgSrcPath ? base_url + imgSrcPath.replace("/media/", "/media/md-") : defaultThumbnail} />
        </NavLink>
        <p className="createdUser">By {username}</p>
        <p className="createdTimestamp">Created at {createdDateString}</p>
      </div>
      {text && <div className="body">{text}</div>}
      {post?.Files && (
        <div className="media">
          {post.Files.map((photo) => {
            return <PostImage key={photo.id} postId={id} photo={photo} base_url={base_url} />;
          })}
        </div>
      )}

      <div className="actions">
        <div className="btn">Like</div>
        <div className="btn">Comment</div>
      </div>
      <div className="comments-container">
        {/* TODO: Show only 2-3 comments and hide rest into 'show all comments' prompt that will show the rest after click */}
        {postComments.length > 0 &&
          postComments.map((comment) => {
            return <PostComment key={comment.id} comment={comment} />;
          })}
      </div>
      <div className="add-comments-container">
        <AddPostComment addComment={addComment} />
      </div>
    </PostContainer>
  );
};

export default Post;
