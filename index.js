import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;


let posts = [

];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/posts", (req, res) => {
  res.json(posts)
})


app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  console.log(req.params)
  const foundPost = posts.find((post) => post.id === id)
  res.json(foundPost)
})

function formatDate(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}


app.post("/posts", (req, res) => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: formattedDate
  }
  posts.push(newPost)
  console.log(newPost)
  res.send(newPost)
})


app.patch("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const foundPost = posts.find((post) => post.id === id);
  foundPost.title = req.body.title || foundPost.title;
  foundPost.content = req.body.content || foundPost.content;
  foundPost.author = req.body.author || foundPost.author;
  res.json(foundPost);
})


app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const foundPost = posts.find((post) => post.id === id);
  posts.pop(foundPost);
  res.json(posts)
})

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
