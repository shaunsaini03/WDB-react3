import react from "react";
import NewComment from "./NewComment";


const Post = ({ title, body }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <NewComment/>
  </div>
}

export default Post;
