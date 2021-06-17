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
            "get my fob",
            "give me my fob",
	    "pick up my fob"
        ],
	response: "https://kb.thelab.ms/display/THELAB/How+to+Add+a+Keyfob"
    }
];

const expressions = [
    {
        title: "AMAZON_LINK",
        regex: new RegExp(/https?:\/\/(?=(?:....)?amazon|smile)(www|smile)\S+com(((?:\/(?:dp|gp)\/([A-Z0-9]+))?\S*[?&]?(?:tag=))?\S*?)(?:#)?(\w*?-\w{2})?(\S*)(#?\S*)+/),
        captureIndex: 1
    }
]

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

        expressions.forEach(({title, regex, captureIndex}) => {
            const match = message.content.match(regex);
            let output = "";
            if(match === null || match === undefined || match[captureIndex] === null || match[captureIndex] === undefined){
                return;
            }
            switch(title){
                case "AMAZON_LINK":
                    output = this.amazonlink({subdomain: match[captureIndex], url: match[0]});
                    break;
            }
            if(output){
                message.reply(output);
            }
        })
    }

    amazonlink({subdomain, url}){
        if(subdomain === "smile"){
            return null;
        }
        if(subdomain === "www"){
            return "You mean " + url.replace("www.", "smile.");
        }
        return null;

    }
}

module.exports = KeywordListener;
