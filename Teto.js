const Discord = require("discord.js");
const fs = require("fs");
const Teto = new Discord.Client({disableEveryone: true});
const Prefix = "t!";
Teto.commands = new Discord.Collection();

	Teto.user.setActivity(`Over The ${message.guild.name}`, {type: "WATCHING"});
	Teto.user.setStatus('dnd')

fs.readdir("./Commands", (err, files) => {
	
	if(err) console.log(err);
	
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0){
		console.log("Couldn't Find Commands");
		return;
	}
	
	jsfile.forEach((f, i) =>{
		let props = require(`./Commands/${f}`);
		console.log(`${f} has been loaded!`);
		Teto.commands.set(props.help.name, props);
	});
});	
Teto.on("ready", async () => {
	console.log("Teto Is Only 99.9% Operational.");
	Teto.user.setStatus('online')
});
Teto.on("message", async message => {
	
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);	
	let commandfile = Teto.commands.get(cmd.slice(Prefix.length));
	if(commandfile) commandfile.run(Teto,message,args);
});
Teto.login(process.env.BOT_TOKEN);
