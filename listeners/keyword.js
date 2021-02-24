const keywords = [
    {
        phrases: [
            "pay the lab",
            "buy membership",
            "how do i join",
            "join the lab",
            "join thelab",
            "become a member"
        ],
        response: "https://join.thelab.ms/"
    },
    {
        phrases: [
            "mystical wireless incantation",
            "WIFI password",
            "WPA2",
            "password for wifi",
            "wifi encryption key",
            "wifi key",
            "key for wifi",
        ],
        response: `Member network WPA2 key is: "This is a really long password." - Don't forget the period!`
    },
    {
        phrases: [
            "good bot",
        ],
        response: null,
        react: "❤️"
    },
    {
        phrases: [
            "bad bot"
        ],
        response: null,
        react: "😢"
    },
    {
        phrases: [
            "kroger"
        ],
        response: "Register your Kroger card here: http://www.krogercommunityrewards.com/ TheLab.ms #55069"
    },
    {
        phrases: [
            "amazon.com"
        ],
        response: "https://smile.amazon.com/ch/46-4432080"
    }
];
const { Listener } = require('discord-akairo');

class KeywordListener extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            event: 'message'
        });
    }

    exec(message) {
        if(message.author.bot){
            return;
        }
        keywords.forEach(({phrases, response, react}) => {
            phrases.forEach((phrase) => {
                if(message.content.toLowerCase().includes(phrase.toLowerCase())){
                    if(response == null){
                        message.react(react);
                    }else{
                        message.reply(response);
                    }
                    return;
                }
            })
        })
    }
}

module.exports = KeywordListener;