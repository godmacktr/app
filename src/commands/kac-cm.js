const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kac-cm')
    .setDescription('Kac Cm Olduğunu Söyler'),
  run: async (client, interaction) => {
    interaction.channel
      .send('Hemen Diyorum Abi 1 Saniye..')
      .then((interaction2) => {
        var espriler = [
          `**  Senin Malafatın** \`18CM\` :eggplant:`,
          `**  Senin Malafatın** \`11CM\` :eggplant:`,
          `**  Senin Malafatın** \`32CM\` :eggplant:`,
          `**  Senin Malafatın** \`35CM\` :eggplant:`,
          `**  Senin Malafatın** \`8CM\`  :eggplant:`,
          `**  Senin Malafatın** \`65CM\` :eggplant:`,
          `**  Senin Malafatın** \`5CM\`  :eggplant:`,
          `**  Senin Malafatın** \`31CM\` :eggplant:`,
          `**  Senin Malafatın** \`14CM\` :eggplant:`,
          `**  Senin Malafatın** \`1CM\`  :eggplant:`,
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        interaction2.edit(`${espri}`);
      });
  },
};
