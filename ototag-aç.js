const Discord = require('discord.js');
const data = require('quick.db');

exports.run = (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('').setTitle(`Bir patlama oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`a!ototag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
if(!args[0]) return message.channel.send(nn.setTitle('Bir patlama oldu!').setDescription(`Bir **TAG** ve ya **SIMGE** koymayı unuttunuz.`).setImage('')).then(a => a.delete({timeout: 10000}));

data.set(`ototag.${message.guild.id}`, args[0]);
message.channel.send(nn.setTitle(`Bu iş tamamdır!`).setDescription(`Sunucuya giren kullanıcıya \`${args[0]}\` olarak verilecek.`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ototag'
};