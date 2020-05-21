import { Client } from "../mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import Guild from "./models/Guild.ts";
import Message from "./models/Message.ts";


const client = new Client();
client.login(Deno.env.get("BOT_TOKEN")!.toString());

client.on("ready", () => {
  console.log("Bot has logged in.");
});

client.on("message", async (message: Message) => {

  console.log(message.channel.messages.size);
  if (message.content === "?hello") {
    const msg = await message.channel.send("hello");
    console.log(msg);
  }
});

client.on("debug", (data: any) => {
  console.log(data);
});

// deno run --allow-read --allow-net --allow-env --allow-hrtime ./src/index.ts
