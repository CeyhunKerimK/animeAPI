const Anime = require("../models/model");
const createError = require("http-errors");
exports.tumVerileriGoster = async (req, res) => {
    try {
        const bulunanVeriler = await Anime.find({});
        res.json(bulunanVeriler);
    } catch (error) {
        res.json({
            mesaj: error,
        });
    }
};
exports.veriYolla = async (req, res) => {
    try {
        const gonderilecekVeriler = new Anime(req.body);
        const gonderilenVeri = await gonderilecekVeriler.save();
        if (gonderilenVeri) {
            res.json({
                mesaj: "gönderilme işlemi başarılı",
                eklenen_veri: gonderilenVeri,
            });
        } else {
        }
    } catch (error) {
        res.json({
            mesaj: error,
        });
    }
};
exports.tekVeriGoster = async (req, res) => {
    const geriDönenSonuc = await Anime.findById({ _id: req.params.id });
    try {
        if (geriDönenSonuc) {
            res.json(geriDönenSonuc);
        } else {
            res.json({ mesaj: `${req.params.id} id'li veri getirilemedi.` });
        }
    } catch (error) {
        res.json({ hata_mesajı: "veri getirme işleminde hata oluştu : " + error });
    }
};
exports.veriGuncelle = async (req, res, next) => {
    try {
        const geriDönenSonuc = await Anime.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (geriDönenSonuc) {
            return res.json({ mesaj: `${req.params.id}'li kullanıcı güncellendi.` });
        } else {
            res.status(404).json({ mesaj: "böyle bir kullanıcı bulunamadı." });
        }
    } catch (error) {
        next(error);
    }
};
exports.veriyiSil = async (req, res, next) => {
    try {
        const geriDönenSonuc = await Anime.findByIdAndDelete({
            _id: req.params.id,
        });
        if (geriDönenSonuc) {
            return res.json({ mesaj: `${req.params.id}'li kullanıcı silindi.` });
        } else {

            throw createError(404, "kullanıcı veritabanında bulunamadı.");
        }
    } catch (e) {
        next(createError(400, e));
    }
};







