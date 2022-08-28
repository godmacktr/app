const Discord  = require('discord.js');
const { MessageEmbed, SlashCommandBuilder } = require("discord.js")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("sunucuinfo")
    .setDescription("Sunucu Hakkında Bilgi Alırsınız."),
run: async(bot, interaction, args) => {

function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";
        };
        let guild = interaction.channel.guild
        let serverSize = interaction.guild.memberCount;
        let botCount = interaction.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let boost = interaction.guild.premiumSubscriptionCount;
        let aktif = interaction.guild.members.cache.filter(member => member.presence && (member.presence.status != "offline")).size
        const owner = interaction.guild.members.cache.get(interaction.guild.ownerId);
let sunucu = new Discord.EmbedBuilder()
.setDescription(`Sunucu İsmi: ${guild.name}\nSunucu ID: ${interaction.guild.id} \nSunucu Sahibi: ${owner.user.tag} \nKuruluş Tarihi: ${checkDays(interaction.guild.createdAt)}`)
.setColor('2F3136')
return interaction.reply({embeds : [sunucu]});

}
}  