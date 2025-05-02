/*
 Show Route:

 implement: GET/posts/:id

 GET  /posts/:id  to get one post (using id)
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
        id: "1a",
        username: "zaheerabbas",
        content: "I Love Coding"
    },

    {
        id: "2b",
        username: "imadali",
        content: "I Love cooking"
    },

    {
        id: "3c",
        username: "nasirali",
        content: "I Love driving"
    },

    {
        id: "4d",
        username: "jabbarali",
        content: "I Love Pakistan"
    },

    {
        id: "5e",
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
   // res.send("post request working");

   res.redirect("/posts");
})



app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    console.log(id);
    res.render("show.ejs", {post});

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})