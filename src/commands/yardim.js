const { Discord, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, SlashCommandBuilder } = require("discord.js");
module.exports = {
 data: new SlashCommandBuilder()
 .setName("yardım")
 .setDescription("Bottaki Komutları Görürsünüz"),
	run: async (client, interaction) => {
    let currentPage = 1
  const pages = new EmbedBuilder()
              
       .setTitle(`1. Sayfa`)
       .setColor(0xFFD700)
       .addFields( 
                    { name: "1. Sayfa", value: "Sayfa Numarası 1", inline: true },
                )
      
         new EmbedBuilder()
              .setTitle(`2. Sayfa`)
              .setColor(0xFFD700)
              .addFields(
                    { name: "2. Sayfa", value: "Sayfa Numarası 2", inline: true },
                      
              )
             
          new EmbedBuilder()
              .setTitle(`3. Sayfa`)
              .setColor(0xFFD700)
            .addFields(
                    { name: "3. Sayfa", value: "Sayfa Numarası 3", inline: true },
              
            )
      
      const previewButton = new ButtonBuilder()
          .setCustomId("preview")
          .setEmoji("⬅️")
          .setStyle(ButtonStyle.Primary)
          .setDisabled(true);
      
      const nextButton = new ButtonBuilder()
          .setCustomId("next")
          .setEmoji("➡️")
          .setStyle(ButtonStyle.Primary);
      
      const row = new ActionRowBuilder()
      .setComponents(
          previewButton,
          nextButton
      );
      
      interaction.reply({
          embeds: [pages[currentPage - 1]],
          components: [row],
      }).then(x => {
          const collector = x.createMessageComponentCollector({
          filter: (i) => i.user.id === interaction.user.id,
          time: 6 * 10 ** 5
      });
      
      collector.on("end", () => {
          row.components.forEach(c => c.setDisabled(true))
      
          interaction.editReply({ components: [row] })
      })
      
      collector.on("collect", (button) => {
          switch (button.customId) {
              case "preview":
                  if (currentPage === pages.length) {
                      nextButton.setDisabled(false);
                  }
                  if (currentPage === 2) {
                      previewButton.setDisabled(true);
                  }
                  button.update({
                      embeds: [pages[--currentPage - 1]],
                      components: [row.setComponents(previewButton, nextButton)],
                  });
                  break;
      
              case "next":
                  if (currentPage + 1 === pages.length) {
                      nextButton.setDisabled(true);
                  }
                  if (currentPage === 1) {
                      previewButton.setDisabled(false);
                  }
                  button.update({
                      embeds: [pages[currentPage++]],
                      components: [row.setComponents(previewButton, nextButton)],
                  });
                  break;
          }
      });
      })

 },
};