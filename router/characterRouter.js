const express = require("express");
const characterRouter = express.Router();
const characterController = require("../controllers/character");

characterRouter.get("/show-character/:name",characterController.showCharacter);
characterRouter.post("/add-new-character/:id",characterController.postNewCharacter);
characterRouter.patch("/:id/update-character/:name",characterController.updateCharacter);
characterRouter.patch("/:id/delete-character/:name",characterController.characterDeleterFromAnime);

module.exports = characterRouter;