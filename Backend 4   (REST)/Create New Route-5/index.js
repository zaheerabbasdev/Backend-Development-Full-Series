/*
(Create New Route)

implement: POST/posts

POST /posts to add a new post.


two routes:

1: Serve the form    GET    /posts/new
2: Add the new post  POST   /posts

*/

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));



let posts = [
    {
        username: "zaheerabbas",
        content: "I Love Coding"
    },

    {
        username: "imadali",
        content: "I Love cooking"
    },

    {
        username: "nasirali",
        content: "I Love driving"
    },

    {
        username: "jabbarali",
        content: "I Love Pakistan"
    },

    {
        username: "nomankhan",
        content: "I Love dubai"
    },
]


app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
   //   console.log(req.body);
    res.send("post request working");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})