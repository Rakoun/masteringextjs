<?php
/**
 * Created by PhpStorm.
 * User: rgeromegnace
 * Date: 17/08/15
 * Time: 13:39
 */
$server = "127.0.0.1";
$user = "root";
$pass = "root";
$dbName = "sakila";

$mysqli = new mysqli($server, $user, $pass, $dbName);
/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}