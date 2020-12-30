module.exports = {
    name: 'ping',
    description: "sends pong!",
    execute(message, args, Discord){
        message.channel.send('pong!');
    }
}

