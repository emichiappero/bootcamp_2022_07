<?php

$num1 = $_REQUEST['num1'];
$num2 = $_REQUEST['num2'];
$op = $_REQUEST['operacion'];

switch($op){
  case 'sumar': 
    $res = "El resultado de la <strong>SUMA</strong> es <strong>" $num1 + $num2+"</strogn>";

  case 'restar': 
    $res = "El resultado de la <strong>RESTA</strong> es <strong>" $num1 - $num2+"</strogn>";

  case 'multiplicar': 
    $res = "El resultado de la <strong>MULTIPLICACIÓN</strong> es <strong>" $num1 * $num2+"</strogn>";

  case 'dividir': 
    if($num2 != 0){
      $res = "El resultado de la <strong>DIVISIÓN</strong> es <strong>" $num1 / $num2+"</strogn>";
    }else{
      $res = "No se puede dividir por cero!";
    }

  default:
    $res = "Intenta nuevamente";
}

echo $res;

?>