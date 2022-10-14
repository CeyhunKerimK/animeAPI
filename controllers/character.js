const {Character} = require("../models/characterModel");
const Anime = require("../models/animeModel");
exports.showCharacter = async (req,res,next) => {
    try{
        const characterToDisplay = await Character.findOne({_name : req.params.name});
        if (characterToDisplay) {
            res.json(characterToDisplay);
        }else{
            res.json({
                message : `${req.params.name} character cant be found, please enter correct parameters`
            });
        }
    }catch (e) {
        next(e);
    }
}
exports.postNewCharacter = async (req,res,next) => {
    try {
        const characterToPost = new Character(req.body);
        const processToPost = await characterToPost.save();
        // here I will add the control mechanism
        const addModelArray = await Anime.findByIdAndUpdate( {_id : req.params.id} ,{$addToSet : {'characters' : characterToPost}});
        if (addModelArray){
            return res.json({
                message : "process is successful new character model add to set"
            });
        }
    }catch (e) {
        next(e);
    }
}
exports.updateCharacter = async (req,res,next) => {
    try{
        const characterToUpdate = Character.findOneAndUpdate({_name : req.params.name},req.body);

        const characterToUpdateFromArray = await Anime.findById({_id : req.params.id} , { $set : {_name : req.params.name} ,})
        if (characterToUpdate) {
            return req.json({
                message : "update successful",
                new_version_character : characterToUpdate
            });
        }
    }catch (e) {
        next(e);
    }
}
exports.characterDeleterFromAnime = async (req,res,next) => {
    try{
        const characterDeleterInArray = await Anime.findByIdAndUpdate({_id : req.params.id},{$pull : {characters : {name : req.params.name}}});
        if (characterDeleterInArray) {
            const characterDeleterInModel = await Character.findOneAndDelete({_name : req.params.name});
            if (characterDeleterInModel){
                return res.json({
                    message : `the character named ${req.params.name} has been deleted from Character collection`
                });
            }
        }else{
            res.json({
                message : 'the character is not found'
            });
        }
    }catch (e) {
        next(e);
    }
}


