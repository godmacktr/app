const { EmbedBuilder, SlashCommandBuilder, PermissionsBitField} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
module.exports = {
data: new SlashCommandBuilder()
 .setName('buton-rol')
  .setDescription('Butonla Rol Verir'),
run: async(client, interaction, args) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.channel.send("Yeterli yetkin yok!")
  
  let rol = interaction.mentions.roles.first()
 
  if(!rol) return interaction.channel.send("Lütfen bir rol etiketle!")
 
  let mesaj = args.slice(1).join(" ")
  if (!mesaj) return interaction.channel.send("Lütfen bir embed mesaj yazısı gir!")
  let buttonid = rol.name
  const embed = new EmbedBuilder()
  .setTitle("Godzilla - Rol Al Sistemi!")
  .setDescription(`${mesaj}`)
  .setColor("#ff0000")
  const row = new Discord.ActionRowBuilder()
  .addComponents(
  new Discord.ButtonBuilder()
  .setLabel(rol.name)
  .setStyle(Discord.ButtonStyle.Secondary)
  .setCustomId("rol")
  )
  interaction.channel.send({embeds: [embed], components: [row]}).then((mesaj) => {
db.set(`buton_rol${mesaj.id}`, rol.id)
})
}
}