const mongoose = require("mongoose");
const {characterSchema} = require("../models/characterModel");
const Schema = mongoose.Schema;
const animeSchema = new Schema(
  {
        title: { type: String },
        description: { type: String },
        kind: [{ type: String }],
        pictures : [{type:String}],
        number_of_episodes: { type: Number },
        number_of_volumes: { type: Number },
        studio: { type: String },
        doesItContinue : {type:String},
        director : {type:String},
        characters: [characterSchema],

  },
  { collection: "anime"}
);

const Anime = mongoose.model("anime", animeSchema);

module.exports = Anime;
