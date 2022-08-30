const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET /tasks?completed=true
//GET /tasks?completed=true&limit=2
//GET /tasks?completed=true&limit=2&skip=2
//GET /tasks?sortBy=createdAt_desc

router.get("/tasks", auth, async (req, res) => {
  const match = {};
  const sort = {};
  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split("_");
    sort[parts[0]] = parts[1] === "asc" ? 1 : -1;
  }
  try {
    // const tasks = await Task.find({ owner: req.user._id });
    await req.user.populate({
      path: "tasks",
      match,
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        sort,
      },
    });

    res.send(req.user.tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findOne({ _id: taskId, owner: req.user._id });
    if (!task) {
      return res.status(404).send("there is no task");
    }
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const taskId = req.params.id;
  const allowedUpdates = ["description", "completed"];
  const updates = Object.keys(req.body);
  const isValid = updates.every((item) => allowedUpdates.includes(item));

  if (!isValid) {
    return res.status(400).send({ error: "Invalid Operation" });
  }

  try {
    const task = await Task.findOne({ _id: taskId, owner: req.user._id });
    if (!task) {
      return res.status(404).send({ error: "Task not found" });
    }
    updates.forEach((update) => {
      task[update] = req.body[update];
    });
    task.save();

    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findOneAndDelete({
      _id: taskId,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).send({ error: "The task isn't there already" });
    }
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
