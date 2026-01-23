import express from "express";
import mongoose from "mongoose";

const app = express();

const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  console.log("reached");
  res.send("Hello world!!!");
});

app.get("/home", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("App started on port ", port);
});
