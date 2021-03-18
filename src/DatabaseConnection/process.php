<?php
    $name = $_POST['name'];
    $password = $_POST['password'];

    // $name = stripcslashes($name);
    // $password = stripcslashes($password);
    // $name = mysql_real_escape_string($name);
    // $password = mysql_real_escape_string($password);

    
    $databaseHost = 'localhost';//or localhost 127.0.0.1
    $databaseName = 'store'; // your db_name
    $databaseUsername = 'store'; // root by default for localhost 
    $databasePassword = 'store';  // by defualt empty for localhost
    
    $mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName);
    // mysqli_connect("store", "store", "");
    // mysqli_select_db("store");

    if(!$mysqli){
        echo 'connection failed'.mysql_connect_error();
    }
    else{
        

    

    $result = mysqli_query($mysqli, "SELECT * FROM user WHERE name = '$name' AND password = '$password'")
    or die("Failed to query database ".mysql_error());

    $row = mysqli_fetch_array($result);
        if ($row['name'] == $name && $row['password'] == $password){
            echo "Login successful welcome ".$row['name'];
        } else {
            echo "failed to log in";
}
    }
?>
<!-- C:\React_Projects\dvd_and_books\src\DatabaseConnection\login1.php -->