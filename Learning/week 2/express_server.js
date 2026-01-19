//import express

import express from "express";

//create express app
const app = express();

//define port, usually as a .ENV var
const port = 3000;

//Define routes
app.get("/", (req, res) => {
  res.json({ message: "API running" });
});
app.get("/health", (req, res) => {
  res.json({ status: 200, message: "Url Working" });
});

//start server

app.listen(port, () => {
  console.log("App is running on port: ", port);
});
