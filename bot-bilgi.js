const Discord = require('discord.js')
const moment = require("moment");
const db = require('quick.db')
const os = require("os");
const client = require("moment-duration-format");
exports.run = async (client, message, args) => {
  
let uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
let bel = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let bel2 = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 
 let duration = client.uptime

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)



 const Embed = new Discord.MessageEmbed()
  .setTitle(`AdanalıBOT - Bot Bilgi Menüsü`)
 .setDescription(`
            **__Sahip Bilgileri__**
           Bot Sahibi → **\`! みTuishα. ☆#0666\`**
           Ortak Bot Sahibi → **\`お» AKK • ByKasap#9525\`**
           Sahip ID → **\`722783422199758940\`**
           Ortak Bot Sahip ID → **\`421947450715013146\`**\n
           **__Bot Genel Bilgileri__**
           Sunucu Sayısı → **\`${client.guilds.cache.size.toLocaleString()}/90 (Doğrulanma Aşaması)\`**
           Kullanıcı Sayısı →**\`${client.users.cache.size}/260.000\`**
           Kanal Sayısı →  **\`${client.channels.cache.size.toLocaleString()}\`\n**  
           **__Kütüphane ve Versiyon Bilgileri__**
           DiscordJS → **\`v${Discord.version}/Bot Kütüphanesi\`**
           NodeJS → **\`${process.version}\`**\n
           **__Bot Kullanım Bilgileri__**
           Kuruluş → **\`${s}\`**
           Ping → **\`${client.ws.ping}ms\`**
           Bit  → **\`${os.arch()}\`**
           İşletim Sistemi → **\`${os.platform()}\`**
           Çalışma Süresi →  **\`${uptime}\`**
           Bellek Kullanımı → **\`${bel} MB/64 GB\`**
           Toplam Bellek Miktarı → **\`${bel2} MB/64 GB\`**
           Yüklü Modül sayısı → **\`16\`**
           Komut Sayısı  →   **\`${client.commands.size}\`**\n 
           Bot İşlemci/CPU \`\`\`fix\n ${os.cpus().map((i) => `${i.model}`)[0]}\`\`\`
            **__Bot Ekstra Bilgileri__**
           Ana Komutlar → **\`a!yardım\` + \`a!bot-bilgi\`** 
           Veri Kaydı → **\`quick.db\`**
           quick.db Komut sayısı → **\`21\`**
           Suport server → [Destek Sunucusu](https://discord.gg/pJTcauptQz)
`)          

.addField(`Linkler`,`[Davet Linki](https://discord.com/oauth2/authorize?client_id=772839490137227274&scope=bot&permissions=8)`)
  message.channel.send(Embed)
};
 
exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ['bot-bilgi'],
  permLevel: 0
};
 
exports.help = {
  name: 'i',
  description: 'Reklam Sistemini Akif Eder',
  usage: 'reklam-engelle'
};