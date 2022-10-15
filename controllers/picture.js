const Anime = require("../models/animeModel");

exports.pictureAdd = async (req,res,next) => {
    try{
        const addPictureInArray = await Anime.findByIdAndUpdate({_id : req.params.id} , {$addToSet : {'Pictures' : req.body}});
        if (addPictureInArray) {
            res.json({
                message: `add picture process is successful`
            });

        }else {
            res.json({
                message: `add process not successful`
            })
        }
    }catch (e) {
        next(e)
    }
}