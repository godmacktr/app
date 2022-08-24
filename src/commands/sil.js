const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
data: new SlashCommandBuilder()
    .setName('sil')
   .setDescription('Mesaj 1 ve 100 arası mesaj silersiniz.'),
  .addStringOption(option =>
		option.setName('category')
			.setDescription('The gif category')
run: async (client, interaction, args) => {
if(!interaction.member.permissions.has("0x0000000000002000")) return interaction.reply("Yetersiz Yetki! Gereken **Mesajları Yönet**").catch(err => {})
  
let user = interaction.options.getUser("kullanıcı") || interaction.user
let sayı = args[0]
if(sayı < 1 || sayı > 100) return interaction.reply({ content: "1 ile 100 arasında bir sayı belirtin." }).catch(err => {})
await interaction.channel.interactions.fetch({limit: sayı})
.then(interactions => interaction.channel.bulkDelete(interactions))
.catch(err => {
return interaction.reply({ content: "Mesaj silinemedi. Çok eski mesajlar yada yetkim yetersiz." }).catch(err => {})
})
  

const cse = new EmbedBuilder()
.setTitle("Mesajlar silindi.")
.setDescription(`${sayı} mesaj silindi.`)
.setFooter({text: `${user.tag} tarafından istendi.` })
.setColor("#0099ff")
interaction.reply({ embeds: [cse]}).then(async msg => {

setTimeout(async() => {
await msg.delete().catch(e => {})
}, 10000)

}).catch(err => {})

}
}