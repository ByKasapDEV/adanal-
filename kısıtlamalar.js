const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('AdanalıBOT - Yetkili Kısıtlama Menüsü')
.addField('Selam Karşılaması İçin', `\`\`\`a!selam aç & a!selam kapat\`\`\``)
.addField('Kötü Sözleri Kısıtlamak İçin', `\`\`\`a!küfür kısıt & a!küfür kapat\`\`\``)
.addField('Sunucunuzdaki Reklamları Kısıtlamak İçin', `\`\`\`a!reklam kısıt & a!reklam kapat\`\`\``)
.addField('Sunucunuzda Kullanılan Büyük Harfi Kısıtlamak İçin', `\`\`\`a!caps kısıt & a!caps kapat\`\`\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kısıtlamalar'
};