console.log('hello bot');
var fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(readDiscordKey());

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('siusior');
}

function readDiscordKey(){
    try {  
        var data = fs.readFileSync('discord_auth/discord_auth.txt', 'utf8');
        return data.toString();
    } catch(e) {
        console.log('Error:', e.stack);
        return "error"
    }
}