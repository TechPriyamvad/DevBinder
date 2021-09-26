// handling request coming from auth route
const express = require("express");
const authRouter = express.Router();

authRouter.get("/", (req, res) => res.status(200).send("Auth route"));

module.exports = authRouter;
