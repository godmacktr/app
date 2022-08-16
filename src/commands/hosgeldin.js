const { PermissionsBitField } = require('discord.js') 
const db = require('orio.db')
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
 data: new SlashCommandBuilder()
.setName('hgayarla')
.setDescription('Hosgeldin Kanalını ayarlar'),
run: async (client, member ,args) => {

if (member.permissions.has(0x0000000000000020)) return member.reply("YETERSİZ YETKİ! YETKİN YOK")

if(!args[0]) return member.reply("**Hatalı Kullanım❌\nAyarlamak İçin: !hg log-ayarla #kanal\nSıfırlamak İçin: !hg-bb log-sıfırla**")
  let kanal = member.mentions.channels.first()

  if(args[0] == 'log-ayarla') {
  db.set(`cshg.${member.guild.id}`, kanal.id)
if(!kanal) return member.reply("**Bir Kanal Belirtmedin!**")
  member.channel.send(`**Hoş Geldin  Kanalı Başarıyla \`${kanal.name}\` Olarak Ayarlandı!**`)
    
  }

  if(args[0] == 'log-sıfırla') {
  db.delete(`cshg.${member.guild.id}`)
  member.channel.send(`**Sistem Sıfırlandı!**`)
 
  }
}
}
