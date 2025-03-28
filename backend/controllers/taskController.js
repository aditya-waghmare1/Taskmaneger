const Task = require("../models/Task");

// Get All Tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Create a New Task
exports.createTask = async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
};

// Update Task
exports.updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
};

// Delete Task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
