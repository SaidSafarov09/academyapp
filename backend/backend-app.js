const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3001;
const bot = new TelegramBot('6181651639:AAEkEge0562_Ue9zS0j_HWFnfbWYeHob8Y0', {
  polling: false,
});

bot.on('message', (message) => {
  console.log(message); // выводим сообщение в консоль
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/clients', (req, res) => {
  const { client_name, phone_number, expirience, promo_code } = req.body;

  // Отправляем данные в Telegram
  const chatId = '5477598310';
  bot.sendMessage(
    chatId,
    `Новое сообщение с сайта:\n\nИмя: ${client_name}\nEmail: ${phone_number}\nОпыт: ${expirience}\nPromo code: ${promo_code}`
  );

  // Возвращаем ответ на запрос
  res.send('Данные успешно отправлены!');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
