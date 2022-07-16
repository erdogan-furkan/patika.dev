const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const { json } = require("body-parser");
const connectDatabase = require("./connectDatabase");
const Todo = require("./models/Todo");

dotenv.config({ path: "./config.env" });

connectDatabase();

const app = express();

app.use(cors());
app.use(json());

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();

    return res.send(todos);
  } catch (e) {
    console.log(e);
  }
});

app.post("/todos", async (req, res) => {
  try {
    const todo = await Todo.create({ title: req.body.title, completed: false });

    return res.send(todo);
  } catch (e) {
    console.log(e);
  }
});

app.patch("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const completed = Boolean(req.body.completed);

    const todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });

    return res.send(todo);
  } catch (e) {
    console.log(e);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await Todo.findByIdAndDelete(id);

    const todos = await Todo.find();

    return res.send(todos);
  } catch (e) {
    console.log(e);
  }
});

app.delete("/todos/clear/completed", async (req, res) => {
  try {
    await Todo.deleteMany({ completed: true });

    const todos = await Todo.find();

    return res.send(todos);
  } catch (e) {
    await Todo.deleteMany({ completed: true });

    const todos = await Todo.find();

    return res.send(todos);
  }
});

app.listen(
  process.env.SERVER_PORT,
  console.log(`Server running on port ${process.env.SERVER_PORT}`.green.bold)
);
