import axios from 'axios';
import react, { useState } from 'react';

const NewComment = ( {id}) => {

    const [comment, setComment] = useState();


    const onComment = () => {
        console.log({
            comment
          });



          axios.post('http://localhost:3002/post/${id}/comment', {"comment": comment} )
            .then(response => {
              console.log(response.data);
            })
            .catch((error) => console.log(error));
    }


    
    
    return (
    <div>
    <div>
        <input type='text' placeholder="comment" value={comment} onChange={e => setComment(e.target.value)}></input>
    </div>
    <button onClick={onComment}>
        Comment
    </button>
    </div>
    )} 



export default NewComment;