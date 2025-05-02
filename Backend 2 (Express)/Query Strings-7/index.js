const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("Hello i am root");
})

app.get("/search", (req, res) =>{
   // console.log(req.query);
   let {q} = res.query;
    res.send(`Search resultsh for query: ${q}`);
})