const Discord = require("discord.js");
const consts = require("../consts.json");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  if (!message.member.roles.has(consts.bot_komut_role) &&!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(
          `<a:632941021809868816:697223088890314773> Bilgi`,
          ` Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`
        )
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(
          `<a:632941021809868816:697223088890314773> Bilgi`,
          ` Bir kullanıcı etiketlemelisin!`
        )
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);
  let isim = args[1];
  if (!isim)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(
          `<a:632941021809868816:697223088890314773> Bilgi`,
          ` Bir isim girmelisin!`
        )
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let yas = args[2];
  if (!yas)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(
`<a:632941021809868816:697223088890314773> Bilgi`,
          ` Bir yaş girmelisin!`
        )
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  await member.setNickname(`${consts.tag} ${isim} ${yas}`);
 // const role = client.guilds.get(ayarlar.server_id).roles.find(role => role.name === consts.man_role)
  member.addRole(consts.man_role); // erkek 1
  member.addRole(consts.man_role2); // erkek 1
  member.removeRole(consts.kayitsiz_role); // kayıtsız 2
  //member.removeRole('694135884320342087') // kayıtsız 2
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(
      `Ragnarok ${consts.tag}`,
      ` ${member.user} **adlı üyeye** <@&${consts.man_role}> **rolünü verip ismini**  \`${consts.tag} ${isim} ${yas}\` **olarak ayarladım!**`
    )
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();
  return message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e", "er"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kayıt isim yaş"
};
