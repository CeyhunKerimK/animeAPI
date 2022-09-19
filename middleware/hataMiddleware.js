const hataYakalayici = (error, req, res, next) => {
  console.log(error);
  res.json({
    hataKodu: error.statusCode,
    mesaj: error.message,
  });
};
module.exports = hataYakalayici;
