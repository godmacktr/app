const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder() 
  .setName('avatar')
  .setDescription('Kullanıcının Avatarına bakarsınız.')
.addUserOption(option =>
		option.setName('id')
    .setDescription('kullanıcının idsi')
			.setRequired(true)),
  run: async(member, client,  interaction) => {
    let user = interaction.author;
    const cse = new EmbedBuilder()
    .setDescription(`**[PNG](${member.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}) | [JPG](${member.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}) | [WEBP](${member.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}) | [GIF](${member.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")})**`)
    .setImage(member.avatarURL({ dynamic: true, size: 1024 }))
    .setColor("#0099ff")
    return  interaction.reply({ embeds: [cse]}).catch(err => {})

}
}