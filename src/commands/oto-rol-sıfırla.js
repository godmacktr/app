const { Discord, Permission } = require("discord.js");
const db =  require('inflames.db');
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
 data: new SlashCommandBuilder()
    .setName('otorol-sıfırla')
    .setDescription('Otorolü Sıfırlarsınız.'),
      run: async (client, interaction) => {
     
      const { guild, options } = interaction;  

      if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.reply("Bu Komudu Kullanabilmek için sunucuyu yönet yetkisine sahip olmanız gerekmekte.")                           

                 db.delete("otorol_${guild.id}");
                  interaction.reply("Otorol Başarı İle Silindi!")
 },        
};