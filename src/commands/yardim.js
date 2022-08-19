const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yardım")
    .setDescription("Bottaki Komutları Gösterir"),
  run: async (client, interaction) => {
    const cse = new EmbedBuilder()
      .setTitle(client.user.username + " Yardım Menüsü")
      .setColor("Blue")
      .setThumbnail(client.user.avatarURL())
      .setDescription(
        `
/hg-ayar
/hg-ayar aç
/hg-ayar kanal
/hg-ayar kapat
/invite
/kac-cm
/ping
/yapımcı
/yardım
/zar-at
/hava`
      )
      .setFooter({ text: "Asura Bot" });
    interaction.reply({ embeds: [cse] });
  },
};
