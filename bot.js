const { Client, Intents, Collection } = require('discord.js');
const Discord = require("discord.js")
const fs = require('fs')
const ayarlar = require("./ayarlar.js")
const db = require("croxydb")

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });// intentler detayları djs guide adresinde daha iyi bulursunuz.
client.commands = new Collection();

const commandFiles = fs.readdirSync('./komutlar').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./komutlar/${file}`);
	client.commands.set(command.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}


let cstoken;
if (ayarlar.TOKEN) {
  cstoken = ayarlar.TOKEN;
}
if (process.env.TOKEN) {
  cstoken = process.env.TOKEN;
}
if (cstoken) {
  client.login(cstoken);
  
  client.on("ready", async () => {
  console.log("Bot "+client.user.username+" İsmi ile Giriş Yaptı!")
  })
} else {
  console.log("Projeye Hiç Bir Bot Tokeni Yazılmamış!");
}

client.ayarlar = ayarlar

  
//Projenizi Bir Sanal Sunucu(VDS) veya Kendi Bilgisayarınıza Kuracak İseniz Bu Kısmı Silin!
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
//Projenizi Bir Sanal Sunucu(VDS) veya Kendi Bilgisayarınıza Kuracak İseniz Bu Kısmı Silin!
  



