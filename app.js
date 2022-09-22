const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
app.use(express.json());
const hataMiddleware = require("./middleware/hataMiddleware");
require("./db/mondoDb");
const animeRouter = require("./router/animeRouter");
app.get("/", (req, res) => {
  res.send("burası app.js sayfası.")});
app.use("/api/animes", animeRouter);
app.use(hataMiddleware);
app.listen(process.env.PORT, () => console.log(`${process.env.PORT} dinleniyor.`));

