const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    seasonName:{type:String,required:true},
    seasonDescription:{type:String},
    seasonNumberEpisode:{type:Number,required:true},
    seasonPictures:[{type:String}]
}, {collection:"season" , versionKey:false})

const Season = mongoose.model("season",seasonSchema);

module.exports = {seasonSchema,Season}