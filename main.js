const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '?';

const fs = require('fs');
const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('MACY is online!');
    memberCounter(client);
    client.user.setActivity('You mf', {
        type: 'WATCHING'
    })
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    } else if (command == 'youtube'){
      client.commands.get('youtube').execute (message, args, Discord);


    }
});
    client.login('NzkyMjQ3NTEwMzExMzcwNzgy.X-a7_Q.hCNfuYUCzAVU1m7KtjS7DpyABlw');