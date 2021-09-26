// handling request coming from user route
const express = require("express");
const userRouter = express.Router();
const { check, validationResult } = require("express-validator");

// @route    POST api/users
// @desc     Register user
// @access   Public
// validating data from frontend
userRouter.post(
  "/",
  check("name", "Name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  (req, res) => {
    console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      res.status(200).send("User route");
    }
  }
);

module.exports = userRouter;
