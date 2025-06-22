const express = require("express");
const userRouter = express.Router();
const path = require("path");

userRouter.get("/", (req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  res.status(201).sendFile(path.join(__dirname, '../','views', 'home.html'));
});

module.exports = userRouter;