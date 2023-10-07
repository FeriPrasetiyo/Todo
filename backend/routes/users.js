var express = require("express");
var router = express.Router();
const User = require("../models/user");
const { Response } = require("../helpers/utils");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const userName = await User.find();
    res.status(200).json(new Response(userName));
  } catch (error) {
    res.status(500).json(new Response(error, false));
  }
});

router.post("/", async function (req, res, next) {
  try {
    const createUser = await User.create(req.body);
    res.status(201).json(new Response(createUser));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(new Response(updateUser));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const updateUser = await User.findOneAndDelete(req.params.id);
    res.status(201).json(new Response(updateUser));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

module.exports = router;
