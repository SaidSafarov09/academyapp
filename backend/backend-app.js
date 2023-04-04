const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const https = require('https');
const fs = require('fs');
const path = require('path');



const app = express();
const port = 4440;

const options = {
  key: fs.readFileSync('~/ssl/sk-academy.it_le1.key'),
  cert: fs.readFileSync('~/ssl/sk-academy.it_le1.crt')
};


app.use(express.static(path.join(__dirname, 'public')), bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const bot = new TelegramBot('6181651639:AAEkEge0562_Ue9zS0j_HWFnfbWYeHob8Y0', {
  polling: false,
});

bot.on('message', (message) => {
  console.log(message); // выводим сообщение в консоль
});

app.post('/clients', (req, res) => {
    console.log('1');
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

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



