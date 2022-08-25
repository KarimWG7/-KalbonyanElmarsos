require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndRemove("6306734edd7194325e3804b7")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((tasks) => {
//     console.log(tasks);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const findTaskAndRemove = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  console.log(task);
  console.log(count);
}
findTaskAndRemove("630508f6a2cac95c277320ce").catch(err => {
  console.log(err)
})
