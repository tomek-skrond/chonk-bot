console.log('hello bot');
var fs = require('fs');
const readline = require('readline');

//logging in using a key read from a file
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(DISC_KEY);

//listening for 'ready event'
client.on('ready', readyDiscord);

//reading a text file from a path given in args
function readTextFile(args) {
    return fs.readFileSync(`phrases/${args}.txt`).toString().split("\n");
}


function readyDiscord(){
    //console.log('dziala');
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

function getRndInteger(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function giveVoice(phrase_array){
    return phrase_array[getRndInteger(0,phrase_array.length)];
}

client.on('message', message => {

    const prefix = '!';
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    else if (command === 'say') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    
        return message.channel.send(giveVoice(readTextFile(args)));
        
        //message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }
})

////TESTY

console.log(readTextFile('Mignet'));
console.log(readTextFile('Grzana'));
console.log('------------------------------------');
console.log(giveVoice(readTextFile('Grzana')));
console.log(giveVoice(readTextFile('Mignet')));