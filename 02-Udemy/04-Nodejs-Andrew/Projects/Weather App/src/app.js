const path = require("path");
const express = require("express");
const hbs = require("hbs");
const { geocode } = require("./utils/geocode");
const { forecast } = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

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
    title: "Weather",
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
  const address = req.query.address;
  if (!address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  geocode(address, (err, response) => {
    if (err) {
      return res.send({
        error: err,
      });
    }
    forecast(response, (error, data) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: `The weather is ${data.weather_descriptions[0]} and it's currently ${data.temperature} degrees out there and it feels like ${data.feelslike} degrees and the humidity is ${data.humidity}%.`,
        location: response.location,
        address: address,
      });
    });
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

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
