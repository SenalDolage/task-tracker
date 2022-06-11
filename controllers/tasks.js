const Task = require("../models/task");

// Getting All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Get Task By Id
const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findById({ _id: taskId });
    if (!task) {
      res.send(404).json({ message: "Task not found" });
    }
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Create a new Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Update a Task
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.send(404).json({ message: "Task not found" });
    }
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Delete a Task
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      res.send(404).json({ message: "Task not found" });
    }
    res.status(200).json({ sucess: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
