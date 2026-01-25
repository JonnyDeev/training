import express from "express";
import mongoose from "mongoose";
import Task from "./Schema.js";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/taskList")
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error(err));
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  console.log("reached");
  res.send("Hello world!!!");
});

//VALIDATION MIDDLEWARE

const validateTask = (req, res, next) => {
  if (!req.body.task || req.body.task.length < 4) {
    return res
      .status(400)
      .json({ message: "Task must be at least 4 characters long" });
  }
  next();
};

//RETRIEVE ALL
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

//CREATE A NEW TASK
app.post("/tasks", validateTask, async (req, res) => {
  const { task } = req.body;
  const newTask = new Task({
    task,
  });
  await newTask.save();
  res.json(newTask);
});

//DELETE A TASK
app.delete("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const deleted = await Task.findByIdAndDelete(taskId);
    if (deleted) {
      res.json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ message: "Task not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong :(" });
  }
});

//MODIFY A TASK
app.patch("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ mensaje: "Task not found!" });
    }
    //UPDATE FIELD FROM REQ.BODY
    const { task: taskText, completed } = req.body;
    if (taskText !== undefined) task.task = taskText;
    if (completed !== undefined) task.completed = completed;
    const updatedTask = await task.save();
    res.status(200).json({ mensaje: "Task updated successfully", updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Something went wrong :(" });
  }
});

app.listen(port, () => {
  console.log("App started on port ", port);
});
