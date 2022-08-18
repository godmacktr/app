const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle} = require('discord.js');
const { SlashCommandBuilder} = require("@discordjs/builders")

module.exports = {
 data: new SlashCommandBuilder()
	.setName('davet')
	.setDescription("botun davet linkini alırsın."),
	run: async (client, interaction) => {
		const inviteUrl = `https://ptb.discord.com/api/oauth2/authorize?client_id=998288926043291718&permissions=8&scope=applications.commands%20bot`;
		const cse = new EmbedBuilder()
		.setTitle('Sunucu Davet Et')
		.setDescription(`Botu Sunucuna Davet Et.`)
		.setColor('#03fcdb')
		.setThumbnail(client.user.displayAvatarURL())
		.setFooter({ text: client.user.tag })

		const row = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Davet Et')
			.setURL(inviteUrl)
			.setStyle(ButtonStyle.Link)
		])
		return interaction.reply({ embeds: [cse], components: [row] })
	}
};