const express = require("express");
const Task = require("../models/task");

const router = express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).send("there is no task");
    }
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;
  const allowedUpdates = ["description", "completed"];
  const updates = Object.keys(req.body);
  const isValid = updates.every((item) => allowedUpdates.includes(item));

  if (!isValid) {
    return res.status(400).send({ error: "Invalid Operation" });
  }

  try {
    const task = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).send({ error: "User not found" });
    }

    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      return res.status(404).send({ error: "The task isn't there already" });
    }
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
