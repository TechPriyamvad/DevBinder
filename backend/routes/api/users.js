// handling request coming from user route
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => res.status(200).send("User route"));

module.exports = userRouter;
