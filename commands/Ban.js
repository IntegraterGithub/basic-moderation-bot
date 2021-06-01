module.exports = {
	name: "ban", 
	permissions: ['BAN_MEMBERS'],
	args: true,
	usage: "@user", 
	execute(message, args){
		var member = message.mentions.members.first();
		if(!member) return message.reply("The provided user does not exist!");
		member.ban();
	}
}