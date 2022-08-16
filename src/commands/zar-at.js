const { EmbedBuilder, Colors, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders"); module.exports = {
 data: new SlashCommandBuilder()
 .setName("zar-at")
 .setDescription("Zar atarsınız"),
 run: async (client, interaction) => { 
const cse = new EmbedBuilder()
    .setColor(Colors.Blue)
    .setTitle("🎲 Zarın: " + doMagicDiceVoodoo())
    .setFooter({ text: '1-6 ya kadar sayılar vardır.'})

  await interaction.reply({ embeds: [cse] }).catch((e) => {
    console.log("HATA ALIYORUM: " + e);
  });

  function doMagicDiceVoodoo() {
    var rand = ["1", "2", "3", "4", "5", "6"];

    return rand[Math.floor(Math.random() * rand.length)];
 }
}};