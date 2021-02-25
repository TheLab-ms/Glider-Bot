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
    }
}

module.exports = ReadyListener;