const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
 data: new SlashCommandBuilder()
  .setname("havadurumu")
  .setDescription("Dünya Üzerindeki Bir Yerin Hava Durumuna Bakarsınız"),
  .addStringOption: [{
     .setname("yer"), 
      .setdescription("hava durumuna bakılacak yer"), 
      type: String, 
      required: true 
      }
     ],
 run: async (client, interaction) => {
const cse = new EmbedBuilder()
    .setTitle("Hava Durumu!")
    .setColor(0xFFD700)
    .setImage('https://www.wttr.in/'+ interaction.options.getString("yer") +'.png?m ')
interaction.reply({ embeds: [cse] });
  },
};  