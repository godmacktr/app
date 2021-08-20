module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const config = require("../ayarlar.js") 
		client.application.commands.set([
			{
				name: 'ping',
				description: "Botun Ping Komutu"
			}
		])
		
		console.log(`${client.user.tag} olarak giriş yapıldı.`);
	},
};