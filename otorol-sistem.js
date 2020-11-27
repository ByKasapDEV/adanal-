const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('AdanalıBOT Oto Rol Sistem').setDescription(`
\`a!oto-role <ROL>\`
Sunucuya girenlere otomatik verilecek rolü aktif edersiniz.

\`a!oto-role-kapat\`
Ayarlı otorol sistemini kapatır.`)
.setImage('').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'otorol-sistem'
};