// handling request coming from post route
const express = require("express");
const postRouter = express.Router();

postRouter.get("/", (req, res) => res.status(200).send("post route"));

module.exports = postRouter;
