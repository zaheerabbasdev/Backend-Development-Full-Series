/*
Create id for post

UUID Package

Universally unique identifier

npm install uuid

*/


const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid'); // creating ids


app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));



let posts = [
    {
        id: uuidv4(),
        username: "zaheerabbas",
        content: "I Love Coding"
    },

    {
        id: uuidv4(),
        username: "imadali",
        content: "I Love cooking"
    },

    {
        id: uuidv4(),
        username: "nasirali",
        content: "I Love driving"
    },

    {
        id: uuidv4(),
        username: "jabbarali",
        content: "I Love Pakistan"
    },

    {
        id: uuidv4(),
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
    // code for creating ids
    let id = uuidv4();
    posts.push({id, username, content});
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


