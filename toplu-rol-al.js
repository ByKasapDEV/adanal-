const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('').setTitle('Bir patlama oldu!').setDescription(`• \`a!toplu-rol-al\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage(''));

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir patlama oldu!').setDescription(`Üyelerin üzerinden alınacak bir **ROL ID** belirtmedin! 🤔

**Örnek:**
\`\`\`${client.ayarlar.prefix}Trol-al ${message.guild.roles.cache.random().id}\`\`\``).setColor('#9c5cb2'));
if(!message.guild.roles.cache.get(args[0])) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir patlama oldu!').setDescription(`Üyelerin üzerinden alınacak bir **ROL ID** belirtmedin! 🤔

**Örnek:**
\`\`\`${client.ayarlar.prefix}Trol-al ${message.guild.roles.cache.random().id}\`\`\``).setColor('#9c5cb2'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Bu iş tamamdır!').setDescription(`**Sunucunuzda ki üyeler'den yavaş yavaş ${message.guild.roles.cache.get(args[0])} adlı rol alınıyor.**`));
message.guild.members.cache.forEach(a => {
setTimeout(() => {
if(a.roles.cache.has(message.guild.roles.cache.get(args[0]).id)) {
a.roles.remove(message.guild.roles.cache.get(args[0]).id);
}
}, 2000)
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'toplu-rol-al'
};