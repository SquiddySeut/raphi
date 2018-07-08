const Discord = require('discord.js');
const client = new Discord.Client();
var end;
var cs;
var waifu;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content==="displayE"){
        message.reply("Convos are "+end+" long...");
    }
    if(message.content.startsWith("Raphiel-tan")){
       message.reply("I'm not your girlfriend!");
       waifu=1;
    }
    if (message.content===("SquiddySeut")&&waifu===1){
        message.reply("but apparently I'm his waifu...");
           waifu=0;
    }
    if (message.content==="Start a conversation"){
        message.reply("how long do you want us to talk?")
        message.reply("I'll call my friends");
    }    
    
    
    
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
