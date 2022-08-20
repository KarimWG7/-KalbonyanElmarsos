const request = require("postman-request");

// const [lat, long] = navigator.geolocation.getCurrentPosition(position => {
//   let lat  = position.coords.latitude
//   let long  = position.coords.longitude
//   return [lat, long]
// })

const mapUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FyaW04NzEiLCJhIjoiY2w3MXF3Y3JwMGUzMDQwcWJodng5ZnpqOSJ9.u_oq5xdX9ZODBS2-CYFm5w&limit=1";
request({ url: mapUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to MapBox server!");
  } else if (
    response.body.features?.length === 0 ||
    response.body.message === "Not Found"
  ) {
    console.log("Failed to get the coordinates");
  } else if (response.body.message === "Not Authorized - Invalid Token") {
    console.log("You are not authorized to this this data!");
  } else {
    const data = response.body.features[0];
    const lat = data.center[1];
    const long = data.center[0];
    console.log(lat, long);
  }
});

const url = `http://api.weatherstack.com/current?access_key=ee93c028edaeb7d8229bb5f574f2da1d&query=37.806,-122.411`;
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to wheater service!");
  } else if (response.body.error) {
    console.log("Unable to find location! :(");
  } else {
    const data = response.body.current;
    console.log(
      `It's currently ${data.temperature} degrees out there. And it feels like ${data.feelslike}`
    );
    console.log(`It's ${data.weather_descriptions[0]}`);
  }
});
