import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { restCommands } from "./discord/restCommands";
import { loginToDiscordBot } from "./discord/discordClient";

const app = express();

const serverPort = process.env.PORT || 3000;

( async function() {
  await restCommands();
  await loginToDiscordBot();
})();

app.get("/api/v1/invitation", (req, res) => {
  res.json({
    status: 200,
    message: "success",
    invitationURL: "https://discord.com/api/oauth2/authorize?client_id=1061087212726398976&permissions=8&scope=bot%20applications.commands"
  });
});

app.listen(serverPort, () => {
  console.log(`server is running on port ${serverPort}`);
});