const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'örnek',
    description: 'Örnek Komut Taslağı!',
    run: async(client, message, args) => {


        //KOMUT İÇERİĞİNİZ 

        const embed = new MessageEmbed()
          .setTitle("Komut Başlığı")
          .setDescription("Örnek Komut Açıklaması!")
          .setColor("BLUE")
          .setFooter(`Kullanan ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          return message.channel.send({embeds : [embed]});
      
       //KOMUT İÇERİĞİNİZ

    }
}