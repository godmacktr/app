const { EmbedBuilder } = require("discord.js");

module.exports = {
  slash: true,
  setname: "hava-durumu",
  description: 'Dünya Üzerindeki Bir Yerin Hava Durumuna Bakarsınız',
  option: [{
      name: "yer", 
      description: "hava durumuna bakılacak yer", 
      type: String, 
      required: true 
      }
     ],
    run: async (client, interaction) => {
    const havadurumu = new EmbedBuilder()
    .setTitle("Hava Durumu!")
    .setColor(0xFFD700)
    .setImage('https://www.wttr.in/'+ interaction.options.getString("yer") +'.png?m ')

interaction.reply({ embeds: [havadurumu] });
  },
};  