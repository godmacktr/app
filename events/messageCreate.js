const { MessageEmbed, Collection } = require("discord.js");
var config = require("../config.json");
var ee = require("../config.json");
const client = require("..");
const prefix = config.prefix;

client.on("messageCreate", async (message) => {
  const { escapeRegex, onCoolDown } = require("../utils/function");
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.partial) await message.channel.fetch();
  if (message.partial) await message.fetch();
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(config.prefix)})\\s*`);
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) {
    if (matchedPrefix.includes(client.user.id)) {
      message.reply(`<@${message.author.id}> Komutlarıma Göz Atmak İçin: \`${config.prefix}yardım\` Yaza Bilirsin!`);
    }
  }
  const command = client.commands.get(cmd.toLowerCase());
  if (!command) return;
  if (command) {

    if (onCoolDown(message, command)) {
      let cool = new MessageEmbed()
      .setDescription(`❌ Biraz Yavaşla \`${onCoolDown(message, command)}\` Saniye Sonra \`${command.name}\` İsimli Komutu Kullana Bilirsin!`)
      return message.channel.send({embeds : [cool]})
    }
    await command.run(client, message, args, prefix);
  }

});
