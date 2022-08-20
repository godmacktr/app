const { Discord, Permission } = require("discord.js");
const db =  require('inflames.db');
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
 data: new SlashCommandBuilder()
    .setName('otorol-ayarla')
    .setDescription('Otorolü Ayarlarsınız.')
     .addRoleOption(option =>
            option.setName("rol")
            .setDescription('Ayarlancak Rol')
             .setRequired(true)),
     run: async (client, interaction) => {
      const { guild, options } = interaction;  
      const role = options.getRole("rol");

      if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.reply("Bu Komudu Kullanabilmek için sunucuyu yönet yetkisine sahip olmanız gerekmekte.")                           

               db.set(`otorol_${guild.id}`, role.id);
               interaction.reply("Otorol Başarı İle Ayarlandı! \nAyarlanan Rol: " + role.toString()); 
 },        
};
