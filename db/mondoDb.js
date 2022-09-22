const mongoose = require("mongoose");
const dataBaseUrl = process.env.MONGO_STRING_CONNECTION

mongoose.connect(dataBaseUrl)
.then(() => console.log("database bağlantısı başarılı."))
.catch((error) => console.log("database bağlantısı başarılı olamadı :  " +error));