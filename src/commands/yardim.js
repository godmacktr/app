const Discord = require("discord.js");

module.exports = {
    slash: true,
    name: ['yardım'],  
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