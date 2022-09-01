const app = require("./app");

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});
