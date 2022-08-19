const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders"); 

module.exports = {
 data: new SlashCommandBuilder()
.setName("")
.setDescription("")
run: async (client, interaction) => { 
const cse = new EmbedBuilder()
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("Blue")
.setThumbnail(client.user.avatarURL())
.setDescription(`KOMUTLARINIZI VS YAZARAK AÇIKLAYA BILIRSINIZ!`)
.setFooter({text:"Made By. Ege'#0001"})
.setTimestamp()
message.channel.send({ embeds: [cse] })
}
