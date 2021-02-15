const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.js");

exports.run = async (client, message, args) => {
  message.channel.send("https://discord.gg/6XGqdgE");
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "link"
};
