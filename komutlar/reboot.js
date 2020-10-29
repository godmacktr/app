const Discord = require("discord.js");
const client = new Discord.Client();//discord.gg/codes
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  
   message.channel.send("discord.gg/codes");
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "link",
  description: "",
  usage: ""
};