const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const consts = require("./consts.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
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
    } catch (e) {
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
    } catch (e) {
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
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
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

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

//--------------------------------KODLAMALAR-------------------------------\\


//----------------------------------HOSGELDIN-----------------------------//
client.on("guildMemberAdd", member => {
  const ok_embed = {
    thumbnail: {
      url: member.user.avatarURL({dynamic:true})//user_image_url
    },
    image: {
      url: "https://i.ibb.co/Jkx38NQ/charby.png"
    },
    description:
      ":beginner:  " +
      `${member}` +
      " Seninle birlikte **" +
      member.guild.memberCount +
      "** Kişiyiz \n\n :beginner: Kaydının yapılması için **ses kanallarına** girebilirsin. \n\n :large_orange_diamond: Bu kullanıcı : **GÜVENLİ** \n\n :watch: Hesap kuruluş zamanı: **" +
      moment(member.user.createdAt).format("DD MMMM YYYY dddd") +
      "**",
    timestamp: new Date()
  };

  const err_embed = {
    thumbnail: {
      url: member.user.avatarURL({dynamic:true}) //user_image_url
    },
    image: {
      url: "https://i.ibb.co/Jkx38NQ/charby.png"
    },
    description:
      ":beginner:  " +
      `${member}` +
      " Seninle birlikte **" +
      member.guild.memberCount +
      "** Kişiyiz \n\n :beginner: Kaydının yapılması için **ses kanallarına** girebilirsin. \n\n :x: Bu kullanıcı : **TEHLİKELİ** \n\n :watch: Hesap kuruluş zamanı: **" +
      moment(member.user.createdAt).format("DD MMMM YYYY dddd") +
      "**",
    timestamp: new Date()
  };
  var karantina = client.guilds.cache.get(ayarlar.server_id).roles.cache.get(consts.karantina_role)
  var kayıtsız = client.guilds.cache.get(ayarlar.server_id).roles.cache.get(consts.unregister_role)
  var x = moment(member.user.createdAt)
    .add(5, "days")
    .fromNow();
  x = x.replace("birkaç saniye önce", " ");

  if (!x.includes("önce") || x.includes("sonra") || x == " ") {
    setTimeout(async () => {
      if (member.roles.cache.has(kayıtsız)) {
        member.roles.remove(kayıtsız);
      }
    }, 500);
    setTimeout(async () => {
      await member.roles.add(karantina);
    }, 500);
    member.guild.channels.cache.get(consts.welcome_channel).send({embed: err_embed});
  } else {
    setTimeout(async () => {
      if (!member.roles.cache.has(kayıtsız)) {
        member.roles.add(kayıtsız);
      }
    }, 500);
    member.guild.channels.cache.get(consts.welcome_channel).send({embed:ok_embed});
  }
});
//----------------------------------HOSGELDIN-----------------------------//
