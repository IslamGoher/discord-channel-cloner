import { REST, Routes } from "discord.js";
import { commands } from "./commands";

const rest = new REST({ version: '10' }).setToken(`${process.env.DISCORD_TOKEN}`);

export async function restCommands () {
  try {
    await rest.put(Routes.applicationCommands(`${process.env.DISCORD_CLIENT_ID}`), { body: commands });
  } catch (error) {
    console.error(error);
  }
};