
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'Örnek Bot Komutu!',
    cooldown : 4, //1 = 1 Saniye
 
    run: async(client, message, args) => {
      
        try {
          
            let test = new MessageEmbed()
            .setTitle("Başlık")
            .setDescription(`ÖRNEK AÇIKLAMA`)
            message.channel.send({embeds : [test]})
          
        } catch (e) {
        console.log(e);
        }
    }
}