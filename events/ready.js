const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`${client.user.username}: Şu an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.users.cache.size + ` kullanıcıya hizmet veriliyor!`);  
 
  // OYNUYOR KISMI - YAYINA UYARLI\\
  client.user.setActivity("Loz 'Bey", {
  type: "STREAMING",
  url: "https://www.twitch.tv/ynsemrearpacii"
  });
};
