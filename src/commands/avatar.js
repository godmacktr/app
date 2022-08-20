const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder() 
  .setName('avatar')
  .setDescription('Kullanıcının Avatarına bakarsınız.')
.addSubcommand(subcommand =>
        subcommand
        .setName('kullanıcı')
    .setDescription('kullanıcı')
        .addUserOption(option => option.setName('user').setDescription('kullanıcı'))),
  run: async(client,  interaction, message) => {
    let user = interaction.user
    const cse = new EmbedBuilder()
    .setDescription(`**[PNG](${interaction.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}) | [JPG](${interaction.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}) | [WEBP](${interaction.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}) | [GIF](${interaction.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")})**`)
    .setImage(interaction.user.avatarURL({ dynamic: true, size: 1024 }))
    .setColor("#0099ff")
    return  interaction.reply({ embeds: [cse]}).catch(err => {})

}
}