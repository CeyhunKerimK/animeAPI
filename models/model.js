const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//burada mongodb'ye yollancak verilerin içeriğini belirliyoruz.
const animeSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    kind: [{ type: String }],
    mangaka: { type: String },
    number_of_episodes: { type: Number },
    number_of_volumes: { type: Number },
    studio: { type: String },
    main_characters: [{ type: String }],
  },
  { collection: "animes" }
);

const Anime = new mongoose.model("Anime", animeSchema);

module.exports = Anime;
