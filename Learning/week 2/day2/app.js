import express from "express";
import tasksList from "./tasks.js";

let tasks = [...tasksList];
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(express.json());

app.get("/tasks", (req, res) => {
  const { completed } = req.query;

// FIXME: QUERY PARAMS ARE NOT WORKING

  if (completed) {
    const filteredTasks = tasks.find((task) => {
      task.completed === completed;
    });
    res.json(tasks);
  }
});

app.post("/tasks", (req, res) => {
  const { task, category } = req.body;

  console.log(tasks.length);
  const newTask = {
    id: tasks.length + 1,
    task,
    category,
    createdAt: "1/11/2026",
    completed: false,
  };
  console.log(newTask);
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== 1) {
    tasks[index].completed = req.body.completed;
    tasks[index].task = req.body.task;
    res.json(tasks[index]);
  } else {
    res.status(404).send("task not found");
  }
});

app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    throw new Error("Task not found");
  } else if (task === isNaN) {
    throw new Error("invalid task");
  }
  res.send(task);
});

app.delete("/tasks/:id", (req, res) => {
  let taskId = req.params.id;
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== 1) {
    tasks.splice(index, 1);

    res.status(204).send("Task deleted successfully");
  } else {
    res.status(404).send("Task not found");
  }
});

app.listen(port, () => {
  console.log("App started on port: ", port);
});
