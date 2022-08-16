const { EmbedBuilder, PermissionsBitField } = require("discord.js");


module.exports = {
    name: "ping",
    description: "Botun Ping hakkında bilgi vermesini sağlar",
    permissions: "0x0000000000000800",
    options: [],
    run: async (client, interaction) => {

        const start = Date.now();
        const embed = new EmbedBuilder()
            .setColor('007fff')
            .setTitle(client.user.username + " - Ping!")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields([
                { name: `Mesaj Ping`, value: `\`${Date.now() - start}ms\` 🛰️` },
                { name: `Mesaj Gecikmesi`, value: `\`${Date.now() - start}ms\` 🛰️` },
                { name: `API Gecikmesi`, value: `\`${Math.round(client.ws.ping)}ms\` 🛰️` }
            ])
            .setTimestamp()
            .setFooter({ text: `Asura` })
        interaction.reply({ embeds: [embed] }).catch(e => { });

    },
};
