<?php
session_start();

$response = array();

if (isset($_SESSION['user'])) {
    $response['success'] = true;
    $response['user'] = $_SESSION['user'];
} else {
    $response['success'] = false;
}

echo json_encode($response);
?>