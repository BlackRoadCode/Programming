<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$nombre = $_POST['txtName'];
$estado = $_POST['cmbState'];

$sql = "INSERT INTO alumnos (nombre) VALUES ('$nombre')";
$hecho = Database::ejecutar_idu( $sql );
$respuesta = "";

if ($hecho) {
	$respuesta = json_encode(
				array ('err' => false,
 						'mensaje' => "Creado correctamente"
					)
				);
} else {

	$respuesta = json_encode(
			array ('err' => true,
				'mensaje' => $hecho
				)
			);
}

echo $respuesta;

?>
