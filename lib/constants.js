const { formatCommandString } = require("./helpers");
const keywords = [
  {
    phrases: [
      "pay the lab",
      "buy membership",
      "how do i join",
      "join the lab",
      "join thelab",
      "become a member",
    ],
    response: "https://join.thelab.ms/",
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
    response: `Member network WPA2 key is: "This is a really long password." - Don't forget the period!`,
  },
  {
    phrases: ["good bot"],
    response: null,
    react: "❤️",
  },
  {
    phrases: ["bad bot"],
    response: null,
    react: "😢",
  },
  {
    phrases: ["kroger"],
    response:
      "Register your Kroger card here: http://www.krogercommunityrewards.com/ TheLab.ms #55069",
  },
  {
    phrases: ["get my fob", "give me my fob", "pick up my fob"],
    response:
      "Hey, did you know you can activate your own keyfob? https://kb.thelab.ms/display/THELAB/How+to+Add+a+Keyfob",
  },
];

const expressions = [
  {
    title: "AMAZON_LINK",
    regex: new RegExp(
      /https?:\/\/(?=(?:....)?amazon|smile)(www|smile)\S+com(((?:\/(?:dp|gp)\/([A-Z0-9]+))?\S*[?&]?(?:tag=))?\S*?)(?:#)?(\w*?-\w{2})?(\S*)(#?\S*)+/
    ),
    captureIndex: 1,
  },
];

const helpLinks = {
  keyfob: {
    id: 11371485,
    description:
      "So you've joined! And you want in NOW! Fret not, this will guide you through how to add a keyfob badge number to your member profile.",
  },
  calendar: {
    id: 3014761,
    description:
      "Here's a link to the calendar where you can find the next meeting.",
  },
  membership: {
    id: 3014721,
    description:
      "Our members are the custodians of our space. As a paying member, you will have physical access to the space and tools 24 hours a day. Membership is the easiest way to be active and contribute financially.",
  },
  "cancel-membership": {
    id: 18612268,
    description:
      "In the unfortunate circumstance that you need to cancel your membership, we are sorry to see you go.  Thank you for being a member of TheLab.ms.",
  },
  "join-the-lab": {
    id: 3014680,
    description: "Join TheLab.ms today!",
  },
  "smart-waiver": {
    url: "https://waiver.thelab.ms/",
    description: "Sign the waiver here.",
  },
  media: {
    id: 6848833,
    description: "Gosh, some folks have written nice articles about us!",
  },
};

const helpOptions = Object.keys(helpLinks)
  .sort()
  .map((help) => [formatCommandString(help), help]);
console.log(helpOptions);

module.exports = { keywords, expressions, helpLinks, helpOptions };
