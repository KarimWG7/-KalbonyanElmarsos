const express = require("express");

require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user.js");
const taskRouter = require("./routers/task.js");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET request are disabled")
//   } else {
//     next();
//   }
// });

//  the site is maintainig itself rightnow
// app.use((req, res, next) => {
//   res.status(503).send("The site is under maintaining");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is listening on https://localhost:3000");
});
