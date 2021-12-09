const { execute } = require("./message");

module.exports = {
  event: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isCommand() && !interaction.isButton()) return;

    if (interaction.isButton()) {
      let args = interaction.customId.split(" ");
      let id = args.shift();

      const button = client.buttons.get(id);

      if (!button) return;

      try {
        await button.execute(interaction, args);
      } catch (error) {
        console.error(error); // Since we don't know what every button will do, we can't tell the user
        if (process.env.NODE_ENV === "production") {
          Sentry.captureException(error);
        }
      }
    }

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      if (command.ephemeral) await interaction.deferReply({ ephemeral: true });
      else await interaction.deferReply();
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (process.env.NODE_ENV === "production") {
        Sentry.captureException(error);
      }
      await interaction.editReply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  },
};
