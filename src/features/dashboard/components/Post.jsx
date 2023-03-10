import { NavLink } from "react-router-dom";
import { Post as PostContainer } from "../../../components/styled/Post.styled";
import defaultThumbnail from "../../../assets/default-profile-pic-t.png";

const Post = (props) => {
  const { id, text, createdAt } = props.post;
  const { id: userId, username } = props.post.user;

  const createdDateString = new Date(Date.parse(createdAt)).toLocaleDateString({ year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" });

  return (
    <PostContainer>
      <div className="title">
        <NavLink to={`/profile/${userId}`}>
          <img className={"profile"} src={defaultThumbnail} />
        </NavLink>
        <p className="createdUser">By {username}</p>
        <p className="createdTimestamp">Created at {createdDateString}</p>
      </div>
      <div className="body">{text}</div>
      <div className="actions">
        <div className="btn">Like</div>
        <div className="btn">Comment</div>
      </div>
    </PostContainer>
  );
};

export default Post;
