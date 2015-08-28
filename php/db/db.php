<?php
/**
 * Created by PhpStorm.
 * User: rgeromegnace
 * Date: 17/08/15
 * Time: 13:39
 */
$server = "127.0.0.1";
$user = "root";
$pass = "281275";
$dbName = "sakila";
$dbport = "8889";

$mysqli = new mysqli($server, $user, $pass, $dbName, $dbport);
/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
