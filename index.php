<?php

// сюда нужно вписать токен вашего бота
define('TELEGRAM_TOKEN', '6181651639:AAEkEge0562_Ue9zS0j_HWFnfbWYeHob8Y0');

// сюда нужно вписать ваш внутренний айдишник
define('TELEGRAM_CHATID', '5477598310');

if (
    isset($_POST['client_name'])
    && isset($_POST['phone_number'])
    && isset($_POST['expirience'])
    && isset($_POST['promo_code'])
) {

    $message = "Имя: " . $_POST['client_name'] . "\nТелеграмм/Телефон: " . $_POST['phone_number'] . "\nОпыт: " . $_POST['expirience'] . "\nПромо код: " . $_POST['promo_code'];
    $res = message_to_telegram($message);
    if ($res) {
        echo 'ok';
    } else {
        echo 'fail';
    }
    exit;
} else {
    echo 'fail';
}


function message_to_telegram($text)
{
    $ch = curl_init();
    curl_setopt_array(
        $ch,
        array(
            CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_POSTFIELDS => array(
                'chat_id' => TELEGRAM_CHATID,
                'text' => $text,
            ),
        )
    );
    return curl_exec($ch);
}