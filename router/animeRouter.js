const animeRouter = require("express").Router();
const animeController = require("../controllers/anime");
const pictureController = require("../controllers/picture");
animeRouter.get("/get-all-anime",animeController.showAllData);
animeRouter.post("/add-new-anime", animeController.sendData);
animeRouter.get("/get-anime/:id", animeController.showOneData);
animeRouter.patch("/update-anime/:id",animeController.dataToUpdate);
animeRouter.delete("/delete-anime/:id", animeController.dataToDelete);


animeRouter.post("/add-new-picture/:id",pictureController.pictureAdd);

module.exports = animeRouter;

