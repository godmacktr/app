const Discord = require("discord.js");
const ayarlar = require("../ayarlar.js");

var prefix = ayarlar.prefix;

module.exports = client => {
  var oyun = [
    "Discord Code Shâre",
    "İstediğiniz Kadar",
    "Ekleyebilirsiniz",
    "codeshare.xyz"
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "Codes");
  }, 2 * 2500);

  client.user.setStatus("online"); //Botun Durumu online=Çevrimiçi idle=Boşta dnd=Rahatsız Etmeyin invisible=Görünmez
};
