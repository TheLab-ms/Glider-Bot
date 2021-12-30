const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { helpOptions, helpLinks } = require("../lib/constants");
const { getKBPageById, getKBPageBodyByURL } = require("../lib/knowledgebase");
const { formatCommandString } = require("../lib/helpers");
const { CONFLUENCE_URL } = process.env;
const readingtime = require("reading-time");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Gives information about the bot.")
    .addStringOption((option) =>
      option
        .setName("topic")
        .setDescription("The topic to get help with.")
        .addChoices(helpOptions)
        .setRequired(false)
    ),
  ephemeral: true,
  async execute(interaction) {
    const helpEmbed = new MessageEmbed()
      .setColor("#99CC66")
      .setAuthor(
        "TheLab.ms",
        "https://kb.thelab.ms/download/attachments/327682/global.logo?version=2&modificationDate=1602549897000&api=v2",
        "https://thelab.ms/"
      )
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/628033792505806868/bea690b7691970aecf066edd9d3c9fe1.png?size=512"
      );
    const topic = interaction.options.getString("topic");
    if (!topic) {
      helpEmbed
        .setTitle("TheLab.ms Help")
        .setDescription(
          "This command provides links to the knowledge base and other helpful resources."
        );
    } else {
      if (helpLinks[topic].hasOwnProperty("id")) {
        const data = await getKBPageById(helpLinks[topic].id);
        const { title } = data;
        const link = CONFLUENCE_URL + data["_links"]["webui"];
        const author = data["history"]["createdBy"];
        const description = helpLinks[topic].description;
        helpEmbed
          .setTitle(title)
          .setURL(link)
          .setDescription(description);
      } else if (helpLinks[topic].hasOwnProperty("url")) {
        const title = formatCommandString(topic);
        const link = helpLinks[topic].url;
        const description = helpLinks[topic].description;
        helpEmbed
          .setTitle(title)
          .setURL(link)
          .setDescription(description);
      }
    }
    interaction.editReply({ embeds: [helpEmbed], ephemeral: true });
  },
};
