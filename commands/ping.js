
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Botun Pingini Yani Hızını Gösterir!',
    cooldown : 4, //1 = 1 Saniye
 
    run: async(client, message, args) => {
        try {
            let ping = new MessageEmbed()
            .setDescription(`🏓 Ping : ${client.ws.ping}`)

            message.channel.send({embeds : [ping]})
        } catch (e) {
                console.log(e);
        }
    }
}