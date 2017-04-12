<?php

date_default_timezone_set('Asia/Calcutta');
$host = "localhost";
$user = "root";
$pwd = "";
$db = "computerselva";
$con = mysqli_connect($host,$user,$pwd,$db);





$json = file_get_contents('php://input');
$params = json_decode($json);

 $result = mysqli_query($con,"INSERT INTO `users`(`name`, `capacity`, `status`) VALUES ('$params->name','$params->capacity','Ready')");
 $lastInsertId = mysqli_insert_id($con);


class Result {}

$response = new Result();
$response->result = 'OK';
$response->message = 'Created with id: '.$lastInsertId;
$response->id = $lastInsertId;

header('Content-Type: application/json');
echo json_encode($response);


?>