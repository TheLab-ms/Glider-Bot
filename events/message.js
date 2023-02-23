const { keywords, expressions } = require("../lib/constants");

module.exports = {
  event: "messageCreate",
  async execute(interaction) {
    if (interaction.author.bot) return;
    keyWordFinder(interaction);
  },
};

function keyWordFinder(interaction) {
  keywords.forEach(({ phrases, response, react }) => {
    phrases.forEach((phrase) => {
      if (interaction.content.toLowerCase().includes(phrase.toLowerCase())) {
        if (response == null) {
          interaction.react(react);
        } else {
          interaction.reply(response);
        }
        return;
      }
    });
  });

  expressions.forEach(({ title, regex, captureIndex }) => {
    const match = interaction.content.match(regex);
    let output = "";
    if (
      match === null ||
      match === undefined ||
      match[captureIndex] === null ||
      match[captureIndex] === undefined
    ) {
      return;
    }
    switch (title) {
      case "AMAZON_LINK":
        //Defunct 20230220
        output = "We really miss our amazon smile."
        // output = amazonlink({
        //   subdomain: match[captureIndex],
        //   url: match[0],
        // });
        break;
    }
    if (output) {
      interaction.reply(output);
    }
  });
}

function amazonlink({ subdomain, url }) {
  if (subdomain === "smile") {
    return null;
  }
  if (subdomain === "www") {
    return "You mean " + url.replace("www.", "smile.");
  }
  return null;
}
