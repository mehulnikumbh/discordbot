module.exports = {
    name: 'youtube',
    description: "sends a YT link!",
    execute(message, args, Discord){
        message.channel.send('https://www.youtube.com/channel/UC_Q-YjEXDN0ufkU4AoWhU1g');
    }
}