const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('AdanalıBOT Yasaklı Tag Sistem').setDescription(`
\`a!yasaklı-tag 🚀\`
Yasaklı **tagınızı** yada **simgenizi** koyarak aktif edersiniz

\`a!yasaklı-tag-kapat\`
**Ayarlı bulunan yasaklı tagınızı kapatır**`)
.setImage('').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yasak-tag-sistem'
};