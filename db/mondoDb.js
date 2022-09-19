const mongoose = require("mongoose");
const dataBaseUrl = "mongodb://localhost/animeDB";

mongoose.connect(dataBaseUrl)
.then(() => console.log("database bağlantısı başarılı."))
.catch((error) => console.log("database bağlantısı başarılı olamadı :  " +error));