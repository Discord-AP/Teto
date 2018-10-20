const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	message.delete();
	let suggestmessage = args.join(" ")

    if (!suggestmessage) {
        return message.channel.send("Please Give A Suggestion!").then(msg => { msg.delete(5000)})
    }

    let suggestChannel = message.guild.channels.find(c => c.id === "499394689275789312");	
    let embed = new Discord.RichEmbed()
	.setColor('RANDOM') 
	.setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
	.setDescription(`**Suggestion: __${suggestmessage}__**`)
	.setTimestamp();
    suggestChannel.send(embed).then(msg => {
        msg.react("502274083778723841").then(r => msg.react("502282303024791552"))
    });
	
}
module.exports.help = {
	name: "suggest"
}