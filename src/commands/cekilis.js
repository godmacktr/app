const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
   .setName('buton-rol')
    .setDescription('Butonla Rol Verir'),
run:  async(bot, interaction, args) => {
let mesaj = args.slice(0).join(' ');
if(!mesaj) return interaction.reply('Çekilişin ödülü yokmu?');

let sonuç = interaction.guild.members.cache.filter(q => !q.user.bot).random()
let endEmbed = new EmbedBuilder()
.setTitle('🎉Çekiliş🎉')
.setColor("White")  
.setDescription(`Ödül : **${mesaj}** \n\n Kazanan : **${sonuç}**`)
.setThumbnail(interaction.guild.iconURL())
.setFooter({text : `Başlatan : ${interaction.author.tag}`})
interaction.delete()
  interaction.reply({content : `${sonuç}`, embeds : [endEmbed]})
}
}