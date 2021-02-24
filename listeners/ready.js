const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec(a) {
        console.log("I'm ready!");
        this.client.user.setActivity("A Game Called Life")
        /*console.log(this.client.guilds.cache.get("690314626289631294").channels.cache.array().filter(channel => channel.type == "text").map(channel => {
            return {id: channel.id, name: channel.name}
        }));*/
    }
}

module.exports = ReadyListener;