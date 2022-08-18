const { PermissionsBitField } = require('discord.js')
const { SlashCommandBuilder} = require("@discordjs/builders")
const db =  require('inflames.db');

module.exports = {
 data: new SlashCommandBuilder()
.setName('hglog-ayar')
.setDescription('Hosgeldin Kanalını ayarlar')
.addSubcommand(subcommand =>
        subcommand
            .setName('kanal')
            .setDescription('kanal girin')
            .addChannelOption(option => option.setName('channel').setDescription('kanal')))
.addSubcommand(subcommand =>
        subcommand
            .setName('aç')
            .setDescription('sistemi açarsiniz'))
.addSubcommand(subcommand =>
        subcommand
            .setName('kapat')
            .setDescription('sistemi kapatirsiniz')),
run: async(client, interaction) => {
  if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels))
    return interaction.reply(
      "Bu komutu kullanabilmek için **Kanalları Yönet** yetkisine sahip olmalısın."
    );
let subcommand = interaction.options.getSubcommand()
    if(subcommand == "kanal") {
        var kanal = interaction.options.getChannel("channel")
        db.set(`hgkanal_${interaction.guild.id}`, kanal.id)
}

  if (subcommand === 'aç') {
    
    db.set(`hg_${interaction.guild.id}`, 'açık')
    interaction.reply({ content: `hg-log açıldı.` })
 
  }
  
  if (subcommand === 'kapat') {
    
    db.set(`hg_${interaction.guild.id}`, 'kapalı')
    interaction.reply({ content: ` hg-log kapatıldı.` })

  }
 
}
}