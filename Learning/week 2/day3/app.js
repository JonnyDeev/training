import fs from "fs/promises";
import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

const FILE_PATH = "./tasks.json";

const readTasks = async () => {
  const data = await fs.readFile(FILE_PATH, "utf-8");
  return JSON.parse(data);
};

const writeTasks = async (task) => {
  await fs.writeFile(FILE_PATH, JSON.stringify(task, null, 2));
};

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (error) {
    console.error(error);
  }
});

//to add a new task, first we need to bring the file and create an array from it to current tasks
// then create new task object and push it to task array
app.post("/tasks", async (req, res) => {
  try {
    const tasks = await readTasks();
    const { id = Date.now(), task, category, completed = false } = req.body;
    const newTask = { id, task, category, completed };
    await writeTasks(newTask);
    if (res.status === 201) {
      res.json(newTask);
    }
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log("App started on port ", port);
});
