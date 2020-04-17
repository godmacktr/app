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
  var erkek = client.guilds.cache.get(ayarlar.server_id).roles.cache.get(consts.man_role)
  var erkek2 = client.guilds.cache.get(ayarlar.server_id).roles.cache.get(consts.man_role2)
  var kayıtsız = client.guilds.cache.get(ayarlar.server_id).roles.cache.get(consts.unregister_role)
  if(erkek !== undefined){
    member.roles.add(erkek)
    if(erkek2 !==undefined){
      member.roles.add(erkek2)
    }
    if(kayıtsız !==undefined){
    member.roles.remove(kayıtsız)  
    }
  }else{
    message.channel.send()
  }
  
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
