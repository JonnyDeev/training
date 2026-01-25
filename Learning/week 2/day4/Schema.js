import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: { required: true, type: String },
  completed: { required: true, type: Boolean, default: false },
  createdAt: { required: true, type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
