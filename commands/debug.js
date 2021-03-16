const { Command } = require('discord-akairo');
const {createMember} = require("../lib/db");
class DebugCommand extends Command {
    constructor() {
        super('debug', {
            aliases: ['debug'],
            args: [
                {
                    id: "action",
                    type: ["purge"]
                }
            ]
        })

    }

    exec(message, args){

        if(!message.member.roles.find(r => r.name === "Administrator") || !message.member.roles.find(r => rname === "Leadership")){
            message.reply("That doesn't sound like anything I know");
            //message.react("?")
            return;
        }
        if(!args.hasOwnProperty("action")){
            message.reply("no action was specified")
            return;
        }
    }
}

module.exports = DebugCommand;