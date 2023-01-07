import { Client, GatewayIntentBits, TextChannel } from "discord.js";

export async function loginToDiscordBot() {
  const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ] });
  
  client.on('ready', () => {
    console.log(`Logged in as cloch!`);
  });
  
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }

    if (interaction.commandName === "collect") {
      try {
        await interaction.reply("ok");

        const channel: any = client.channels.cache.get(interaction.channelId);

        const messages = await channel?.messages.fetch({ limit: 2 });
        const messageObject = Object.fromEntries(messages);
        for (const message in messageObject) {
          console.log(messageObject[message].attachments);
        }

      } catch (error) {
        console.error(error);
      }
    }
  });
  
  await client.login(`${process.env.DISCORD_TOKEN}`);
}