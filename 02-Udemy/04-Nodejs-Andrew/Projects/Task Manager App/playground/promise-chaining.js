require("../src/db/mongoose");
const User = require("../src/models/user.js");

User.findByIdAndUpdate("6304ad815ac759132b721529", { age: 18 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 18 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
