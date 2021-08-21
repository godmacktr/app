const { Client, Message, MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
    name: 'yardım',
    description: 'Botun Komutları Hakkında Bilgi Veren Yardım Komutu!',

    run: async(client, message, args) => {

        const roleColor =
        message.guild.me.displayHexColor === "#000000"
          ? "#ffffff"
          : message.guild.me.displayHexColor;
  
      if (!args[0]) {
        let categories = [];
  
        readdirSync("./commands/").forEach((dir) => {
          const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
            file.endsWith(".js")
          );
  
          const cmds = commands.map((command) => {
            let file = require(`../../commands/${dir}/${command}`);
            if (!file.name) return "Komut İsmi Yok!";
            let name = file.name.replace(".js", "");
            return `\`${name}\``;
          });
          let data = new Object();
          data = {
            name: dir.toUpperCase(),
            value: cmds.length === 0 ? " Devam Ediyor. " : cmds.join(" "),
          };
          categories.push(data);
        });
  
        const embed = new MessageEmbed()
          .setTitle("📬 Yardımmı Gerekli? Ozaman Burayı İyi Oku.")
          .setDescription(`\`${prefix}yardım\` Komutu ile Diğer Komutlar Hakkında Detaylı Yardım Ala Bilirsin. ÖRNEK: \`${prefix}yardım ban\`.`)
          .setFooter(`Kullanan ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(roleColor);
        return message.channel.send({embeds : [embed]})
      } else {
        const command =
          client.commands.get(args[0].toLowerCase()) ||
          client.commands.find(
            (c) => c.aliases && c.aliases.includes(args[0].toLowerCase()));
  
        if (!command) {
          const embed = new MessageEmbed()
            .setTitle(`Geçersiz Komut İsmi! \`${prefix}yardım\` Komutu İle Sadece Sistemde Var Olan Komutlar Hakkında Bilgi Ala Bilirsin!!`)
            .setColor("FF0000");
          return message.channel.send({embeds : [embed]});
        }
  
        const embed = new MessageEmbed()
          .setTitle("Komut Detayları")
          .addField("PREFIX:", `\`${prefix}\``)
          .addField("KOMUT İSMİ:", command.name ? `\`${command.name}\`` : "Komut İsmi Bulunamadı!")
          .addField("KULLANIM ŞEKLİ:", command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : `\`${prefix}${command.name}\``)
          .addField("KOMUT AÇIKLAMASI:", command.description ? `\`${command.description}\`` : "Bu Komuta Bir Açıklama Yazılmamış!")
          .setFooter(`Kullanan ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(roleColor);
          return message.channel.send({embeds : [embed]});
      } 
    }
}