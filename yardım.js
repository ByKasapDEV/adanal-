const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setTitle("Adanalı Bot Komut Listesi")
  .setThumbnail(client.user.avatarURL)
  .addField(`<:moderasyon:774580369306550272> Moderasyon (15)`, `\`temizle\` | \`u-temizle\` | \`yavaş-mod\` | \`duyuru\` | \`kanal-kilit\` | \`kilit-aç\` | \`kısıtlamalar\` | \`ban-liste\` | \`yasak-tag-sistem\` | \`ototag-sistem\` | \`otorol-sistem\` | \`toplu-rol-sistem\` | \`isim-sıfırla\` | \`prefix-ayarla\` | \`çek\` `)
  .addField(`<:kullanici:774570335092604980> Kullanıcı (5)`, ` \`avatar\` | \`bot-bilgi\` | \`davet\` | \`covid19\` | \`yardım\` `)
  .addField(`<:youtube:776837627990638632> Youtube Sistemleri (1)`, ` \`youtube-ara\` `)
 .addField(`<:eglence:774570319449030656> NSFW & Eğlence (11)`, ` \`anal\` | \`karıştır\` | \`fal\` | \`kaçcm\` | \`pgif\`, \`pussy\` | \`sarıl\` | \`meme\` | \`spoiler\` | \`habbo-avatar\` | \`şanslı-sayım\` `)
  .addField(`<:gif:774580344417681429> Gif (6)`, ` \`woman-gif\` | \`man-gif\`| \`couple-gif\` | \`animal-gif\` | \`anime-gif\` | \`baby-gif\` `)
  .addField(`<:logo:774570301576314890> Logo (9)`, ` \`blue-logo\` | \`booking-logo\` | \`cool-logo\` | \`comic-logo\` | \`discord-logo\` | \`fire-logo\` | \`gold-logo\` | \`gold2-logo\` | \`green-logo\` `)
  .addField(`__Önemli ;__`, `Bazı Komutlar, bir aksaklık nedeniyle bot komutlarını kaybettiğimiz için eklenmesi gerektiğinde çalışmayabilir, yakında daha fazla komut ekleyeceğimiz zaman daha fazla güncelleme almak ve bilgilendirme için destek sunucusuna katılabilirsiniz`) 
 .addField(`__Toplam Komut Sayısı ;__`, `**\`${client.commands.size}\`** Komut bulunuyor!` )
.setDescription(`**[Davet Et](https://discord.com/oauth2/authorize?client_id=772839490137227274&scope=bot&permissions=8)** \`|\` **[Destek Sunucusu](https://discord.gg/pJTcauptQz)** \`|\` **[WebPanel YAKINDA](https://www.yakindageliyor.com)**`)
  .setTimestamp()
 .setFooter(`Adanalı Bot`)
return message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help','h'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};