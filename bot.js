const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const db = require('quick.db');
const moment = require('moment')
const express = require('express');
const ayarlar = require('./ayarlar.json');
const app = express();
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);


//READY.JS

const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  
 client.user.setActivity(`a!yardım | ${client.guilds.cache.size} servers!`, { type: "STREAMING"});

  console.log("---------------------------- Bot Aktifleştirildi! ------------------------")
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

//READY.JS SON

//KOMUT ALGILAYICI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`Toplam ${files.length} Komut Discord'a Aktarılıyor!`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

//KOMUT ALGILAYICI SON

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};
client.login(ayarlar.token)


//-----------------------KOMUTLAR-----------------------\\

client.on('message', async message => {

  if(message.channel.type !== 'text') return;
  const küfür = await db.fetch(`küfür.${message.guild.id}`);
  if(!küfür) return;
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
  const uyarılar = [
  'İt is Haram bRo! 🤥',
  'Az düzgün konuş günaha girme! 🤧',
  'Aaaa ayıp dostum! 🥴',
  'Vayy ahlaksız çocuk! 🙀',
  'Tövbesteyşin! 🤫'];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  let content = message.content.split(' ');
  
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Küfür Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  })
  
  });

  client.on('message', async message => {
    if(message.channel.type !== 'text') return;
  const reklam = await db.fetch(`reklam.${message.guild.id}`);
  if(!reklam) return;
  const blacklist = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg"];
  const uyarılar = [
  'Kesinlikle yapma bunu okey? ♿',
  'Seni gidi çakal, yetkililerden habersiz yapamazsın. 🍌',
  'Ooo sanırım kendisini uyanık sandı? 🐍',
  'Şşş reklam kötü bir şey dostum! 🎭',
  'Ban hammer tarafından mezarın oluşacak! ⚰️'
  ];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  if(blacklist.some(a => message.content.includes(a)))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Reklam Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  
  });

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.length >= 5) {

const caps = await db.fetch(`caps.${message.guild.id}`);
if(!caps) return;

let kontrol = message.content.toUpperCase()
if(message.content === kontrol) {

if(message.member.permissions.has('BAN_MEMBERS')) return;
if(message.mentions.users.first()) return;

return message.delete();

}}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'sa') {

const selamlar = await db.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} **ve aleyküm selam, Hoş Geldin!**`));
}});

client.on('message', async message => {
if(message.channel.type !== 'text') return;
if(message.author.bot) return;
if(message.content.startsWith(ayarlar.prefix+'afk')) return;
if(message.mentions.members.first()) {
let mention = message.mentions.members.first();
const est = await db.fetch(`kullanıcı.${mention.id}.${message.guild.id}`);
if(est) {
message.channel.send(new Discord.MessageEmbed().setThumbnail(mention.user.avatarURL() ? mention.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setTitle('Şuanda Masaüstünden Uzakta!').setDescription(` \n**• __Sebep;__ \`${est}\`**`));
}
}
const stat = await db.fetch(`name.${message.author.id}.${message.guild.id}`);
if(stat) {
message.member.setNickname(stat);
db.delete(`kullanıcı.${message.author.id}.${message.guild.id}`);
db.delete(`name.${message.author.id}.${message.guild.id}`);
message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} **Masaüstüne tekrardan hoşgeldin! :flower:**`));
}
})

client.on("messageDelete", async message => {
  if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
  await db.set(`snipe.${message.guild.id}.${message.channel.id}`, { yazar: message.author.id, yazilmaTarihi: message.createdTimestamp, silinmeTarihi: Date.now(), dosya: message.attachments.first() ? true : false });
  if (message.content) db.set(`snipe.${message.guild.id}.${message.channel.id}.icerik`, message.content);
});

client.on("guildCreate", async guild => {
  
  let kanal = "adanali-bot"
const embed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setTitle("Beni Eklediğin İçin Teşekkürler Komutlarım Aşağıda!")
  .setThumbnail(client.user.avatarURL)
  .addField(`<:moderasyon:774570352436707338> Moderasyon`, `\`mesaj-sil\` | \`yavaş-mod\` | \`duyuru\` | \`kanal-kilit\` | \`kilit-aç\` | \`kısıtlamalar\` | \`ban-liste\` | \`isim-sıfırla\``)
  .addField(`<:kullanici:774570335092604980> Kullanıcı`, ` \`av\` | \`bot-bilgi\` | \`covid19\` | \`snipe\` | \`yardım\` `)
  .addField(`<:eglence:774570319449030656> NSFW & Eğlence`, ` \`anal\` | \`karıştır\` | \`fal\` | \`kaçcm\` | \`pgif\`, \`pussy\` | \`sarıl\` | \`habbo-avatar\` | \`şanslı-sayım\` `)
  .addField(`<:gif:774570387995492394> Gif`, ` \`woman-gif\` | \`man-gif\`| \`couple-gif\` | \`animal-gif\` | \`anime-gif\` | \`baby-gif\` `)
  .addField(`<:logo:774570301576314890> Logo`, ` \`blue-logo\` | \`booking-logo\` | \`cool-logo\` | \`comic-logo\` | \`discord-logo\` | \`fire-logo\` | \`gold-logo\` | \`gold2-logo\` | \`green-logo\` `)
  .addField(`__Önemli ;__`, `Bazı Komutlar, bir aksaklık nedeniyle bot komutlarını kaybettiğimiz için eklenmesi gerektiğinde çalışmayabilir, yakında daha fazla komut ekleyeceğimiz zaman daha fazla güncelleme almak ve bilgilendirme için destek sunucusuna katılabilirsiniz`)
  .setDescription(`**[Davet Et](https://discord.com/oauth2/authorize?client_id=772839490137227274&scope=bot&permissions=8)** \`|\` **[Destek Sunucusu](https://discord.gg/pJTcauptQz)** \`|\` **[WebPanel YAKINDA](https://www.yakindageliyor.com)**`)
  .setTimestamp()
 .setFooter(`Adanalı Bot`)
  guild.createChannel(kanal, { type: 'text' }).then(x =>
    guild.channels.find(x => x.name === kanal).send(embed)
  )
  // EĞER SUNUCU SAHİBİNE ÖZELDEN GÖNDERMEK İSTİYORSANIZ :: guild.owner.send('Sunucunuza eklediğiniz için teşekkür ederim')
  // EĞER RANDOM BİR KANALA GÖNDERMEK İSTİYORSANIZ :: guild.channels.filter(c => c.type === "text").random().send('Sunucunuza eklediğiniz için teşekkür ederim')
})

