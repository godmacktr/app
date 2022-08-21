const { Client, EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
data: new SlashCommandBuilder()
.setName("ekip-uye")
.setDescription("Ekip Rolü Verir")
  .addSubcommand(subcommand =>
     subcommand
			.setName('ekle')
			.setDescription('Ekler')
      .addUserOption((option) =>
      option.setName('kullanıcı')
      .setDescription('eklemek istediğiniz kullanıcı')
      .setRequired(true))),
    run: async(client, interaction) => {
if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) 
  return interaction.reply(  
    "Rolleri Yönet Yetkiniz Bulunmamakta.")
let user = interaction.options.getUser('user');
let member = interaction.guild.members.cache.get(user.id)
let rol = interaction.guild.roles.cache.get("1010506971176243242")
member.roles.add(rol)
if(!user) return interaction.reply("Lütfen Rolün Verileceği Kişiyi Belirtiniz.")
if(!rol) return interaction.reply("Lütfen Verilecek Rolü Belirtiniz.")
const cse = new EmbedBuilder()
.setColor("Gold")
.setAuthor("Rol Verdin Sana Knk .D")
.setDescription(`${user}, isimli kişiye ${rol} isimli rol verildi.`)

interaction.reply({embeds:[cse]})
 }
  }