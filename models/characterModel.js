const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name:{type:String,required:true,minLength:3,maxLength:30},
    surname:{type:String,required:true,minLength:3,maxLength:30},
    age:{type:Number,required:true,unique:false},
    picture:[{type:String,required:true}],
    about:{type:String,required:true},
    height:{type:Number},
    weight:{type:Number}
}, {collection : "character" , versionKey : false})

const Character = mongoose.model("character",characterSchema);

module.exports = {
    Character,
    characterSchema
};