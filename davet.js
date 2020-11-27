const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || 'a!';
  const embed = new Discord.MessageEmbed()
      .setAuthor("Davet Link Başarıyla Oluşturuldu!")
      .setDescription(`[Botu Davet Etmek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=772839490137227274&scope=bot&permissions=8)`)
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};