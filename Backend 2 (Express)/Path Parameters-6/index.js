const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("Hello i am root");
})


app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    console.log(req.params);
   // res.send("Hello i am root")
   res.send(`Welcome to the page of @${username}`)
})
