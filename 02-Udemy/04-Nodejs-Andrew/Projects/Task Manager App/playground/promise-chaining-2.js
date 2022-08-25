require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndRemove("6306734edd7194325e3804b7")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((tasks) => {
    console.log(tasks);
  })
  .catch((err) => {
    console.log(err);
  });
