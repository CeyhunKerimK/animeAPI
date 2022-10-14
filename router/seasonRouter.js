const express = require("express");
const seasonRouter = express.Router();
const seasonController = require("../controllers/season");

seasonRouter.get("/:id/show-one-season/:id",seasonController.seasonCaller);
seasonRouter.post("/:id/add-new-season",seasonController.seasonSend);
seasonRouter.patch("/:id/delete-season/:name",seasonController.seasonDeleter);

module.exports = seasonRouter;