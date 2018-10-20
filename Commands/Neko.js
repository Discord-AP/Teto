const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	message.delete();
	
	number = 77;
	imageNumber = Math.floor (Math.random() * (number - 1 +1)) + 1;
	message.channel.send ("🐱 Nekos 🐱")
	message.channel.send ( {files: ["./Image/Neko/" + imageNumber + ".png"]} )


}
module.exports.help = {
	name: "neko"
}