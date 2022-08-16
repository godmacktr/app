const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");



module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
    run: async (client, interaction, ) => {   
      interaction.reply(":ping_pong: \nBot Gecikmesi  \`${date.now() - interaction.createdTimestamp}`\, API Gecikmesi: ${Math.round(client.ws.ping)}ms.:ping_pong:");
      // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
 }
}
