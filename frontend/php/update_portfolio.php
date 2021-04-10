<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);
	if (trim($request->nom) == '' || $request->description < 0) {
		return http_response_code(400);
	}
	$id = mysqli_real_escape_string($mysqli, (int)$request->id);
	$nom = mysqli_real_escape_string($mysqli, trim($request->nom));
	$description = mysqli_real_escape_string($mysqli, $request->description);
    
	$sql = "UPDATE portfolio SET nom='$nom',description='$description' WHERE id = '$id'";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}