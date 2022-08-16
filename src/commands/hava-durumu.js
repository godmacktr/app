const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

const data = new SlashCommandBuilder() 
  .setname('havadurumu')
  .setDescription('Dünya Üzerindeki Bir Yerin Hava Durumuna Bakarsınız')
  .addStringOption(option =>
		option.setName('yer')
			.setRequired(true));
run: async (client, interaction) => {
 const cse new EmbedBuilder()
    .setTitle("Hava Durumu!")
    .setColor(0xFFD700)
    .setImage('https://www.wttr.in/'+ interaction.options.getString("yer") +'.png?m ')
interaction.reply({ embeds: [cse] });
  },




//module.exports = {
//data: new SlashCommandBuilder()