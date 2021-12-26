const express = require("express");
const app = express();

const port = 8080;

// Show static content
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

// Any undefined route
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
