const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Gives information about the bot."),
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
      )
      .setTitle("Gilda The Glider v1.1.0");
    interaction.editReply({ embeds: [helpEmbed], ephemeral: true });
  },
};
