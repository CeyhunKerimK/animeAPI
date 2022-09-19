const express = require("express");
const app = express();
//expressin json methodunu bir middleware olarak kullanıyoruz.
app.use(express.json());
//hatalar için kendi oluşturduğumuz hataMiddleware'ı çağıralım.
const hataMiddleware = require("./middleware/hataMiddleware");
//app.js çalıştırıldığında db'ye bağlanması için mongoBD.js dosyamızı ekleyelim.
// herhangi başka bir değişkene bağlantı kurmamıza gerek yok.
require("./db/mondoDb");
//animeRouter'ı app.js içerisinde çağıralım.
const animeRouter = require("./router/animeRouter");
const port = 3000;
app.get("/", (req, res) => {
  res.send("burası app.js sayfası.");
}); //middleware'ı kullanalım.
//şimdi api/anime sayfası için dosyamızı kullanalım.
app.use("/api/animes", animeRouter);
app.use(hataMiddleware);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
