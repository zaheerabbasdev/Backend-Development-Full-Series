/*
(Index Route)

implement: GET/posts
GET /posts to get data for all posts

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


];
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})