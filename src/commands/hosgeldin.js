const Discord = require('discord.js')
const db = require('orio.db')
const { SlashCommandBuilder } = require("@discordjs/builders"); module.exports = {
 data: new SlashCommandBuilder()
.setname("")
.setdescription(""),
run: async (client, message ,args) => {

if(!message.member.hasPermission("ManageGuild")) return message.reply("YETERSİZ YETKİ! YETKİN YOK")

if(!args[0]) return message.reply("**Hatalı Kullanım❌\nAyarlamak İçin: !hg log-ayarla #kanal\nSıfırlamak İçin: !hg-bb log-sıfırla**")
  let kanal = message.mentions.channels.first()

  if(args[0] == 'log-ayarla') {
  db.set(`cshg.${message.guild.id}`, kanal.id)
if(!kanal) return message.reply("**Bir Kanal Belirtmedin!**")
  message.channel.send(`**Hoş Geldin  Kanalı Başarıyla \`${kanal.name}\` Olarak Ayarlandı!**`)
    
  }

  if(args[0] == 'log-sıfırla') {
  db.delete(`cshg.${message.guild.id}`)
  message.channel.send(`**Sistem Sıfırlandı!**`)
 
  }
}
}
