const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../src/models/user");
const Task = require("../../src/models/task");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "user",
  email: "user@example.com",
  password: "userpass",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT),
    },
  ],
};
const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  name: "karim",
  email: "karim@example.com",
  password: "karimpass",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT),
    },
  ],
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: "first task",
  completed: false,
  owner: userOneId,
};
const taskOneId = taskOne._id
const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: "seconed task",
  completed: true,
  owner: userOneId,
};
const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: "third task",
  completed: true,
  owner: userTwoId,
};

const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  userOneId,
  userOne,
  setupDatabase,
  taskOneId,
  userTwo
};
