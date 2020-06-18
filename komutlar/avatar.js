const Discord = require('discord.js');

module.exports.run = (client, message, args) => {


 let kullanıcı = message.mentions.users.first() || message.author;
 
    const avatar = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(kullanıcı.username + "Adlı Kullanıcının Avatarı.")
        .setImage(kullanıcı.avatarURL)
    message.channel.send(avatar)
    
};

module.exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['pp', 'profilphoto'],
  permLevel: 0
};

module.exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen kişinin veya komutu yazan kişinin avatarını atar.',
  usage: 'avatar <@kişi-etiket> / +avatar'
};