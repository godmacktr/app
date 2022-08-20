const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
data: new SlashCommandBuilder()
.setName("rol-ver")
.setDescription("Belirlediğiniz kişiye rol verirsiniz"),
    run: async(client, interaction) => {
if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) 
  return interaction.reply(
    "Rolleri Yönet Yetkiniz Bulunmamakta.")
let user = interaction.mentions.user.first(974007430872694834);
let rol = interaction.mentions.roles.first(1010506971176243242);
if(!user) return interaction.reply("Lütfen Rolün Verileceği Kişiyi Belirtiniz.")
if(!rol) return interaction.reply("Lütfen Verilecek Rolü Belirtiniz.")
//norex
interaction.guild.members.cache.get(user.id).roles.add(rol)
const cse = new EmbedBuilder()
.setColor("Gold")
.setAuthor("Rol Verdin Sana Knk .D")
.setDescription(`${user}, isimli kişiye ${rol} isimli rol verildi.`)

interaction.reply({embeds:[cse]})
 }
  }