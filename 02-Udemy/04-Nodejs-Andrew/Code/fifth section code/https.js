const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=ee93c028edaeb7d8229bb5f574f2da1d&query=40,-75`;

const request = http.request(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  res.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(error);
})
request.end();
