const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders"); 

module.exports = {
    slash: true,
    setname: ('yardım'),  
    description: 'Botun Yardım Menüsü', 
    option: [],
	async execute(client, interaction) {
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
                
            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },
                 
            { name: "Komut İsmi", value: "Komut Açıklama", inline: true },
             
          

          ]
        }
      ]
    })
  },
};