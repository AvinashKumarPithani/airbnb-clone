const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  console.log("Third Middleware", req.url, req.method);
  res.status(202).sendFile(path.join(rootDir,'views', 'addHome.html'));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log("Fourth Middleware", req.url, req.method, req.body);
  res.status(203).sendFile(path.join(rootDir,'views', 'homeAdded.html'));
});

module.exports = hostRouter;