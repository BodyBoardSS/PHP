-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2016 a las 20:01:45
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `fashiononline`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aministrador`
--

CREATE TABLE IF NOT EXISTS `aministrador` (
  `ID_ADMIN` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRES_ADM` varchar(50) NOT NULL,
  `APELLIDOS_ADM` varchar(50) NOT NULL,
  `ID_USER` int(11) NOT NULL,
  PRIMARY KEY (`ID_ADMIN`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `aministrador`
--

INSERT INTO `aministrador` (`ID_ADMIN`, `NOMBRES_ADM`, `APELLIDOS_ADM`, `ID_USER`) VALUES
(1, 'Kevin', 'Aguilar', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
  `ID_CATEGORIA` int(11) NOT NULL AUTO_INCREMENT,
  `NAME_CATEGORIA` varchar(25) NOT NULL,
  PRIMARY KEY (`ID_CATEGORIA`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`ID_CATEGORIA`, `NAME_CATEGORIA`) VALUES
(1, 'ROPA'),
(2, 'ZAPATOS'),
(3, 'ACCESORIOS'),
(4, 'PERFUMES');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
  `ID_CLIENTE` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRES` varchar(50) NOT NULL,
  `APELLIDOS` varchar(50) NOT NULL,
  `TEL` varchar(9) NOT NULL,
  `DIRECCION` varchar(100) NOT NULL,
  `CORREO` varchar(50) NOT NULL,
  `FECHA_NAC` date NOT NULL,
  `ID_USER` int(2) NOT NULL,
  PRIMARY KEY (`ID_CLIENTE`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`ID_CLIENTE`, `NOMBRES`, `APELLIDOS`, `TEL`, `DIRECCION`, `CORREO`, `FECHA_NAC`, `ID_USER`) VALUES
(2, 'Kevin Manuel', 'Aguilar', '70003030', 'Res Salinitas Cl Flor De Mayo LOTE 19', 'keeviinoreellana@gmail.com', '1996-05-20', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE IF NOT EXISTS `compra` (
  `ID_COMPRA` int(11) NOT NULL AUTO_INCREMENT,
  `CATIDAD_COMPRA` int(25) NOT NULL,
  `PRECIO_COMPRA` double NOT NULL,
  `FECHA_COMPRA` date NOT NULL,
  `ID_CLIENTE` int(11) NOT NULL,
  PRIMARY KEY (`ID_COMPRA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE IF NOT EXISTS `pedido` (
  `ID_PEDIDO` int(11) NOT NULL AUTO_INCREMENT,
  `FECHA_PEDIDO` date NOT NULL,
  `DESCRIPCION` varchar(100) NOT NULL,
  `ID_ADMIN` int(11) NOT NULL,
  PRIMARY KEY (`ID_PEDIDO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE IF NOT EXISTS `producto` (
  `ID_PRODUCTO` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE_PRODUCTO` varchar(50) NOT NULL,
  `MARCA_PRODUCTO` varchar(50) NOT NULL,
  `PRECIO_UNITARIO` double NOT NULL,
  `ID_CATEGORIA` int(11) NOT NULL,
  `foto` varchar(200) NOT NULL,
  PRIMARY KEY (`ID_PRODUCTO`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`ID_PRODUCTO`, `NOMBRE_PRODUCTO`, `MARCA_PRODUCTO`, `PRECIO_UNITARIO`, `ID_CATEGORIA`, `foto`) VALUES
(1, 'Bamba Denin', 'Bamba', 39.95, 2, '../imagenes/BAMBA DENIN-39,95.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE IF NOT EXISTS `proveedor` (
  `ID_PROVEEDOR` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE_PROVEEDOR` varchar(50) NOT NULL,
  `TEL_PROVEEDOR` varchar(10) NOT NULL,
  `ID_PEDIDO` int(11) NOT NULL,
  PRIMARY KEY (`ID_PROVEEDOR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_user`
--

CREATE TABLE IF NOT EXISTS `tipo_user` (
  `ID_USER` int(11) NOT NULL AUTO_INCREMENT,
  `USUARIO` varchar(50) NOT NULL,
  `PASSWORD` varchar(50) NOT NULL,
  `TIPO_USER` varchar(5) NOT NULL,
  PRIMARY KEY (`ID_USER`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `tipo_user`
--

INSERT INTO `tipo_user` (`ID_USER`, `USUARIO`, `PASSWORD`, `TIPO_USER`) VALUES
(5, 'admin', '1234', 'ADM'),
(6, 'kevin', '1234', 'USR');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
