const animeRouter = require("express").Router();
const animeController = require("../controllers/anime");
animeRouter.get("/get-all-anime",animeController.showAllData);
animeRouter.post("/add-new-anime", animeController.sendData);
animeRouter.get("/get-anime/:id", animeController.showOneData);
animeRouter.patch("/update-anime/:id",animeController.dataToUpdate );
animeRouter.delete("/delete-anime/:id", animeController.dataToDelete);

module.exports = animeRouter;

