module.exports = {
	name: 'messageCreate',
	execute(message, client) {
        const config = require("../ayarlar.js")
        const prefix = config.prefix;
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('Komuta Ulaşılamadı!');
        }
	},
};