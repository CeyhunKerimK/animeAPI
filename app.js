const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
app.use(express.json());
const errorCatcher = require("./middleware/hataMiddleware");
require("./db/mondoDb");
const animeRouter = require("./router/animeRouter");
const characterRouter = require("./router/characterRouter");
const seasonRouter = require("./router/seasonRouter");
app.get("/", (req, res) => {
  res.send("you are on the index page")});
app.use("/api/anime", animeRouter);
app.use("/api/characters", characterRouter);
app.use("/api/season",seasonRouter);
app.use(errorCatcher);
app.listen(process.env.PORT, () => console.log(`${process.env.PORT} listening right now`));

