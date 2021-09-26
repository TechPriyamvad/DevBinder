// handling request coming from profile route
const express = require("express");
const profileRouter = express.Router();

profileRouter.get("/", (req, res) => res.status(200).send("Profile route"));

module.exports = profileRouter;
