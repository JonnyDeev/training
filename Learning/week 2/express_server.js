//import express

import express from "express";

import { users } from "../Js/day6/data.js";

//create express app
const app = express();

//define port, usually as a .ENV var
const port = 3000;

//Define routes
app.get("/", (req, res) => {
  res.json({ message: "API running" });
});
app.get("/products/:id", (req, res) => {
  const idProducto = req.params.id;
  res.send(`You are trying to access product ${idProducto}`);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const userData = users.find((user) => user.id === userId);
  if (!userData) {
    res.send("user not found");
  } else {
    res.json(userData);
  }
});
//start server

app.listen(port, () => {
  console.log("App is running on port: ", port);
});
