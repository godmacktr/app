const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder() 
  .setName('avatar')
  .setDescription('Kullanıcının Avatarına bakarsınız.')
.addSubcommand(subcommand =>
		subcommand
		.setName('id')
    .setDescription('kullanıcın idsi')
		.addUserOption(option => option.setName('target').setDescription('kullanıcı'))),
  run: async(client,  interaction) => {
    let user =  interaction.options.getUser() ||  interaction.author;
    const cse = new EmbedBuilder()
    .setDescription(`**[PNG](${user.author.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}) | [JPG](${user.author.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}) | [WEBP](${user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}) | [GIF](${user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")})**`)
    .setImage(user.author.displayAvatarURL({ dynamic: true, size: 1024 }))
    .setColor("#0099ff")
    return  interaction.reply({ embeds: [cse]}).catch(err => {})

}
}