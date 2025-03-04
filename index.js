import express from "express";
import actors from "./data/actors.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/actors", (req, res) => {
  res.json(actors);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
