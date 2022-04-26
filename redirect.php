<?php
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    if($_name="Deepak" && $_password="Deepak"){
    $USERNAME=$_POST["name"];
    echo "Login success as $USERNAME";
}
}
?>