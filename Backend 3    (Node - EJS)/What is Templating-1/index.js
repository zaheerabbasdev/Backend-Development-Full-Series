// Templating EJS(Embedded JavaScript templates) : Templates are the layout.
// EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 

// to install EJS run the command (npm install ejs).
const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
