const { Client, Message, MessageEmbed , Collection} = require('discord.js');

module.exports.escapeRegex = escapeRegex;
module.exports.onCoolDown = onCoolDown;

function escapeRegex(str) {
    try {
        return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
    } catch (e) {
        console.log(String(e.stack).bgRed);
    }
}

 function onCoolDown(message, command) {
    if(!message || !message.client) throw "No Message with a valid DiscordClient granted as First Parameter";
    if(!command || !command.name) throw "No Command with a valid Name granted as Second Parameter";
    const client = message.client;
    if (!client.cooldowns.has(command.name)) { 
      client.cooldowns.set(command.name, new Collection());
    }
    const now = Date.now(); 
    const timestamps = client.cooldowns.get(command.name); 
    const cooldownAmount = (command.cooldown) * 1000; 
    if (timestamps.has(message.author.id)) { 
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount; 
      if (now < expirationTime) { 
        const timeLeft = (expirationTime - now) / 1000; 
        return timeLeft
      }
      else {
        timestamps.set(message.author.id, now); 
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount); 
        return false;
      }
    }
    else {
      timestamps.set(message.author.id, now); 
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount); 
      return false;
    }
  }