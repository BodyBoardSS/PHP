<?php
 session_start();
include "clases/claseCliente.php";
	$Cliente = new Cliente($bdConexion->obtenerConexion());
	$idCliente="NULL";
	$nombre = $_POST['txtNombre'];
	$apellio = $_POST['txtApellido'];
	$tel = $_POST['txtTel'];
	$dir = $_POST['txtDir'];
	$email = $_POST['txtCorreo'];
	$user = $_POST['txtUser'];
	$password = $_POST['txtPassword'];
	$fecha = $_POST['txtFecha'];
	if(isset($_POST['btnEnviar']))
	{

		$Cliente->insertarCliente($idCliente,$nombre,$apellio,$tel,$dir,$email,$user,$password,$fecha,$tipo);

	}
	if (isset($_POST['btnEntrar'])) {
		$Cliente->iniciarSesion($user,$password);
	}
?>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>FashionOnline</title>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="icon" type="image/png" href="img/logo.png"/>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/footer.css">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">
	<link rel="stylesheet" href="css/estilos.css">
</head>
	<body class="cuer">
		<header>
				<div class="contenedor">
					<center><h1>FashionOnline</h1></center>
					<input type="checkbox" id="menu-bar">
					<label class="icon-menu" for="menu-bar"></label>

					<nav class="menu">
						<ul>
							<li><a href="formularios/productos.php">Inicio</a></li>
							<li><a href="#">Perfumes</a>
								<ul>
									<li><a href="#">Ellos</a></li>
									<li><a href="#">Ellas</a></li>
								</ul>
							</li>	
							<li><a href="#">Ropa</a>
								<ul>
									<li><a href="#">Ellos</a></li>
									<li><a href="#">Ellas</a></li>
								</ul>
							</li>
							<li><a href="#">Zapatos</a>
								<ul>
									<li><a href="#">Ellos</a></li>
									<li><a href="#">Ellas</a></li>
								</ul>
							</li>
							<li><a href="html/accesorios.php">Accesorios</a>
								<ul>
									<li><a href="#">Ellos</a></li>
									<li><a href="#">Ellas</a></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
		</header>	
	<article>	
	<section id="banner">
			<img src="img/banner.png" alt="" class="img-responsive">
	</section>
	<section id="block1">	
				<h2>PREPARADO PARA IR DE VIAJE</h2>
			<div class="row">
				<div class="color1 col-xs-12 col-sm-4 col-md-4">
					
					<img src="img/ejemplo1.jpg" width="400" >
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4">
		
					<img src="img/ejemplo2.jpg" width="400" >
				</div>
				<aside class="col-xs-12 col-sm-4 col-md-3 col-lg-4">
				<div class="panel panel-default">
			  	<div class="panel-heading">
			    	<h3 class="panel-title">Bienvenido</h3>
			 	</div>
			<div class="panel-body">
			    			<form action="#" method="POST">
                    <fieldset>
                    	<?php
					if (isset($_POST['btnRegistrar'])) {
						print'
                    	<div class="form-group">
			    		    <input class="form-control" placeholder="Nombre" name="txtNombre" type="text" required>
			    		</div>
			    		<div class="form-group">
			    		    <input class="form-control" placeholder="Apellido" name="txtApellido" type="text" required>
			    		</div>
			    	  	<div class="form-group">
			    		    <input class="form-control" placeholder="Teléfono" name="txtTel" type="text" required>
			    		</div>
			    		<div class="form-group">
			    		    <input class="form-control" placeholder="Dirección" name="txtDir" type="text" required>
			    		</div>
			    		<div class="form-group">
			    		    <input class="form-control" placeholder="Correo" name="txtCorreo" type="email" required>
			    		</div>
			    		<div class="form-group">
			    		    <input class="form-control" placeholder="Fecha de Nacimiento (AAAA-MM-DD)" name="txtFecha" type="date" required>
			    		</div>
			' ;
					}
					?>
			    		<div class="form-group">
			    		    <input class="form-control" placeholder="Usuario" name="txtUser" type="text">
			    		</div>
			    		<div class="form-group">
			    			<input class="form-control" placeholder="Password" name="txtPassword" type="password" value="">
			    		</div>
			    		<input type="submit" name="btnEntrar" value="Ingresar" id="btnEntrar" class="btn btn-info btn-block" <?php if(isset($_POST['btnRegistrar'])){print"disabled=''";}?>>
			      	</form>
			      	<input type="submit" name="btnRegistrar" value="No tengo Cuenta" id="btnRegistrar" class="btn btn-info btn-block"<?php if(isset($_POST['btnRegistrar'])){print"disabled=''";}?>>
			      	<?php
					if (isset($_POST['btnRegistrar'])) {
						print'
                    	<input type="submit" name="btnEnviar" value="Registrarse" id="btnEnviar" class="btn btn-info btn-block">
			' ;
					}
					?>
			      	</fieldset>
				</aside>
			</div>
		</section>
		<hr size="3px" color="black" />
		<section id="block2">
			<div class="row">
				<div class="color1 col-xs-12 col-sm-6 col-md-3">
					<h4 class="visible-xs">SUDADERAS</h4>
					<h4 class="visible-sm">6 Columnas</h4>
					<h4 class="visible-md">3 Columnas</h4>
					<h4 class="visible-lg">SUDADERAS</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab qui laudantium dolor, sit doloremque aliquid earum nesciunt vero ullam commodi, blanditiis numquam natus libero repellat odit cum, ipsa nostrum!</p>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3">
					<h4 class="visible-xs">BAMBAS</h4>
					<h4 class="visible-sm">6 Columnas</h4>
					<h4 class="visible-md">3 Columnas</h4>
					<h4 class="visible-lg">BAMBAS</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab qui laudantium dolor, sit doloremque aliquid earum nesciunt vero ullam commodi, blanditiis numquam natus libero repellat odit cum, ipsa nostrum!</p>
				</div>

				<div class="color1 col-xs-12 col-sm-6 col-md-3">
					<h4 class="visible-xs">ZAPATOS</h4>
					<h4 class="visible-sm">6 Columnas</h4>
					<h4 class="visible-md">3 Columnas</h4>
					<h4 class="visible-lg">ZAPATOS</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab qui laudantium dolor, sit doloremque aliquid earum nesciunt vero ullam commodi, blanditiis numquam natus libero repellat odit cum, ipsa nostrum!</p>
				</div>

				<div class="col-xs-12 col-sm-6 col-md-3">
					<h4 class="visible-xs">DENIM</h4>
					<h4 class="visible-sm">6 Columnas</h4>
					<h4 class="visible-md">3 Columnas</h4>
					<h4 class="visible-lg">DENIM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab qui laudantium dolor, sit doloremque aliquid earum nesciunt vero ullam commodi, blanditiis numquam natus libero repellat odit cum, ipsa nostrum!</p>
					
				</div>
			</div>
		</section>

		<hr size="3px" color="black" />
		<section id="block1">	
				<h1><center>#FASHIONTRENDS</center></h1>
			<table>
	<tbody>
		<tr>
			<td colspan="3" rowspan="-1"><a href="#"><img src="img/man1.jpg" alt="" class="img-responsive"></a></td>
			<td rowspan="3">&nbsp; &nbsp; &nbsp;</td>
			<td rowspan="3"><a href="#"><img src="img/man2.jpg" width="600"height="1000" alt="" class="img-responsive"></a></td>
			<td rowspan="3">&nbsp; &nbsp; &nbsp;</td>
			<td colspan="3" rowspan="-1"><a href="#"><img src="img/man3.jpg" alt="" class="img-responsive"></a></td>
		</tr>
		<tr>
			<td colspan="3">&nbsp; &nbsp; &nbsp;</td>
			<td colspan="3">&nbsp; &nbsp; &nbsp;</td>
		</tr>
		<tr>
			<td colspan="3" rowspan="-1"><a href="#"><img src="img/man4.jpg" alt="" class="img-responsive"></a></td>
			<td colspan="3" rowspan="-1"><a href="#"><img src="img/man5.jpg" alt="" class="img-responsive"></a></td>
		</tr>
	</tbody>
