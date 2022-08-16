
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("Yapımcı")
    .setDescription("Yapımcının kim olduğunu söyler"),
   run: async(client, message, args) => { 
     let id = "974007430872694834"
     let sahip = client.users.cache.get(id)
  message.channel.send(`Benim Yapımcım: ${sahip.tag}`)
      // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
  }
};

