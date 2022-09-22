const animeRouter = require("express").Router();
const animeController = require("../controllers/anime");
animeRouter.get("/",animeController.tumVerileriGoster);
animeRouter.post("/", animeController.veriYolla);
animeRouter.get("/:id", animeController.tekVeriGoster);
animeRouter.patch("/:id",animeController.veriGuncelle );
animeRouter.delete("/:id", animeController.veriyiSil);
module.exports = animeRouter;

