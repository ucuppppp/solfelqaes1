<?php

$data = json_decode(file_get_contents('result.json'), true);

$messages = $data['messages'];
$messageReceive = 0;
$messageSend = 0;
$avgSend = [];
$avgReceive = [];

foreach($messages as $message){
    if($message['from'] == 'Budi'){
        array_push($avgSend, $message['text']);
        $messageSend++;
    } else if ($message['from'] == 'Bot'){
        array_push($avgReceive, $message['text']);
        $messageReceive++;
    }
}

$avgS = [];
foreach($avgSend as $avg){
    array_push(explode(' ', $avg), $avgS);
}

$avgR = [];
foreach($avgReceive as $avg){
    array_push(explode(' ', $avg), $avgR);
}



// var_dump($avgReceive);
var_dump($avgS);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D2. Chat Analytics</title>
</head>
<body>
    <ul>
        <li>
        Top 5 sent Words    
            <ul>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
            </ul>
        </li>
        <li>
            Total message sent : <?= $messageSend; ?>
        </li>
        <li>
            Total message Receive : <?= $messageReceive;?>
        </li>
        <li>
            Average characters length sent : <?= array_sum(($avgS)) ?>
        </li>
        <li>
            Average characters length received : <?= array_sum($avgS) ?>
        </li>
    </ul>
</body>
</html>