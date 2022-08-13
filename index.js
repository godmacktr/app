const { Client, Message, MessageEmbed, Collection } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const prefix = config.prefix;
const token = process.env.TOKEN;
const { QuickDB } = require("quick.db");
const db = new QuickDB();


const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: 32767,
});
module.exports = client;

require("./events/message.js");
require("./events/ready.js");

client.on("guildMemberAdd", member => {
  const kanal = db.get(`gckanal_${member.guild.id}`)
  if(!kanal) return;
  member.guild.channels.cache.get("1007626918302060598").send({content: `:inbox_tray: | ${member} sunucuya katıldı! Sunucumuz **${member.guild.memberCount}** kişi oldu.`})
})

client.on("guildMemberRemove", member => {
  const kanal = db.get(`gckanal_${member.guild.id}`)
  if(!kanal) return;
  member.guild.channels.cache.get("1007626918302060598").send({content: `:outbox_tray: | ${member} sunucudan ayrıldı! Sunucumuz **${member.guild.memberCount}** kişi oldu.`})
})

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`Toplamda ${files.length} Komut Var!`);
  files.forEach((f) => {
    let props = require(`./komutlar/${f}`);
    console.log(`${props.help.name} İsimli Komut Aktif!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach((alias) => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

if (!token) {
  console.log(
    "Bu Proje Glitch Özel Uyarlanmıştır .env Dosyasına Discord Bot Tokeninizi Yazınız!"
  );
} else {
  client.login(token).catch((e) => {
    console.log(
      "Projeye Yazılan Token Hatalı veya Discord Botunuzun Intentleri Kapalı!"
    );
  });
}

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`Uptime Başarılı`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);
