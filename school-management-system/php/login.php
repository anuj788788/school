<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "school_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$mobile = $_POST['mobile'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE mobile_number = '$mobile'";
$result = $conn->query($sql);

$response = array();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        $response['success'] = true;
        $_SESSION['user'] = $row;
    } else {
        $response['success'] = false;
    }
} else {
    $response['success'] = false;
}

echo json_encode($response);

$conn->close();
?>