const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send(":x: Bir İsim Yazmalısın!");
  if (!yas) return message.channel.send(":x: Bir Yaş Yazmalısın!");
  member.setNickname(`${isim} │ ${yas}`);
  member.removeRole('674253915214184479')
  member.addRole('674253911086989336')
const embed = new Discord.RichEmbed()


      .addField(`**🏷 ArdaDemr Kayıt 🏷**`,
      `\n**🔸️Kayıt Edilen Kullanıcı:** ${member.user} \n🔸️**Kayıt Eden Yetkili:** \`${message.author.username}\``)
client.channels.get('674256524943556647').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick", "isim"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "ArdaDemr Kayıt Sistemi",
  usage: "ArdaDemr Kayıt Sistemi"
};