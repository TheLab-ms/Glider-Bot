const { Command } = require('discord-akairo');
const { getClient, getUserByEmail } = require('../lib/whmcs.js')

class VerifyCommand extends Command {
    constructor() {
        super('verify', {
            aliases: ['verify'],
            args: [
                {
                    id: "email",
                    type: "string"
                }
            ]
        });
        this.whmcs_client = getClient();
    }

    async exec(message, args) {
        const MembershipRole = message.guild.roles.cache.find(role => role.name === "Member");
        message.delete();
        console.log(args)
        if(args.email == null){
            message.reply("You said ?verify but you didn't give me an email. Try: `?verify email@example.com`");
            return;
        }
        const { email } = args;
        let results = await getUserByEmail(this.whmcs_client, email);
        if(!results){
            message.reply("I can't find that email maybe try another one");
            return;
        }
        const {id, firstname, lastname, status} = results;
        try{ // This may be a DM
            message.member.setNickname(`${firstname} ${lastname}`);
            message.member.roles.remove(MembershipRole);
        }catch(e){
            console.error(e)
        }
        if(status != 'Active'){
            message.reply("I found you but you don't seem to be an active member");
            return;
        }
        
        try{
            message.member.roles.add(MembershipRole);
        }catch(e){
            console.error(e)
        }

        message.reply("I found you, your account is now linked");

    }
}

module.exports = VerifyCommand;