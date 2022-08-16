const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Botun Pingi Hakkında bilgi verir."),
    run: async (client, interaction) => {
      interaction.reply(`\nBot Gecikmesi: \`${Date.now() - interaction.createdTimestamp}ms\`, API Gecikmesi: \`${Math.round(client.ws.ping)}ms\``)
      // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    }
 };