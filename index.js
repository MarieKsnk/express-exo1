import express from "express";
import actors from "./data/actors.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/actors", (req, res) => {
  res.json(actors);
});

app.get("/actors/:id", (req, res) => {
  const actorID = req.params.id;
  const actorByID = actors.find((actor) => actor.id == actorID);
  if (!actorByID) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(actorByID);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
