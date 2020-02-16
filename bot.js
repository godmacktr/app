const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//--------------------------------KODLAMALAR-------------------------------\\
//----------------------------------HOSGELDIN-----------------------------//

client.on("guildMemberAdd", member => {
  let user = member.user;
  let guild = member.guild;
  if (member.guild.id !== "667404257921597440") return; //Sunucu ID GİR
  let eskiNick = member.user.username;
  const id = "678543790033600522"; //Kanal id gir
  const channel = member.guild.channels.get(id);
  const embed = new Discord.RichEmbed()
    .setDescription(
      "**``" +
        guild.name +
        "``** **Sunucusuna, Hoş Geldin!** \n > **" +
        user +
        "** Senin İle Beraber, **" +
        guild.memberCount +
        "** Üye Olduk.  \n >  Kayıt Olmak İçin **İsim Yaş** Verebilir Misin? \n >  @🎩|• Registration Officer.☦ Rolünde Ki **Yetkililer** İlgilenecektir.\n > **Hesap Oluşturma Tarihi**: **``" +
        user.createdAt +
        "``** "
    )
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(
      "Create By Toprak",
    )
  channel.send({ embed });
});


//----------------------------------HOSGELDIN-----------------------------//
client.on("guildMemberAdd", member => {
var rol = member.guild.roles.get("GELİNCE VERİLECEK ROL ID")
var rol2 = member.guild.roles.get("GELİNCE VERİLECEK ROL ID")
member.addRole(rol)
member.addRole(rol2)
   })
//----------------------------------HOSGELDIN-----------------------------//
client.on("guildMemberAdd", async member => {
  const kanal = member.guild.channels.find("name", "KAYIT KANALI ADI");
  kanal.sendMessage(
      `Selam ${member} HOŞGELDİN.`
  );
});
//----------------------------------HOSGELDIN-----------------------------//