   const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
    let Hotel = args[0]
if(!Hotel) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir Hata Oluştu!').setDescription("**Habbo oynayan bir kullanıcının ismini gir!**"))
  
  const Mesaj = new Discord.MessageEmbed()
    .setColor(message.member.displayHexColor)
    .setTitle(`\`${args[0]}\` Adlı Habbonun Avatarı`)
    .setImage(`https://www.habbo.com.tr/habbo-imaging/avatarimage?hb=image&user=${args[0]}&headonly=0&direction=2&head_direction=2&action=&gesture=&size=l`)
    .setDescription(`[Profil Linki Tıkla](https://www.habbowidgets.com/habinfo/com.tr/${args[0]})`)
    .setFooter(message.author.tag + " Tarafından Oluşturuldu.", message.author.avatarURL)
  message.channel.send(Mesaj)
  };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['habbo-avatar', 'habboavatar', 'ha'],
    permLevel: 0
};
exports.help = {
  name: 'Habbo-Avatar'
}
