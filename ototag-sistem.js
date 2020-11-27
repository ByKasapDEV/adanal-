const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('AdanalıBOT Yasaklı Tag Sistem').setDescription(`
\`a!ototag 🚀\`
**tagınızı** yada **simgenizi** koyarak aktif edersiniz

\`a!ototag-kapat\`
Ayarlı bulunan ototag sistemini kapatır.

\`a!ototag-log\`
Ototag loglarının tutulacağı kanalı ayarlarsınız.

\`a!ototag-log-kapat\`
Ayarlı bulunan ototag loglarının tutulduğu kanalı kapatır.`)
.setImage('').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ototag-sistem'
};