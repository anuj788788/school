<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "school_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$age = $_POST['age'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$referralName = $_POST['referralName'];
$referralMobile = $_POST['referralMobile'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

$response = array();

// Check if the mobile number is already registered
$checkMobileSql = "SELECT * FROM users WHERE mobile_number = '$mobile'";
$checkMobileResult = $conn->query($checkMobileSql);

if ($checkMobileResult->num_rows > 0) {
    $response['success'] = false;
    $response['message'] = 'This mobile number is already registered.';
} else {
    // Insert new user if mobile number is not registered
    $sql = "INSERT INTO users (name, age, mobile_number, email, password, referral_name, referral_mobile) VALUES ('$name', $age, '$mobile', '$email', '$password', '$referralName', '$referralMobile')";

    if ($conn->query($sql) === TRUE) {
        $response['success'] = true;
    } else {
        $response['success'] = false;
        $response['message'] = 'Error registering user. Please try again.';
    }
}

echo json_encode($response);

$conn->close();
?>