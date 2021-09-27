// handling request coming from user route
const express = require("express");
const userRouter = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // USER REGISTRATION
    const { name, email, password } = req.body;

    try {
      // check if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      //get image linked to that email account using gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      //encrypt password
      // generate hash code for password
      const salt = await bcrypt.genSalt(10);
      // save hashcode
      user.password = await bcrypt.hash(password, salt);

      // save user to database
      await user.save();

      res.status(200).json({user})
    } catch (error) {
      console.log({ msg: error.message });
      res.status(500).send("server error");
    }
  }
);

module.exports = userRouter;
