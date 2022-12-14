const { Client, Collection, GatewayIntentBits, Partials, EmbedBuilder } = require("discord.js");
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], shards: "auto", partials: [Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember]});
const { owner} = require("./config.js");
const { readdirSync } = require("fs")
const moment = require("moment");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require("inflames.db")

const clientId = '998288926043291718';
const guildId = '911587012371427368';


client.commands = new Collection()

const rest = new REST({ version: '10' }).setToken(process.env.token);

const log = l => { console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}] ${l}`) };

//command-handler
const commands = [];
const commandFiles = readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./src/commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

client.on("ready", async () => {
        try {
            await rest.put(
              Routes.applicationGuildCommands(clientId, guildId),
                { body: commands }
            );
        } catch (error) {
            console.error(error);
        }
    log(`${client.user.username} Aktif Edildi!`);
})

client.on('messageCreate', message => {
  if(message.content.includes("discord.gg/")) {
    message.delete()
    message.channel.send(`${message.member} bu sunucuda reklam kesinlikle yasak`)
  }
})

client.on("guildMemberAdd", async member  => {
   let a????km?? = db.fetch(`hg_${member.guild.id}`)
   let kanal = db.fetch(`hgkanal_${member.guild.id}`)
    if(a????km?? === "a????k") {
        const cse = new EmbedBuilder()
        .setColor('2F3136')
	      .setTitle(`Crex'e Ho?? Geldiniz!`)
	      .setDescription(`<:joinembed:1012743005700104202> Seni aram??zda g??rmek ne g??zel ${member}! Kurallar??m??za uymay?? ve keyif almay?? unutmay??n!`)
        .setThumbnail(member.user.avatarURL({ dynamic: true }))
	      .setFooter({ text: `Guild Member Count: #${member.guild.memberCount}`, iconURL: 'https://thumbs.dreamstime.com/b/letter-logo-design-simple-modern-logo-design-letter-very-simple-black-background-color-183193944.jpg' });
        client.channels.cache.get(kanal).send({ embeds: [cse] });
    } else if(a????km?? === "kapal??") { return; }
      })???

client.on("guildMemberRemove", async member  => {
   let a????km?? = db.fetch(`hg_${member.guild.id}`)
   let kanal = db.fetch(`hgkanal_${member.guild.id}`)
    if(a????km?? === "a????k") {
        const cse = new EmbedBuilder()
        .setColor('2F3136')
	      .setTitle(`Crex'den Ayr??ld??n??z`)
	      .setDescription(`<:leaveembed:1012742156408070258> Aram??zdan gitmen bizi ??zd?? ${member} Mutlaka geri gelmeyi unutma!`)
        .setThumbnail(member.user.avatarURL({ dynamic: true }))
	      .setFooter({ text: `Guild Member Count: #${member.guild.memberCount}`, iconURL: 'https://thumbs.dreamstime.com/b/letter-logo-design-simple-modern-logo-design-letter-very-simple-black-background-color-183193944.jpg' });
        client.channels.cache.get(kanal).send({ embeds: [cse] });
    } else if(a????km?? === "kapal??") { return; }
      })???
    
client.on("guildMemberAdd", (member) => {
    if (db.has(`otorol_${member.guild.id}`)) {
        member.roles.add(db.get(`otorol_${member.guild.id}`))
          }
          })???
client.on('interactionCreate', async interaction => {
            let butonrol = db.fetch(`buton_rol${interaction.guild.id}`)
          if(!butonrol) return;
          if (!interaction.isButton()) return;
          if(interaction.customId === "rol") {
              if(!interaction.member.roles.cache.has(butonrol)) { 
              interaction.member.roles.add(butonrol)
            interaction.reply({content: "Rol Ba??ar??yla Verildi!", ephemeral: true})
             } else {
               
              interaction.member.roles.remove(butonrol)
            interaction.reply({content: "Rol Ba??ar??yla Al??nd??!", ephemeral: true})
          }
            }
          })

//event-handler
const eventFiles = readdirSync('./src/events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./src/events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
//

client.login(process.env.token)
