module.exports = {
	name: "tempmute", 
	args: true, 
	usage: "@user seconds",
	execute(message, args){
		if(!/[0-9]/.test(args[1])) return message.reply(this.usage)
var member = message.mentions.members.first();
if(!member) return message.reply("The provided user does not exist!");
var mutedRole = message.guild.roles.cache.find(role => role.name === "muted");
if(!mutedRole) return message.reply("You need to create a muted role first.");
member.roles.add(mutedRole);
setTimeout(() => {
member.roles.remove(mutedRole);
}, args[1] * 1000)
	}
}