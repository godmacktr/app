const { stripIndents } = require("common-tags");
const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder() 
  .setName('adam-asmaca')
  .setDescription('Adam-asmaca Oynarsınız'),
run: async(bot, interaction) => {
let oyndurum = new Set(); // lear mert / discordturkiye.com
  let kelime = [ // buraya kelimelerinizi ekleyin
    "elma",
    "armut",
    "mahmut",
    "eşya",
    "sunucu",
    "ismail",
    "eşek",
    "anlox",
    "siber",
    "kral",
    "biziz",
    "yılbaşı",
    "köpek",
    "salata",
    "biber",
    "camii",
    "maymun",
    "aslan",
    "ali",
    "bali",
    "baba",
    "karpuz",
    "zalim",
    "kamyon",
    "zaman",
    "alık",
    "doğa",
    "maden",
    "oyuncak",
    "halat",
    "köprü",
  ];
  if (oyndurum.has(interaction.channel.id))
    return interaction.reply(
      "Kanal başına sadece bir adam asmaca oyunu meydana gelebilir."
    );
  try {
    const cevap =
      kelime[Math.floor(Math.random() * kelime.length)].toLowerCase();
    let point = 0;
    let displayText = null;
    let tahmin = false;
    const confirmation = [];
    const yanlış = [];
    const display = new Array(cevap.length).fill("_");
    while (cevap.length !== confirmation.length && point < 6) {
      await interaction.channel.send(stripIndents`
                    ${
                      displayText === null
                        ? "**Asura Bot Adam Asmaca**!"
                        : displayText
                        ? "**Çok iyisin!**"
                        : "**Yanlış Harf!**"
                    }
                         **Kelime:**    \`${display.join(" ")}\`
                    **Yanlış Harfler:** ${yanlış.join(", ") || "Yok"}
                    \`\`\`
                    _________
                    |    |
                    |    ${point > 0 ? "😵" : ""}
                    |   ${point > 2 ? "┌" : " "}${point > 1 ? "()" : ""}${
        point > 3 ? "┐" : ""
      }
                    |    ${point > 4 ? "/" : ""} ${point > 5 ? "\\" : ""}
                    |
                    \`\`\`
                `);
      const filter = (res) => {
        const choice = res.content.toLowerCase();
        return (
          res.author.id === interaction.author.id &&
          !confirmation.includes(choice) &&
          !yanlış.includes(choice)
        );
      };
      const guess = await interaction.channel.awaitMessages(filter, {
        max: 1,
        time: 300000,
      });
      if (!guess.size) {
        await interaction.channel.send({ content: "Zamanın doldu!" });
        break;
      }
      const choice = guess.first().content.toLowerCase();
      if (choice === "end") break;
      if (choice.length > 1 && choice === cevap) {
        tahmin = true;
        break;
      } else if (cevap.includes(choice)) {
        displayText = true;
        for (let i = 0; i < cevap.length; i++) {
          if (cevap.charAt(i) !== choice) continue;
          confirmation.push(cevap.charAt(i));
          display[i] = cevap.charAt(i);
        }
      } else {
        displayText = false;
        if (choice.length === 1) yanlış.push(choice);
        point++;
      }
    }
    oyndurum.delete(interaction.channel.id);
    if (cevap.length === confirmation.length || tahmin)
      return interaction.channel.send(
        `**Tebrikler kelimeyi buldun! ** Kelime: ${cevap}!`
      );
    return interaction.channel.send({ content: `Maalesef bilemedin kelime bu: **${cevap}**` });
  } catch (err) {
    oyndurum.delete(interaction.channel.id);
    return interaction.reply({ content: `Olamaz! Bir Hata Verdi: \`${err.interaction}\`` });
  }
}
}