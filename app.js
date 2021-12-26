const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Show static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Blessedmate",
    title: "Express Webapp",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Blessedmate",
    title: "Express Webapp",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Blessedmate",
    title: "Express Webapp",
  });
});

// Any undefined route
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
