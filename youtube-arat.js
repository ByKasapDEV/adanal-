const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    let youtube = args.slice(0).join('+');
        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Lütfen aratacağınız bir mesaj yazın!`)
        if(!link)return message.reply("Console Errors!")
        let embed = new Discord.MessageEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()
        
          .addField('İçerik Durumu:', '`Youtubede Aranıyor`')
          .addField("Aratılan İçerik:", ` \`${args.slice(0).join(' ')}\` `)
          .addField('Link:', ` [Gitmek İçin Tıklayın](${link})`)
         
          .setFooter("AdanalıBOT", message.author.avatarURL);
          
              message.channel.send(embed);
        
    
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['youtube-ara'],
  permLevel: 0
};
exports.help = {
  name: 'youtube',
  description: 'Denemde...',
  usage: 'youtube'
};