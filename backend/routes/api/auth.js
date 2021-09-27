// handling request coming from auth route
const express = require("express");
const authRouter = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
authRouter.get("/", auth, async (req, res) => {
  try {
    // check  if any user exist with the id given by token
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(400).send("user doesn't exist");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = authRouter;
