module.exports = {
	name: "mute", 
	args: true, 
	usage: "@user",
	execute(message, args){
var member = message.mentions.members.first();
if(!member) return message.reply("The provided user does not exist!");
var mutedRole = message.guild.roles.cache.find(role => role.name === "muted");
if(!mutedRole) return message.reply("You need to create a muted role first.");
member.roles.add(mutedRole);
	}
}