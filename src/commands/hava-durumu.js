const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder()
 .setName('hava')
  .setDescription('Dünya Üzerindeki Bir Yerin Hava Durumuna Bakarsınız')
  .addStringOption(option =>
		option.setName('yer')
    .setDescription('bölge')
			.setRequired(true)),
run: async (client, interaction) => { 
const cse = new EmbedBuilder()
    .setTitle("Hava Durumu!")
    .setColor(0xFFD700)
    .setImage('https://www.wttr.in/'+ interaction.options.getString("yer") +'.png?m ')
 interaction.reply({ embeds: [cse] })
  }
}

