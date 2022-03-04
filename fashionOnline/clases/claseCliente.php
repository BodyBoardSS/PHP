<?php
	include "conexion.php";

	class Cliente
	{
		public $link;

		function __construct($enlace)
		{
			$this->link = $enlace;
		}

		public function insertarCliente($idCliente,$nombre,$apellio,$tel,$dir,$email,$user,$password,$fecha)
		{
			$sql= "INSERT INTO tipo_user(ID_USER, USUARIO, PASSWORD, TIPO_USER) VALUES (NULL,'$user','$password','USR')";
			$rs1 = mysqli_query($this->link,$sql);

			$sql="SELECT ID_USER from tipo_user WHERE USUARIO='$user' AND PASSWORD='$password'";
			$rs2 = mysqli_query($this->link,$sql);
			$fila = mysqli_fetch_array($rs2);
			$id_user=$fila['ID_USER'];

		 	$sql ="INSERT INTO cliente(ID_CLIENTE, NOMBRES, APELLIDOS, TEL, DIRECCION, CORREO, FECHA_NAC, ID_USER) VALUES ($idCliente,'$nombre','$apellio','$tel','$dir','$email','$fecha',$id_user)";
		 	$rs3 = mysqli_query($this->link,$sql);

		 	echo "<script>alert('Datos Insertados');</script>";

		}
		
		public function iniciarSesion($user,$password)
		{
			$sql="SELECT TIPO_USER FROM tipo_user WHERE USUARIO='$user' AND PASSWORD='$password'";
			$rs = mysqli_query($this->link,$sql);

			$fila = mysqli_fetch_array($rs);
			$tipo=$fila['TIPO_USER'];

			if ($tipo=="ADM") {
		 	header("Location: formularios/admin.php");
		 	$_SESSION['user']=$tipo;
		 	$_SESSION['usuario'];
		 	$_SESSION['password'];

			}else if($tipo=="USR"){
				header("Location: formularios/productos.php");
				$_SESSION['user']=$tipo;
				$_SESSION['usuario'];
		 		$_SESSION['password'];
			}else{
				header("Location: index.php?UsuarioError");
			}
			
		}

		public function mostrarProducto($mostrar)
		{
			$sql="SELECT * FROM producto WHERE ID_CATEGORIA=".$mostrar."";
				$rsMP = mysqli_query($this->link,$sql);
				$i=1;
				while($fila = mysqli_fetch_array($rsMP))
		 		{
					 		
					echo '<div class="producto">
							<center>
								<img src="../imagenes/'.$fila["foto"].'"><br>
								<span>'.$fila["NOMBRE_PRODUCTO"].'</span><br>
								<span>$'.$fila["PRECIO_UNITARIO"].'</span><br>
								<a href="../formularios/detalles.php?id='.$fila['ID_PRODUCTO'].'""></a>
							</center>
						</div>';

		 		}
		 }

				public function mostrarProductoIni()
				{
					$sql="SELECT * FROM producto ";
						$rsMP = mysqli_query($this->link,$sql);
						$i=1;
						while($fila = mysqli_fetch_array($rsMP))
				 		{
							 		
							echo '<div class="producto">
									<center>
										<img src="../imagenes/'.$fila["foto"].'"><br>
										<span>'.$fila["NOMBRE_PRODUCTO"].'</span><br>
										<span>$'.$fila["PRECIO_UNITARIO"].'</span><br>
										<a href="../formularios/detalles.php?id='.$fila['ID_PRODUCTO'].'">ver</a>
									</center>
								</div>';

				 		}

				}
				public function mostrarDetalle($pro)
				{
					$sql="SELECT * FROM producto WHERE ID_PRODUCTO=".$pro."";
					$rs = mysqli_query($this->link,$sql);
					$i=1;
					while($fila = mysqli_fetch_array($rs))
			 		{
						 		
					echo '<div class="producto">
									<center>
										<img src="../imagenes/'.$fila["foto"].'"><br>
										<span>'.$fila["NOMBRE_PRODUCTO"].'</span><br>
										<span>$'.$fila["PRECIO_UNITARIO"].'</span><br>
										<a href="../formularios/carretaFashion.php?id='.$fila['ID_PRODUCTO'].'">Añadir al carrito</a>
									</center>
								</div>';	

				 		}

				 	}

				 	public function mostrarDetalleSinC($pro)
				{
					$sql="SELECT * FROM producto WHERE ID_PRODUCTO=".$pro."";
					$rs = mysqli_query($this->link,$sql);
					$i=1;
					while($fila = mysqli_fetch_array($rs))
			 		{
						 		
					echo '<div class="producto">
									<center>
										<img src="../imagenes/'.$fila["foto"].'"><br>
										<span>'.$fila["NOMBRE_PRODUCTO"].'</span><br>
										<span>$'.$fila["PRECIO_UNITARIO"].'</span><br>
									</center>
								</div>';	

				 		}

				 	}

				 	public function ingresarCompra($cantidad,$precioCon,$fecha,$id_user)
				 	{

				 			$sql="INSERT INTO compra(CATIDAD_COMPRA, PRECIO_COMPRA, FECHA_COMPRA, ID_CLIENTE) VALUES ($cantidad,$precioCon,'$fecha'$id_user)";
				 			$rs = mysqli_query($this->link,$sql);
				 	}

			
		
	}
		
?>