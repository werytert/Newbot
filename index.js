var TelegramBot = require('node-telegram-bot-api');
var token = '451629068:AAGP6eaoT5kAhZwsd2poD0695u4LOf2XBYA';
var bot = new TelegramBot(token, {polling: true});


bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    if (msg['from']['username'] === 'HoldemColdfeet') {
        bot.sendMessage(chatId, "Ты что тут забыл, еблан бля");
    }



});