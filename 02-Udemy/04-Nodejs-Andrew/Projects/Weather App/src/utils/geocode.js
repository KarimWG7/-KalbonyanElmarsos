const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoia2FyaW04NzEiLCJhIjoiY2w3MXF3Y3JwMGUzMDQwcWJodng5ZnpqOSJ9.u_oq5xdX9ZODBS2-CYFm5w&limit=1`;

  request({ url, json: true }, (error, response) => {
    const features = response.body.features;
    if (error) {
      callback("Unable to connect to location services!", null);
    } else if (features.length === 0) {
      callback("Unable to find location, Try another search", null);
    } else {
      callback(undefined, {
        lat: features[0].center[1],
        long: features[0].center[0],
        location: features[0].place_name,
      });
    }
  });
};

module.exports = { geocode };
