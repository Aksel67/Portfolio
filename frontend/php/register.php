<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $name = trim($request->name);
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $username = mysqli_real_escape_string($mysqli, trim($request->username));
    $firstname = mysqli_real_escape_string($mysqli, trim($request->firstname));
    $admin = 0;
    $sql = "INSERT INTO users(name,password,email,username,firstname,admin) VALUES ('$name','$password','$email','$username','$firstname','$admin')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
        'name' => $name,
        'password' => $password,
        'email' => $email,
        'Id' => mysqli_insert_id($mysqli),
        'username' => $username,
        'firstname' => $firstname,
        'admin' => $admin
        ];
        echo json_encode($authdata);
    }
}

?>