<?php
$host="210.123.142.101:3306";
$dbid="kddnswlr";
$dbpw="kdkd4813";
$dbname="WebDataBase";

$conn = mysqli_connect($host, $dbid, $dbpw, $dbname);

$id = $_POST['userId'];
$pw = $_POST['userPw'];
$name = $_POST['userName'];
$birth = $_POST['userBirth'];
$number = $_POST['userNum'];

$sql = "INSERT INTO UserData (userId, userPassword, userName, userBirth, userNumber) VALUES ('$id', '$pw', '$name', '$birth', '$number')";

if($conn->query($sql)){
  echo "sign up success!!</br>";
}
else{
  echo "fail to insert sql";
}

?>