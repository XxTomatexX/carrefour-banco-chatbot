var telegramBot = require('node-telegram-bot-api')

//Token comunicação - Telegram Bot
var token = '1280763604:AAGKiswqD_lLO9eUgK60cWbs3cnGivf3cf4'

//Polling
var opt = {polling: true}

//Novo Bot
var bot = new telegramBot(token, opt)

//Pega qualquer mensagem e parametros do usuario. 
bot.on('message', function (msg) {
  console.log(msg)
  
  //Pega ID conversa (Cliente)
  const id = msg.chat.id
  //Pega primeiro nome (Cliente)
  var primeiroNome = msg.chat.first_name
  console.log(primeiroNome)
  //Pega cada nova mensagem digitada pela (Cliente) 'text:n' -> String
  var textUser = msg.text
  console.log(textUser)

  // Entra nas Opções de ajuda.
  if (textUser == 'ajuda') {

    //Exibe as opções de ajuda caso a palavra 'ajuda' seja digitada.
    var msgAjuda = 'Otimo! Você digitou que precisa de ajuda. Essas são as opções que temos para ti ajudar. \n 1 - Bloqueio de Cartão Carrefour \n 2 - Consulta de Extrato \n 3 - Crédito Pessoal \n 4 - Parcele sua fatura \n Digite o numero da opção que você deseja ser atendido.'
    bot.sendMessage(id, msgAjuda)
   
  } else if (textUser == 1) {
    
    var msgAjuda = 'Você digitou opção 1, você perdeu ou seu cartão foi furtado ? Sem problemas, vamos bloquea-lo agora se for necessario, por favor digite (sim) para continuarmos com o bloqueio.'
    bot.sendMessage(id, msgAjuda)
 
  } else if (textUser == 2) {
    
    var msgAjuda = 'Você digitou opção 2, bloquear meu cartão'
    bot.sendMessage(id, msgAjuda)

  } else if (textUser == 3) {
    
    var msgAjuda = 'Você digitou opção 3, bloquear meu cartão'
    bot.sendMessage(id, msgAjuda)

  } else if (textUser == 4) {
    
    var msgAjuda = 'Você digitou opção 4, bloquear meu cartão'
    bot.sendMessage(id, msgAjuda)

  } else {
    var msg1 = 'Olá ' + primeiroNome + '! Seja bem-vindo ao assistente Virtual do Carrefour Banco.'
    bot.sendMessage(id, msg1)
 
    var msg2 = 'Conversando comigo eu posso te ajudar de modo fácil e rápido, vamos começar? Para que eu possa te passar as opções de ajuda e serviços, por favor digite a palavra => ajuda.'
    bot.sendMessage(id, msg2)
  }

}) 
