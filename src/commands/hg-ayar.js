const { ApplicationCommandType, ApplicationCommandOptionType, SlashCommandBuilder } = require('discord.js')
const Discord = require('discord.js');
const db =  require('inflames.db');

module.exports = {
 data: new SlashCommandBuilder()
.setName('hgayar')
.setDescription('Hosgeldin Kanalını ayarlar'),

run: async(client, interaction) => {
  if (interaction.member.permissions.has("MANAGE_ApplicationCommandOptionType.ChannelS"))
    return interaction.channel.send(
      "Bu komutu kullanabilmek için **Kanalları Yönet**yetkisine sahip olmalısın"
    );
    if(args[0] == "kanal") {
        var kanal = interaction.mentions.channels.first() || interaction.guild.channels.cache.get(args[1]);
        db.set(`hgkanal_${interaction.guild.id}`, kanal.id)
}

  if (args[0] === 'aç') {
    
    db.set(`hg_${interaction.guild.id}`, 'açık')
    interaction.channel.send({ content: `hgaçıldı.` })
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`hg_${interaction.guild.id}`, 'kapalı')
    interaction.channel.send({ content: ` hg kapatıldı.` })

  }
 
}
}
