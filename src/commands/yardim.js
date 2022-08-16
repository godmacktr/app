const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders"); 
module.exports = {
 data: new SlashCommandBuilder()
    .setName("yardım")
    .setDescription("Botun Yardım Menüsü"),
	run: async (client, interaction) => { 
	    interaction.reply({

      embeds: [

        {

          title: `Covid-19 | Yardım`,
          color: 0xFFD700,
          fields: [

            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },

            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },

            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },
            
            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },
            
            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },
             
            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },
              
            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },
               
            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },
                
          

          ]
        }
      ]
    })
  },
};
