const {Season} = require("../models/seasonModel");
const Anime = require("../models/animeModel");
exports.seasonCaller = async (req,res,next) => {
    try{
        const seasonShower = Season.findById({_id :req.params.id});
        if (seasonShower){
            return res.json({
                message : `${req.params.id} season is found`,
                seasonInfo : seasonShower
            });
        }
    }catch (e) {
        next(e);
    }
}
exports.seasonSend = async (req,res,next) => {
    try{
        const sentSeason = new Season(req.body);
        const sendProcess = await sentSeason.save();
        const seasonToArray = await Anime.findOneAndUpdate({ _id : req.params.id},{$addToSet : {'Seasons' : req.body}});
        if (seasonToArray) {
            return res.json({
                message : `Saving season data to database successful`
            })
        }
    }catch (e) {
        next(e);
    }
}
exports.seasonDeleter = async (req,res,next) => {
    try{
        const seasonDeleteFromArray = await Anime.findByIdAndUpdate({_id:req.params.id} , {$pull : {Seasons : {seasonName : req.params.name}}});
            if (seasonDeleteFromArray) {
                const seasonDeleteFromCollection = await Season.findOneAndDelete({seasonName:req.params.name});
                if (seasonDeleteFromCollection) {
                    res.json({
                        message: `the character named ${req.params.name} has been deleted from Season collection`
                    })
                }
            }
    }catch (e) {
        next(e);
    }
}