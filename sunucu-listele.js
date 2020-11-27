const Discord = require("discord.js");

exports.run = async (client, message, args, params) => {
if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Bu Komutu Kullanmak İçin `Sunucuyu Yönet` Yetkisine Sahip Olmalısın!");
  message.delete(5000)
  if (!args[0])
    return message.channel.send(
      `**Birşeyi listelemek için bu 3 şeyden birini yazmalısın: \`kanallar | roller | emojiler\`**`
    ).then(e => e.delete(10000))
  if (args[0] === "kanallar") {
    message.channel
      .send(
        new Discord.RichEmbed()
          .setTitle("Sunucudaki kanalların düzenli listesi")
          .addField(
            `__KATEGORİLER__ (**${
              message.guild.channels.filter(c => c.type === "category").size
            }**)`,
            "```\n" +
              message.guild.channels
                .filter(c => c.type === "category")
                .map(c => c.name)
                .join("\n") +
              "\n```",
            true
          )
          .addField(
            `__YAZI KANALLARI__ (**${
              message.guild.channels.filter(c => c.type === "text").size
            }**)`,
            "```\n" +
              message.guild.channels
                .filter(c => c.type === "text")
                .map(c => "#" + c.name + "")
                .join("\n") +
              "\n```"
          , true)
      .addField(
        `__SES KANALLARI__ (**${
          message.guild.channels.filter(c => c.type === "voice").size
        }**)`,
        "```\n" +
          message.guild.channels
            .filter(c => c.type === "voice")
            .map(c => c.name)
            .join("\n") +
          "\n```",
        true
      )
      .setColor("RANDOM")
  ).then(e => e.delete(40000))}
  if (args[0] === "emojiler") {
    let s = message.guild.emojis.map(e => `(${e.name}) <=> ${e.toString()}\n`).join("\n")
  message.channel.send("```css\n" + `${s ? s : "Bu sunucuda emoji yok!"}` + "```", { split: true }).then(e => e.delete(25000))
  }
  if (args[0] === "roller") {
  message.channel.send(
    new Discord.RichEmbed()
     .setTitle("Sunucudaki rollerin düzenli listesi")
     .setDescription(message.guild.roles.map(e => `(<@&${e.id}>) <=> (**0${e.id}**) <=> (**${e.hexColor}**)`).join("\n"))
     .setColor("RANDOM")).then(e => e.delete(40000))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["liste", "listeler", "list"],
  permLevel: 8,
};

exports.help = {
  name: "sunucu-listele",
  description: "Kanalları, rolleri veya emojileri listeler",
  usage: "listele `kanallar/emojiler/roller`",
  kategori: "moderasyon"
};
