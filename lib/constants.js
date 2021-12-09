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

module.exports = { keywords, expressions };
