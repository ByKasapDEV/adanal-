const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args, tools) => {
  
const subReddits = ["dankmeme", "meme", "me_irl", "memes", "funny_memes"];
const random = subReddits[Math.floor(Math.random() * subReddits.length)];

const img = await randomPuppy(random);
  
const embed = new Discord.MessageEmbed()

.setTitle(`Bu Mim Şuradan Geliyor: /r/${random}`)
.setColor("Purple")
.setImage(img)
.setURL(`https://reddit.com/r/${random}`);

message.channel.send(embed);
}
          
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dankmeme'],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'Rastgele meme gönderir.',
  usage: 'meme'
};