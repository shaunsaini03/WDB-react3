import {React, useState, useEffect} from 'react';
import axios from "axios";
import Post from "./Post";
import NewPost from "./NewPost";
import NewComment from './NewComment';

const Feed = () => {

  const [card, setCard] = useState([]);



  const getPostData = () => {
    axios
      .get("http://localhost:3002/posts")
      .then((card) => setCard(card.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPostData();
  });

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        card.map(d =>
          <Post title={d.title} body={d.body} key={d.id} />
        )
      }

      <NewPost/>
    </div>
  )

}


export default Feed;
