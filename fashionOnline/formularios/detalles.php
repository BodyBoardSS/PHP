<?php
session_start();
include "../clases/claseCliente.php";
$Cliente = new Cliente($bdConexion->obtenerConexion());
?>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Detalles</title>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="icon" type="image/png" href="../img/logo.png"/>
	<link rel="stylesheet" href="../css/bootstrap.css">
	<link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" href="../css/estilo.css">
</head>
	<body class="cuer">
	<header>
		<div class="cabe container">
			<img src="../img/banner.png" height="250" width="1450" class="img-responsive">
		</div>
	</header>
	<nav>

		<div class="container">
		    <div class="navbar-header">
		      <a class="navbar-brand" href="productos.php">Volver</a>
		    </div>
		</div>
	</nav>
	<section>
		<div class="container">
			<div class="main row">
				<article class="col-xs-12 col-sm-8 col-md-9 col-lg-9">

					<?PHP
					$pro=$_GET['id'];
					if ($_SESSION['user']=="USR"||$_SESSION['user']=="AMD") {
						$Cliente->mostrarDetalle($pro);
					}else{
						$Cliente->mostrarDetalleSinC($pro);
					}
						
					?>
					

					
				</article>
			
			</div>
			

				
			</div>
	</section>
		</div>

	<footer>
		<div class="container">
			<h3>Pie de pagina - Footer</h3>
			<h4>12 Columnas</h4>
		</div>
	</footer>
	</div>

	<!-- Latest compiled and minified JavaScript -->
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.js"></script>
	</body>
</html>