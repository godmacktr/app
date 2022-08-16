const discord = require('discord.js')
 
module.exports = {
   .setname('ban')
   .setDescription("Kullanıcı banlamanızı sağlar.")
  .addStringOption(option =>
        {  
            option.setName('üye'), 
             option.setName('Kimi banlamak istiyorsunuz?'), 
            type: 'user', 
            require: true //sebep girmek zorunlu olsun isterseniz true yapabilirsiniz.
        },
        {  
             option.setName('süre'), 
             option.setName('Üyeyi kaç günlük mesajlarını silmek istiyorsunuz?'), 
            type: 'number', 
            require: false //süre girmek zorunlu olsun isterseniz true yapabilirsiniz.
        },
        {  
            name: 'sebep', 
            description: 'Neden bu kullanıcıyı banlıyorsunuz?', 
            type: 'string', 
            require: false //sebep girmek zorunlu olsun isterseniz true yapabilirsiniz.
        },
   ],
 run: async (client, interaction) {
    var txt = "İstenilen üye başarıyla banlandı. "
    let member = interaction.options.getMember("üye")
    let time = interaction.options.getNumber("süre")
    let reason = interaction.options.getString("sebep")
    if(!reason && !time) interaction.guild.members.cache.get(member.id).ban()
    else if(!time) interaction.guild.members.cache.get(member.id).ban({ reason: reason}), txt = txt+"**Sebep: **"+reason
    else if(!reason) { if(time > 7) time = 7, interaction.guild.members.cache.get(member.id).ban({ deleteMessageDays: time }), txt = txt+"**Süre: **"+time+" gün" }
    else { if(time > 7) time = 7, interaction.guild.members.cache.get(member.id).ban({ deleteMessageDays: time, reason: reason}), txt = txt+"**Sebep: **"+reason+", **Süre: **"+time+" gün" }
    
    interaction.reply(txt + " <:nice:963752223878283304>")
    setTimeout(() => interaction.deleteReply(), 5000)
 }
}