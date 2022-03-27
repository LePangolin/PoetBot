const DISCORD = require('discord.js');
const {token} = require('./config.json')
const {SlashCommandeBuilder} = require('discord.js/')
const client = new DISCORD.Client({ intents : [DISCORD.Intents.FLAGS.GUILDS,DISCORD.Intents.FLAGS.GUILD_MESSAGES,DISCORD.Intents.FLAGS.GUILD_PRESENCES]});

client.once('ready', () =>{
    
})



client.on("messageCreate", (message) => {
  if (message.content.toLocaleLowerCase().includes("poet")) {
    let channel = message.channel;
    let member = message.member;
    let memberMentions = message.mentions.members.first();
    if (memberMentions !== undefined) {
      member = memberMentions;
    }
    if (message.author.username !== "ElyPoet") {
      let spot = member.presence.activities.find(
        (element) => element.name === "Spotify"
      );
      console.log(spot);
      if (member.presence !== null && spot !== undefined) {
        const em = new DISCORD.MessageEmbed()
          .setTitle(`${member.user.username} is doing poet poet with Ely !`)
          .setColor("#1DB954")
          .addField("Music Name", spot.details, true)
          .addField("Music Author", spot.state, true)
          .addField(
            "Join the poet poet ?",
            `open.spotify.com/playlist/${spot.syncId}`
          )
          .setImage(
            "https://media.discordapp.net/attachments/922482008750448670/956991496333189130/a9e673c7b04995c5f694de44218b5985.gif"
          );
        channel.send({ embeds: [em] });
      } else {
        channel.send(
          `**${member.user.username} is not on spotify..... Ely can't poet poet**`
        );
      }
    }
  }
});

client.login(token)