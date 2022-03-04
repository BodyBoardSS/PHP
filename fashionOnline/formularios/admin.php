<?php
session_start();
include "../clases/claseAdmin.php";
$admin = new Admin($bdConexion->obtenerConexion());
if (isset($_POST['btnAddPro'])) {
	$nombrePro = $_POST['txtNombreProdu'];
	$cateId = $_POST['slcCate'];
	$marcaPro = $_POST['txtMarca'];
	$precioPro =$_REQUEST['txtPrecio'];
	$foto=$_FILES["foto"]["name"];
	$ruta=$_FILES["foto"]["tmp_name"];
	$destino="../imagenes/".$foto;
	copy($ruta,$destino);
	$admin->insertarProducto($nombrePro,$marcaPro,$precioPro,$destino,$cateId);
}
if (isset($_POST['btnEliminarCliente'])) {
	$clienteId= $_POST['txtIDCliente'];

	$admin->eliminarCliente($clienteId);
}
if(isset($_GET['id']))
	{
		$productoId	= $_GET['id'];
		$accion 	= $_GET['accion'];
	}	
if(isset($_GET['accion']) && $_GET['accion']=='eliminar')
	{
		//Procediendo con la eliminacion
		$admin->eliminarProducto($productoId);
	}

if (($_SESSION['user'])!="") {
?>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Mantenimiento</title>
	<link rel="icon" type="image/png" href="../img/logo.png"/>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="../css/bootstrap.css">
	<link rel="stylesheet" href="../css/style.css">
</head>
	<body class="cuer">
	<header>
		<div class="cabe container">
			<img src="../img/bannerMan.png" height="250" width="1450" class="img-responsive">
		</div>
	</header>
	<nav>
		<div class="container">
				<div class="btn-group">
					
					<form action="#" method="POST">
						<input type="submit" class="btn btn-success btn-filter" data-target="pagado" value="Cliente" name="btnCliente" id="btnCliente" style="width:250px; "></input>
						<input type="submit" class="btn btn-success btn-filter" data-target="pagado" value="Producto" name="btnProducto" id="btnProducto" style="width:250px; "></input>
						<input type="submit" class="btn btn-success btn-filter" data-target="pagado" value="Pedido" name="btnPedidoProveedor" id="btnPedido" style="width:250px; "></input>
						<input type="submit" class="btn btn-success btn-filter" data-target="pagado" value="Proveedor" name="btnProveedor" id="btnProveedor" style="width:250px; "></input>
						<a  href="../PROCESOS/cerrar_sesion.php"><button class="btn btn-success btn-filter" data-target="pagado"  style="width:100px; "><a  href="../PROCESOS/cerrar_sesion.php">Salir</a></button></a>
					</form>
					</div>
				</div>
	</nav>
	<section>
		<div class="container">
			<div class="main row">
				<article class="col-xs-12">
						<?php
							if (isset($_POST['btnCliente'])){
								print '
									<div class="container">
									    <div class="row">
											<div class="col-md-4 col-md-offset-4">
									    		<div class="panel panel-default">
												  	<div class="panel-heading">
												    	<h3 class="panel-title">Cliente</h3>
												 	</div>
												  	<div class="panel-body">
												    	<form accept-charset="UTF-8" role="form" method="POST" enctype="multipart/form-data">
												    	  	<div class="form-group">
												    		    <input class="form-control" placeholder="ID" name="txtIDCliente" type="text" id="txtIDCliente">
												    		</div>
												    		<div class="form-group">
												    			<input class="form-control" placeholder="Nombre" name="txtClienteName" type="text" id="txtClienteName">
												    		</div>
												    		<div class="form-group">
												    			<input class="form-control" placeholder="Apellido" name="txtClienteApe" type="text" id="txtClienteApe">
												    		</div>
												    		<div class="form-group">
												    			<input class="form-control" placeholder="Tel" name="txtClienteTel" type="text" id="txtClienteTel">
												    		</div>
												    		<div class="form-group">
												    			<input class="form-control" placeholder="Dirección" name="txtClienteDir" type="text" id="txtClienteDir">
												    		</div>
												    		<div class="form-group">
												    			<input class="form-control" placeholder="Correo" name="txtClienteCorreo" type="email" id="txtClienteCorreo">
												    		</div>
												    		<div class="form-group">
												    			<input class="form-control" placeholder="Fecha Nacimiento" name="txtClienteFecha" type="date" id="txtClienteFecha">
												    		</div>
												    		<div class="btn-group">
														<input type="submit" class="btn btn-success btn-filter" data-target="pagado" value="Agregar" name="btnAddCliente" id="btnAddCliente" style="width:80px; "></input>
														<input type="submit" class="btn btn-success btn-filter" data-target="pagado" value="Actualizar" name="btnActuCliente" id="btnActuCliente" style="width:80px; "></input>
														<input type="submit" class="btnEliminar btn btn-success btn-filter" data-target="pagado" value="Eliminar" name="btnEliminarCliente" id="btnEliminarCliente" style="width:75px; "></input>
													</div>
												</div>
												      	</form>
												    </div>
												</div>
											</div>
										</div>
									</div>
									<footer>
										<div class="container">
											';
											$admin->mostrarCliente();
								print'
										</div>
									</footer>
								';
								
							}
							?>
							<?PHP
							if (isset($_POST['btnProducto']) ){
								print '
									<div class="container">
									    <div class="row">
											<div class="col-md-4 col-md-offset-4">
									    		<div class="panel panel-default">
												  	<div class="panel-heading">
												    	<h3 class="panel-title">Productos</h3>
												 	</div>
												  	<div class="panel-body">
												    	<form accept-charset="UTF-8" role="form" method="POST" enctype="multipart/form-data">
												    	  	<div class="form-group">
												    		    <input class="form-control" placeholder="ID" name="txtIDProdu" type="text" id="txtIDProdu">
												    		</div>
												    	  	<div class="form-group">
												    		    <input class="form-control" placeholder="Nombre" name="txtNombreProdu" type="text" id="txtNombreProdu">
												    		</div>
												    		<div class="form-group">
												    					<select class="form-control" name="slcCate">'?>
												    					<?php
												    					$admin->showCategoria();
												    					?>
												    					<?php
																		print'</select>
												    		</div>
												    		<div class="form-group">
												    			<input class="form-control" placeholder="Marca" name="txtMarca" type="text" id="txtMarca">
												    		</div>
												    		<div class="form-group">
												    			<input class="form-control" placeholder="Precio $" name="txtPrecio" type="text" id="txtPrecio">
												    		</div>
												    		<div class="form-group">
												    			<input class="form-control" name="foto" type="file" id="foto" >
												    		</div>

												    		<div class="btn-group">
														<input type="submit" class="btn btn-success btn-filter" data-target="pagado" value="Agregar" name="btnAddPro" id="btnAddPro" style="width:80px; "></input>
														<input type="submit" class="btn btn-success btn-filter" data-target="pagado" value="Actualizar" name="btnActuPro" id="btnActuPro" style="width:80px; "></input>
														<input type="submit" class="btnEliminar btn btn-success btn-filter" data-target="pagado" value="Eliminar" name="btnEliminarPro" id="btnEliminarPro" style="width:75px; "></input>
													</div>
												</div>
												      	</form>
												    </div>
												</div>
											</div>
										</div>
									</div>
									<footer>
										<div class="container">
											';
											$admin->mostrarProducto();
								print'
										</div>
									</footer>
								';
																	}
							/*if (isset($_POST['btnPedido'])) {							
							}
							if (isset($_POST['btnProveedor'])) {
								
							}*/
						?>
				</article>
			
			</div>
			
		</div>
	</section>

	</div>
	<?php
		}else{
			echo">>>>Debe Iniciar Sesión<<<<<";
			header("Location:../index.php");
		}
		
	?>
	<CENTER><h5><p>©DerechosReservados FashionOnline 
		Creador: Kevin Aguilar</p></h5></CENTER>
	<!-- Latest compiled and minified JavaScript -->
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="../js/bootstrap.js"></script>
	</body>
</html>