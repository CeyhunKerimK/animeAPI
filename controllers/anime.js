const Anime = require("../models/animeModel");
const createError = require("http-errors");
exports.showAllData = async (req, res, next) => {
    try {
        const dataFound = await Anime.find({}, {projection: { _id: 0 }});
        if (dataFound) {
            return res.json(dataFound);
        }
    } catch (e) {
        next(e);
    }
};
exports.sendData = async (req, res,next) => {
    try {
        const dataToBeSend = new Anime(req.body);
        const sendProcess = await dataToBeSend.save();
        if (sendProcess) {
            return res.json({
                message: "sending successful",
            });
        }
    } catch (e) {
        next(e);
        console.log("burada hata var");
    }
};
exports.showOneData = async (req, res , next) => {
    try {
        const dataShown = await Anime.findById({ _id: req.params.id });
        if (dataShown) {
            return res.json({
                data_shown : dataShown
            });
        }
    } catch (e) {
        next(e);
    }
};
exports.dataToUpdate = async (req, res, next) => {
    try {
        const updateData = await Anime.findByIdAndUpdate({ _id: req.params.id },req.body,);
        if (updateData) {
            return res.json({
                message: `Updated data with id ${req.params.id }`
            });
        }
    } catch (e) {
        next(e);
    }
};
exports.dataToDelete = async (req, res, next) => {
    try {
        const deleteData = await Anime.findByIdAndDelete({_id: req.params.id,});
        if (deleteData) {
            return res.json({
                message: `Data with id ${req.params.id} deleted from database`
            });
        }
    } catch (e) {
        next(createError(400, e));
    }
};










