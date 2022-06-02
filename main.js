const fetch = require('node-fetch')
const DISCORD = require('discord.js');
const {token} = require('./config.json')
const {SlashCommandeBuilder} = require('discord.js/')
const client = new DISCORD.Client({ intents : [DISCORD.Intents.FLAGS.GUILDS,DISCORD.Intents.FLAGS.GUILD_MESSAGES,DISCORD.Intents.FLAGS.GUILD_PRESENCES]});

var minute = 29;
var intervall = minute*60*1000

//Anti AFK serveur
setInterval(() =>{
  fetch.default('http://pangolinbot.alwaysdata.net/',{
    method : 'GET'
  }).then(
    console.log("I'm still alive")
  )
},intervall)
//Fin anti AFK serveur

client.once('ready', () =>{

})



client.on("messageCreate", (message) => {
  if (message.content.toLocaleLowerCase().includes("!Poet") || message.content.toLocaleLowerCase().includes("!poet")) {
    let channel = message.channel;
    let member = message.member;
    let memberMentions = message.mentions.members.first();
    if (memberMentions !== undefined) {
      member = memberMentions;
    }
    if (message.author.username !== "ElyPoet") {
      //console.log(member)
      let spot = member.presence.activities.find(
        (element) => element.name === "Spotify"
      );
      //console.log(spot);
      if (member.presence !== null && spot !== undefined) {
        const em = new DISCORD.MessageEmbed()
          .setTitle(`${member.nickname} is doing poet poet with Ely !`)
          .setColor("#1DB954")
          .setThumbnail(spot.assets.largeImageURL())
          .addField("Music Name", spot.details, true)
          .addField("Music Author", spot.state, true)
          .addField(
            "Join the poet poet ?",
            `open.spotify.com/track/${spot.syncId}`

          )
          .setImage(
            "https://media.discordapp.net/attachments/922482008750448670/956991496333189130/a9e673c7b04995c5f694de44218b5985.gif"
          )
        channel.send({ embeds: [em] });
      } else {
        channel.send(
          `**${member.nickname} is not on spotify..... Ely can't poet poet**`
        );
      }
    }
  }
});

client.login(token)