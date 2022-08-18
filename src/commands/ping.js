const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder()
    .setName('ping')
   .setDescription  ('Botun Pingini Görürsünüz.'), 
	run :async (client, interaction) => {
  const cse = new EmbedBuilder()
        .setColor('Gold')
      .setImage('https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping +'%20MS')
interaction.reply({ embeds: [cse] }) 
    
}
}  