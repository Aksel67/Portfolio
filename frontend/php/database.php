
<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
$db_host = '31.32.244.32';
$db_username = 'axel';
$db_password = 'axelpassword';
$db_name = 'PR71DB';
$db_port = 3306;

$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name, $db_port);

if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
?>