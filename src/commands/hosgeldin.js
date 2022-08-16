const Discord = require('discord.js')
const db = require('orio.db')
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
 data: new SlashCommandBuilder()
.setName('hgayarla')
.setDescription('Hosgeldin Kanalını ayarlar'),
run: async (client, interaction ,args) => {

if(!interaction.member.permissions.has("ManageGuild")) return interaction.reply("YETERSİZ YETKİ! YETKİN YOK")

if(!args[0]) return interaction.reply("**Hatalı Kullanım❌\nAyarlamak İçin: !hg log-ayarla #kanal\nSıfırlamak İçin: !hg-bb log-sıfırla**")
  let kanal = interaction.mentions.channels.first()

  if(args[0] == 'log-ayarla') {
  db.set(`cshg.${interaction.guild.id}`, kanal.id)
if(!kanal) return interaction.reply("**Bir Kanal Belirtmedin!**")
  interaction.channel.send(`**Hoş Geldin  Kanalı Başarıyla \`${kanal.name}\` Olarak Ayarlandı!**`)
    
  }

  if(args[0] == 'log-sıfırla') {
  db.delete(`cshg.${interaction.guild.id}`)
  interaction.channel.send(`**Sistem Sıfırlandı!**`)
 
  }
}
}
