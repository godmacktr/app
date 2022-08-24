const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder()
    .setName('profil')
   .setDescription  ('Profilinizi Görüntülersiniz.')
.addUserOption(option => 
  option.setName('kullanıcı')
  .setDescription('üye')),
	run :async (bot, interaction, args) => {
let user = interaction.options.getUser("target") || interaction.user

const cse = new EmbedBuilder()
.setColor("Blue")
.setTimestamp()
.setTitle(user.tag)
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
.setDescription(`
> **Discord'a katılma tarihi:** <t:${Math.floor(user.createdTimestamp / 1000)}:d>
> **Sunucuya katılma tarihi:** <t:${Math.floor(user.joinedTimestamp / 1000)}:d>
> **Durum:** \`${user.presence?.status ? user.presence?.status.replace("dnd", "Rahatsız Etmeyin").replace("idle", "Boşta").replace("online", "Aktif").replace("offline", "Aktif Değil") : "Aktif Değil"}\`
> **ID:** \`${user.id}\``)

return interaction.reply({ embeds : [cse] })
}
}
