const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 const csg = client.guilds.fetch()
 const csm = client.users.fetch()
  
 const csmsg = message.channel.send("Gönderim Başladı!...").then(cs => cs.id)
 
 client.users.cache.map(cs => {
   
      cs.send().catch(async err => {
                  return await console.log(
                    `${message.author.tag}, **İsimli Üyenin DM'si Kapalı Diye Mesaj Gönderilemedi!!**`
                  );
              });
   
 })
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "dm"
};
