const { Client, EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
data: new SlashCommandBuilder()
.setName("rol-ver")
.setDescription("Belirlediğiniz kişiye rol verirsiniz")
  .addSubcommand(subcommand =>
     subcommand
			.setName('uye')
			.setDescription('Kullanıcı')
      .addUserOption((option) =>
      option.setName('kullanıcı')
      .setDescription('kullanıcı1')
      .setRequired(true))),
    run: async(client, interaction) => {
if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) 
  return interaction.reply(  
    "Rolleri Yönet Yetkiniz Bulunmamakta.")
let user = interaction.options.getUser();
let rol = interaction.options.getRole(1010506971176243242);
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