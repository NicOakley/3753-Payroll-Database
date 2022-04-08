<?php

//make connection to mysql
$con = mysqli_connect("localhost", "payroll_admin", "passw0rd", "payroll");

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    die();
}

$action = ( array_key_exists( 'action', $_REQUEST) ? $_REQUEST['action'] : "" );

if ($action === 'login') {
    //get all fields and rows in the Contact table
    $sql_statement = "SELECT id, username, password FROM login ORDER BY id ASC;";

}


//execute sql statement on the db connection, returning rows of data ($result)
$result = mysqli_query($con, $sql_statement);

//set content type to JSON, so the client will know what we're sending
header('Content-Type: application/json; charset=utf-8');

//if the result is not null (empty), build an associative array and output the array, json-encoded (via echo)
if ($result != null) {
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
} else {
    echo json_encode("'success':false}");
}
//close the connection
$con->close();

?>