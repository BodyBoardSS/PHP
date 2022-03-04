<?php
	session_start();
	include '../clases/conexionC.php';
	include "../clases/claseCliente.php";
	$Cliente = new Cliente($bdConexion->obtenerConexion());
	$cantidadCo=$total;
	$precioCon=$precio;
	$fecha=strftime( "%Y-%m-%d-%H-%M-%S", time() );
	$re=mysqli_query("SELECT ID_USER FROM  tipo_user WHERE USUARIO='".$_SESSION['usuario']."' AND PASSWORD='".$_SESSION['password']."'");
	$id_user= mysqli_fetch_array($re);

	if(isset($_SESSION['carrito'])){
		if(isset($_GET['id'])){
					$arreglo=$_SESSION['carrito'];
					$encontro=false;
					$numero=0;
					for($i=0;$i<count($arreglo);$i++){
						if($arreglo[$i]['Id']==$_GET['id']){
							$encontro=true;
							$numero=$i;
						}
					}
					if($encontro==true){
						$arreglo[$numero]['Cantidad']=$arreglo[$numero]['Cantidad']+1;
						$_SESSION['carrito']=$arreglo;
					}else{
						$nombre="";
						$precio=0;
						$imagen="";
						$re=mysql_query("SELECT * FROM producto WHERE ID_PRODUCTO=".$_GET['id']);
						while ($f=mysql_fetch_array($re)) {
							$nombre=$f['NOMBRE_PRODUCTO'];
							$precio=$f['PRECIO_UNITARIO'];
							$imagen=$f['foto'];
						}
						$datosNuevos=array('Id'=>$_GET['id'],
										'Nombre'=>$nombre,
										'Precio'=>$precio,
										'Imagen'=>$imagen,
										'Cantidad'=>1);

						array_push($arreglo, $datosNuevos);
						$_SESSION['carrito']=$arreglo;

					}
		}




	}else{
		if(isset($_GET['id'])){
			$nombre="";
			$precio=0;
			$imagen="";
			$re=mysql_query("SELECT * FROM producto WHERE ID_PRODUCTO=".$_GET['id']);
						while ($f=mysql_fetch_array($re)) {
							$nombre=$f['NOMBRE_PRODUCTO'];
							$precio=$f['PRECIO_UNITARIO'];
							$imagen=$f['foto'];
						}
			$arreglo[]=array('Id'=>$_GET['id'],
							'Nombre'=>$nombre,
							'Precio'=>$precio,
							'Imagen'=>$imagen,
							'Cantidad'=>1);
			$_SESSION['carrito']=$arreglo;
		}
	}
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
				<?php
			$total=0;
			if(isset($_SESSION['carrito'])){
			$datos=$_SESSION['carrito'];
			
			$total=0;
			for($i=0;$i<count($datos);$i++){
				
	?>
				<div class="producto">
					<center>
						<img src="../imagenes/<?php echo $datos[$i]['Imagen'];?>"><br>
						<span ><?php echo $datos[$i]['Nombre'];?></span><br>
						<span>Precio: <?php echo $datos[$i]['Precio'];?></span><br>
						<span>Cantidad: 
							<input type="text" value="<?php echo $datos[$i]['Cantidad'];?>"
							data-precio="<?php echo $datos[$i]['Precio'];?>"
							data-id="<?php echo $datos[$i]['Id'];?>"
							class="cantidad">
						</span><br>
						<span class="subtotal">Subtotal:<?php echo $datos[$i]['Cantidad']*$datos[$i]['Precio'];?></span><br>
						
					</center>
				</div>
			<?php
				$total=($datos[$i]['Cantidad']*$datos[$i]['Precio'])+$total;
			}
				
			}else{
				echo '<center><h2>No has añadido ningun producto</h2></center>';
			}
			echo '<center><h2 id="total">Total: '.$total.'</h2></center>';
			?>
				
			</article>
					<form method="post" action="#">
						<input type="submit" value="Comprar" name="btnComprar">
						<?php
								if (isset($_POST['btnComprar'])) {
									$Cliente->ingresarCompra($cantidad,$precioCon,$fecha,$id_user);
								}
						?>
					</form>
			
			</div>
			</div>
	</section>
		</div>

	<footer>
		<div class="container">
					
			
		</div>
	</footer>
	</div>

	<!-- Latest compiled and minified JavaScript -->
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.js"></script>
	</body>
</html>