<?php
	include "conexion.php";

	class Admin
	{
		public $link;

		function __construct($enlace)
		{
			$this->link = $enlace;
		}

		public function insertarCliente()
		{}
		public function actualizarCliente()
		{}
		public function eliminarCliente($clienteId)
		{
			$sql="DELETE FROM cliente WHERE ID_CLIENTE=".$clienteId."";
			$rsEC = mysqli_query($this->link,$sql);
			echo "<script>alert('Clinete Eliminado');</script>";
		}
		public function mostrarCliente()
		{
			$sql="SELECT * FROM cliente";
				$rsMP = mysqli_query($this->link,$sql);

				print'
				<div class="container">
						<div class="row">
					        <div class="span12">
					    		<table class="table table-condensed table-hover">
					    			<tr><td>ID Cliente</td>
					    				<td>Nombres</td>
					    				<td>Apellidos</td>
					    				<td>Teléfono</td>
					    				<td>Dirección</td>
					    				<td>Correo</td>
					    				<td>Fecha Nacimiento</td>
					    			</tr>
				';	
				while($fila = mysqli_fetch_array($rsMP))
		 		{
					 		print "<tr> 
					 					<td>".$fila['ID_CLIENTE']."</td>
					 					<td>".$fila['NOMBRES']."</td>
					 					<td>".$fila['APELLIDOS']."</td>
					 					<td>".$fila['TEL']."</td>
					 					<td>".$fila['DIRECCION']."</td>
					 					<td>".$fila['CORREO']."</td>
					 					<td>".$fila['FECHA_NAC']."</td>
					 			  </tr>
					 			 	
		 			  ";

		 		}

		 		print '
		 						</table>
					 		</div>
					 	</div>
				</';
		}
		public function insertarProducto($nombrePro,$marcaPro,$precioPro,$destino,$cateId)
		{

			$sql= "INSERT INTO producto(NOMBRE_PRODUCTO, MARCA_PRODUCTO, PRECIO_UNITARIO,ID_CATEGORIA, foto) VALUES ('$nombrePro','$marcaPro',$precioPro,$cateId,'$destino')";
			$rs = mysqli_query($this->link,$sql);

			echo "<script>alert('Datos Insertados ');</script>";
		}
		public function actualizarProducto()
		{}
		public function eliminarProducto($productoId)
		{
			$sql="DELETE FROM producto WHERE ID_PRODUCTO=$productoId";
			$rsEC = mysqli_query($this->link,$sql);
			
		}
		public function mostrarProducto()
		{
				$sql="SELECT * FROM producto";
				$rsMP = mysqli_query($this->link,$sql);

				print'
				<div class="container">
						<div class="row">
					        <div class="span12">
					    		<table class="table table-condensed table-hover">
					    			<tr><td>ID Producto</td>
					    				<td>Nombre</td>
					    				<td>Tipo</td>
					    				<td>Marca</td>
					    				<td>Precio</td>
					    			</tr>
				';	
				while($fila = mysqli_fetch_array($rsMP))
		 		{
					 		print "<tr> 
					 					<td>".$fila['ID_PRODUCTO']."</td>
					 					<td>".$fila['NOMBRE_PRODUCTO']."</td>
					 					<td>".$fila['TIPO_PRODUCTO']."</td>
					 					<td>".$fila['MARCA_PRODUCTO']."</td>
					 					<td>$".$fila['PRECIO_UNITARIO']."</td>
					 					<td><center>
					 					<a href='../formularios/admin.php?id=".$fila['ID_PRODUCTO']."&accion=eliminar'><img src='../img/eliminar.png'></a>
										</center></td> 
					 			  </tr>
					 			 	
		 			  ";

		 		}

		 		print '
		 						</table>
					 		</div>
					 	</div>
				</div>	
		 		';
		}
		public function showCategoria()
		{
			$sqlCa = "SELECT ID_CATEGORIA, NAME_CATEGORIA FROM categoria";
			$rsCa = mysqli_query($this->link,$sqlCa);
			while($fila = mysqli_fetch_array($rsCa))
		 	{
		 		print "<option value=".$fila['ID_CATEGORIA'].">".$fila['NAME_CATEGORIA']."</option>";
		 	}
		}
		public function insertarPedido()
		{}
		public function actualizarPedido()
		{}
		public function eliminarPedido()
		{}
		public function mostrarPedido()
		{}
	}
?>