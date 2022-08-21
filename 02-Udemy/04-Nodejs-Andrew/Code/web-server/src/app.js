const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// define paths for express config
const publicDirPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Karim Ghanem",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Karim Ghanem",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "This is the help message",
    name: "Karim Ghanem",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "clear",
    location: "Egypt Tanta",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404-page", {
    message: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404-page", {
    message: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
