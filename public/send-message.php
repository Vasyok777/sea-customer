<?php

$chatIdList = ['1285771261', '-969373254']; // Список айдішників
$token = '6664637974:AAFWKeQavYsCqZqU1r8yXG7cNExbUNtxwD8'; // Токен бота
$url = "https://api.telegram.org/bot{$token}/sendmessage";

$data = json_decode(file_get_contents('php://input'), true);

var_dump('<pre>');
var_dump($data);
var_dump('</pre>');

if ($data['locale'] === 'ua') {
    $text = "
Name: " . ucfirst($data['name']) . "
Phone: " . $data['phone'] . "
Email: " . ucfirst($data['email']) . "
Subject: " . ucfirst($data['subject']) . "
Message: " . ucfirst($data['message']);
} else {
    $text = "
    Name: " . ucfirst($data['name']) . "
    Phone: " . $data['phone'] . "
    Email: " . ucfirst($data['email']) . "
    Subject: " . ucfirst($data['subject']) . "
    Message: " . ucfirst($data['message']);
}

foreach ($chatIdList as $id) {
    $postData = [
        "chat_id" => $id,
        "text" => $text,
    ];

    $curl = curl_init();

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($postData));

    curl_exec($curl);
    curl_close($curl);
}

echo 'Message sent';
