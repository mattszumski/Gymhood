import { NavLink } from "react-router-dom";
import { Post as PostContainer } from "../../../components/styled/Post.styled";
import defaultThumbnail from "../../../assets/default-profile-pic-t.png";
import getConst from "../../../utils/getConsts";
import format from "date-fns/format";
import { useMemo } from "react";
import PostImage from "./PostImage";

const Post = (props) => {
  const { id, text, createdAt } = props.post;
  const { id: userId, username } = props.post.user;
  const imgSrcPath = props.post.user?.userProfile?.File?.path;
  const base_url = getConst("BASE_URL");

  const createdDateString = format(new Date(Date.parse(createdAt)), "dd-MM-yyyy\tHH:mm");

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
      {props.post?.Files && (
        <div className="media">
          {props.post.Files.map((photo) => {
            return <PostImage key={photo.id} postId={id} photo={photo} base_url={base_url} />;
          })}
        </div>
      )}

      <div className="actions">
        <div className="btn">Like</div>
        <div className="btn">Comment</div>
      </div>
    </PostContainer>
  );
};

export default Post;
