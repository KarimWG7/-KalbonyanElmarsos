require("../src/db/mongoose");
const User = require("../src/models/user.js");

// User.findByIdAndUpdate("6304ad815ac759132b721529", { age: 18 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 18 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateAgeAndCount = async (id, age) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, {
      age,
    });
    const count = await User.countDocuments({age});
    console.log(updatedUser);
    return count
  } catch (err) {
    console.log(err);
  }
};
updateAgeAndCount("6304ad815ac759132b721529", 55);
