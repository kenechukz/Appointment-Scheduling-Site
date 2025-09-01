<?php
    // Retrieve POST data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phNumber = $_POST['number'];
    $email = $_POST['email'];
    $hairstyle = $_POST['hairstyle'];
    $appType = $_POST['appType'];
    $price = $_POST['price'];
    $appDate = $_POST['appDate'];
    $appTime = $_POST['appTime'];

    // Connect to the database
    $conn = mysqli_connect('localhost', 'root', '', 'hair_appointments');

    if($conn->connect_error){
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        // Prepare and execute the SQL statement
        $stmt = $conn->prepare("INSERT INTO appointments (firstName, lastName, phNumber, appType, hairstyle, appTime, email, price, appDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssissssis", $firstName, $lastName, $phNumber, $appType, $hairstyle, $appTime, $email, $price, $appDate);
        $stmt->execute();
        echo "Appointment scheduled successfully";
        $stmt->close();
        $conn->close();
    }
?>
