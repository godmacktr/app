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

          title: `Asura | Yardım`,
          color: 0xFFD700,
          fields: [

            { name: "Hava Durumu", value: "Yazdığınız bölgenin hava durumunu verir.", inline: true },

            { name: "Hgayarla", value: "Hosgeldin kanalını ayarlar.", inline: true },

            { name: "Ping", value: "Botun pingi hakkında bilgi verir.", inline: true },
            
            { name: "Yardım", value: "Bottaki komutları gösterir.", inline: true },
            
            { name: "Zar-at", value: "1-6 arası zar atar.", inline: true },
             
            { name: "Yapımcı", value: "Botun yapımcısı söyler.", inline: true },
               
                 

          ]
        }
      ]
    })
  },
};
