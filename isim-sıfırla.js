const Discord = require('discord.js')
const ayarlar  = require('../ayarlar.json')

exports.run = (client ,message) => {
	   if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed('Bu Komut `Yönetici` Rolüne Özeldir!');
	   let kullanıcı = message.mentions.members.first()
	   		if(!kullanıcı)
	   				return message.channel.send(`Lütfen Bir Kullanıcı Belirtiniz!`)
	 kullanıcı.setNickname(kullanıcı.user.username)
	 message.channel.send('Başarıyla Kullanıcının İsmini Sıfırladım!')
};
    exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases : [''],
       permlevel: 0
    };

    exports.help = {
      name: 'isim-sıfırla'
    }