const { urlencoded } = require("body-parser");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First middleware", req.url, req.method);
  next();
});

app.use(urlencoded());

app.get("/", (req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  res.status(201).send(`
  <h1>Welcome to airbnb</h1>
  <a href="/add-home">Add Home</a>
`);
});
app.get("/add-home", (req, res, next) => {
  console.log("Third Middleware", req.url, req.method);
  res.status(202).send(`
  <h1>Registe your Home here..</h1>
  <form action="/add-home" method="post">
    <input type="text" name="home" id="home" placeholder="Home Name" />
    <input type="submit">
  </form>
`);
});
app.post("/add-home", (req, res, next) => {
  console.log("Fourth Middleware", req.url, req.method, req.body);
  res.status(203).send(`
    <h1>Home Registered Successfully</h1>
    <a href="/add-home">Go to airbnb Home Page</a>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
