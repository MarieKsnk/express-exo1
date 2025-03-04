import express from "express";
import actors from "./data/actors.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extented: true }));

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

app.post("/actors", (req, res) => {
  const { name, genre } = req.body;
  const newActor = {
    id: actors.length + 1,
    name,
    genre,
  };
  actors.push(newActor);
  return res.status(201).json(newActor);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
