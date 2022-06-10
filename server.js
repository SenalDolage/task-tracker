require('dotenv').config()
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./database/connect");
const port = 3000;

connectDb();
app.use(express.json());
app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Task Manager");
});

app.listen(port, console.log(`server is listening in ${port}`));
