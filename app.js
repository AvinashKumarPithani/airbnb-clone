const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const path = require("path");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
  console.log("First middleware", req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
