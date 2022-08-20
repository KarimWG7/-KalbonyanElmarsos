const { geocode } = require("./utils/geocode.js");
const { forecast } = require("./utils/forecast.js");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error1, response) => {
    if (error1) {
      console.log("Error:- ", error1);
    } else {
      forecast(response, (error2, response2) => {
        if (error2) {
          console.log(error2);
        } else {
          console.log(response.location);
          console.log(response2);
        }
      });
    }
  });
}
