const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder() 
  .setName('avatar')
  .setDescription('Avatarınıza bakarsınız.'),
  run: async(client,  interaction, message) => {
    let user = interaction.user
    const cse = new EmbedBuilder()
    .setDescription(`**[PNG](${interaction.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}) | [JPG](${interaction.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}) | [WEBP](${interaction.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}) | [GIF](${interaction.user.avatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")})**`)
    .setImage(interaction.user.avatarURL({ dynamic: true, size: 1024 }))
    .setColor("#0099ff")
    return  interaction.reply({ embeds: [cse]}).catch(err => {})

}
}