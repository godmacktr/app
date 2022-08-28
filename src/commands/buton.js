  const { ButtonBuilder, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, ActionRowBuilder, ButtonStyle } = require("discord.js");
  const Discord = require("discord.js")
  const db = require("croxydb")
  module.exports = {
  data: new SlashCommandBuilder()
   .setName('buton-rol')
    .setDescription('Butonla Rol Verir')
    .addRoleOption(option => 
    option.setName('rol')
    .setDescription('Rol Seç')),
  run: async(client, interaction, args) => {
      if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.channel.send("Yeterli yetkin yok!")

    let rol = interaction.mentions.roles.first()

    if(!rol) return interaction.reply("Lütfen bir rol etiketle!")

    let mesaj = interaction.options.getString('input');
    if (!mesaj) return interaction.reply("Lütfen bir embed mesaj yazısı gir!")
    let buttonid = rol.name
    const embed = new EmbedBuilder()
    .setTitle("Asura - Rol Al Sistemi!")
    .setDescription(`${mesaj}`)
    .setColor("#ff0000")
    const row = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
    .setLabel(rol.name)
    .setStyle(ButtonStyle.Secondary)
    .setCustomId("rol")
    )
    interaction.reply({embeds: [embed], components: [row]}).then((mesaj) => {
  db.set(`buton_rol${mesaj.id}`, rol.id)
  })
  }
  }