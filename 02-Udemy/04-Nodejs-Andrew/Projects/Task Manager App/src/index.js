const express = require("express");

require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user.js");
const taskRouter = require("./routers/task.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is listening on https://localhost:3000");
});

// const main = async () => {
//   // const task = await Task.findById("630cdcda2dab3ddd9f63a909");
//   // await task.populate("owner");
//   // console.log(task.owner);

//   const user = await User.findById("630cdb785e00f6763a357e3e");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };
// main();
