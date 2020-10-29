const Discord = require("discord.js");
const bot = new Discord.Client();//discord.gg/codes
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ayarlar.sahip)
    return message.channel.send(
      "❌ Bu Komutu Sadece Yapımcılar Kullana Bilir!"
    );

  message.channel.send(`Bot Yeniden Başlatıldı`);
  message.delete(60).then(msg => {
    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r", "reboot", "yenile", "yenidenbaşlat"],
  permLevel: 0
};

module.exports.help = {
  name: "reboot",
  description: "",
  usage: "reboot"
};