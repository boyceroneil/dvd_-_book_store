<?php

$databaseHost = 'localhost';//or localhost 127.0.0.1
$databaseName = 'store'; // your db_name
$databaseUsername = 'store'; // root by default for localhost 
$databasePassword = 'store';  // by defualt empty for localhost

$mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName);
if(!$mysqli){
	echo 'connection failed'.mysqli_connect_error();
}
else{
	echo 'connection successful';
}
 
?>
