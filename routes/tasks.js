const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// Define Schema
/**
 * @swagger
 *  components:
 *    schemas:
 *      Task:
 *        type: object
 *        required:
 *          - name
 *          - completed
 *        properties:
 *         name:
 *          type: string
 *          description: The name of the Task.
 *         completed:
 *          type: boolean
 *          description: The status of the Task.
 *        example:
 *          name: Walk the dog.
 *          completed: true
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: API to manage Tasks
 */

// Get All, Post Documentation
/**
 * @swagger
 *  /:
 *   get:
 *    summary: Gets all the Tasks
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: Success
 *   post:
 *     summary: Create a new Task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Task created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Server error
 */

router.route("/").get(getAllTasks).post(createTask);

// Get by Id, Patch, Delete Documentation
/**
 * @swagger
 *  /{id}:
 *   get:
 *    summary: Get Task by Id
 *    tags: [Tasks]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *    responses:
 *      200:
 *        description: Success
 *        contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *      404:
 *        description: The task was not found
 *   patch:
 *    summary: Update the Task by id
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The task id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The task was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      404:
 *        description: The task was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task was deleted
 *       404:
 *         description: The task was not found
 */

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
