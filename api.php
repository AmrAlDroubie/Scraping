<?php
if (isset($_POST)) {
    $data = file_get_contents("php://input");
    $student = json_decode($data, true);
    extract($student);
    extract($marks);
    try {
        $conn = new PDO('mysql:host=localhost;dbname=students', "root", "");
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    $conn->exec("INSERT INTO khaled
        (
            id,certificate,year,city,fullName,motherName,school,result,
            arabic,english,france,national,math,phisics,chemistry,sciense,total,islam,grandTotal,netTotal
        )
        VALUES 
        (
            $id,'$certificate','$year','$city','$fullName','$motherName','$school','$result',
            $arabic,$english,$france,$national,$math,$phisics,$chemistry,$sciense,$total,$islam,$grandTotal,$netTotal
        ) 
        ");
    echo "OK";
}
