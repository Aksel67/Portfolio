<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);
	// Validate.
	if(trim($request->nom) === '' || $request->description < 0)
	{
		return http_response_code(400);
		
	}
	printf('PAS D\'ERREUR');
	$nom = mysqli_real_escape_string($mysqli, trim($request->nom));
	$description = mysqli_real_escape_string($mysqli, $request->description);
    $categorie_id = null;
    $user_id = null;
	$sql = "INSERT INTO portfolio (nom, description) VALUES ('$nom','$description')";
	if($mysqli->query($sql) === TRUE)
	{
		http_response_code(201);
		$portfolio = [
        'nom' => $nom,
		'description' => $description
        ];
		echo json_encode($portfolio);
		printf('CEST OUI');
	}
	else
	{
		http_response_code(422);
		printf('CEST DU CACA');
	}
}