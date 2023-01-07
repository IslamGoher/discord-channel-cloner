import { Client, GatewayIntentBits } from "discord.js";

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
  });
  
  await client.login(`${process.env.DISCORD_TOKEN}`);
}