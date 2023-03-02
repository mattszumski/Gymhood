import { Post as PostContainer } from "../../../components/styled/Post.styled";

const Post = (props) => {
  const { id, text, createdAt } = props.post;
  const { id: userId, username } = props.post.user;

  const createdDateString = new Date(Date.parse(createdAt)).toLocaleDateString({ year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" });

  return (
    <PostContainer>
      <div className="title">
        <p>Post by {username}</p>
        <p>created at {createdDateString}</p>
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
