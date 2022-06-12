require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();

const tasks = require("./routes/tasks");
const connectDb = require("./database/connect");
const PORT = 3000;

// Connecting to DB
connectDb();

// API documentation options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager ExpressJS API with Swagger",
      version: "0.1.0",
      description:
        "This is a CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Senal Dolage",
        url: "https://senaldolage.com",
        email: "senal.dolage@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1/tasks",
      },
    ],
  },
  apis: ["./routes/tasks.js"],
};

const specs = swaggerJsDoc(options);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { explorer: true })
);

app.use(express.json());
app.use(cors());
app.use("/api/v1/tasks", tasks);

app.listen(PORT, console.log(`server is listening in ${PORT}`));
