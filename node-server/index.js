const express = require('express')
const port = 3002
const cors = require('cors');


const post1 = {
  id: 1,
  title: "Sheesh",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  comments: ["Test Comment", "Test Comment 2"],
}

const post2 = {
  id: 2,
  title: "Sheesh 2",
  body: "A whole secopnd post",
  comments: ["Low engagement gang"],
}

const post3 = {
  id: 2,
  title: "Sheesh 2",
  body: "A whole secopnd post",
  comments: ["Low engagement gang"],
}

let data= {0:post1, 1:post2, 3:post3}


const app = express();
app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
  res.send(Object.values(data))
})

app.post('/post', (req, res) => {
  if (data[req.body.id]) {
    throw new Error("Post exists!")
  }
  const newPost = {id:req.body.id, color:req.body.col, comments:req.body.com, imgid: req.body.imgid}
  data[req.body.id] = newPost
  res.send(newPost)
})

app.post('/post/:id/comment', (req, res) => {
  const post = data[req.params.id]
  post.comments = post.comments.concat(req.body.newComment)
  res.send(post)
})

app.listen(port, () => {
  console.log(`Block Server listening at http://localhost:${port}`)
})
