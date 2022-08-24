const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder()
    .setName('profil')
   .setDescription  ('Profilinizi Görüntülersiniz.')
.addUserOption(option => 
  option.setName('kullanıcı')
  .setDescription('üye')),
    run: async (client, interaction) => {
let user = interaction.options.getUser("kullanıcı") || interaction.user
let memberss = await interaction.guild.members.fetch()

const cse = new EmbedBuilder()
.setColor('2F3136')
.setTimestamp()
.setTitle(user.tag)
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
.setDescription(`
**Discord'a katılma tarihi:** <t:${Math.floor(user.createdTimestamp / 1000)}:d>
**Sunucuya katılma tarihi:** <t:${Math.floor(interaction.guild.members.cache.get(user.id).joinedTimestamp / 1000)}:d>
**Durum:** \`${interaction.guild.members.cache.get(user.id).presence?.status ? interaction.guild.members.cache.get(user.id).presence?.status.replace("dnd", "Rahatsız Etmeyin").replace("idle", "Boşta").replace("online", "Aktif").replace("offline", "Aktif Değil") : "Aktif Değil"}\`
**ID:** \`${user.id}\``)


return interaction.reply({ embeds : [cse] })
}
}