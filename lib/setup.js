const fs = require("fs");
const { Collection } = require("discord.js");
module.exports = {
  loadCommands: function () {
    const commands = new Collection();
    try {
      fs.readdirSync("./commands")
        .filter((file) => file.endsWith(".js"))
        .forEach((file) => {
          const command = require(`../commands/${file}`);
          commands.set(command.data.name, command);
        });
    } catch (e) {
      console.log("Warning: No commands found!");
    }
    return commands;
  },
  loadEvents: function (client) {
    try {
      fs.readdirSync("./events").forEach((file) => {
        const event = require(`../events/${file}`);
        const eventName = event.event;
        client.on(eventName, async (...args) => {
          event.execute(...args, client);
        });
      });
    } catch (e) {
      console.log("Warning: No events found!");
    }
  },
};
