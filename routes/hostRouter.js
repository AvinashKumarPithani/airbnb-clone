const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
  console.log("Third Middleware", req.url, req.method);
  res.status(202).send(`
    <h1>Registe your Home here..</h1>
    <form action="/host/add-home" method="post">
      <input type="text" name="home" id="home" placeholder="Home Name" />
      <input type="submit">
    </form>
  `);
});
hostRouter.post("/host/add-home", (req, res, next) => {
  console.log("Fourth Middleware", req.url, req.method, req.body);
  res.status(203).send(`
    <h1>Home Registered Successfully</h1>
    <a href="/">Go to airbnb Home Page</a>
  `);
});

module.exports = hostRouter;