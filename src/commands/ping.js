const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Botun Pingi Hakkında bilgi verir."),
    run: async (client, interaction) => {
      interaction.reply(`\nBot Gecikmesi: \`${Date.now() - interaction.createdTimestamp}ms\`, API Gecikmesi: \`${Math.round(client.ws.ping)}ms\``)
      // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    }
 };

const Discord = require("discord.js");

module.exports = {
    slash: true,
    name: ['ping'],  
    description: 'Botun Pingini Görürsünüz.', 
    option: [],
	async execute(client, interaction) {
	
    interaction.reply({
      embeds: [{
        Color: 'Gold',
      image: {
	url: 'https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping +'%20MS',
	},
        
      }]
    })
  },
};