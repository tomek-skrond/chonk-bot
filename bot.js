console.log('hello bot');
var fs = require('fs');
const readline = require('readline');


const Discord = require('discord.js');
const client = new Discord.Client();
client.login(readDiscordKey());

client.on('ready', readyDiscord);

function readTextFile(args) {

    const readInterface = readline.createInterface({
        input: fs.createReadStream(`phrases/${args}.txt`),
        console: false
    });

    var line_arr = Array();
    readInterface.on('line', function(line) {
        line_arr.push(line);
    });

    return line_arr;
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
    return Math.floor(Math.random() * (max - min) ) + min;
}

function giveVoice(phrase_array){
    console.log(getRndInteger(1,phrase_array.length));
    console.log(phrase_array.length);
    console.log(Math.random()%(phrase_array.length));
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

const outp = readTextFile('Grzana');
console.log(giveVoice(readTextFile('Grzana')));