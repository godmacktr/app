const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder() 
  .setName('avatar')
  .setDescription('Etiketlediğiniz Kullanıcının Avatarınıza bakarsınız.')
.addUserOption(option => 
  option.setName('kullanıcı')
  .setDescription('üye')),
    run: async (client, interaction) => {
let user = interaction.options.getUser("kullanıcı") || interaction.user
    const cse = new EmbedBuilder()
    .setDescription(`**[PNG](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}) | [JPG](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}) | [WEBP](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}) | [GIF](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")})**`)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
    .setColor("#0099ff")
    return  interaction.reply({ embeds: [cse]}).catch(err => {})

}
}