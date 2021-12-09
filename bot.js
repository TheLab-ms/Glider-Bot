require("dotenv").config();

const { DISCORD_TOKEN } = process.env;
const { Client, Intents } = require("discord.js");
const deployCommands = require("./lib/deploy-commands");
const { loadCommands, loadEvents } = require("./lib/setup");

deployCommands();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.commands = loadCommands();
loadEvents(client);

client.on("ready", () => {
  client.user.setActivity("Game of Life", { type: "PLAYING" });
});

client.login(DISCORD_TOKEN);
