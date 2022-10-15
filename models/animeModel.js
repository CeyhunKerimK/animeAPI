const mongoose = require("mongoose");
const {characterSchema} = require("../models/characterModel");
const {seasonSchema} = require("./seasonModel");
const Schema = mongoose.Schema;
const animeSchema = new Schema(
  {
        Title: { type: String },
        Description: { type: String },
        Genres: [{ type: String }],
        Pictures : [{type:String}],
        NumOfVol: { type: Number },
        DoesItContinue : {type:String},
        Director : {type:String},
        Characters: [characterSchema],
        Seasons : [seasonSchema],
        Writer : {type:String,required:true}
  },
  { collection: "anime" , versionKey:false}
);

const Anime = mongoose.model("anime", animeSchema);

module.exports = Anime;
