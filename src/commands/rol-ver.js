const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
data: new SlashCommandBuilder()
.setName("rol-ver")
.setDescription("Belirlediğiniz kişiye rol verirsiniz"),
    run: async(client, message, args) => {
if(!message.member.permissions.has("MANAGE_ApplicationCommandOptionType.RoleS")) return message.reply("Rolleri Yönet Yetkiniz Bulunmamakta.")
let user = message.mentions.users.first();
let rol = message.mentions.roles.first();
if(!user) return message.reply("Lütfen Rolün Verileceği Kişiyi Belirtiniz.")
if(!rol) return message.reply("Lütfen Verilecek Rolü Belirtiniz.")
//norex
message.guild.members.cache.get(user.id).roles.add(rol)
const cse = new EmbedBuilder()
.setColor("Gold")
.setAuthor("Rol Verdin Sana Knk .D")
.setDescription(`${user}, isimli kişiye ${rol} isimli rol verildi.`)

message.reply({embeds:[embed]})
 }