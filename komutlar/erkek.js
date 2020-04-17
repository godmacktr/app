const Discord = require("discord.js");
const consts = require("../consts.json");
const ayarlar = require("../ayarlar.json");






exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has(consts.bot_komut_role) && !message.member.hasPermission("ADMINISTRATOR"))
   return  message.channel.send({embed:{
	color: "RED",
	fields: [
		{
			name: ':robot: Bilgi',
			value: 'Bu komudu kullanmak için yeterli yetkin yok.',
		},
	],
	timestamp: new Date(),
	footer: {
		text: message.author.tag, 
		icon_url: message.author.avatarURL({dynamic:true}),
	},
}})
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı)
  return  message.channel.send({embed:{
	color: "RED",
	fields: [
		{
			name: ':robot: Bilgi',
			value: ' Bir kullanıcı etiketlemelisin!',
		},
	],
	timestamp: new Date(),
	footer: {
		text: message.author.tag, 
		icon_url: message.author.avatarURL({dynamic:true}),
	},
}})
  
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);
  let isim = args[1];
  if (!isim)
     return  message.channel.send({embed:{
	color: "RED",
	fields: [
		{
			name: ':robot: Bilgi',
			value: ' Bir isim girmelisin!',
		},
	],
	timestamp: new Date(),
	footer: {
		text: message.author.tag, 
		icon_url: message.author.avatarURL({dynamic:true}),
	},
}})
  let yas = args[2];
  if (!yas)
    return  message.channel.send({embed:{
	color: "RED",
	fields: [
		{
			name: ':robot: Bilgi',
			value: ' Bir yaş girmelisin!',
		},
	],
	timestamp: new Date(),
	footer: {
		text: message.author.tag, 
		icon_url: message.author.avatarURL({dynamic:true}),
	},
}})
  await member.setNickname(`${consts.tag} ${isim} ${yas}`);
  var erkek = client.guilds.cache.get(ayarlar.server_id).roles.cache.get(consts.man_role)
  var erkek2 = client.guilds.cache.get(ayarlar.server_id).roles.cache.get(consts.man_role2)
  var kayıtsız = client.guilds.cache.get(ayarlar.server_id).roles.cache.get(consts.unregister_role)
  if(erkek !== undefined){
    member.roles.add(erkek)
    if(erkek2 !==undefined){
      member.roles.add(erkek2)
    }
    if(kayıtsız !==undefined && message.member.roles.cache.has(consts.unregister_role)) {
      member.roles.remove(kayıtsız)  
    }
  }else{
   return message.channel.send("Erkek Rolünü Bulamadım :robot:").then(msg => {
    msg.delete({ timeout: 5000 })
  })
  .catch(x =>{console.log(x)});
  }  
  //member.removeRole('694135884320342087') // kayıtsız 2
 /* let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(
      `Ragnarok ${consts.tag}`,
      ` ${member.user} **adlı üyeye** <@&${consts.man_role}> **rolünü verip ismini**  \`${consts.tag} ${isim} ${yas}\` **olarak ayarladım!**`
    )
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();*/
  
  
     return  message.channel.send({embed:{
	color: "BLACK",
	fields: [
		{
			name: ':white_check_mark: Kaydı Yapıldı',
			value: `${member.user} **adlı üyeye** <@&${consts.man_role}> **rolünü verip ismini**  \`${consts.tag} ${isim} ${yas}\` **olarak ayarladım!**`,
		},
	],
	timestamp: new Date(),
	footer: {
		text: message.author.tag, 
		icon_url: message.author.avatarURL({dynamic:true}),
	},
}})
  
 // return message.channel.send(embed)
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
  description: "Sunucuda Erkek kaydı",
  usage: "kayıt isim yaş"
};
