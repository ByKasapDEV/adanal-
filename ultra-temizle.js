const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_SERVER')) return message.channel.sendEmbed('Bu Komut `YÖNETİCİ` Yetkisine Özeldir!');
message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
 return message.channel.send(`Başarıyla Ultra Temizle Özelliğini Kullandın!`)
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
    name: 'u-temizle',
  description: 'Better antispamdaki nuke komutu işte',
  usage: 'nuke'
};