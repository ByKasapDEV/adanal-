const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('').setTitle('Bir patlama oldu!').setDescription(`• \`A!oto-tag-log-kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

  data.delete(`ototag.${message.guild.id}`);
  message.channel.send(new Discord.MessageEmbed().setTitle('Bu iş tamamdır!').setDescription('Sunucuya giren kullanıcıya verilen TAG kapatıldı.'));
  

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oto-tag-kapat'
};