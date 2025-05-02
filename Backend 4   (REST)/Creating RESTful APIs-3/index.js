/*
(Creating RESTful APIs)

GET /posts to get data for all posts

POST /posts to add a new post

GET /posts/:id to get one post(using id)

PATCH /posts/:id to update specific post

DELETE /post/:id to delete specific post

*/


const express = require("express");
const app = express();
const port = 8080;
const path = require("path"); // to use the views and public folder in index.js require the path and set the path for views and public
app.use(express.urlencoded({extended: true})); // to parse the data 

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Serving working well");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})