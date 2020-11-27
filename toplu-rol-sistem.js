const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('AdanalıBOT Yasaklı Tag Sistem').setDescription(`
\`a!toplu-rol-al\`
Sunucunuzdaki üyelerden toplu rol alırsınız.

\`a!toplu-rol-ver\`
Sunucunuzdaki üyelere toplu rol verirsiniz.`)
.setImage('').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'toplu-rol-sistem'
};