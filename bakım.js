const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if(message.author.id !== ayarlar.sahip) return message.reply('Beni Kandıramazsın! Bu komut sadece sahibime özel.');
  if(args[0] === "başlat" || args[0] === "yap") {
    if(!args[1]) return message.reply('Bakım Nedeni Girmelisin!')
    await db.set('botbakim', args.slice(1).join(' '))
    message.reply(`Bot başarıyla \`${args.slice(1).join(' ')}\` nedeni ile bakıma alındı!`)
    return
  }
  
  if(args[0] === "bitir" || args[0] === "sonlandır") {
    await db.delete('botbakim')
    message.reply('Merhaba! Bakımı Yaptığın için teşekkür ederim! sonlandırıldı')
    return
  }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
};

exports.help = {
    name: "bakım",
    description: "Bakım başlatır/bitirirsiniz. Bakım açıkken kullanıcılar komutları kullanamaz.",
    usage: "bakım başlat <sebep>/bitir",
    kategori: 'sahip'
};
