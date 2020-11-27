const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Boş bir spoiler mi atmamı istiyorsun? lütfen birşeyler yaz!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setDescription('||' + `${mesaj}` + '||')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'spoiler',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'spoiler [yazdırmak istediğiniz şey]'
};