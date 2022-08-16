const { Client, Collection, GatewayIntentBits, Partials, EmbedBuilder } = require("discord.js");
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], shards: "auto", partials: [Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember]});
const { prefix, owner, token } = require("./config.js");
const { readdirSync } = require("fs")
const moment = require("moment");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { SlashCommandBuilder } = require("@discordjs/builders");

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
              Routes.applicationCommands(client.user.id),
                { body: commands }
            );
        } catch (error) {
            console.error(error);
        }
    log(`${client.user.username} Aktif Edildi!`);
})

client.on("guildMemberAdd", (member) => {
 try {
const exampleEmbed = new EmbedBuilder()
	.setColor('2F3136')
	.setTitle(`Crex'e Hoş Geldiniz!`)
	.setDescription(`Seni aramızda görmek ne güzel ${member}! Kurallarımıza uymayı ve keyif almayı unutmayın!`)
  .setThumbnail(member.user.avatarURL({ dynamic: true }))
	.setFooter({ text: `Guild Member Count: #${member.guild.memberCount}`, iconURL: 'https://thumbs.dreamstime.com/b/letter-logo-design-simple-modern-logo-design-letter-very-simple-black-background-color-183193944.jpg' });

  member.guild.channels.cache
      .get("911590826931535933")
      .send({ embeds: [exampleEmbed] });
} catch(error) {
  console.log("error =>", error);
}
});

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
