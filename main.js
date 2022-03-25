const DISCORD = require('discord.js');
const {token} = require('./config.json')

const client = new DISCORD.Client({ intents : [DISCORD.Intents.FLAGS.GUILDS,DISCORD.Intents.FLAGS.GUILD_MESSAGES]});

client.once('ready', () =>{
    
})

client.on('messageCreate', message =>{
    if(message.author.username !== 'ElyPoet'){
        let user = message.author.username
        let channel = message.channel;
        const em = new DISCORD.MessageEmbed().setTitle(`Poet Poet ${user}`).setImage("https://media.discordapp.net/attachments/922482008750448670/956991496333189130/a9e673c7b04995c5f694de44218b5985.gif");
        channel.send({embeds: [em]})
    }
})

client.login(token)