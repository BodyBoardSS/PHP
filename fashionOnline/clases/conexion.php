<?php
$bdServidor = "localhost";
$bdEsquema  = "fashiononline";
$bdUsuario  = "root";
$bdPassword = "";
// ----- FIN DE VARIABLES MODIFICABLES

// Realizando la conexión
$bdConexion = new Conexion($bdServidor, $bdEsquema, $bdUsuario, $bdPassword);

// Definición de Clase Conexion
class Conexion {
	private $servidor;			// Servidor (Host) donde se encuentra la BD
	private $baseEsquema;		// Nombre del Esquema a utilizar
	private $usuario;			// Usuario con permiso de usar la BD
	private $password;			// Contraseña del usuario
	private $error;				// Guarda un error para mostrarlo y detener la ejecución del programa
	private $link;				// Guarda la conexión a la base de datos

	// Constructor
	function __construct ($servidor, $baseEsquema, $usuario, $password) {
		// Se prueba la conexión
		$this->link = mysqli_connect($servidor, $usuario, $password, $baseEsquema);
		// Si hay un error de conexión, mostrarlo
		if (!$this->link) {
			// Creamos una variable de error para mostrar que no se pudo conectar a la base de datos
			$this->error="<br /><br />La Base de Datos no est&aacute; disponible o los par&aacute;metros de conexi&oacute;n no son correctos.";
			// Mostramos el error
			$this->mostrarError();
		} else {
			// En caso de tener éxito, se toman las variables de conexión
			$this->servidor = $servidor;
			$this->usuario  = $usuario;
			$this->password = $password;
			// Se prueba la conexión al Esquema
			$this->usarEsquema($baseEsquema);
		}
	}

	// Usar la Base de Datos
	function usarEsquema ($baseEsquema) {
		// Intetnamos utilizar el esquema
		$this->baseEsquema = mysqli_select_db($this->link,$baseEsquema);
		#echo "Conexion exitosa";
		return (true);
	}

	// Obteniendo conexión
	function obtenerConexion () {
		return ($this->link);
	}
	
	// Liberar resultado de consulta
	function liberarResultado ($rs) {
		return (mysqli_free_result($rs));
	}

	// Cerrar la conexión
	function cerrarConexion () {
		return (mysqli_close($this->link));
	}
	
	// Mostrando un error y deteniendo ejecución del programa
	function mostrarError() {
		// Mostramos el error
		echo ($this->error);
		exit();
	}
	
	// Regresando una consulta SQL
	function consultaSQL ($sql) {
		// Realizamos la consulta 
		if(!($resultado = mysqli_query($this->link,$sql))) {
			$this->error = "<br />Ha ocurrido un error en la consulta:<br />---<br />" . $sql . "<br />---<br />" . $this->link->error;
			$this->mostrarError();
		} else {
			return ($resultado);
		}
	}
}

?>