client.on("message", async message => {

  if (message.author.bot) return;

  if (!message.guild) return;

  let prefix = db.get(`prefix_${message.guild.id}`);

  if (prefix === null) prefix = prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)

  message.member = await message.guild.fetchMember(message);

  const args = message.content

    .slice(prefix.length)

    .trim()

    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);

});

client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemTagData = await db.fetch(`yasaklı.tag.${guild.id}`);
const systemRoleData = await db.fetch(`yasaklı.tag.role.${guild.id}`);
if(!systemRoleData || !systemTagData) return; 

const systemTag = String(systemTagData);
const systemRole = guild.roles.cache.get(systemRoleData);

let userUsername = user.username;
if(!userUsername.includes(systemTag)) return;
member.roles.cache.forEach(role => member.roles.remove(role.id));
await member.roles.add(systemRole.id);
member.send(new Discord.MessageEmbed()
.setTitle('Yasaklı TAG Kullanıyorsun!')
.setColor('#9c5cb2')
.setDescription(`> \`${guild.name}\` *Sunucusunda yasaklı tag sistemi bulunuyor ve bu tag sende şuanda var!*`)
.addField('• Bilgilendirme', '**Sunucu içerisinde ki yetkililere ulaşarak yasaklı tag dan çıkmanızı sağlayabilirsiniz!'));
});

client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemTagData = await db.fetch(`ototag.${guild.id}`);
const systemChannelData = await db.fetch(`ototag.log.${guild.id}`);
const systemNameData = await db.fetch(`otoisim.${guild.id}`);
if(!systemNameData) return;

let systemChannel;
if(systemChannelData) systemChannel = guild.channels.cache.get(systemChannelData);

let systemTag;
if(systemTagData) systemTag = String(systemTagData);

let replacedName;
if(systemTag) {
replacedName = systemNameData.replace('+kullanıcı', user.username).replace('+tag', systemTag);
} else {
replacedName = systemNameData.replace('+kullanıcı', user.username);
};

member.setNickname(replacedName);
if(systemChannel) systemChannel.send(`${member} sunucuya katıldı. İsim Değişikliği: ${user.username} -> ${replacedName}`);
});