module.exports = {
	name: "unmute", 
	args: true, 
	usage: "@user",
	execute(message, args){
var member = message.mentions.members.first();
if(!member) return message.reply("The provided user does not exist!");
var mutedRole = message.guild.roles.cache.find(role => role.name === "muted");
if(!member.roles.cache.find((role) => role.name === 'muted')) return message.reply("The mentioned member is not currently muted.")
member.roles.remove(mutedRole);
	}
}