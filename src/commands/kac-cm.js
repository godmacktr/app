const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
data: new SlashCommandBuilder()
 .setName("kac-cm")
 .setDescription("Kac Cm Olduğunu Söyler");
 run: async (client, message, args) => { 
message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message2 => {
var espriler = [' **Senin Malafatın  18CM ** :eggplant: ' ,'**Senin Malafatın  11CM ** :eggplant:' ,'**Senin Malafatın 32CM  ** :eggplant:' ,'**Senin Malafatın  35CM ** :eggplant:' ,'**Senin Malafatın  8CM  ** :eggplant:' ,'**Senin Malafatın  65CM  ** :eggplant:' ,'**Senin Malafatın 5CM  ** :eggplant:' ,'**Senin Malafatın 31CM  ** :eggplant:' ,'**Senin Malafatın  14CM ** :eggplant:' ,'**Senin Malafatın  1CM ** :eggplant:'];
var espri = espriler[Math.floor(Math.random() * espriler.length)];
message2.edit(`${espri}`);
});
}
