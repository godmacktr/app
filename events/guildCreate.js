const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  'Sunucunuza Eklendim',
  'REGISTER Bot.',
  'Kayıt Sistemi'
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)

};