var express = require("express");
var router = express.Router();
const User = require("../models/user");
const Todo = require("../models/todo");
const { Response } = require("../helpers/utils");

/* GET todos listing. */
router.get("/", async function (req, res, next) {
  try {
    const todoName = await Todo.find();
    res.status(200).json(new Response(todoName));
  } catch (error) {
    res.status(500).json(new Response(error, false));
  }
});

router.post("/", async function (req, res, next) {
  try {
    const user = await User.findById(req.body.executor);
    const createTodo = await Todo.create(req.body);
    user.todos.push(todo)
    res.status(201).json(new Response(createTodo));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(new Response(updateTodo));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const updateTodo = await Todo.findOneAndDelete(req.params.id);
    res.status(201).json(new Response(updateTodo));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

module.exports = router;
