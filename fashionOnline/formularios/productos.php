<?php
session_start();
include "../clases/claseCliente.php";
$Cliente = new Cliente($bdConexion->obtenerConexion());
?>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Inicio</title>
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
		      <a class="navbar-brand" href="#">FashionOnline</a>
		    </div>
		    <ul class="nav navbar-nav">
		      <li class="active"><a href="../index.php">Inicio</a></li>
		      	<li class="dropdown">
			        <a class="dropdown-toggle" data-toggle="dropdown" href="productos.php?mos=4">Perfumes
			        <ul class="dropdown-menu">
			          <li><a href="#">Ellas</a></li>
			          <li><a href="#">Ellos</a></li>
			          <li><a href="#">Niños</a></li> 
			        </ul>
			    </li>
			    <li class="dropdown">
			        <a class="dropdown-toggle" data-toggle="dropdown" href="productos.php?mos=1">Ropa
			        <ul class="dropdown-menu">
			          <li><a href="#">Ellas</a></li>
			          <li><a href="#">Ellos</a></li>
			          <li><a href="#">Niños</a></li> 
			        </ul>
			    </li>
			    <li class="dropdown">
			        <a class="dropdown-toggle" data-toggle="dropdown" href="productos.php?mos=2">Zapatos
			        <ul class="dropdown-menu">
			          <li><a href="#">Ellas</a></li>
			          <li><a href="#">Ellos</a></li>
			          <li><a href="#">Niños</a></li> 
			        </ul>
			    </li>
		     	<li class="dropdown">
			        <a class="dropdown-toggle" data-toggle="dropdown" href="productos.php?mos=3">Accesorios
			        <ul class="dropdown-menu">
			          <li><a href="#">Ellas</a></li>
			          <li><a href="#">Ellos</a></li>
			          <li><a href="#">Niños</a></li> 
			        </ul>
			    </li>
		    </ul>
		    <?php
		    		if ($_SESSION['user']=="USR"||$_SESSION['user']=="AMD") {
		    			print'
							 <div id="carro">
							    <a href="carretaFashion.php" title="ver carretilla">
								<img src="../img/carrito.png" height="40px" width="40px">
								</a>
							</div>

		    			';
		    		}
		    ?>
		  </div>
	</nav>
	<section>
		<div class="container">
			<div class="main row">
				<article class="col-xs-12 col-sm-8 col-md-9 col-lg-9">
						<?php
						if (isset($_GET['mos'])) {
							$mostrar=$_GET['mos'];
							$Cliente->mostrarProducto($mostrar);	
						}
						if ($_GET['mos']==0)
						 {
							$Cliente->mostrarProductoIni();
								
						}
						?>

				</article>
			
				<aside class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
						Ingresar datos!!
				</aside>
			</div>
			<div class="row">
				<div class="color1 col-xs-12 col-sm-6 col-md-3">
					<h4 class="visible-xs">12 Columnas</h4>
					<h4 class="visible-sm">6 Columnas</h4>
					<h4 class="visible-md">3 Columnas</h4>
					<h4 class="visible-lg">3 Columnas</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab qui laudantium dolor, sit doloremque aliquid earum nesciunt vero ullam commodi, blanditiis numquam natus libero repellat odit cum, ipsa nostrum!</p>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3">
					<h4 class="visible-xs">12 Columnas</h4>
					<h4 class="visible-sm">6 Columnas</h4>
					<h4 class="visible-md">3 Columnas</h4>
					<h4 class="visible-lg">3 Columnas</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab qui laudantium dolor, sit doloremque aliquid earum nesciunt vero ullam commodi, blanditiis numquam natus libero repellat odit cum, ipsa nostrum!</p>
				</div>

				<div class="color1 col-xs-12 col-sm-6 col-md-3">
					<h4 class="visible-xs">12 Columnas</h4>
					<h4 class="visible-sm">6 Columnas</h4>
					<h4 class="visible-md">3 Columnas</h4>
					<h4 class="visible-lg">3 Columnas</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab qui laudantium dolor, sit doloremque aliquid earum nesciunt vero ullam commodi, blanditiis numquam natus libero repellat odit cum, ipsa nostrum!</p>
				</div>

				<div class="col-xs-12 col-sm-6 col-md-3">
					<h4 class="visible-xs">12 Columnas</h4>
					<h4 class="visible-sm">6 Columnas</h4>
					<h4 class="visible-md">3 Columnas</h4>
					<h4 class="visible-lg">3 Columnas</h4>
					<?php
						if (isset($_POST['btnEnviar'])) {
							echo"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab qui laudantium dolor, sit doloremque aliquid earum nesciunt vero ullam commodi, blanditiis numquam natus libero repellat odit cum, ipsa nostrum!</p># code...";
						}
					
					?>
				</div>
			</div>
	</section>
		</div>

	<footer>
		<div class="container">
			<CENTER><h5><p>©DerechosReservados FashionOnline 
		Creador: Kevin Aguilar</p></h5></CENTER>
		</div>
	</footer>
	</div>

	<!-- Latest compiled and minified JavaScript -->
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.js"></script>
	</body>
</html>