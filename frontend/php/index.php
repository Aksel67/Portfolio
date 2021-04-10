<?php
include 'database.php';
$portfolio = [];

$sql = "SELECT * FROM portfolio";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$portfolio[$i]['id'] = $row['id'];
		$portfolio[$i]['nom'] = $row['nom'];
		$portfolio[$i]['description'] = $row['description'];
		$i++;
	}
	echo json_encode($portfolio);
}
else
{
	http_response_code(404);
}