var telegramBot = require('node-telegram-bot-api')
const dialogflow = require('./dialogflow')

//Token comunicação - Telegram Bot
var token = '1280763604:AAGKiswqD_lLO9eUgK60cWbs3cnGivf3cf4'

//Novo Bot
var bot = new telegramBot(token, { polling: true})

//Pega qualquer mensagem e parametros do usuario. 
bot.on('message', async function (msg) {
  const chatId = msg.chat.id
  console.log(msg.text)
  
  const dfResponde = await dialogflow.sendMessage(chatId.toString(), msg.text)
  

  bot.sendMessage(chatId, dfResponde.text)
})

 