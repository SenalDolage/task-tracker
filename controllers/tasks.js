const getAllTasks = (req, res) => {
  res.send("all items");
};

const getTask = (req, res) => {
  res.send("getTask");
};

const createTask = (req, res) => {
  res.send("all items1");
};

const updateTask = (req, res) => {
  res.send("createTask");
};

const deleteTask = (req, res) => {
  res.send("createTask");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
