const request = require("postman-request");

const forecast = ({ lat, long }, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=ee93c028edaeb7d8229bb5f574f2da1d&query=${lat},${long}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to wheater service!", null);
    } else if (response.body.error) {
      callback("Unable to find location! :(", null);
    } else {
      const data = response.body.current;
      callback(null, data);
    }
  });
};
module.exports = { forecast };
