const express = require("express");
const userRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  res.status(201).sendFile(path.join(rootDir,'views', 'home.html'));
});

module.exports = userRouter;