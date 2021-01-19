module.exports = async (client) =>{
    const guild = client.guilds.cache.get('745570552869027860');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('793794385896669195');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 1000);
}
