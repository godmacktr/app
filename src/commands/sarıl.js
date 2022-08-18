const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
 data: new SlashCommandBuilder()
   .setName('sarıl')
   .setDescription  ('Sarılırsınız.'),
 .addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
			.setRequired(true));
  let kisi = interaction.mentions.users.first() || client.users.cache.get(args[0]) 
  if (!kisi) return interaction.reply("Kime Sarılacağım Yazman Gerek 😥");
run: async(client, interaction, args) => {
  if (kisi.id === interaction.author.id) return interaction.reply("Çok Üzgünüm ama Kendine Sarılamassın!");
 
    const cse = new EmbedBuilder()
      .setDescription("<@"+kisi.id+">, <@" + interaction.author.id + "> Sana Sarılmak İstiyor 💏 💘💗💖💕💟💞💝💓❤")
      .setColor("Red")
      .setTimestamp()
      .setImage("https://media.discordapp.net/attachments/737347015251460156/747779132422881290/tenor.gif?width=163&height=147");
    interaction.channel.send({content: "<@"+kisi.id+">", embeds: [cse]});

}
  };