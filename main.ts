import "@std/dotenv/load";
import TelegramBot from "npm:node-telegram-bot-api";

const token = Deno.env.get("TG_TOKEN");
const bot = new TelegramBot(token, { polling: true, port: 8000 });

bot.on("message", (msg: any) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
  console.log(msg);
});


// const TelegramBot = require('node-telegram-bot-api');
//
// // replace the value below with the Telegram token you receive from @BotFather
// const token = 'YOUR_TELEGRAM_BOT_TOKEN';
//
// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, {polling: true});
//
// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
//
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
//
//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
// });
//
// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });
