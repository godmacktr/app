const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    let activities = [ `Somer Şef İfşa`, `${client.user.username}` ], i = 0;
    client.user.setStatus("idle");
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Watching }), 22000);
}};