</table>
		</section>

		<hr size="3px" color="black" />

		<section id="block2">
			<div class="contenedor1">
				<div class="container">
				<article class="col-xs-10">
				
					<div class="prueba">
						<div id="myCarousel" class="carousel slide" data-ride="carousel">
 
							  <ol class="carousel-indicators">
							    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
							    <li data-target="#myCarousel" data-slide-to="1"></li>
							    <li data-target="#myCarousel" data-slide-to="2"></li>
							    <li data-target="#myCarousel" data-slide-to="3"></li>
							  </ol>

							  <!-- Wrapper for slides -->
							  <div class="carousel-inner" role="listbox">
								    <div class="item active">
								      <img src="img/banner4.png">
								    </div>

								    <div class="item">
								      <img src="img/banner2.png">
								    </div>

								    <div class="item">
								      <img src="img/banner3.png">
								    </div>

								    <div class="item">
								      <img src="img/banner5.png">
								    </div>
							  </div>
				</div>

							  <!-- Left and right controls -->
							  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
							    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							    <span class="sr-only">Previous</span>
							  </a>
							  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
							    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							    <span class="sr-only">Siguiente</span>
							  </a>
							</div>
					</div>
				</div>	
		</section>
	</article>
	<aside>
		<hr>
	</aside>	
	<footer>
		<div class="contenedor">
			<div class="redes">
				<a href="#"><img src="img/iconos/facebook.png" alt=""></a>
			</div>
			<div class="redes">
				<a href="#"><img src="img/iconos/twitter.png" alt=""></a>
			</div>
			<div class="redes">
				<a href="#"><img src="img/iconos/instagram.png" alt=""></a>
			</div>
			<div class="redes">
				<a href="#"><img src="img/iconos/pinterest.png" alt=""></a>
			</div>
			<div class="redes">
				<a href="#"><img src="img/iconos/youtube.png" alt=""></a>
			</div>
			<div class="redes">
				<a href="#"><img src="img/iconos/spotify.png" alt=""></a>
			</div>
		</div>
		<hr size="5px" color="black" />
		<center><p>©DerechosReservados FashionOnline <br>Creador: David Rodriguez</p></center>
		
	</footer>
	</div>

	<!-- Latest compiled and minified JavaScript -->
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.js"></script>
	</body>
</html>