/ *!
 * V1.11.1 jQuery JavaScript Library
 * http://jquery.com/
 *
 * Incluye Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. y otros colaboradores
 * Publicado bajo la licencia MIT
 * http://jquery.org/license
 *
 * Fecha: 2014-05-01T17: 42Z
 * /

(Función (global, fábrica) {

	si (typeof módulo === "objeto" "objeto" && typeof module.exports ===) {
		// Para CommonJS y entornos CommonJS-como donde está presente una ventana adecuada,
		// Ejecutar la fábrica y conseguir jQuery
		// Para entornos que no poseen inherentemente una ventana con un documento
		// (Como Node.js), exponer una fábrica de jQuery de decisiones como module.exports
		// Esto acentúa la necesidad de la creación de una ventana de verdad
		// Por ejemplo jQuery var = requieren ( "jQuery") (ventana);
		// Ver el boleto # 14549 para más información
		module.exports = global.document?
			fábrica (global, true):
			función (w) {
				si (w.document!) {
					throw new Error ( "jQuery requiere una ventana con un documento");
				}
				fábrica de retorno (w);
			};
	} Else {
		fábrica (global);
	}

// Pasar esta ventana si no se ha definido todavía
} (Typeof ventana == "indefinido" ventana:? Esto, la función (ventana, noGlobal) {

// No se puede hacer esto debido a que varias aplicaciones, incluyendo seguimiento ASP.NET
// La pila a través de arguments.caller.callee y Firefox muere si
// Intenta rastrear a través de "utilizar" estrictas cadenas de llamadas. (# 13335)
// Ayuda: Firefox 18+
//

deletedIds var = [];

var = rebanada deletedIds.slice;

var = concat deletedIds.concat;

var = empuje deletedIds.push;

var = indexOf deletedIds.indexOf;

var class2type = {};

var = toString class2type.toString;

var = hasOwn class2type.hasOwnProperty;

apoyo var = {};



var
	version = "1.11.1",

	// Define una copia local de jQuery
	jQuery = function (selector, contexto) {
		// El objeto jQuery es en realidad sólo el constructor init "mejorada"
		// Necesidad de inicio si se llama jQuery (solo permite el error que se produce si no se incluye)
		volver nueva jQuery.fn.init (selector, contexto);
	},

	// Ayuda: Android <4.1, IE <9
	// Asegúrese de que recortamos lista de materiales y NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g,

	// Partidos cadena discontinua de camelizing
	rmsPrefix = / ^ - MS /,
	rdashAlpha = / - ([\ da-z]) / gi,

	// Utilizado por jQuery.camelCase como devolución de llamada a replace ()
	fcamelCase = function (todo, carta) {
		letter.toUpperCase volver ();
	};

jQuery.fn = jQuery.prototype = {
	// La versión actual de jQuery siendo utilizado
	jQuery: versión,

	constructor: jQuery,

	// Comienza con un selector de vacío
	Selector: "",

	// La longitud predeterminada de un objeto jQuery es 0
	longitud: 0,

	toArray: function () {
		volver slice.call (este);
	},

	// Obtener el elemento enésimo elemento en el conjunto combinado de O
	// Obtiene toda emparejado el elemento del registro como una matriz limpia
	obtener: function (num) {
		num volver! = null?

			// Devolver sólo el uno de los elementos del conjunto
			(Num <0 este [+ num this.length]:? Esta [num]):

			// Devuelve todos los elementos en una matriz limpia
			slice.call (this);
	},

	// Tomar un conjunto de elementos y empuje en la pila
	// (Volviendo el nuevo conjunto de elementos emparejados)
	pushStack: función (elems) {

		// Construir un nuevo conjunto de elementos emparejados jQuery
		var ret = jQuery.merge (this.constructor (), elems);

		// Añadir el objeto viejo en la pila (como referencia)
		ret.prevObject = presente;
		ret.context = this.context;

		// Devolver el conjunto de elementos recién formado
		ret regresar;
	},

	// Ejecuta una llamada de retorno para cada elemento en el juego completo.
	// (Puedes sembrar los argumentos con una serie de argumentos, pero esto es
	// Sólo se utiliza internamente.)
	cada uno: la función (de devolución de llamada, args) {
		volver jQuery.each (Esto, de devolución de llamada, args);
	},

	Mapa: function (devolución de llamada) {
		volver this.pushStack (jQuery.map (esto, la función (elem, i) {
			callback.call (elem, i, elem) return;
		}));
	},

	rebanada: function () {
		volver this.pushStack (slice.apply (este, argumentos));
	},

	primera: function () {
		volver this.eq (0);
	},

	última: function () {
		volver this.eq (-1);
	},

	eq: function (i) {
		var len = this.length,
			j = i + + (i <0 len:? 0);
		volver this.pushStack (j> = 0 && j <len [esta [j]]: []);
	},

	final: function () {
		volver this.prevObject || this.constructor (null);
	},

	// Sólo para uso interno.
	// Se comporta como el método de una matriz, no como un método de jQuery.
	empuja empuja,
	para ordenar: deletedIds.sort,
	empalme: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	var src, copyIsArray, copiar, nombre, opciones, clon,
		target = argumentos [0] || {},
		i = 1,
		longitud = arguments.length,
		profundidad = false;

	// Manejar una situación copia profunda
	si (typeof objetivo === "booleano") {
		profundidad = objetivo;

		// Omitir el booleano y el objetivo
		target = argumentos [i] || {};
		i ++;
	}

	// Caso de la manija al utilizar la diana es una cadena o algo (posible en copia en profundidad)
	si (typeof destino! == "objeto" &&! jQuery.isFunction (objetivo)) {
		target = {};
	}

	// Extender jQuery a sí mismo si sólo se pasa un argumento
	si (i === longitud) {
		target = presente;
		yo--;
	}

	para (; i <longitud; i ++) {
		// Sólo tratar con valores no nulos / undefined
		if ((opciones = argumentos [i])! = null) {
			// Extender el objeto de base
			para (nombre en opciones) {
				src = objetivo de [nombre];
				copy = opciones de [nombre];

				// Evitar bucle sin fin
				si (=== destino de copia) {
					continuar;
				}

				// Recurse si estamos fusionando objetos simples o matrices
				si (copia && && profunda (jQuery.isPlainObject (copia) || (copyIsArray = jQuery.isArray (copia)))) {
					si (copyIsArray) {
						copyIsArray = false;
						clon = src && jQuery.isArray (src)? src: [];

					} Else {
						clon = src && jQuery.isPlainObject (src)? src: {};
					}

					// No desplazar objetos originales, clonarlos
					dirigirse a [nombre] = jQuery.extend (profundo, clon, copia);

				// No llevar en valores no definidos
				} Else if (copia! == Undefined) {
					destino [nombre] = copia;
				}
			}
		}
	}

	// Devuelve el objeto modificado
	objetivo de rentabilidad;
};

jQuery.extend ({
	// Único para cada copia de jQuery en la página
	Expansión: "jQuery" + .Colocar (Math.random () versión +) (/ \ D / g, ""),

	// Supongamos jQuery está preparado sin el módulo listo
	isReady: true,

	de error: function (msg) {
		throw new Error (msg);
	},

	NOOP: function () {},

	// Ver test / unit / core.js a los datos relativos isFunction.
	// Desde la versión 1.3, los métodos y las funciones DOM como alerta
	// No son compatibles. Vuelven falsa en IE (# 2968).
	isFunction: function (obj) {
		volver jQuery.type (obj) === "función";
	},

	isArray: Array.isArray || función (obj) {
		volver jQuery.type (obj) === "matriz";
	},

	IsWindow: function (obj) {
		/ * Jshint eqeqeq: false * /
		obj = null && volver obj == obj.window!;
	},

	isNumeric: function (obj) {
		// ParseFloat NaNs numérico fundido falsos positivos (null | verdadero | falso | "")
		// ... Pero malinterpreta cadenas de números más importantes, en particular los literales hexadecimales ( "0 x ...")
		// resta fuerzas infinitos a NAN
		volver jQuery.isArray (obj) && obj - parseFloat (obj)> = 0;
	},

	isEmptyObject: function (obj) {
		var name;
		para (nombre en obj) {
			falso retorno;
		}
		return true;
	},

	isPlainObject: function (obj) {
		clave var;

		// Debe ser un objeto.
		// Debido a IE, también tenemos que comprobar la presencia de la propiedad constructor.
		// Asegúrese de que los nodos DOM y objetos de ventana no pasan a través, así
		if (! obj || jQuery.type (obj)! == "objeto" || || obj.nodeType jQuery.isWindow (obj)) {
			falso retorno;
		}

		tratar {
			// No propia propiedad constructor debe ser objeto
			si (obj.constructor &&
				! HasOwn.call (obj, "constructor") &&
				! HasOwn.call (obj.constructor.prototype, "isPrototypeOf")) {
				falso retorno;
			}
		} Catch (e) {
			// IE8,9 Will lanzar excepciones en cierta acogida objetos # 9897
			falso retorno;
		}

		// Ayuda: IE <9
		// Handle iteración sobre las propiedades heredadas antes de propiedades propias.
		si (support.ownLast) {
			para (clave en obj) {
				volver hasOwn.call (obj, clave);
			}
		}

		// Propiedades propias se enumeran en primer lugar, por lo que para acelerar,
		// Si el último es propio, a continuación, todas las propiedades son propias.
		para (clave en obj) {}

		volver === clave indefinidos || hasOwn.call (obj, clave);
	},

	Tipo: function (obj) {
		si (obj == null) {
			volver obj + "";
		}
		volver typeof obj === "objeto" || typeof obj === "función"?
			class2type [toString.call (obj)] || "Objeto":
			typeof obj;
	},

	// Evalúa una secuencia de comandos en un contexto global
	// Soluciones provisionales sobre la base de los resultados de Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function (datos) {
		si (datos && jQuery.trim (datos)) {
			// Utilizamos execScript en Internet Explorer
			// Utilizamos una función anónima por lo que el contexto es la ventana
			// En lugar de jQuery en Firefox
			(window.execScript || función (datos) {
				ventana [ "eval"] .call (ventana, datos);
			}) (datos);
		}
	},

	// Convertir Discontinuo para camelCase; utilizado por los módulos de datos y CSS
	// Microsoft se olvidó de su joroba prefijo de proveedor (# 9572)
	camelCase: Función (cadena) {
		String.Replace retorno (rmsPrefix, "MS") .Colocar (rdashAlpha, fcamelCase);
	},

	nombreNodo: function (elem, nombre) {
		volver elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();
	},

	// Args es para uso interno
	cada uno: function (obj, devolución de llamada, args) {
		var valor,
			i = 0,
			longitud = obj.length,
			isArray = isArraylike (obj);

		if (args) {
			si (isArray) {
				para (; i <longitud; i ++) {
					valor = callback.apply (obj [i], args);

					si (valor === false) {
						descanso;
					}
				}
			} Else {
				para (i en obj) {
					valor = callback.apply (obj [i], args);

					si (valor === false) {
						descanso;
					}
				}
			}

		// Una especial, rápido, carcasas para el uso más común de cada
		} Else {
			si (isArray) {
				para (; i <longitud; i ++) {
					valor = callback.call (obj [i], i, obj [i]);

					si (valor === false) {
						descanso;
					}
				}
			} Else {
				para (i en obj) {
					valor = callback.call (obj [i], i, obj [i]);

					si (valor === false) {
						descanso;
					}
				}
			}
		}

		obj regresar;
	},

	// Ayuda: Android <4.1, IE <9
	acabado: función (texto) {
		devolver texto == null?
			"":
			".Colocar (Rtrim, (texto +") "");
	},

	// Resultados es para uso interno
	MakeArray: function (arr, resultados) {
		var = ret resultados || [];

		si (arr! = null) {
			si (isArraylike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "cadena"?
					[Arr]: arr
				);
			} Else {
				push.call (ret, arr);
			}
		}

		ret regresar;
	},

	InArray: function (elem, arr, i) {
		len var;

		si (arr) {
			si (indexOf) {
				volver indexOf.call (arr, elem, i);
			}

			len = arr.Length;
			i = i? i <0? Math.max (0, len + i): i: 0;

			para (; i <len; i ++) {
				// Saltar acceder en matrices dispersas
				si (i && en arr arr [i] === elem) {
					i volver;
				}
			}
		}

		return -1;
	},

	fusionar: function (primero, segundo) {
		len var = + second.length,
			j = 0,
			i = first.length;

		mientras que (j <len) {
			Fecha [i ++] = segundo [j ++];
		}

		// Ayuda: IE <9
		// Solución de fundición de .length NaN de lo contrario arraylike objetos (por ejemplo, NodeLists)
		si (len! == len) {
			mientras que (segundo [j]! == undefined) {
				Fecha [i ++] = segundo [j ++];
			}
		}

		first.length = i;

		devolver en primer lugar;
	},

	grep: function (elems, devolución de llamada, invertido) {
		var callbackInverse,
			partidos = [],
			i = 0,
			longitud = elems.length,
			callbackExpect = invertido!;

		// Ir a través de la matriz, sólo el ahorro de los artículos
		// Que pasan a la función de validación
		para (; i <longitud; i ++) {
			! = callbackInverse de devolución de llamada (elems [i], i);
			si (callbackInverse! == callbackExpect) {
				matches.push (elems [i]);
			}
		}

		partidos de vuelta;
	},

	// Arg es para uso interno únicamente
	Mapa: function (elems, devolución de llamada, arg) {
		var valor,
			i = 0,
			longitud = elems.length,
			isArray = isArraylike (elems),
			ret = [];

		// Ir a través de la matriz, la traducción de cada uno de los elementos a sus nuevos valores
		si (isArray) {
			para (; i <longitud; i ++) {
				= valor de devolución de llamada (elems [i], i, arg);

				if (! value = null) {
					ret.push (valor);
				}
			}

		// Ir a través de cada tecla en el objeto,
		} Else {
			para (i en elems) {
				= valor de devolución de llamada (elems [i], i, arg);

				if (! value = null) {
					ret.push (valor);
				}
			}
		}

		// Acople todas las matrices anidadas
		volver concat.apply ([], ret);
	},

	// Un contador global GUID para objetos
	GUID: 1,

	// Enlazar una función para un contexto, opcionalmente parcialmente aplicar cualquier
	// Argumentos.
	Proxy: función (fn, contexto) {
		args var, proxy, tmp;

		si (typeof contexto === "cadena") {
			tmp = fn [contexto];
			context = fn;
			fn = tmp;
		}

		// Comprobación rápida para determinar si el objetivo es exigible, en la especificación
		// Esto arroja un TypeError, pero nosotros sólo volverá indefinido.
		if (! jQuery.isFunction (fn)) {
			devuelta sin definir;
		}

		// Unen simulada
		args = slice.call (argumentos, 2);
		Proxy = function () {
			volver fn.apply (contexto || esto, args.concat (slice.call (argumentos)));
		};

		// Establecer el GUID del controlador exclusivo de la misma del controlador original, por lo que se puede quitar
		proxy.guid = = fn.guid fn.guid || jQuery.guid ++;

		proxy de retorno;
	},

	Ahora: function () {
		volver + (new Date ());
	},

	// JQuery.support no se utiliza en el núcleo pero otros proyectos adjuntar su
	// Propiedades a la misma por lo que necesita para existir.
	Ayuda: support
});

// Llenar el mapa class2type
jQuery.each ( "Número de Boole cadena de error función de matriz Fecha RegExp objeto" .split ( ""), la función (i, nombre) {
	[ "[Objeto" + nombre + "]"] = name.toLowerCase class2type ();
});

función isArraylike (obj) {
	var = longitud obj.length,
		type = jQuery.type (obj);

	si (la "función" de tipo === || jQuery.isWindow (obj)) {
		falso retorno;
	}

	si (obj.nodeType === 1 && longitud) {
		return true;
	}

	=== tipo de retorno "matriz" || longitud === 0 ||
		longitud typeof === "número" && longitud> 0 && (longitud - 1) en obj;
}
var = chisporroteo
/ *!
 * Chisporroteo CSS v1.10.19 motor Selector
 * http://sizzlejs.com/
 *
 * Derechos de Autor 2013 jQuery Foundation, Inc. y otros colaboradores
 * Publicado bajo la licencia MIT
 * http://jquery.org/license
 *
 * Fecha: 04/18/2014
 * /
(Function (ventana) {

i var,
	apoyo,
	expr,
	getText,
	isXML,
	tokenize,
	compilar,
	seleccionar,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Documento Local vars
	setDocument,
	documento,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	partidos,
	contiene,

	// Datos de instancia específica
	expando = "chisporroteo" + - (new Date ()),
	preferredDoc = window.document,
	dirruns = 0,
	hecho = 0,
	ClassCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	sortOrder = function (a, b) {
		si (a === b) {
			hasDuplicate = true;
		}
		return 0;
	},

	// constantes de uso general
	strundefined = typeof indefinido,
	MAX_NEGATIVE = 1 << 31,

	// Los métodos de instancia
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	= empuje arr.push,
	rebanada = arr.slice,
	// Utilizar un indexOf reducidos al mínimo, si no podemos utilizar un nativo
	indexOf = arr.indexOf || función (elem) {
		var i = 0,
			len = this.length;
		para (; i <len; i ++) {
			si (esto [i] === elem) {
				i volver;
			}
		}
		return -1;
	},

	booleanos = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Expresiones regulares

	// caracteres de espacio en blanco http://www.w3.org/TR/css3-selectors/#whitespace
	espacios en blanco = "[\\ x20 \\ t \\ r \\ n \\ f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:. \\\\ | [\\ W] | [^ \\ x00 - \\ xa0]) +",

	// Libremente inspirado en personajes de identificador de CSS
	// Un valor sin comillas debe ser un identificador CSS http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// La sintaxis correcta: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identificador = characterEncoding.replace ( "w", "w #"),

	// Selectores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\ [" + espacio en blanco + "* (" + characterEncoding + ") (?:" + espacio en blanco +
		// Operador (captura 2)
		"* (? [* ^ $ |! ~] =)" + Espacio en blanco +
		// "Los valores de atributo deben ser identificadores CSS [5] de captura o cadenas de captura [3] 4 o captura"
		"* (?: '((:?. \\\\ | [^ \\\\']) *) '| \" ((:?. \\\\ | [^ \\\\\ "] ) *) \ "| (" + + identificador ")) |)" + espacio en blanco +
		"* \\]",

	pseudos = ":(" + characterEncoding + ") (?: \\ ((" +
		// Para reducir el número de selectores que necesitan tokenize en el prefiltro, prefieren argumentos:
		// 1. citado (captura 3; 4 capturar o capturar 5)
		"( '((:?. \\\\ | [^ \\\\']) *) '| \" ((:?. \\\\ | [^ \\\\\ "]) *) \ ") |" +
		// 2. sencilla (captura de 6)
		"((:?. \\\\ | [^ \\\\ () [\\]] |" + + Atributos ") *) |" +
		// 3. cualquier otra cosa (captura 2)
		". *" +
		") \\) |)",

	// Líder y no escapó espacios en blanco, la captura de algunos caracteres no está en blanco que preceden a la última
	rtrim = new RegExp ( "^" + espacio en blanco + "+ | ((?: ^ | [^ \\\\]) (: \\\\) *)?". + + espacio en blanco "+ $", "g "),

	rcomma = new RegExp ( "^" + espacio en blanco + "*" + espacio en blanco + "*"),
	rcombinators = new RegExp ( "^" + espacio en blanco + "* ([> + ~] |" espacio en blanco + + ")" + espacio en blanco + "*"),

	rattributeQuotes = new RegExp ( "=" + espacio en blanco + "* ([^ \\] '\"] *?) "+ espacio en blanco +" * \\] "," g "),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ( "^" + + identificador "$"),

	matchExpr = {
		"ID": new RegExp ( "# ^ (" + characterEncoding + ")"),
		"Clase": new RegExp ( "\\ ^ (." + + CharacterEncoding ")"),
		"TAG": new RegExp ( "^ (" + characterEncoding.replace ( "w", "w *") + ")"),
		"ATTR": new RegExp ( "^" + atributos),
		"Pseudo": new RegExp ( "^" pseudos +),
		"NIÑO": new RegExp ( "^ :( única | primera | última | enésima | enésima última) - (niño | de tipo A) (?: \\ (" + Espacio en blanco +
			"* (Incluso | extraño | (([+ -] |) (d \\ *) n |)" + espacio en blanco + "* (?: ([+ -] |)" + Espacio en blanco +
			"* (\\ D +) |))" + espacio en blanco + "* \\) |)", "i"),
		"Bool": new RegExp ( "^ (?:" + + booleanos ") $", "i"),
		// Para su uso en las bibliotecas de ejecución .is ()
		// Utilizamos esto para cotejo del TPV en `select`
		"NeedsContext": new RegExp ( "^" + espacio en blanco + "* [> + ~] |: (incluso | extraño | eq | GT | lt | enésima | primera | última) (?: \\ (" +
			espacio en blanco + "* (?? (: - \\ d) \\ * d)" + + espacio en blanco "? * \\) |) (= [^ -] | $)", "i")
	},

	rinputs = / ^ (entrada ?: | selecto | área de texto botón |) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [nativa \ w /,

	// identificación o etiqueta o una clase de selectores fácilmente analizable / recuperables
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,
	RESCAPE = / '| \\ / g,

	// CSS escapa http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ( "\\\\ ([\\ da-f] {1,6}" + espacio en blanco + "|? (" + + espacio en blanco ") |.)", "IG"),
	funescape = function (_, escapado, escapedWhitespace) {
		var Alta = "0 x" + escapó - 0x10000;
		// NaN significa no punto de código
		// Ayuda: Firefox <24
		// Solución numérica interpretación errónea de + "0x"
		volver alta! == alta || escapedWhitespace?
			escapó :
			alta <0?
				// Punto de código BMP
				String.fromCharCode (alto + 0x10000):
				// Punto de código Plano Suplementario (par suplente)
				String.fromCharCode (alta >> 10 | 0xD800, alta y 0x3ff | 0xDC00);
	};

// Optimizar para push.apply (_, NodeList)
tratar {
	push.apply (
		(Arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);
	// Ayuda: Android <4.0
	// Detectar silencio en su defecto push.apply
	arr [] preferredDoc.childNodes.length .nodeType;
} Catch (e) {
	empujar = {aplicar: arr.Length?

		// El apalancamiento rebanada si es posible
		(función objetivo, els) {
			push_native.apply (objetivo, slice.call (els));
		}:

		// Ayuda: IE <9
		// De lo contrario anexar directamente
		(función objetivo, els) {
			var j = target.length,
				i = 0;
			// No se puede confiar en NodeList.length
			while ((diana [j] = ++ els [i ++])) {}
			target.length = j - 1;
		}
	};
}

la función del chisporroteo (selector, el contexto, los resultados, las semillas) {
	var partido, elem, m, nodeType,
		// QSA vars
		i, grupos, edad, DNI, newcontext, newSelector;

	if ((contexto context.ownerDocument || contexto:?! preferredDoc) == documento) {
		setDocument (contexto);
	}

	context = contexto || documento;
	Resultados = resultados || [];

	if (! selector Selector typeof ||! == "cadena") {
		Resultados de retorno;
	}

	if ((nodeType = context.nodeType)! == 1 && nodeType! == 9) {
		regreso [];
	}

	si (semilla documentIsHTML &&!) {

		// Los accesos directos
		if ((partido = rquickExpr.exec (selector))) {
			// Velocidad de seguimiento: chisporroteo ( "# ID")
			if ((m = partido [1])) {
				si (=== nodeType 9) {
					elem = context.getElementById (m);
					// Comprobar parentNode para coger cuando Blackberry 4.6 rendimientos
					// Nodos que ya no están en el documento (jQuery # 6963)
					si (elem && elem.parentNode) {
						// Manejar el caso en el IE, Opera y artículos de vuelta Webkit
						// Por su nombre en lugar de ID
						si (=== elem.id m) {
							results.push (elem);
							Resultados de retorno;
						}
					} Else {
						Resultados de retorno;
					}
				} Else {
					// El contexto no es un documento
					si (context.ownerDocument && (elem = context.ownerDocument.getElementById (m)) &&
						contiene (contexto, elem) && elem.id === m) {
						results.push (elem);
						Resultados de retorno;
					}
				}

			// Velocidad de seguimiento: chisporroteo ( "TAG")
			} Else if (partido [2]) {
				push.apply (resultados, context.getElementsByTagName (selector));
				Resultados de retorno;

			// Velocidad de seguimiento: chisporroteo ( "clase").
			} Else if ((m = partido [3]) && && support.getElementsByClassName context.getElementsByClassName) {
				push.apply (resultados, context.getElementsByClassName (m));
				Resultados de retorno;
			}
		}

		// Ruta QSA
		si (support.qsa && (! rbuggyQSA ||! rbuggyQSA.test (selector))) {
			nid = = expando viejos;
			newcontext = contexto;
			newSelector = nodeType === 9 && selector;

			// QSA funciona extrañamente en consultas con raíces en elementos:
			// Podemos evitar este especificando una identificación adicional en la raíz
			// Y trabajar a partir de ahí (Gracias a Andrew Dupont para la técnica)
			// IE 8 no funciona en los elementos de objeto
			si (nodeType === 1 && context.nodeName.toLowerCase () == "objeto") {
				grupos = tokenize (selector);

				if ((edad = context.getAttribute ( "id"))) {
					nid = old.replace (RESCAPE, "\\ $ &");
				} Else {
					context.setAttribute ( "id", NID);
				}
				nid = "[id =" "+ + nid" '] ";

				i = groups.length;
				mientras yo-- ) {
					Grupos [i] = nid + toSelector (grupos [i]);
				}
				newcontext = rsibling.test (selector) && TestContext (context.parentNode) || contexto;
				newSelector = groups.join ( ",");
			}

			si (newSelector) {
				tratar {
					push.apply (resultados,
						newContext.querySelectorAll (newSelector)
					);
					Resultados de retorno;
				} Catch (qsaError) {
				} finalmente {
					Yo doblo ) {
						context.removeAttribute ( "id");
					}
				}
			}
		}
	}

	// Todos los otros
	volver seleccione (selector.replace (rtrim, "$ 1"), el contexto, los resultados, las semillas);
}

/ **
 * Crear cachés de claves y valores de tamaño limitado
 * @returns {Función (String, Object)} Devuelve los datos del objeto después de su almacenamiento en sí mismo con
 * Nombre de la propiedad de la cadena (con el sufijo-espacio) y (si la memoria caché es más grande que Expr.cacheLength)
 * Eliminar la entrada más antigua
 * /
createCache función () {
	llaves var = [];

	caché de función (clave, valor) {
		// Usar (tecla + "") para evitar la colisión con las propiedades de prototipo nativas (véase Edición # 157)
		si (keys.push (tecla + "")> Expr.cacheLength) {
			// Mantener sólo las entradas más recientes
			Eliminar caché [keys.shift ()];
		}
		retorno (caché [tecla + ""] = valor);
	}
	caché de retorno;
}

/ **
 * Marque una función especial para su uso por chisporroteo
 * @ Param {fn} Función La función de marcar
 * /
markFunction función (Fn) {
	fn [Expansión] = true;
	fn regresar;
}

/ **
 * Soporte de pruebas utilizando un elemento
 * @ Param {fn} Función Pasó la div creado y espera un resultado booleano
 * /
la función assert (fn) {
	var div = document.createElement ( "div");

	tratar {
		volver !! fn (div);
	} Catch (e) {
		falso retorno;
	} finalmente {
		// Eliminar de su matriz por defecto
		si (div.parentNode) {
			div.parentNode.removeChild (div);
		}
		// Memoria de la liberación en el IE
		div = null;
	}
}

/ **
 * Agrega el mismo controlador para todos los attrs especificados
 * @ Param {cadena} attrs lista de tubo separados de atributos
 * @ Param {Función} manejador El método que se aplicará
 * /
función AñadirManejador (attrs, manejador) {
	var arr = attrs.split ( "|"),
		i = attrs.length;

	mientras yo-- ) {
		Expr.attrHandle [arr [i]] = manipulador;
	}
}

/ **
 * Los cheques orden del documento de dos hermanos
 * @ Param {Elemento} una
 * @ Param {b} Elemento
 * Número @returns {} Devuelve inferior a 0 si A precede B, mayor que 0 si un siguiente b
 * /
función siblingCheck (a, b) {
	var act = b && una,
		diff = act && && 1 a.nodeType === === b.nodeType 1 &&
			(~ B.sourceIndex || MAX_NEGATIVE) -
			(~ A.sourceIndex || MAX_NEGATIVE);

	// Usar IE sourceIndex si está disponible en ambos nodos
	si (esta) {
		diff regresar;
	}

	// Comprobar si b sigue una
	si (act) {
		while ((act = cur.nextSibling)) {
			si (CUR === b) {
				return -1;
			}
		}
	}

	regresar una? 1: -1;
}

/ **
 * Devuelve una función para utilizar en pseudos para los tipos de entrada
 * @param Tipo {cadena}
 * /
createInputPseudo función (tipo) {
	función de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		Nombre volver === "entrada" && elem.type === tipo;
	};
}

/ **
 * Devuelve una función para utilizar en pseudos para los botones
 * @param Tipo {cadena}
 * /
createButtonPseudo función (tipo) {
	función de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		retorno (nombre === "entrada" || nombre === "botón") && elem.type === tipo;
	};
}

/ **
 * Devuelve una función para utilizar en pseudos para posicionales
 * @ Param {Función} fn
 * /
createPositionalPseudo función (Fn) {
	volver markFunction (función (argumento) {
		argumento = + argumento;
		volver markFunction (función (semilla de los partidos) {
			var j,
				matchIndexes = fn ([], seed.length, argumento),
				i = matchIndexes.length;

			// Elementos de coincidencia encontrada en los índices especificados
			mientras yo-- ) {
				si (semilla [(j = matchIndexes [i])]) {
					semillas [j] = (partidos [j] = semilla [j])!;
				}
			}
		});
	});
}

/ **
 * Comprueba un nodo para su validez como contexto del chisporroteo
 * @ Param {Elemento | Object =} contexto
 * Elemento @returns {| Objeto | booleano} El nodo de entrada, si es aceptable, de lo contrario un valor Falsy
 * /
función TestContext (contexto) {
	&& contexto typeof context.getElementsByTagName volver == strundefined && contexto!;
}

// Exponer VARs de apoyo para mayor comodidad
apoyo Sizzle.support = = {};

/ **
 * Detecta nodos XML
 * @ Param {Elemento | Object} elem un elemento o un documento
 * @returns {booleano} La verdadera elem si y sólo si es un nodo XML no HTML
 * /
isXML = Sizzle.isXML = function (elem) {
	// DocumentElement se verifica para los casos en los que aún no existe
	// (Como marcos flotantes de carga en IE - # 4833)
	var = documentElement elem && (elem.ownerDocument || elem) .documentElement;
	volver documentElement? ! == DocumentElement.nodeName "HTML": false;
};

/ **
 * Juegos de las variables relacionadas con los documentos una vez basan en el documento actual
 * @ Param {Elemento | Object} [doc] Un elemento u objeto documento a utilizar para establecer el documento
 * @returns {Object} Devuelve el documento actual
 * /
setDocument = Sizzle.setDocument = function (nodo) {
	var hasCompare,
		doc = nodo? node.ownerDocument || nodo: preferredDoc,
		parent = doc.defaultView;

	// Si no hay ningún documento y documentElement está disponible, el regreso
	si (doc documento === == || doc.nodeType! 9 ||! doc.documentElement) {
		documento de devolución;
	}

	// Establecer nuestro documento
	= doc documento;
	docElem = doc.documentElement;

	// pruebas de apoyo
	documentIsHTML = isXML (doc)!;

	// Ayuda: IE> 8
	// Si el documento marco flotante se asigna a "documento" variable y si iframe ha vuelto a cargar,
	// IE lanzará "permiso denegado" error al acceder a "documento" variable, vea jQuery # 13936
	// IE6-8 no admite la propiedad por lo que los padres defaultView será indefinido
	si (padre padres &&! == parent.top) {
		// IE11 no tiene attachEvent, por lo que todos tienen que sufrir
		si (parent.addEventListener) {
			parent.addEventListener ( "descarga", function () {
				setDocument ();
			}, False);
		} Else if (parent.attachEvent) {
			parent.attachEvent ( "onunload", function () {
				setDocument ();
			});
		}
	}

	/ * Atributos
	-------------------------------------------------- -------------------- * /

	// Ayuda: IE <8
	// Verificar que getAttribute realmente no devuelve atributos y propiedades (excepto booleanos IE8)
	support.attributes = aserción (function (div) {
		div.className = "i";
		volver div.getAttribute ( "className");
	});

	/ * GetElement (s) Por *
	-------------------------------------------------- -------------------- * /

	// Comprobar si getElementsByTagName ( "*") devuelve sólo los elementos
	support.getElementsByTagName = aserción (function (div) {
		div.appendChild (doc.createComment ( ""));
		volver div.getElementsByTagName ( "*") de longitud!.;
	});

	// Comprobar si se puede confiar en getElementsByClassName
	support.getElementsByClassName = rnative.test (doc.getElementsByClassName) && valer (function (div) {
		div.innerHTML = "<div class =" a "> </ div> <div class = 'a i'> </ div>";

		// Ayuda: Safari <4
		// Clase de captura exceso de almacenamiento en caché
		div.firstChild.className = "i";
		// Ayuda: Opera <10
		// Captura falta gEBCN para encontrar clases no conducen
		volver div.getElementsByClassName ( "i") === longitud. 2;
	});

	// Ayuda: IE <10
	// Comprobar si getElemenById devuelve elementos por nombre
	// Los métodos GetElementByID rotos no recogen nombres programáticamente-set,
	// A fin de utilizar una prueba rotonda getElementsByName
	support.getById = aserción (function (div) {
		docElem.appendChild (div) = .id expando;
		volver! doc.getElementsByName || ! Doc.getElementsByName (expando) .length;
	});

	// ID del hallazgo y el filtro
	si (support.getById) {
		Expr.find [ "ID"] = function (id, contexto) {
			si (typeof context.getElementById! == strundefined && documentIsHTML) {
				var m = context.getElementById (id);
				// Comprobar parentNode para coger cuando Blackberry 4.6 rendimientos
				// nodos que ya no están en el documento # 6963
				m && m.parentNode volver? [M]: [];
			}
		};
		Expr.filter [ "ID"] = function (id) {
			var = attrId id.replace (runescape, funescape);
			función de retorno (elem) {
				volver elem.getAttribute ( "id") === attrId;
			};
		};
	} Else {
		// Ayuda: IE6 / 7
		// GetElemenById no es fiable como un acceso directo hallazgo
		Eliminar Expr.find [ "ID"];

		Expr.filter [ "ID"] = function (id) {
			var = attrId id.replace (runescape, funescape);
			función de retorno (elem) {
				nodo var = typeof elem.getAttributeNode == strundefined && elem.getAttributeNode ( "id");
				volver nodo && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find [ "TAG"] = support.getElementsByTagName?
		función (etiqueta, contexto) {
			si (typeof context.getElementsByTagName! == strundefined) {
				volver context.getElementsByTagName (etiqueta);
			}
		}:
		función (etiqueta, contexto) {
			elem var,
				tmp = [],
				i = 0,
				Resultados = context.getElementsByTagName (etiqueta);

			// Filtrar posibles comentarios
			si (=== etiqueta "*") {
				while ((elem = Resultados [i ++])) {
					si (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				volver tmp;
			}
			Resultados de retorno;
		};

	// Clase
	Expr.find [ "clase"] = support.getElementsByClassName && función (className, contexto) {
		si (typeof context.getElementsByClassName! == strundefined && documentIsHTML) {
			volver context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA y el apoyo matchesSelector

	// MatchesSelector (activo) informa falsa cuando es verdadero (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// QSA (: enfoque) informa falsa cuando es verdadero (Chrome 21)
	// Esto lo permitimos debido a un error en Internet Explorer 8/9, que emite un error
	// Cada vez que se accede a `document.activeElement` en un iframe
	// Así, permitimos: el enfoque para pasar a través de QSA todo el tiempo para evitar el error de IE
	// Ver http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (doc.querySelectorAll))) {
		// Construir QSA expresiones regulares
		// Estrategia adoptada Regex de Diego Perini
		valer (function (div) {
			// Select está definido en cadena vacía a propósito
			// Este es poner a prueba el tratamiento de no explícitamente de IE
			// Establecer un atributo booleano contenido,
			// Ya que su presencia debe ser lo suficientemente
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<seleccione msallowclip = ''> <opción seleccionada = ''> </ option> </ select>";

			// Ayuda: IE8, Opera 11-12,16
			// Nada debe ser seleccionado cuando las cadenas vacías siguen ^ = o = $ * o =
			// El atributo de prueba debe ser desconocida en Opera, pero "seguro" para WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			si (div.querySelectorAll ( "[msallowclip ^ = '']"). de longitud) {
				rbuggyQSA.push ( "[* ^ $] =" + espacio en blanco + "* (?: '' | \" \ ")");
			}

			// Ayuda: IE8
			// atributos de Boole y "valor" no son tratados correctamente
			if (! div.querySelectorAll ( "[seleccionado]"). de longitud) {
				rbuggyQSA.push ( "\\ [" + espacio en blanco + "* (?: valor |" + booleanos + ")");
			}

			// Webkit / Opera -: sh comprobado Ould regreso elementos de opción seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 lanza de error aquí y no ver pruebas posteriores
			si (div.querySelectorAll (! ": marcado") de longitud.) {
				rbuggyQSA.push ( ": comprueba");
			}
		});

		valer (function (div) {
			// Ayuda: Windows 8 aplicaciones nativas
			// Los atributos de tipo y nombre están restringidas durante la asignación .innerHTML
			de entrada var = doc.createElement ( "entrada");
			input.setAttribute ( "tipo", "oculto");
			div.appendChild (entrada) .setAttribute ( "nombre", "D");

			// Ayuda: IE8
			// Hacer cumplir las mayúsculas y minúsculas del atributo de nombre
			si (div.querySelectorAll ( "[name = d]"). de longitud) {
				rbuggyQSA.push ( "nombre" + + espacio en blanco "? * [! * ^ $ | ~] =");
			}

			// FF 3.5 -: enabled /: Elementos discapacitados y ocultos (elementos ocultos siguen activados)
			// IE8 lanza de error aquí y no ver pruebas posteriores
			si (div.querySelectorAll (! ": habilitado") de longitud.) {
				rbuggyQSA.push ( ": activar", ": desactivado");
			}

			// Opera 10-11 no lanza en pseudos no válidas después de la coma
			div.querySelectorAll ( "* ,: x");
			rbuggyQSA.push ( "*:.");
		});
	}

	if ((support.matchesSelector = rnative.test ((fósforos = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		valer (function (div) {
			// Cheque para ver si es posible hacer matchesSelector
			// En un nodo desconectado (IE 9)
			support.disconnectedMatch = matches.call (div, "div");

			// Esto debería fallar con una excepción
			// Gecko no error, devuelve false en lugar
			matches.call (div, "[s = ''!]: x");
			rbuggyMatches.push (pseudos, "=");
		});
	}

	rbuggyQSA = rbuggyQSA.length && nueva RegExp (rbuggyQSA.join ( "|"));
	rbuggyMatches = rbuggyMatches.length && nueva RegExp (rbuggyMatches.join ( "|"));

	/ * Contiene
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// Elemento contiene otro
	// Intencionadamente no implementa descendiente incluido
	// Al igual que en, un elemento no contiene en sí
	contiene hasCompare = || rnative.test (docElem.contains)?
		función (a, b) {
			var = adown === a.nodeType 9? a.documentElement: a,
				BUP = b && b.parentNode;
			devolver un BUP === || !! (BUP && === bup.nodeType 1 && (
				adown.contains?
					adown.contains (BUP):
					a.compareDocumentPosition && a.compareDocumentPosition (BUP) y 16
			));
		}:
		función (a, b) {
			si (b) {
				while ((b = b.parentNode)) {
					si (b === a) {
						return true;
					}
				}
			}
			falso retorno;
		};

	/ * Clasificación
	-------------------------------------------------- -------------------- * /

	// Fin de ordenar los documentos
	sortOrder = hasCompare?
	función (a, b) {

		// Preventivo para remover duplicado
		si (a === b) {
			hasDuplicate = true;
			return 0;
		}

		// Ordenar en existencia método si tiene sólo una entrada compareDocumentPosition
		var = comparar a.compareDocumentPosition - b.compareDocumentPosition!;
		si (comparar) {
			volver comparar;
		}

		// Calcular la posición si ambas entradas pertenecen al mismo documento
		comparar = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// De lo contrario, sabemos que están desconectados
			1;

		// nodos desconectados
		si (compare y 1 ||
			(! Support.sortDetached && b.compareDocumentPosition (a) === comparar)) {

			// Selecciona el primer elemento que se relaciona con nuestro documento preferida
			si (a doc === === || a.ownerDocument preferredDoc && contiene (preferredDoc, a)) {
				return -1;
			}
			si (b === === doc || b.ownerDocument preferredDoc && contiene (preferredDoc, b)) {
				volver 1;
			}

			// Mantener orden original
			volver sortInput?
				(IndexOf.call (sortInput, a) - indexOf.call (sortInput, b)):
				0;
		}

		volver compare y 4? -1: 1;
	}:
	función (a, b) {
		// Salir temprano si los nodos son idénticos
		si (a === b) {
			hasDuplicate = true;
			return 0;
		}

		act var,
			i = 0,
			PUA = a.parentNode,
			BUP = b.parentNode,
			ap = [a],
			pb = [b];

		// nodos sin padres son o bien los documentos o desconectada
		if (! AUP ||! BUP) {
			devolver un documento ===? -1:
				b === doc? 1:
				AUP? -1:
				BUP? 1:
				sortInput?
				(IndexOf.call (sortInput, a) - indexOf.call (sortInput, b)):
				0;

		// Si los nodos son hermanos, no podemos hacer una comprobación rápida
		} Else if (AUP === BUP) {
			volver siblingCheck (a, b);
		}

		// De lo contrario necesitamos listas completas de sus antepasados ​​para la comparación
		act = a;
		while ((act = cur.parentNode)) {
			ap.unshift (act);
		}
		act = b;
		while ((act = cur.parentNode)) {
			bp.unshift (act);
		}

		// Caminar por el árbol en busca de una discrepancia
		mientras que (p [i] === pb [i]) {
			i ++;
		}

		i volver?
			// Hacer una verificación de hermanos si los nodos tienen un ancestro común
			siblingCheck (p [i], pb [i]):

			// De lo contrario los nodos en nuestro documento especie primera
			p [i] === preferredDoc? -1:
			pb [i] === preferredDoc? 1:
			0;
	};

	doc regresar;
};

Sizzle.matches = function (expr, elementos) {
	chisporroteo de retorno (expr, null, null, elementos);
};

Sizzle.matchesSelector = function (elem, expr) {
	// Establecer documento vars si es necesario
	if ((elem.ownerDocument || elem)! == documento) {
		setDocument (elem);
	}

	// Asegúrese de que los selectores de atributos se citan
	expr = expr.replace (rattributeQuotes, "= '$ 1']");

	si (support.matchesSelector && && documentIsHTML
		(! RbuggyMatches ||! RbuggyMatches.test (expr)) &&
		(! RbuggyQSA ||! RbuggyQSA.test (expr))) {

		tratar {
			var ret = matches.call (elem, expr);

			// de IE 9 matchesSelector devuelve falso en los nodos desconectados
			si (r || || support.disconnectedMatch
					// Además, los nodos desconectados se dice que están en un documento
					// Fragmento en IE 9
					elem.document && elem.document.nodeType! == 11) {
				ret regresar;
			}
		} Catch (e) {}
	}

	chisporroteo de retorno (expr, documento, nula, [elem]) .length> 0;
};

Sizzle.contains = function (contexto, elem) {
	// Establecer documento vars si es necesario
	if ((documento context.ownerDocument || contexto)! ==) {
		setDocument (contexto);
	}
	retorno contiene (contexto, elem);
};

Sizzle.attr = function (elem, nombre) {
	// Establecer documento vars si es necesario
	if ((elem.ownerDocument || elem)! == documento) {
		setDocument (elem);
	}

	var = fn Expr.attrHandle [name.toLowerCase ()],
		// No se deje engañar por Object.prototype propiedades (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, nombre, documentIsHTML!):
			indefinido;

	Retorno val! == indefinido?
		val:
		support.attributes || ! DocumentIsHTML?
			elem.getAttribute (nombre):
			(Val = elem.getAttributeNode (nombre)) && val.specified?
				val.value:
				nulo;
};

Sizzle.error = function (msg) {
	throw new error ( "Error de sintaxis, la expresión no reconocida:" + msg);
};

/ **
 * Documento de clasificación y eliminación de duplicados
 * @param resultados ArrayLike {}
 * /
Sizzle.uniqueSort = function (resultados) {
	elem var,
		duplicados = [],
		j = 0,
		i = 0;

	// A menos que * * sabemos que podemos detectar duplicados, asumir su presencia
	hasDuplicate = support.detectDuplicates!;
	sortInput = support.sortStable && results.slice (0)!;
	results.sort (sortOrder);

	si (hasDuplicate) {
		while ((elem = Resultados [i ++])) {
			si (elem === resultados [i]) {
				j = duplicates.push (i);
			}
		}
		while (j--) {
			results.splice (duplicados [J], 1);
		}
	}

	// Borrar entrada después de su clasificación para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	Resultados de retorno;
};

/ **
 * Función de utilidad para recuperar el valor de texto de un conjunto de nodos DOM
 * @param Array {|} Elemento elem
 * /
getText = Sizzle.getText = function (elem) {
	var nodo,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {
		// Si no nodeType, esto se espera que sea una matriz
		while ((nodo = elem [i ++])) {
			// No atraviese nodos de comentario
			ret = + getText (nodo);
		}
	} Else if (nodeType === 1 || 9 || nodeType === === nodeType 11) {
		// Usar textContent para los elementos
		// Uso innerText eliminado debido a la consistencia de las nuevas líneas (jQuery # 11153)
		si (typeof elem.textContent === "cadena") {
			volver elem.textContent;
		} Else {
			// Traverse sus hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret = + getText (elem);
			}
		}
	} Else if (nodeType === === 3 || nodeType 4) {
		volver elem.nodeValue;
	}
	// No incluya comentario o instrucción de procesamiento nodos

	ret regresar;
};

Expr = = {Sizzle.selectors

	// Puede ser ajustado por el usuario
	cacheLength: 50,

	createPseudo: markFunction,

	partido: matchExpr,

	attrHandle: {},

	encontrar: {},

	relativo: {
		">": {Dir: "parentNode", en primer lugar: true},
		"": {Dir: "parentNode"},
		"+": {Dir: "previousSibling", en primer lugar: true},
		"~": {Dir: "previousSibling"}
	},

	prefiltro: {
		"ATTR": función (partido) {
			partido [1] = partido [1] .Colocar (runescape, funescape);

			// Mover el valor dado para que coincida con [3] si cotizadas o no
			partido [3] = (partido [3] || partido [4] || coincida [5] || "") .Colocar (runescape, funescape);

			si (partido [2] === "~ =") {
				partido [3] = "" + partido [3] + "";
			}

			match.slice (0, 4) devolver;
		},

		"NIÑO": función (partido) {
			/ * Concordancias de matchExpr [ "NIÑO"]
				1 tipo (sólo | enésima | ...)
				2 lo que (el niño | de tipo A)
				3 argumento (aunque | extraño | \ d * | \ d * n ([+ -] \ d +) |? ...)
				4 x n-componente del argumento x n + y ([+ -] \ d * n |?)
				5 signo de x n-componente
				6 x de xn-componente
				7 señal de componente y
				8 y de componente y
			* /
			partido [1] = partido [1] .tolowercase ();

			si (partido [1] .slice (0, 3) === "nth") {
				// * Nth- requiere argumento
				if (! partido [3]) {
					Sizzle.error (partido [0]);
				}

				// x numéricos y parámetros Y para Expr.filter.CHILD
				// Recordar que la verdadera fundido / falso, respectivamente, a 0/1
				? Fósforo [4] = + (partido [4] coincide con [5] + (partido [6] || 1): 2 * (partido [3] === "incluso" || partido [3] === " impar" ) );
				partido [5] = + ((partido [7] + partido [8]) || partido [3] === "extraño");

			// Otros tipos prohíben argumentos
			} Else if (partido [3]) {
				Sizzle.error (partido [0]);
			}

			partido de vuelta;
		},

		"Pseudo": función (partido) {
			var exceso,
				! = Sin comillas partido [6] && partido [2];

			si (matchExpr [ "NIÑO"] prueba. (partido [0])) {
				return null;
			}

			// Aceptar los argumentos citados en que está
			si (igualar [3]) {
				partido [2] = partido [4] || partido [5] || "";

			// Eliminar caracteres exceso de argumentos no cotizados
			} Else if (sin comillas && rpseudo.test (sin comillas) &&
				// Obtener el exceso de tokenize (de forma recursiva)
				(Exceso = tokenize (sin comillas, true)) &&
				// Avanzar a la siguiente paréntesis de cierre
				(Exceso = unquoted.indexOf ( ")", unquoted.length - exceso) - unquoted.length)) {

				// Exceso es un índice negativo
				partido [0] = partido [0] .slice (0, exceso);
				partido [2] = unquoted.slice (0, exceso);
			}

			// Devuelve sólo captura que necesita el método de filtro de pseudo (tipo y argumento)
			match.slice (0, 3) volver;
		}
	},

	el filtrado: {

		"TAG": función (nodeNameSelector) {
			var = nombreNodo nodeNameSelector.replace (runescape, funescape) .tolowercase ();
			volver nodeNameSelector === "*"?
				function () {return true; }:
				función (elem) {
					volver elem.nodeName && elem.nodeName.toLowerCase () === nombreNodo;
				};
		},

		"Clase": función (className) {
			var pattern = ClassCache [+ className ""];

			patrón de volver ||
				(Patrón = new RegExp ( "(^ |" espacio en blanco + + ")" + + className "(" + espacio en blanco + "| $)")) &&
				ClassCache (className, función (elem) {
					pattern.test volver (typeof elem.className === "cadena" && || elem.className typeof elem.getAttribute == strundefined && elem.getAttribute ( "clase") || ""!);
				});
		},

		"ATTR": función (nombre, operador, cheque) {
			función de retorno (elem) {
				var result = Sizzle.attr (elem, nombre);

				si (resultado == null) {
					=== operador de volver "=";
				}
				if (! operador) {
					return true;
				}

				resultado + = "";

				=== operador de volver "="? === resultado visita:
					operador === "! ="? como resultado == comprobar:
					=== operador "^ ="? comprobar && result.indexOf (cheque) === 0:
					=== operador "* ="? comprobar && result.indexOf (cheque)> -1:
					"operador === $ ="? comprobar && result.slice (-check.length) === comprobar:
					operador === "~ ="? ( "" + Resultado + "") .indexOf (cheque)> -1:
					=== operador "| ="? resultado === comprobar || result.slice (0, check.length + 1) === comprobar + "-":
					falso;
			};
		},

		"NIÑO": función (tipo, lo que, el argumento, primero, último) {
			var = sencilla type.slice (0, 3)! == "enésimo",
				forward = type.slice (-4)! == "último",
				OfType = lo === "de tipo";

			regresar primera === 1 && última === 0?

				// Acceso directo para: nth - * (n)
				función (elem) {
					volver !! elem.parentNode;
				}:

				función (elem, el contexto, xml) {
					var caché, outerCache, nodo, diff, nodeIndex, comienzo,
						dir = simple! == hacia adelante? "NextSibling": "previousSibling",
						parent = elem.parentNode,
						name = OfType && elem.nodeName.toLowerCase (),
						useCache = xml && OfType!;

					si (padre) {

						//: (Primera | última | solamente) - (niño | de tipo A)
						si (simple) {
							mientras que (dir) {
								elem = nodo;
								while ((nodo nodo = [dir])) {
									si (OfType node.nodeName.toLowerCase () === nombre:? node.nodeType === 1) {
										falso retorno;
									}
								}
								// Dirección inversa para: solamente- * (si es que aún no hemos hecho todavía)
								start = dir = === tipo "sólo" && && empezar "nextSibling!";
							}
							return true;
						}

						start = [hacia adelante? parent.firstChild: parent.lastChild];

						// No xml: nth-child (...) almacena datos de la caché en `parent`
						si (avance && useCache) {
							// Seek `elem` de un índice de caché previamente
							outerCache = matriz [Expansión] || (Padre [Expansión] = {});
							cache = outerCache [tipo] || [];
							nodeIndex = caché [0] === dirruns && caché [1];
							diff = caché [0] === dirruns && caché [2];
							de nodo = nodeIndex && parent.childNodes [nodeIndex];

							while ((nodo = ++ nodeIndex && && nodo nodo [dir] ||

								// Retorno a la búsqueda de `elem` desde el principio
								(Esta nodeIndex = = 0) || start.pop ())) {

								// Cuando se encuentran, índices de caché en `parent` y descanso
								si (node.nodeType === 1 && && ++ diff nodo === elem) {
									outerCache [tipo] = [dirruns, nodeIndex, diff];
									descanso;
								}
							}

						// Utilizar el índice de elemento almacenado en caché previamente, si está disponible
						} Else if (useCache && (cache = (elem [Expansión] || (elem [Expansión] = {})) [tipo]) && caché [0] === dirruns) {
							diff = caché [1];

						// Xml: nth-child (...) o: nth-last-child (...) o:? Enésimo (-last) - de tipo (...)
						} Else {
							// Utilizar el mismo bucle que arriba a buscar `elem` desde el principio
							while ((nodo = ++ nodeIndex && && nodo nodo [dir] ||
								(Esta nodeIndex = = 0) || start.pop ())) {

								if ((OfType node.nodeName.toLowerCase () === nombre:? node.nodeType === 1) && ++ dif) {
									// Depositará el índice de cada elemento encontrado
									si (useCache) {
										(Nodo [Expansión] || (nodo [Expansión] = {})) [tipo] = [dirruns, diff];
									}

									si (nodo === elem) {
										descanso;
									}
								}
							}
						}

						// Incorporar el offset, a continuación, comprobar frente al tamaño de ciclo
						diff - = último;
						diff volver === primera || (Esta primera ===% 0 && diferencias / primero> = 0);
					}
				};
		},

		"Pseudo": función (pseudo, el argumento) {
			// Nombres de las pseudo-clases son sensibles a mayúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Dar prioridad a la sensibilidad por el caso en el pseudos personalizados de casos se añaden con letras mayúsculas
			// Recuerde que setFilters hereda de pseudos
			args var,
				fn = Expr.pseudos [seudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ( "pseudo sin apoyo:" + pseudo);

			// El usuario puede utilizar para indicar que createPseudo
			Se necesitan // argumentos para crear la función de filtro
			// Tal como lo hace chisporroteo
			Si (fn [Expansión]) {
				fn (argumento) return;
			}

			// Pero mantener el apoyo a viejas firmas
			si (fn.length> 1) {
				args = [seudo, seudo, "", argumento];
				volver Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (function (semillas, coincide) {
						idx var,
							emparejado = fn (semilla, el argumento),
							i = matched.length;
						mientras yo-- ) {
							idx = indexOf.call (semilla, emparejado [i]);
							semillas [idx] = (partidos [idx] = emparejado [i])!;
						}
					}):
					función (elem) {
						fn de retorno (elem, 0, args);
					};
			}

			fn regresar;
		}
	},

	pseudos: {
		// pseudos potencialmente complejas
		"No": markFunction (function (Selector) {
			// Recortar el selector pasado para compilar
			// Para evitar el tratamiento de ataque y de salida
			// espacios como combinadores
			de entrada var = [],
				Resultados = [],
				matcher = compilar (selector.replace (rtrim, "$ 1"));

			retorno de coincidencias [Expansión]?
				markFunction (función (semilla de los partidos, el contexto, xml) {
					elem var,
						inigualable = matcher (semilla, null, xml, []),
						i = seed.length;

					// elementos del partido no igualada por `matcher`
					mientras yo-- ) {
						if ((elem = inigualable [i])) {
							! Semillas [i] = (partidos [i] = elem);
						}
					}
				}):
				función (elem, el contexto, xml) {
					introducir [0] = elem;
					matcher (entrada, null, xml, resultados);
					volver results.pop (!);
				};
		}),

		"Tiene": markFunction (function (Selector) {
			función de retorno (elem) {
				chisporroteo de retorno (selector, elem) .length> 0;
			};
		}),

		"Contiene": markFunction (función (texto) {
			función de retorno (elem) {
				volver (elem.textContent || || elem.innerText getText (elem)) .indexOf (texto)> -1;
			};
		}),

		// "Si un elemento está representado por un selector: lang ()
		// Se basa únicamente en el valor de idioma del elemento
		// Igual al identificador de C,
		// O que comienzan con el identificador C seguido de inmediato por "-".
		// El juego de C contra el valor de idioma del elemento se realiza mayúsculas y minúsculas.
		// El identificador de C no tiene que ser un nombre de idioma válido ".
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"Lang": markFunction (function (lang) {
			// lang valor debe ser un identificador válido
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ( "lang sin apoyo:" lang +);
			}
			lang = lang.replace (runescape, funescape) .tolowercase ();
			función de retorno (elem) {
				var elemLang;
				do {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ( "xml: lang") || elem.getAttribute ( "lang"))) {

						elemLang = elemLang.toLowerCase ();
						volver elemLang === lang || ; === 0 - elemLang.indexOf (lang + "")
					}
				} While ((elem = elem.parentNode) && elem.nodeType === 1);
				falso retorno;
			};
		}),

		// Varios
		"Objetivo": función (elem) {
			var = hash de window.location && window.location.hash;
			volver picadillo && hash.slice (1) === elem.id;
		},

		"Raíz": función (elem) {
			volver elem === docElem;
		},

		"Centrarse": función (elem) {
			volver elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || || ~ elem.href elem.tabIndex);
		},

		// propiedades booleanas
		"Activado": función (elem) {
			volver Se elem.disabled === false;
		},

		"Desactivado": función (elem) {
			volver Se elem.disabled === verdadera;
		},

		"Marcado": la función (elem) {
			// En CSS3: seleccionada debe devolver tanto comprueba y elementos seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var = nombreNodo elem.nodeName.toLowerCase ();
			retorno (nombreNodo === "entrada" && !! elem.checked) || (NombreNodo === "opción" && !! elem.selected);
		},

		"Seleccionado": función (elem) {
			// El acceso a esta propiedad hace seleccionada por defecto
			// opciones en Safari funcionan correctamente
			si (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			volver Se elem.selected === verdadera;
		},

		// contenido
		"Vacío": function (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: Vacío es negado por el elemento (1) o nodos de contenido (texto: 3; CDATA: 4; entidad ref: 5),
			// Pero no por otros (comentario: 8; instrucción de procesamiento: 7; etc.)
			// <6 nodeType obras porque atributos (2) no aparecen como hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				si (elem.nodeType <6) {
					falso retorno;
				}
			}
			return true;
		},

		"Padre": función (elem) {
			volver Expr.pseudos [ "vacío"] (elem)!;
		},

		// tipos / entrada Element
		"Cabecera": función (elem) {
			volver rheader.test (elem.nodeName);
		},

		"Entrada": function (elem) {
			volver rinputs.test (elem.nodeName);
		},

		"Botón": function (elem) {
			var name = elem.nodeName.toLowerCase ();
			Nombre volver === "entrada" && elem.type === "botón" || nombrar === "botón";
		},

		"Texto": función (elem) {
			attr var;
			volver elem.nodeName.toLowerCase () === "entrada" &&
				elem.type === "texto" &&

				// Ayuda: IE <8
				valores de los atributos // Nueva HTML5 (por ejemplo, "search") aparecen con elem.type === "texto"
				((Attr = elem.getAttribute ( "tipo")) == null || attr.toLowerCase () === "texto");
		},

		// Posición-en-colección
		"Primero": createPositionalPseudo (function () {
			volver [0];
		}),

		"Último": createPositionalPseudo (function (matchIndexes, longitud) {
			volver [longitud - 1];
		}),

		"Eq": createPositionalPseudo (function (matchIndexes, la longitud, el argumento) {
			volver [argumento <0? argumento + longitud: argumento];
		}),

		"Par": createPositionalPseudo (function (matchIndexes, longitud) {
			var i = 0;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			volver matchIndexes;
		}),

		"Raro": createPositionalPseudo (function (matchIndexes, longitud) {
			var i = 1;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			volver matchIndexes;
		}),

		"Lt": createPositionalPseudo (function (matchIndexes, la longitud, el argumento) {
			var i = argumento <0? argumento + longitud: argumento;
			para (; --i> = 0;) {
				matchIndexes.push (i);
			}
			volver matchIndexes;
		}),

		"GT": createPositionalPseudo (function (matchIndexes, la longitud, el argumento) {
			var i = argumento <0? argumento + longitud: argumento;
			para (; ++ i <longitud;) {
				matchIndexes.push (i);
			}
			volver matchIndexes;
		})
	}
};

Expr.pseudos [ "enésimo"] = Expr.pseudos [ "eq"];

// Añadir el botón / pseudos tipo de entrada
para (i en la radio {: true, casilla: true, archivo: verdadera, contraseña: true, la imagen: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
para (i en {presentar: cierto, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// Fácil API para crear nuevos setFilters
setFilters function () {}
setFilters.prototype = = Expr.filters Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (selector, parseonly) {
	var emparejado, partido, fichas, tipo,
		Hasta el momento, los grupos, prefiltros,
		caché = tokenCache [+ selector de ""];

	si (caché) {
		volver parseonly? 0: cached.slice (0);
	}

	Hasta el momento = selector;
	grupos = [];
	prefiltros = Expr.preFilter;

	mientras que (Šofar) {

		// Coma y primera ejecución
		if (! emparejado || (partido = rcomma.exec (Šofar))) {
			si (el partido) {
				// No consumir comas finales como válida
				Hasta el momento = soFar.slice (partido [0] .length) || hasta aquí;
			}
			(groups.push (tokens = []));
		}

		emparejado = false;

		// combinadores
		if ((partido = rcombinators.exec (Šofar))) {
			emparejado = match.shift ();
			tokens.push ({
				Valor: emparejado,
				// combinadores moldeada descendientes al espacio
				Tipo: coincide con [0] .Colocar (rtrim, "")
			});
			Hasta el momento = soFar.slice (matched.length);
		}

		// Filtros
		para (tipo de Expr.filter) {
			if ((partido = matchExpr [tipo] .exec (Šofar)) && (! prefiltros [tipo] ||
				(Partido de prefiltros = [tipo] (partido)))) {
				emparejado = match.shift ();
				tokens.push ({
					Valor: emparejado,
					Tipo: tipo,
					partidos: partido
				});
				Hasta el momento = soFar.slice (matched.length);
			}
		}

		if (! emparejado) {
			descanso;
		}
	}

	// Devuelve la longitud del exceso no válido
	// Si sólo estamos análisis sintáctico
	// De lo contrario, generará un error o fichas volver
	volver parseonly?
		soFar.length:
		hasta aquí ?
			Sizzle.error (selector):
			// En la memoria caché los tokens
			tokenCache (selector, grupos) .slice (0);
};

funcionar toSelector (fichas) {
	var i = 0,
		len = tokens.length,
		selector = "";
	para (; i <len; i ++) {
		selectores + = tokens [i] .Value;
	}
	selector de retorno;
}

función addCombinator (matcher, combinador, base) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = hecho ++;

	volver combinator.first?
		// Cotejar más cercano ancestro / elemento anterior
		función (elem, el contexto, xml) {
			while ((elem elem = [dir])) {
				si (elem.nodeType === 1 || checkNonElements) {
					matcher retorno (elem, el contexto, xml);
				}
			}
		}:

		// Comprobar contra todos los elementos anteriores antepasado /
		función (elem, el contexto, xml) {
			var oldCache, outerCache,
				newCache = [dirruns, doneName];

			// No podemos establecer datos arbitrarios en los nodos XML, por lo que no se benefician de almacenamiento en caché dir
			si (XML) {
				while ((elem elem = [dir])) {
					si (elem.nodeType === 1 || checkNonElements) {
						si (matcher (elem, el contexto, xml)) {
							return true;
						}
					}
				}
			} Else {
				while ((elem elem = [dir])) {
					si (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [Expansión] || (Elem [Expansión] = {});
						if ((oldCache = outerCache [dir]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Asignar a newCache lo que los resultados de back-propagan a los elementos anteriores
							volver (newCache [2] = oldCache [2]);
						} Else {
							// Reutilización newcache lo que los resultados de back-propagan a los elementos anteriores
							outerCache [dir] = newCache;

							// Un partido significa que haya terminado; un fracaso significa que tenemos que mantener el registro
							if ((newCache [2] = matcher (elem, el contexto, xml))) {
								return true;
							}
						}
					}
				}
			}
		};
}

elementMatcher funcionar (comparadores) {
	matchers.length> 1 volver?
		función (elem, el contexto, xml) {
			var i = matchers.length;
			mientras yo-- ) {
				if (! comparadores [i] (elem, el contexto, xml)) {
					falso retorno;
				}
			}
			return true;
		}:
		comparadores [0];
}

multipleContexts función (selectores, contextos, resultados) {
	var i = 0,
		len = contexts.length;
	para (; i <len; i ++) {
		Chisporroteo (selectores, contextos [i], resultados);
	}
	Resultados de retorno;
}

la función de condensación (sin igual, mapa, filtro, contexto, xml) {
	elem var,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		= asignada mapa! = null;

	para (; i <len; i ++) {
		if ((elem = inigualable [i])) {
			if (! filtrar || filtro (elem, el contexto, xml)) {
				newUnmatched.push (elem);
				si (mapeado) {
					map.push (i);
				}
			}
		}
	}

	volver newUnmatched;
}

función setMatcher (prefiltro, selector, matcher, POSTFILTRO postFinder, postSelector) {
	si (POSTFILTRO &&! POSTFILTRO [Expansión]) {
		POSTFILTRO = setMatcher (POSTFILTRO);
	}
	si (postFinder &&! postFinder [Expansión]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	volver markFunction (function (semillas, los resultados, el contexto, xml) {
		var temp, i, elem,
			preMap = [],
			postmap = [],
			preexistente = results.length,

			// Obtener elementos iniciales de la semilla o el contexto
			elems = semilla || multipleContexts (selector || "*", context.nodeType [contexto]:? contexto, []),

			// Filtro previo para obtener coincidencias de entrada, la preservación de un mapa para la sincronización de semillas-resultados
			matcherIn = prefiltro && (semilla ||! selectora)?
				condensar (elems, preMap, prefiltro, el contexto, xml):
				elems,

			matcherOut = matcher?
				// Si tenemos un postFinder, o semilla filtrada o no de semillas POSTFILTRO o preexistentes resultados,
				postFinder || (? Semillas prefiltro: preexistente || POSTFILTRO)?

					// ... Procesamiento intermedio es necesario
					[]:

					// ... De otra manera utilizar los resultados directamente
					resultados:
				matcherIn;

		// Encuentra coincidencias primarias
		si (matcher) {
			matcher (matcherIn, matcherOut, el contexto, xml);
		}

		// Aplicar POSTFILTRO
		si (POSTFILTRO) {
			temp = condensan (matcherOut, postmap);
			POSTFILTRO (temperatura, [], el contexto, xml);

			// Un-partido a falta de elementos moviendo de nuevo a matcherIn
			i = temp.length;
			mientras yo-- ) {
				if ((elem = temp [i])) {
					matcherOut [postmap [i]] = (matcherIn [postmap [i]] = elem!);
				}
			}
		}

		si (semilla) {
			si (postFinder || prefiltro) {
				si (postFinder) {
					// Obtener el matcherOut definitiva por condensación de este intermedio en contextos postFinder
					temp = [];
					i = matcherOut.length;
					mientras yo-- ) {
						if ((elem = matcherOut [i])) {
							// Restaurar matcherIn desde elem no es todavía un último partido
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temperatura, xml);
				}

				// Mover elementos coincidentes a partir de semillas de resultados para mantenerlos sincronizados
				i = matcherOut.length;
				mientras yo-- ) {
					if ((elem = matcherOut [i]) &&
						(Temp = postFinder indexOf.call (semilla, elem):? PreMap [i])> -1) {

						semillas [temp] = (resultados [temp] = elem)!;
					}
				}
			}

		// Añadir elementos a los resultados, a través de postFinder si está definida
		} Else {
			matcherOut = condensan (
				matcherOut === resultados?
					matcherOut.splice (preexistente, matcherOut.length):
					matcherOut
			);
			si (postFinder) {
				postFinder (nulo, resultados, matcherOut, xml);
			} Else {
				push.apply (resultados, matcherOut);
			}
		}
	});
}

matcherFromTokens función (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative [tokens [0]], .Type
		implicitRelative = leadingRelative || Expr.relative [ ""],
		i = leadingRelative? 1: 0,

		// El matcher fundacional asegura que los elementos son accesibles a partir del contexto de nivel superior (s)
		matchContext = addCombinator (function (elem) {
			volver elem === checkContext;
		}, ImplicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			volver indexOf.call (checkContext, elem)> -1;
		}, ImplicitRelative, true),
		comparadores = [función (elem, el contexto, xml) {
			retorno (! leadingRelative && (XML || contexto! == outermostContext)) || (
				(CheckContext = contexto) .nodeType?
					matchContext (elem, el contexto, xml):
					matchAnyContext (elem, el contexto, xml));
		}];

	para (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			comparadores = [addCombinator (elementMatcher (comparadores), matcher)];
		} Else {
			matcher = Expr.filter [tokens [i] .type] .apply (nulo, fichas [i] .matches);

			// Devolver especial al ver una matcher posicional
			si (matcher [Expansión]) {
				// Buscar el siguiente operador relativa (si existen) para el manejo adecuado
				j = ++ i;
				para (; j <len; j ++) {
					si (Expr.relative [tokens [j] .type]) {
						descanso;
					}
				}
				setMatcher volver (
					i> 1 && elementMatcher (comparadores),
					i> 1 && toSelector (
						// Si el token anterior era un combinador descendiente, insertar una implícita cualquier elemento `` *
						tokens.slice (0, i - 1) .concat ({value: fichas [i - 2] .type === "*"? "": ""})
					) .Colocar (Rtrim, "$ 1"),
					matcher,
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (tokens)
				);
			}
			matchers.push (matcher);
		}
	}

	volver elementMatcher (comparadores);
}

matcherFromGroupMatchers función (elementMatchers, setMatchers) {
	var = bySet setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = function (semillas, el contexto, xml, resultados, más externa) {
			var elem, j, de coincidencias,
				matchedCount = 0,
				i = "0",
				inigualable = semilla && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Siempre debemos tener cualquiera de los elementos de semillas o el contexto más externa
				elems = semilla || byElement && Expr.find [ "TAG"] ( "*", más externa),
				// Usar dirruns enteros si y sólo si esta es la más externa matcher
				dirrunsUnique = (dirruns + = contextBackup == null 1:? Math.random () || 0,1),
				len = elems.length;

			si (más externa) {
				! OutermostContext = == contexto documento && contexto;
			}

			// Añadir elementos que pasa elementMatchers directamente a resultados
			// Mantener `I` una cadena si no hay elementos para `matchedCount` será" 00 "por debajo
			// Ayuda: IE <9, Safari
			// Tolere propiedades NodeList (IE: "longitud"; Safari: <número>) los elementos de juego por ID
			para (;! i == len && (elem = elems [i]) = null; i ++) {
				si (byElement && elem) {
					j = 0;
					while ((matcher = elementMatchers [j ++])) {
						si (matcher (elem, el contexto, xml)) {
							results.push (elem);
							descanso;
						}
					}
					si (más externa) {
						dirruns = dirrunsUnique;
					}
				}

				// Seguimiento de elementos sin igual para establecer filtros
				si (bySet) {
					// Ellos han pasado por todas las posibles comparadores
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Alargar la matriz para cada elemento, acompañado o no
					si (semilla) {
						unmatched.push (elem);
					}
				}
			}

			// Aplicar filtros conjunto de elementos coincidentes
			matchedCount + = i;
			si (i bySet &&! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					matcher (sin igual, setMatched, el contexto, xml);
				}

				si (semilla) {
					// Reintegración elemento coincide para eliminar la necesidad de clasificar
					si (matchedCount> 0) {
						mientras yo-- ) {
							if (! (inigualable [i] || setMatched [i])) {
								setMatched [i] = pop.call (resultados);
							}
						}
					}

					// valores de índice de Descarte de marcador de posición para obtener coincidencias solamente reales
					setMatched = condense (setMatched);
				}

				// Añadir a los resultados de los partidos
				push.apply (resultados, setMatched);

				// Set Seedless coincide con éxito múltiples comparadores exitosas estipular la clasificación
				si (más externa &&! semilla && setMatched.length> 0 &&
					(+ MatchedCount setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Invalidar la manipulación de variables globales por los comparadores anidados
			si (más externa) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			regresar sin igual;
		};

	volver bySet?
		markFunction (superMatcher):
		superMatcher;
}

compilar = Sizzle.compile = function (selector, el fósforo / * Sólo para uso interno * /) {
	i var,
		setMatchers = [],
		elementMatchers = [],
		caché = compilerCache [+ selector de ""];

	if (! caché) {
		// Generar una función de las funciones recursivas que se pueden utilizar para comprobar cada elemento
		si (partido!) {
			partido = tokenize (selector);
		}
		i = match.length;
		mientras yo-- ) {
			caché = matcherFromTokens (partido [i]);
			si (en caché [Expansión]) {
				setMatchers.push (caché);
			} Else {
				elementMatchers.push (caché);
			}
		}

		// Caché la función compilada
		caché = compilerCache (selectores, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Guardar selector y tokenización
		cached.selector = selector;
	}
	caché de regreso;
};

/ **
 * Una función de selección de nivel bajo que trabaja con chisporroteo del compilado
 * las funciones del selector
 * @param Cadena {|} Función Un selector o una pre-compilados
 * Función del selector construido con Sizzle.compile
 * @ Param {Elemento} contexto
 * @ Param {array} [resultados]
 * @ Param {array} [semillas] Un conjunto de elementos que se comparará
 * /
seleccione = Sizzle.select = function (selector, el contexto, los resultados, las semillas) {
	var i, fichas, símbolo, tipo, encuentro,
		= Typeof selector === "función" compilado && selector,
		! = Partido de semillas && tokenize ((selector = || compiled.selector selectora));

	Resultados = resultados || [];

	// Trate de minimizar las operaciones si no hay semillas y sólo un grupo
	si (=== match.length 1) {

		// Tomar un atajo y establecer el contexto si el selector de raíz es un ID
		tokens = partido [0] = partido [0] .slice (0);
		si (tokens.length> 2 && (token = tokens [0]). === tipo "ID" &&
				support.getById && context.nodeType === 9 && && documentIsHTML
				Expr.relative [tokens [1] .type]) {

			context = (Expr.find [ "ID"] (token.matches [0] .Colocar (runescape, funescape), contexto) || []) [0];
			if (! contexto) {
				Resultados de retorno;

			// Comparadores precompilados seguirán verificar ascendencia, por lo que intensificar un nivel
			} Else if (compilado) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift () value.length.);
		}

		// Obtiene una muestra de semillas para la coincidencia de derecha a izquierda
		i = matchExpr [ "needsContext"]. de prueba (Selector)? 0: tokens.length;
		mientras yo-- ) {
			fichas token = [i];

			// Abortar si llegamos a un combinador
			si (Expr.relative [(tipo = token.type)]) {
				descanso;
			}
			if ((= encontrar Expr.find [tipo])) {
				// Buscar, ampliando contexto de dirigir combinadores de hermanos
				if ((semillas = find (
					token.matches [0] .Colocar (runescape, funescape),
					rsibling.test (fichas [0] .type) && TestContext (context.parentNode) || contexto
				))) {

					// Si la semilla está vacío o que no queden fichas, podemos volver pronto
					tokens.splice (i, 1);
					selector = seed.length && toSelector (fichas);
					si (selector) {
						push.apply (resultados y semillas);
						Resultados de retorno;
					}

					descanso;
				}
			}
		}
	}

	// Compilar y ejecutar una función de filtrado si no se proporciona ninguno
	// Proporcionar `match` para evitar retokenization si modificamos el selector arriba
	(Compilado || compilar (selector, el partido)) (
		semilla,
		contexto,
		! DocumentIsHTML,
		resultados,
		rsibling.test (selector) && TestContext (context.parentNode) || contexto
	);
	Resultados de retorno;
};

// tareas de una sola vez

// Estabilidad Ordenar
support.sortStable = expando.split ( "") es un género (sortOrder) .join. ( "") === expando;

// Ayuda: Chrome <14
// Asumir Siempre duplicados si no se pasan a la función de comparación
support.detectDuplicates = !! hasDuplicate;

// Inicializar contra el documento predeterminado
setDocument ();

// Ayuda: Webkit <537,32 - Safari 6.0.3 / Chrome 25 (fijo en Chrome 27)
// Nodos independiente confoundingly siguen entre sí * *
support.sortDetached = aserción (function (div1) {
	// Debe devolver 1, pero devuelve 4 (siguiente)
	volver div1.compareDocumentPosition (document.createElement ( "div")) y 1;
});

// Ayuda: IE <8
// Atributo impide / propiedad "interpolación"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! valer (function (div) {
	div.innerHTML = "<a href='#'> </a>";
	volver div.firstChild.getAttribute ( "href") === "#";
})) {
	AñadirManejador ( "tipo | href | altura | anchura", la función (elem, nombre, isXML) {
		if (! isXML) {
			volver elem.getAttribute (nombre, name.toLowerCase () === "tipo" 1: 2);
		}
	});
}

// Ayuda: IE <9
// Usar defaultValue en lugar de getAttribute ( "valor")
if (! support.attributes ||! afirman (function (div) {
	div.innerHTML = "<input />";
	div.firstChild.setAttribute ( "valor", "");
	volver div.firstChild.getAttribute ( "valor") === "";
})) {
	AñadirManejador ( "valor", la función (elem, nombre, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "entrada") {
			volver elem.defaultValue;
		}
	});
}

// Ayuda: IE <9
// Usar getAttributeNode para ir a buscar booleanos cuando mentiras getAttribute
if (! valer (function (div) {
	div.getAttribute volver ( "desactivado") == null;
})) {
	AñadirManejador (booleanos, la función (elem, nombre, isXML) {
		val var;
		if (! isXML) {
			volver elem [nombre] === verdad? name.toLowerCase ():
					(Val = elem.getAttributeNode (nombre)) && val.specified?
					val.value:
				nulo;
		}
	});
}

volver chisporroteo;

})( ventana );



jQuery.find = chisporroteo;
jQuery.expr = Sizzle.selectors;
jQuery.expr [ ":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var = rneedsContext jQuery.expr.match.needsContext;

var rsingleTag = (? / ^ <? (\ w +) \ s * \ /> (<\ / \ 1> |) $ /);



var = risSimple /^.[^:#\[\.,]*$/;

// Implementar la funcionalidad idéntica para filtro y no
función de aventar (elementos, clasificatorios, no) {
	si (jQuery.isFunction (calificador)) {
		volver jQuery.grep (elementos, la función (elem, i) {
			/ * Jshint -W018 * /
			volver !! qualifier.call (elem, i, elem) == no!;
		});

	}

	si (qualifier.nodeType) {
		volver jQuery.grep (elementos, la función (elem) {
			volver (elem === calificador) == no!;
		});

	}

	si (typeof calificador === "cadena") {
		si (risSimple.test (calificador)) {
			volver jQuery.filter (calificador, elementos, no);
		}

		calificador = jQuery.filter (calificador, elementos);
	}

	volver jQuery.grep (elementos, la función (elem) {
		retorno (jQuery.inArray (elem, calificador)> = 0) == no!;
	});
}

jQuery.filter = function (expr, elems, no) {
	elem var = elems [0];

	si no ) {
		expr = ": no (" + expr + ")";
	}

	volver elems.length === === 1 && elem.nodeType 1?
		jQuery.find.matchesSelector (elem, expr)? [Elem]: []:
		jQuery.find.matches (expr, jQuery.grep (elems, función (elem) {
			volver elem.nodeType === 1;
		}));
};

jQuery.fn.extend ({
	encontrar: function (Selector) {
		i var,
			ret = [],
			self = este,
			len = self.length;

		si (typeof selector! == "cadena") {
			volver this.pushStack (jQuery (selector) .Filter (function () {
				for (i = 0; i <len; i ++) {
					si (jQuery.contains (auto [i], este)) {
						return true;
					}
				}
			}));
		}

		for (i = 0; i <len; i ++) {
			jQuery.find (selector, auto [i], ret);
		}

		// Necesario porque $ (selector, el contexto) se convierte en $ (contexto) .find (selector)
		ret = this.pushStack (len> 1 jQuery.unique (RET):? ret);
		ret.selector = this.selector? this.selector + "" + selector: selector;
		ret regresar;
	},
	Filtro: función (selector) {
		volver this.pushStack (aventar (esto, selector || [], false));
	},
	No: la función (selector) {
		volver this.pushStack (aventar (esto, selector || [], true));
	},
	es: function (Selector) {
		volver !! aventar (
			esta,

			// Si se trata de un selector de posición / relativa, comprobar la pertenencia al conjunto devuelto
			// Así que $ ( "p: en primer lugar"). Es ( "t: la última") no devolverá cierto para un documento con dos "p".
			selector de typeof === "cadena" && rneedsContext.test (selector)?
				jQuery (selector):
				selector || [],
			falso
		).longitud;
	}
});


// Inicializa un objeto jQuery


// Una referencia fundamental para el jQuery raíz (documento)
rootjQuery var,

	// Utilizar el documento correcto en consecuencia con el argumento de la ventana (caja de arena)
	documento = window.document,

	// Una forma sencilla de comprobar las cadenas de HTML
	// Dar prioridad sobre #id <tag> para evitar XSS mediante location.hash (# 9521)
	// Reconocimiento HTML estricto (# 11290: debe empezar con <)
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] *)) $ /,

	init = jQuery.fn.init = function (selector, contexto) {
		var partido, elem;

		// Manipulador: $ ( ""), $ (nulo), $ (indefinido), $ (falso)
		si (selector) {
			devolver este;
		}

		// cadenas manija HTML
		si (selector typeof === "cadena") {
			si (selector.charAt (0) === "<" && selector.charAt (selector.length - 1) === ">" && selector.length> = 3) {
				// Supongamos que las cadenas que comienzan y terminan con <> son HTML y omitir la comprobación de expresiones regulares
				partido = [nula, selector, null];

			} Else {
				partido = rquickExpr.exec (selector);
			}

			// HTML Match o asegurarse de que no se especifica el contexto de #id
			si (&& partido (partido [1] ||! contexto)) {

				// Manipulador: $ (html) -> $ (matriz)
				si (igualar [1]) {
					context = contexto instanceof jQuery? contexto [0]: contexto;

					// Guiones es cierto para back-compat
					// Intencionalmente dejar que se genera el error si no está presente ParseHTML
					jQuery.merge (esto, jQuery.parseHTML (
						coincida con [1],
						&& contexto context.nodeType? context.ownerDocument || contexto: documento,
						cierto
					));

					// Manipulador: $ (html, utilería)
					si (rsingleTag.test (partido [1]) && jQuery.isPlainObject (contexto)) {
						para (partido en el contexto) {
							// Propiedades de contexto se llaman como los métodos, si es posible
							si (jQuery.isFunction (esto [partido])) {
								esta [partido] (contexto [partido]);

							// ... Y establezca de otra manera como atributos
							} Else {
								this.attr (partido, el contexto [partido]);
							}
						}
					}

					devolver este;

				// Manipulador: $ (# id)
				} Else {
					elem = document.getElementById (partido [2]);

					// Comprobar parentNode para coger cuando Blackberry 4.6 rendimientos
					// nodos que ya no están en el documento # 6963
					si (elem && elem.parentNode) {
						// Manejar el caso en el IE y Opera artículos de vuelta
						// Por su nombre en lugar de ID
						si (elem.id! == partido [2]) {
							volver rootjQuery.find (selector);
						}

						// De lo contrario, se inyecta el elemento directamente en el objeto jQuery
						this.length = 1;
						esta [0] = elem;
					}

					this.context = documento;
					this.selector = selector;
					devolver este;
				}

			// Manipulador: $ (expr, $ (...))
			} Else if (! Contexto || context.jquery) {
				retorno (contexto || rootjQuery) .find (selector);

			// Manipulador: $ (expr, contexto)
			// (Que es sólo equivalente a: $ (contexto) .find (expr)
			} Else {
				volver this.constructor (contexto) .find (selector);
			}

		// Manipulador: $ (DOMElement)
		} Else if (selector.nodeType) {
			this.context = esta [0] = selector;
			this.length = 1;
			devolver este;

		// Manipulador: $ (función)
		// Acceso directo de documento listo
		} Else if (jQuery.isFunction (selector)) {
			volver typeof rootjQuery.ready! == "indefinido"?
				rootjQuery.ready (selector):
				// Ejecutar de inmediato si no está presente lista
				selector (jQuery);
		}

		si (selector.selector! == undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		volver jQuery.makeArray (selector, este);
	};

// Dar la función init el prototipo de jQuery para la creación de instancias más tarde
init.prototype = jQuery.fn;

// Inicializar referencia central
rootjQuery = jQuery (document);


var rparentsprev = / ^ (padres ?: | prev (:? Hasta | Todos)) /,
	// métodos garantizados para producir un conjunto único cuando se parte de un conjunto único
	guaranteedUnique = {
		hijos: true,
		contenido: true,
		siguiente: true,
		Anterior: true
	};

jQuery.extend ({
	dir: function (elem, dir, hasta) {
		var corresponde = [],
			act = elem [dir];

		mientras que (act && cur.nodeType! == 9 && (hasta === sin definir || cur.nodeType! == 1 ||! jQuery (act) .is (hasta))) {
			si (=== cur.nodeType 1) {
				matched.push (act);
			}
			act = act [dir];
		}
		volver igualado;
	},

	hermanos: function (n, elem) {
		var r = [];

		para (; n; n = n.nextSibling) {
			si (n.nodeType === 1 && n! == elem) {
				r.push (n);
			}
		}

		r retorno;
	}
});

jQuery.fn.extend ({
	tiene: función (objetivo) {
		i var,
			objetivos = jQuery (objetivo, este),
			len = targets.length;

		volver this.filter (function () {
			for (i = 0; i <len; i ++) {
				si (jQuery.contains (esto, los objetivos [i])) {
					return true;
				}
			}
		});
	},

	más cercanos: la función (selectores, contexto) {
		act var,
			i = 0,
			l = this.length,
			= Emparejados [],
			pos = rneedsContext.test (selectores) || typeof selectores! == "cadena"?
				jQuery (selectores, el contexto || this.context):
				0;

		para (; i <l; i ++) {
			para (act = esta [i]; cur cur && == contexto;! act = cur.parentNode) {
				// Siempre saltar fragmentos de documento
				si (cur.nodeType <11 && (POS?
					pos.index (act)> -1:

					// No deje pasar los no elementos a chisporrotear
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector (act, selectores))) {

					matched.push (act);
					descanso;
				}
			}
		}

		volver this.pushStack (matched.length> 1 jQuery.unique (emparejado):? emparejado);
	},

	// Determina la posición de un elemento dentro de
	// El conjunto combinado de elementos
	Índice: function (elem) {

		// No hay discusión, índice de rendimiento en los padres
		si (elem) {
			volver (esto [0] && esta [0] .parentNode)? . This.first () prevAll () Longitud:.-1;
		}

		// Índice en selector
		si (typeof elem === "cadena") {
			volver jQuery.inArray (esto [0], jQuery (elem));
		}

		// Busque la posición del elemento deseado
		jQuery.inArray volver (
			// Si se recibe un objeto jQuery, se utiliza el primer elemento
			elem.jquery? elem [0]: elem, este);
	},

	añadir: function (selector, contexto) {
		volver this.pushStack (
			jQuery.unique (
				jQuery.merge (this.get (), jQuery (selector, contexto))
			)
		);
	},

	addBack: function (Selector) {
		volver this.add (selector == null?
			this.prevObject: this.prevObject.filter (selector)
		);
	}
});

la función de hermanos (act, dir) {
	do {
		act = act [dir];
	} While (act && cur.nodeType == 1!);

	cur regresar;
}

jQuery.each ({
	los padres: la función (elem) {
		var = elem.parentNode padres;
		&& padres parent.nodeType volver! == 11? padres: null;
	},
	los padres: function () {elem
		volver jQuery.dir (elem, "parentNode");
	},
	parentsUntil: function (elem, i, hasta) {
		volver jQuery.dir (elem, "parentNode", hasta que);
	},
	siguiente: function (elem) {
		hermanos (elem, "nextSibling") return;
	},
	Anterior: function (elem) {
		hermanos (elem, "previousSibling") return;
	},
	nextAll: function (elem) {
		volver jQuery.dir (elem, "nextSibling");
	},
	prevAll: function (elem) {
		volver jQuery.dir (elem, "previousSibling");
	},
	nextUntil: function (elem, i, hasta) {
		volver jQuery.dir (elem, "nextSibling", hasta que);
	},
	prevUntil: function (elem, i, hasta) {
		jQuery.dir (elem, "previousSibling", hasta que) volver;
	},
	hermanos: function () {elem
		volver jQuery.sibling ((elem.parentNode || {}) .firstChild, elem);
	},
	hijos: function (elem) {
		volver jQuery.sibling (elem.firstChild);
	},
	contenido: function () {elem
		volver jQuery.nodeName (elem, "iframe")?
			elem.contentDocument || elem.contentWindow.document:
			jQuery.merge ([], elem.childNodes);
	}
}, La función (nombre, fn) {
	jQuery.fn [nombre] = función (hasta que, selector) {
		var ret = jQuery.map (esto, fn, hasta);

		si (name.slice (-5)! == "Hasta") {
			selector = hasta;
		}

		si (selector && typeof selector === "cadena") {
			ret = jQuery.filter (selector, ret);
		}

		si (this.length> 1) {
			// Eliminar duplicados
			if (! guaranteedUnique [nombre]) {
				ret = jQuery.unique (retirado);
			}

			// Invertir Para que los padres * y prev-derivados
			si (rparentsprev.test (nombre)) {
				ret = ret.reverse ();
			}
		}

		volver this.pushStack (retirado);
	};
});
var rnotwhite = (/ \ S + / g);



// Cadena a objetos opciones de formato de caché
var optionsCache = {};

// Convertir opciones de formato de cadenas en otros más con formato a Objetos y almacenar en caché
CreateOptions de función (opciones) {
	var objeto = optionsCache [opciones] = {};
	jQuery.each (options.match (rnotwhite) || [], la función (_, bandera) {
		objeto [bandera] = true;
	});
	Objeto de Retorno;
}

/ *
 * Crear una lista de devolución de llamada utilizando los siguientes parámetros:
 *
 * opciones: una lista opcional de opciones separadas por espacios que cambiará la forma
 * La lista de devolución de llamada o un objeto se comporta opción más tradicional
 *
 * Por defecto una lista de devolución de llamada se comporta como una lista de eventos de devolución de llamada y puede ser
 * "disparados" varias veces.
 *
 * Las opciones posibles:
 *
 * Una vez: se asegurará de la lista de devolución de llamada sólo puede ser disparado una vez (como un diferido)
 *
 * Memoria: se mantendrá un registro de los valores anteriores y llamar a cualquier devolución de llamada añadió
 * Después de la lista ha sido despedido de inmediato con la última "memorizado"
 * valores (como un diferido)
 *
 * Único: se asegurará una devolución de llamada sólo se puede añadir una vez (sin duplicado en la lista)
 *
 * StopOnFalse: interrumpir llamados cuando una devolución de llamada devuelve false
 *
 * /
jQuery.Callbacks = function (opciones) {

	// Convertir opciones de cadena con formato a objetar con formato si es necesario
	// (Comprobamos en caché en primer lugar)
	Opciones Opciones = typeof === "cadena"?
		(optionsCache [opciones] || CreateOptions (opciones)):
		jQuery.extend ({}, opciones);

	var // bandera de saber si la lista está disparando actualmente
		disparo,
		// Valor de fuego pasado (para las listas no olvidables)
		memoria,
		// Bandera de saber si la lista ya fue despedido
		despedido,
		// Fin del bucle cuando se dispara
		firingLength,
		// Índice de disparar momento de devolución de llamada (modificado por eliminar si es necesario)
		firingIndex,
		// Primero de devolución de llamada al fuego (utilizado internamente por la suma e fireWith)
		firingStart,
		// Lista de devolución de llamada real
		list = [],
		// Pila de fuego exige listas repetibles
		= pila! options.once && [],
		// devoluciones de llamada de incendio
		fuego = function (datos) {
			datos de la memoria = && options.memory;
			disparada = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = List.length;
			disparando = true;
			para (; firingIndex lista && <firingLength; firingIndex ++) {
				si (lista [firingIndex] .apply (datos [0], los datos [1]) === false && options.stopOnFalse) {
					la memoria = false; // Para evitar más llamadas utilizando añadir
					descanso;
				}
			}
			disparando = false;
			si (lista) {
				si (pila) {
					si (stack.length) {
						fuego (stack.shift ());
					}
				} Else if (memoria) {
					list = [];
				} Else {
					self.disable ();
				}
			}
		},
		// Objeto devoluciones de llamada real
		self = {
			// Añadir una devolución de llamada o una colección de devoluciones de llamada a la lista
			añadir: function () {
				si (lista) {
					// En primer lugar, se guarda la longitud actual
					inicio var = List.length;
					(Función de añadir (args) {
						jQuery.each (args, función (_, arg) {
							Tipo var = jQuery.type (arg);
							Si (tipo === "función") {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} Else if (arg && && arg.length tipo! == "Cadena") {
								// Inspeccionar de forma recursiva
								añadir (arg);
							}
						});
					}) (argumentos);
					// ¿Es necesario añadir las devoluciones de llamada a la
					// Actual lote de fuego?
					si (cocción) {
						firingLength = List.length;
					// Con la memoria, si no estamos disparando a continuación,
					// Deberíamos llamar de inmediato
					} Else if (memoria) {
						firingStart = inicio;
						fuego (memoria);
					}
				}
				devolver este;
			},
			// Eliminar una devolución de llamada de la lista
			eliminar: function () {
				si (lista) {
					jQuery.each (argumentos, la función (_, arg) {
						Índice var;
						mientras que ((índice = jQuery.inArray (arg, lista, índice))> -1) {
							list.splice (índice, 1);
							// índices de mango de disparo
							si (cocción) {
								si (índice <= firingLength) {
									firingLength--;
								}
								si (índice <= firingIndex) {
									firingIndex--;
								}
							}
						}
					});
				}
				devolver este;
			},
			// Comprobar si una devolución de llamada es dada en la lista.
			// Si no se da ningún argumento, devuelve si o no la lista adjunta ha devoluciones de llamada.
			tiene: función (Fn) {
				fn volver? jQuery.inArray (fn, lista)> -1: !! (lista && List.length);
			},
			// Eliminar todas las devoluciones de llamada de la lista
			vacío: function () {
				list = [];
				firingLength = 0;
				devolver este;
			},
			// Tener la lista de no hacer nada más
			desactivar: function () {
				list = pila de memoria = = indefinido;
				devolver este;
			},
			// ¿Es discapacitado?
			discapacitados: function () {
				volver lista!;
			},
			// Bloqueo de la lista en su estado actual
			bloquear: function () {
				apilar = indefinido;
				si (la memoria!) {
					self.disable ();
				}
				devolver este;
			},
			// ¿Está bloqueado?
			bloqueado: function () {
				volver apilar!;
			},
			// Llamar a todas las devoluciones de llamada con el contexto y los argumentos dados
			fireWith: function (contexto, args) {
				si (lista && (! disparado || pila)) {
					args args = || [];
					args = [contexto, args.slice? args.slice (): args];
					si (cocción) {
						stack.push (args);
					} Else {
						fuego (args);
					}
				}
				devolver este;
			},
			// Llamar a todas las devoluciones de llamada con los argumentos dados
			fuego: function () {
				self.fireWith (este, argumentos);
				devolver este;
			},
			// Para saber si las devoluciones de llamada ya han sido llamados al menos una vez
			disparado: function () {
				volver !! disparado;
			}
		};

	de retorno automático;
};


jQuery.extend ({

	Diferida: la función (FUNC) {
		tuplas var = [
				// Acción, añadir oyente, la lista de detectores, estado final
				[ "Resolver", "hecho", jQuery.Callbacks ( "una vez que la memoria"), "resolvieron"],
				[ "Rechazan", "fallan", jQuery.Callbacks ( "una vez que la memoria"), "rechazaron"],
				[ "Notificar", "progreso", jQuery.Callbacks ( "memoria")]
			],
			= estado "pendiente",
			promesa = {
				función estatal() {
					estado de retorno;
				},
				Siempre: function () {
					deferred.done (argumentos) .fail (argumentos);
					devolver este;
				},
				a continuación: function (/ * fnDone, fnFail, fnProgress * /) {
					FNS var = argumentos;
					volver jQuery.Deferred (function (newDefer) {
						jQuery.each (tuplas, la función (i, tupla) {
							var = fn jQuery.isFunction (FNS [i]) && FNS [i];
							// Diferido [hecho | fallar | progreso] para las acciones de envío hasta newDefer
							diferida [tupla [1]] (function () {
								var = fn volvió && fn.apply (Esto, argumentos);
								si (devuelto && jQuery.isFunction (returned.promise)) {
									returned.promise ()
										.done (newDefer.resolve)
										.fail (newDefer.reject)
										.progress (newDefer.notify);
								} Else {
									newDefer [tupla [0] + "Con"] (?? === esta promesa newDefer.promise (): este, fn [regresó]: argumentos);
								}
							});
						});
						FNS = null;
					}).promesa();
				},
				// Obtener una promesa para este diferido
				// Si se proporciona obj, se añade el aspecto promesa al objeto
				promesa: function (obj) {
					obj volver! = null? jQuery.extend (obj, promesa): promesa;
				}
			},
			diferido = {};

		// Mantener la tubería de back-compat
		promise.pipe = promise.then;

		// Add-lista específi métodos c
		jQuery.each (tuplas, la función (i, tupla) {
			Lista var = tupla [2],
				stateString = tupla [3];

			// Promesa [hecho | fallar | progreso] = list.add
			promesa [tupla [1]] = list.add;

			// Estado de la manija
			si (stateString) {
				list.add (function () {
					// Estado = [resuelto | rechazada]
					Estado = stateString;

				// [Reject_list | resolve_list .disable]; progress_list.lock
				}, Tuplas [i ^ 1] [2] .disable, tuplas [2] [2] .lock);
			}

			// Diferido [resolución | rechazar | notifique]
			diferida [tupla [0]] = function () {
				diferida [tupla [0] + "Con"] (? === este diferido prometer: esto, argumentos);
				devolver este;
			};
			diferida [tupla [0] + "Con"] = list.fireWith;
		});

		// Realizar la diferido una promesa
		promise.promise (diferido);

		// Determinada llamada func su caso
		si es (func) {
			func.call (diferido, aplazado);
		}

		// ¡Todo listo!
		volver diferido;
	},

	// Ayudante diferido
	cuando: function (subordinado / *, ..., subordinateN * /) {
		var i = 0,
			resolveValues ​​= slice.call (argumentos),
			longitud = resolveValues.length,

			// El recuento de los subordinados no completadas
			= longitud restante! == 1 || (Subordinada && jQuery.isFunction (subordinate.promise))? longitud: 0,

			// El maestro diferido. Si resolveValues ​​consisten en una única diferido, sólo tiene que utilizar.
			diferida = === restante 1? subordinada: jQuery.Deferred (),

			// Función de actualización para ambos valores a resolver y progreso
			updateFunc = function (i, contextos, valores) {
				función de retorno (valor) {
					contextos [i] = esta;
					Los valores [i] = arguments.length> 1? slice.call (argumentos): valor;
					if (valores === progressValues) {
						deferred.notifyWith (contextos, valores);

					} Else if ((-! Restante)) {
						deferred.resolveWith (contextos, valores);
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Añadir detectores a los subordinados diferidos; tratar a los demás como resuelto
		si (longitud> 1) {
			progressValues ​​= new Array (longitud);
			progressContexts = new Array (longitud);
			resolveContexts = new Array (longitud);
			para (; i <longitud; i ++) {
				if (resolveValues ​​[i] && jQuery.isFunction (resolveValues ​​[i] .promise)) {
					resolveValues ​​[i] .promise ()
						.done (updateFunc (i, resolveContexts, resolveValues))
						.fail (deferred.reject)
						.progress (updateFunc (i, progressContexts, progressValues));
				} Else {
					--restante;
				}
			}
		}

		// Si no estamos esperando en cualquier cosa, resolver el maestro
		if (! restante) {
			deferred.resolveWith (resolveContexts, resolveValues);
		}

		deferred.promise volver ();
	}
});


// Diferida utilizar en DOM listo
readyList var;

jQuery.fn.ready = función (Fn) {
	// Añadir la devolución de llamada
	jQuery.ready.promise () hecho (fn).;

	devolver este;
};

jQuery.extend ({
	// Es el DOM listo para ser utilizado? Se establece en true, una vez que se produce.
	isReady: falso,

	// Un contador para realizar un seguimiento de la cantidad de artículos que esperar a que antes
	// Se activa el evento listos. Ver # 6781
	readyWait: 1,

	// Espera (o liberación) el evento ready
	holdReady: Función (mantener) {
		si (mantener) {
			jQuery.readyWait ++;
		} Else {
			jQuery.ready (true);
		}
	},

	// Manipulador cuando el DOM está listo
	listo: la función (espera) {

		// Abortar si hay reservaciones pendientes o ya estamos listos
		si (=== esperar cierto --jQuery.readyWait:? jQuery.isReady) {
			regreso;
		}

		// Hacer existe seguro de cuerpo, al menos, en el caso de IE pone un poco demasiado entusiasta (ticket # 5443).
		si (document.body!) {
			volver setTimeout (jQuery.ready);
		}

		// Recuerda que el DOM está listo
		jQuery.isReady = true;

		// Si un evento normal DOM Listo despedido, decremento, y esperar si es necesario
		si (esperar! == true && --jQuery.readyWait> 0) {
			regreso;
		}

		// Si existen funciones vinculadas, para ejecutar
		readyList.resolveWith (documento, [jQuery]);

		// Desencadenar eventos listos unidos
		si (jQuery.fn.triggerHandler) {
			jQuery (document) .triggerHandler ( "listo");
			jQuery (document) .OFF ( "listo");
		}
	}
});

/ **
 * Método de limpieza para eventos listos dom
 * /
la función de desconexión () {
	si (document.addEventListener) {
		document.removeEventListener ( "DOMContentLoaded", completado, false);
		window.removeEventListener ( "carga", completado, false);

	} Else {
		document.detachEvent ( "onreadystatechange", completado);
		window.detachEvent ( "onload", completado);
	}
}

/ **
 * El controlador de eventos listo y método de limpieza auto
 * /
función completa () {
	// ReadyState === "completa" es lo suficientemente bueno para nosotros llamamos el Reino preparado en oldIE
	si (document.addEventListener || event.type === "carga" || document.readyState === "completa") {
		despegar();
		jQuery.ready ();
	}
}

jQuery.ready.promise = function (obj) {
	if (! readyList) {

		readyList = jQuery.Deferred ();

		// Casos de captura en $ (document) ready () se llama después del evento del navegador ya se ha producido.
		// Que una vez trataron de utilizar readyState "interactivo" aquí, pero causó problemas como el que se
		// Descubierto por Chriss aquí: http://bugs.jquery.com/ticket/12282#comment:15
		si (document.readyState === "completo") {
			// Manejar de forma asíncrona para permitir scripts la posibilidad de retrasar la lista
			setTimeout (jQuery.ready);

		navegadores basados ​​en estándares // Ayuda DOMContentLoaded
		} Else if (document.addEventListener) {
			// Utilizar la devolución de llamada caso práctico
			document.addEventListener ( "DOMContentLoaded", completado, false);

			// Un retroceso a window.onload, que siempre va a trabajar
			window.addEventListener ( "carga", completado, false);

		// Si se utiliza modelo de eventos de IE
		} Else {
			// Asegúrese de cocción antes de proceso de carga, tal vez tarde pero seguro también para iframes
			document.attachEvent ( "onreadystatechange", completado);

			// Un retroceso a window.onload, que siempre va a trabajar
			window.attachEvent ( "onload", completado);

			// Si el IE y no una trama
			// Comprobar continuamente para ver si el documento está listo
			var superior = false;

			tratar {
				top = window.frameElement == null && document.documentElement;
			} Catch (e) {}

			si (arriba && top.doScroll) {
				(Función doScrollCheck () {
					if (! jQuery.isReady) {

						tratar {
							// Usa el truco de Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll ( "izquierda");
						} Catch (e) {
							volver setTimeout (doScrollCheck, 50);
						}

						// Separar todos los eventos DOM listas
						despegar();

						// Y ejecutar cualquiera de las funciones de espera
						jQuery.ready ();
					}
				}) ();
			}
		}
	}
	volver readyList.promise (obj);
};


var = typeof strundefined indefinido;



// Ayuda: IE <9
// Iteración sobre las propiedades heredadas del objeto antes de su propia
var i;
para (i en jQuery (apoyo)) {
	descanso;
}
support.ownLast = i == "0"!;

// Nota: la mayoría de las pruebas de apoyo se definen en sus respectivos módulos.
// False hasta que se ejecute la prueba
support.inlineBlockNeedsLayout = false;

// Ejecutar lo antes posible en caso de que tenemos que establecer body.style.zoom
jQuery (function () {
	// Minified: var a, b, c, d
	var val, div, el cuerpo del recipiente;

	document.getElementsByTagName cuerpo = ( "cuerpo") [0];
	if (! || cuerpo! body.style) {
		// Devolver para documentos de marcos que no tienen un cuerpo
		regreso;
	}

	// Preparar
	div = document.createElement ( "div");
	= contenedor document.createElement ( "div");
	container.style.cssText = "position: absolute; border: 0; anchura: 0; altura: 0; top: 0; left: -9999px";
	body.appendChild (contenedor) .appendChild (div);

	si (typeof div.style.zoom! == strundefined) {
		// Ayuda: IE <8
		// Comprobar si de forma nativa elementos en bloque actúan como inline-block
		// Elementos al configurar su pantalla de 'inline' y dando
		// Ellas el diseño
		div.style.cssText = "display: inline; margin: 0; border: 0; padding: 1px; anchura: 1px; zoom: 1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		si (val) {
			// Prevenir EI 6 de afectar a la disposición de los elementos posicionados # 11048
			// Prevenir la EI se encoja el cuerpo en el modo IE 7 # 12869
			// Ayuda: IE <8
			body.style.zoom = 1;
		}
	}

	body.removeChild (contenedor);
});




(Function () {
	var div = document.createElement ( "div");

	// Ejecutar la prueba sólo si no se ha ejecutado en otro módulo.
	si (support.deleteExpando == null) {
		// Ayuda: IE <9
		support.deleteExpando = true;
		tratar {
			Eliminar div.test;
		} Catch (e) {
			support.deleteExpando = false;
		}
	}

	// elementos nulos para evitar fugas en el IE.
	div = null;
}) ();


/ **
 * Determina si un objeto puede tener datos
 * /
jQuery.acceptData = function (elem) {
	var = nodata jQuery.noData [(elem.nodeName + "") .tolowercase ()],
		nodeType = + elem.nodeType || 1;

	// No establezca los datos de nodos DOM no de elementos, ya que no se borrará (# 8335).
	nodeType volver! == 1 && nodeType! == 9?
		falso:

		// Nodos aceptan datos a menos que se especifique lo contrario; rechazo puede estar condicionada
		! Nodata || nodata == true && elem.getAttribute ( "classid") === nodata!;
};


var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / ([AZ]) / g;

función dataAttr (elem, claves, datos) {
	// Si no se encontró nada internamente, pruebe a buscar cualquier
	// Datos del HTML 5 * de datos de atributos
	si (datos sin definir === === && elem.nodeType 1) {

		var name = "de datos" + key.replace (rmultiDash, "- $ 1") .tolowercase ();

		datos = elem.getAttribute (nombre);

		si (datos typeof === "cadena") {
			tratar {
				datos = datos === "verdadero"? cierto :
					=== datos "falsa"? falso:
					=== datos "nulo"? nulo :
					// Sólo convertir en un número si no cambia la cadena
					+ Datos + "" === datos? + Datos:
					rbrace.test (datos)? jQuery.parseJSON (datos):
					datos;
			} Catch (e) {}

			// Asegúrese de que establecemos los datos para que no se cambia más adelante
			jQuery.data (elem, clave, datos);

		} Else {
			datos = sin definir;
		}
	}

	datos de retorno;
}

// Comprueba un objeto de caché para el vacío
isEmptyDataObject funcionar (obj) {
	var name;
	para (nombre en obj) {

		// Si el objeto de datos pública está vacía, lo privado es todavía vacías
		si (nombre === "datos" && jQuery.isEmptyObject (obj [nombre])) {
			continuar;
		}
		si (nombre! == "toJSON") {
			falso retorno;
		}
	}

	return true;
}

función internalData (elem, nombre, datos, Pvt / * Sólo para uso interno * /) {
	if (! jQuery.acceptData (elem)) {
		regreso;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// Tenemos que manejar nodos DOM y JS objetos tanto de manera diferente porque IE6-7
		// referencias a objetos no pueden GC adecuadamente a través del límite de DOM-JS
		isNode = elem.nodeType,

		// Sólo los nodos DOM necesitan la caché global jQuery; JS datos de objeto es
		// Están conectados directamente con el objeto de modo GC puede ocurrir de forma automática
		cache = isNode? jQuery.cache: elem,

		// Definir Sólo un ID para objetos JS si su caché ya existe permite
		// El código de acceso directo en el mismo camino que un nodo DOM sin caché
		id = isNode? elem [internalKey]: elem [internalKey] && internalKey;

	// Evita hacer más trabajo de lo necesario cuando se trata de obtener datos sobre una
	// Objeto que no tiene ningún dato en absoluto
	if ((! Identificación del ||! caché [id] || (! Pvt &&! caché [id] .data)) && && sin definir los datos === === typeof nombre de "cadena") {
		regreso;
	}

	si yo d ) {
		// Sólo los nodos DOM necesitan un nuevo identificador único para cada elemento de datos, ya que su
		// Termina en la caché global
		si (isNode) {
			id = elem [internalKey] = deletedIds.pop () || jQuery.guid ++;
		} Else {
			id = internalKey;
		}
	}

	if (! cache [id]) {
		// Evitar la exposición de metadatos en los objetos jQuery JS de fricción cuando el objeto
		// Se serializa utilizando JSON.stringify
		caché [id] = isNode? {}: {ToJSON: jQuery.noop};
	}

	// Un objeto puede ser pasado a jQuery.data en lugar de un valor / par de claves; esto se pone
	// Superficial copiado en la memoria caché existente
	si (typeof nombre === "objeto" || typeof nombre === "función") {
		si (Pvt) {
			caché [id] = jQuery.extend (caché [id], nombre);
		} Else {
			caché [id] = .data jQuery.extend (caché [id] .data, nombre);
		}
	}

	thisCache = caché [id];

	// datos de jQuery () se almacena en un objeto separado dentro de los datos internos del objeto
	// Caché con el fin de evitar colisiones clave entre los datos internos y definidos por el usuario
	// Datos.
	if (! Pvt) {
		if (! thisCache.data) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	si (datos! == undefined) {
		thisCache [jQuery.camelCase (nombre)] = datos;
	}

	// Cheque para ambos nombres de propiedades datos convertidos a camello y no convertidos
	// Si se ha especificado una propiedad de datos
	si (typeof nombre === "cadena") {

		// Primer intento de encontrar tal y como son datos de propiedades
		ret = thisCache [nombre];

		// Prueba de nula | datos de propiedad no definida
		Si (null == ret) {

			// Trata de encontrar la propiedad CamelCased
			ret = thisCache [jQuery.camelCase (nombre)];
		}
	} Else {
		ret = thisCache;
	}

	ret regresar;
}

función internalRemoveData (elem, nombre, Pvt) {
	if (! jQuery.acceptData (elem)) {
		regreso;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// Ver jQuery.data para más información
		cache = isNode? jQuery.cache: elem,
		id = isNode? elem [jQuery.expando]: jQuery.expando;

	// Si ya existe ninguna entrada de caché para este objeto, no hay
	// Fin de continuar
	if (! cache [id]) {
		regreso;
	}

	si (nombre) {

		thisCache = Pvt? caché [id]: cache [id] .data;

		si (thisCache) {

			// matriz de soporte y en el espacio separado nombres de cadena para llaves de datos
			if (! jQuery.isArray (nombre)) {

				// Tratar la cadena como una tecla antes de cualquier manipulación
				si (nombre en thisCache) {
					name = [nombre];
				} Else {

					// Dividir la versión camello entubado por espacios a menos que exista una clave con los espacios
					name = jQuery.camelCase (nombre);
					si (nombre en thisCache) {
						name = [nombre];
					} Else {
						name = name.split ( "");
					}
				}
			} Else {
				// Si "nombre" es una matriz de claves ...
				// Cuando se crea inicialmente los datos, a través de ( "val" "clave") la firma,
				// Llaves se convertirán en camelCase.
				// Ya que no hay forma de saber _how_ una tecla se añadió, retire
				// Tanto sencilla llave y la llave camelCase. # 12786
				// Esto sólo se penalizará el camino argumento de matriz.
				name = name.concat (jQuery.map (nombre, jQuery.camelCase));
			}

			i = name.length;
			mientras yo-- ) {
				Eliminar thisCache [nombre [i]];
			}

			// Si no hay datos que quedan en la memoria caché, queremos continuar
			// Y dejar que el objeto de caché en sí son destruidos
			si (Pvt isEmptyDataObject (thisCache):?! jQuery.isEmptyObject (thisCache)) {
				regreso;
			}
		}
	}

	// Ver jQuery.data para más información
	if (! Pvt) {
		Eliminar caché [ID] .data;

		// No eliminar el caché de los padres a menos que el objeto de datos interna
		// Había sido el único que queda en ella
		if (! isEmptyDataObject (caché [id])) {
			regreso;
		}
	}

	// Eliminar el caché
	si (isNode) {
		jQuery.cleanData ([elem], true);

	// Usar borrar cuando está apoyado por expandos o `cache` no es una ventana por IsWindow (# 10080)
	/ * Jshint eqeqeq: false * /
	} Else if (support.deleteExpando || caché! = Cache.window) {
		/ * Jshint eqeqeq: true * /
		Eliminar caché [id];

	// Cuando todo lo demás falla, null
	} Else {
		caché [id] = null;
	}
}

jQuery.extend ({
	cache: {},

	// Los siguientes elementos (espacio-sufijo para evitar colisiones Object.prototype)
	// Lanzar excepciones inalcanzable si se intenta establecer las propiedades expando
	sin datos: {
		"Applet": true,
		"Embed": true,
		// ... Pero los objetos de Flash (que tiene este classid) * puede * expandos mango
		"Objeto": "idcls: D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	HasData: function (elem) {
		elem = elem.nodeType? jQuery.cache [elem [jQuery.expando]]: elem [jQuery.expando];
		volver !! elem && isEmptyDataObject (elem)!;
	},

	datos: function (elem, nombre, datos) {
		volver internalData (elem, nombre, datos);
	},

	REMOVEDATA: function (elem, nombre) {
		volver internalRemoveData (elem, nombre);
	},

	// Sólo para uso interno.
	_data: function (elem, nombre, datos) {
		volver internalData (elem, nombre, datos, true);
	},

	_removeData: function (elem, nombre) {
		volver internalRemoveData (elem, nombre, true);
	}
});

jQuery.fn.extend ({
	datos: function (clave, valor) {
		var i, nombre, datos,
			elem = esta [0],
			elem.attributes attrs = && elem;

		// Expectativas especiales de .data básicamente frustrar jQuery.access,
		// Así que implementar el comportamiento relevante a nosotros mismos

		// Obtiene todos los valores
		si (=== clave indefinido) {
			si (this.length) {
				datos = jQuery.data (elem);

				si (elem.nodeType === 1 &&! jQuery._data (elem, "parsedAttrs")) {
					i = attrs.length;
					mientras yo-- ) {

						// Ayuda: IE11 +
						// Los elementos attrs pueden ser nulos (# 14894)
						si (attrs [i]) {
							name = attrs [i] .name;
							si (name.indexOf ( "de datos") === 0) {
								name = jQuery.camelCase (name.slice (5));
								dataAttr (elem, nombre, datos de [nombre]);
							}
						}
					}
					jQuery._data (elem, "parsedAttrs", true);
				}
			}

			datos de retorno;
		}

		// Establece varios valores
		si (typeof === "objeto" clave) {
			volver this.each (function () {
				jQuery.data (esto, la clave);
			});
		}

		arguments.length> 1 volver?

			// Establece un valor
			this.each (function () {
				jQuery.data (esto, clave, valor);
			}):

			// Obtiene un valor
			// Pruebe a buscar los datos almacenados internamente primera
			elem? dataAttr (elem, llave, jQuery.data (elem clave,)): indefinido;
	},

	REMOVEDATA: function (clave) {
		volver this.each (function () {
			jQuery.removeData (esto, la clave);
		});
	}
});


jQuery.extend ({
	cola: la función (elem, el tipo de datos) {
		var cola;

		si (elem) {
			type = (tipo || "FX") + "cola";
			cola = jQuery._data (elem, tipo);

			// Acelerar quitar de la cola por salir rápidamente si esto es sólo una búsqueda
			if (datos) {
				if (! cola || jQuery.isArray (datos)) {
					cola = jQuery._data (elem, tipo, jQuery.makeArray (datos));
				} Else {
					queue.push (datos);
				}
			}
			cola de volver || [];
		}
	},

	quitar de la cola: la función (elem, tipo) {
		type = Tipo || "Fx";

		cola var = jQuery.queue (elem, tipo),
			startLength = queue.length,
			fn = queue.shift (),
			ganchos = jQuery._queueHooks (elem, tipo),
			next = function () {
				jQuery.dequeue (elem, tipo);
			};

		// Si se quita de la cola de la cola de fx, siempre retire el centinela progreso
		Si (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		Si (fn) {

			// Añadir un centinela avances para evitar la cola de ser fx
			// Quitadas de forma automática
			Si (tipo === "FX") {
				queue.unshift ( "inprogress");
			}

			// Aclarar la función de parada de la última cola
			Eliminar hooks.stop;
			fn.call (elem, próximos, ganchos);
		}

		if (! startLength && ganchos) {
			hooks.empty.fire ();
		}
	},

	// No destinados al consumo público - genera un objeto queueHooks, o devuelve el actual
	_queueHooks: function (elem, tipo) {
		clave var = "+ Tipo de queueHooks";
		volver jQuery._data (elem, clave) || jQuery._data (elem, llave, {
			vacíos: jQuery.Callbacks ( "Una vez que la memoria") add (function () {.
				jQuery._removeData (elem, + tipo "cola");
				jQuery._removeData (elem clave);
			})
		});
	}
});

jQuery.fn.extend ({
	cola: la función (tipo, datos) {
		var colocador = 2;

		si (typeof tipo! == "cadena") {
			datos = tipo;
			type = "fx";
			setter--;
		}

		si (arguments.length <colocador) {
			volver jQuery.queue (esto [0], tipo);
		}

		los datos de retorno === indefinido?
			esta :
			this.each (function () {
				cola var = jQuery.queue (esto, el tipo de datos);

				// Garantizar un ganchos para esta cola
				jQuery._queueHooks (esto, tipo);

				Si (tipo === "fx" && cola [0] == "inprogress") {
					jQuery.dequeue (esto, tipo);
				}
			});
	},
	quitar de la cola: la función (tipo) {
		volver this.each (function () {
			jQuery.dequeue (esto, tipo);
		});
	},
	clearQueue: función (tipo) {
		volver this.queue (tipo || "FX", []);
	},
	// Obtener una promesa resolvió cuando las colas de un tipo determinado
	// Se vacían (fx es el tipo por defecto)
	promesa: la función (tipo, obj) {
		tmp var,
			count = 1,
			Defer = jQuery.Deferred (),
			elementos = este,
			i = this.length,
			determinación = function () {
				if (! (--count)) {
					defer.resolveWith (elementos, [elementos]);
				}
			};

		si (typeof tipo! == "cadena") {
			obj = tipo;
			type = indefinido;
		}
		type = Tipo || "Fx";

		mientras yo-- ) {
			tmp = jQuery._data (elementos [i], tipo queueHooks + "");
			si (tmp && tmp.empty) {
				contar ++;
				tmp.empty.add (resolver);
			}
		}
		resolver();
		defer.promise (obj) return;
	}
});
var = pnum (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Inicio", "derecha", "Abajo", "Izquierda"];

var isHidden = function (elem, el) {
		// IsHidden podría ser llamada desde la función de filtro # jQuery;
		// En ese caso, el elemento será segundo argumento
		elem = el || elem;
		volver jQuery.css (elem, "pantalla") === "ninguna" || ! JQuery.contains (elem.ownerDocument, elem);
	};



// Método de múltiples funciones para obtener y establecer los valores de una colección
// El valor / s puede opcionalmente ser ejecutado si se trata de una función
var = Acceso jQuery.access = function (elems, fn, clave, el valor chainable, emptyGet, crudo) {
	var i = 0,
		longitud = elems.length,
		mayor = null == clave;

	// Establece muchos valores
	si (jQuery.type (clave) === "objeto") {
		chainable = true;
		para (i en clave) {
			jQuery.access (elems, fn, i, la tecla [i], es cierto, emptyGet, en bruto);
		}

	// Establece un valor
	} Else if (valor == undefined) {
		chainable = true;

		if (! jQuery.isFunction (valor)) {
			prima = true;
		}

		si (a granel) {
			// operaciones a granel corren contra todo el conjunto
			si (en bruto) {
				fn.call (elems, valor);
				fn = null;

			// ... Excepto cuando la ejecución de valores de la función
			} Else {
				masa = fn;
				fn = function (elem, clave, valor) {
					volver bulk.call (jQuery (elem), valor);
				};
			}
		}

		Si (fn) {
			para (; i <longitud; i ++) {
				Fn (elems [i], clave, prima de valor:? value.call (elems [i], i, fn (elems [i], la tecla)));
			}
		}
	}

	volver conexión en cadena?
		elems:

		// Obtiene
		a granel?
			fn.call (elems):
			longitud ? Fn (elems [0], clave): emptyGet;
};
var rcheckableType = (/ ^ (casilla ?: | radio) $ / i);



(Function () {
	// Minified: var a, b, c
	de entrada var = document.createElement ( "entrada"),
		div = document.createElement ( "div"),
		= fragmento document.createDocumentFragment ();

	// Preparar
	div.innerHTML = "<tipo 'casilla' de entrada = /> </ link> <table> </ table> <a href='/a'> un </a>";

	// IE elimina espacios en blanco que conduce cuando se utiliza .innerHTML
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Asegúrese de que los elementos tbody no se insertan automáticamente
	// IE insertarlos en mesas vacías
	! Support.tbody = div.getElementsByTagName ( "tbody") .length;

	// Asegúrese de que elementos de conexión en serie reciben correctamente por innerHtml
	// Esto requiere un elemento de envoltorio en el IE
	support.htmlSerialize = !! div.getElementsByTagName ( "link") .length;

	// Se asegura de clonación de un elemento HTML5 no causa problemas
	// Cuando outerHTML no está definido, esto todavía funciona
	support.html5Clone =
		document.createElement ( "VL") .cloneNode (verdadero) .outerHTML == "<: nav> </: nav>!";

	// Comprobar si una casilla de verificación desconectado conservará su controlada
	// Valor de verdad después anexado al DOM (IE6 / 7)
	input.type = "casilla de verificación";
	input.checked = true;
	fragment.appendChild (entrada);
	= Support.appendChecked input.checked;

	// Asegúrese de área de texto (y la casilla de verificación) defaultValue se clona adecuadamente
	// Ayuda: IE6-EI11 +
	div.innerHTML = "<textarea> x </ textarea>";
	support.noCloneChecked = !! div.cloneNode (verdadero) .lastChild.defaultValue;

	// # 11217 - WebKit pierde comprobar si el nombre es después de que el atributo checked
	fragment.appendChild (div);
	div.innerHTML = "<input type =" radio "marcada =" marcado "name =" t "/>";

	// Ayuda: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// Edad WebKit no clonar comprueba el estado correctamente en fragmentos
	support.checkClone = div.cloneNode (verdadero) .cloneNode (verdadero) .lastChild.checked;

	// Ayuda: IE <9
	// Opera no clona eventos (y typeof div.attachEvent === sin definir).
	// IE9-10 clones eventos ligados a través de attachEvent, pero no activan con .click ()
	support.noCloneEvent = true;
	si (div.attachEvent) {
		div.attachEvent ( "onclick", function () {
			support.noCloneEvent = false;
		});

		div.cloneNode (verdadero) .click ();
	}

	// Ejecutar la prueba sólo si no se ha ejecutado en otro módulo.
	si (support.deleteExpando == null) {
		// Ayuda: IE <9
		support.deleteExpando = true;
		tratar {
			Eliminar div.test;
		} Catch (e) {
			support.deleteExpando = false;
		}
	}
}) ();


(Function () {
	var i, eventName,
		div = document.createElement ( "div");

	// Ayuda: IE <9 (falta presentar / cambio de burbujas), Firefox 23+ (falta focusin evento)
	para (i en {presentar: cierto, el cambio: true, focusin: true}) {
		eventName = "on" + i;

		if (! (apoyo [i + "burbujas"] = eventName en la ventana)) {
			// Cuidado con las restricciones de CSP (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute (eventName, "t");
			ayuda [i + "burbujas"] = div.attributes [eventName] .expando === false;
		}
	}

	// elementos nulos para evitar fugas en el IE.
	div = null;
}) ();


var rformElems = / ^ (entrada ?: | selecto | área de texto) $ / i,
	rkeyEvent = / ^ Tecla /,
	rmouseEvent = / ^ (ratón ?: | puntero | contextual) | pulse /,
	rfocusMorph = / ^ (focusinfocus ?: | focusoutblur) $ /,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

returnTrue función () {
	return true;
}

returnFalse función () {
	falso retorno;
}

funcionar safeActiveElement () {
	tratar {
		volver document.activeElement;
	} Catch (err) {}
}

/ *
 * Las funciones auxiliares para la gestión de eventos - que no forman parte de la interfaz pública.
 * Apoyos a la biblioteca de addEvent Dean Edwards para muchas de las ideas.
 * /
jQuery.event = {

	mundial: {},

	añadir: function (elem, tipos, manipulador, los datos, el selector) {
		var tmp, eventos, t, handleObjIn,
			especial, eventHandle, handleObj,
			manipuladores, tipo, espacios de nombres, origType,
			elemData = jQuery._data (elem);

		// No adhiera a eventos nodata o nodos de texto / comentario (pero permitir que los objetos lisos)
		if (! elemData) {
			regreso;
		}

		// Llamante puede pasar en un objeto de datos personalizados en lugar del controlador
		si (handler.handler) {
			handleObjIn = manipulador;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Asegúrese de que el controlador tiene un identificador único, que se utiliza para encontrar / quitarlo más adelante
		si (handler.guid!) {
			handler.guid = jQuery.guid ++;
		}

		// Init estructura de eventos del elemento y controlador principal, si esta es la primera
		if (! (eventos = elemData.events)) {
			eventos = elemData.events = {};
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {
				// Descartar el segundo caso de jQuery.event.trigger () y
				// Cuando un evento se llama después de una página ha descargado
				volver typeof jQuery! == strundefined && (! e || jQuery.event.triggered! == e.type)?
					jQuery.event.dispatch.apply (eventHandle.elem, argumentos):
					indefinido;
			};
			// Añadir elem como una propiedad de la fn mango para evitar una pérdida de memoria con IE eventos no nativos
			eventHandle.elem = elem;
		}

		// Manejar múltiples eventos separados por un espacio
		= tipos (tipos || "") .match (rnotwhite) || [ ""];
		t = types.length;
		mientras que (T-) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			espacios de nombres = (tmp [2] || "") .split ( ".") .Sort ();

			// No * debe * ser un tipo, no hay fijación de espacio de nombres de sólo manipuladores
			Si (tipo!) {
				continuar;
			}

			// Si acontecimiento cambia su tipo, utilice los controladores de eventos especiales para el tipo de cambio de
			jQuery.event.special especial = [tipo] || {};

			// Si el selector define, determinar el tipo de evento API especial, tipo determinado de otro modo
			type = (selector de special.delegateType:? special.bindType) || tipo;

			// Actualización especial sobre la base de que acabas de restablecer Tipo
			jQuery.event.special especial = [tipo] || {};

			// HandleObj se pasa a todos los controladores de eventos
			handleObj = jQuery.extend ({
				Tipo: tipo,
				origType: origType,
				de datos: datos,
				controlador: Controlador,
				GUID: handler.guid,
				selector: selector,
				needsContext: Selector && jQuery.expr.match.needsContext.test (selector),
				espacio de nombres: namespaces.join ( ".")
			}, HandleObjIn);

			// Init la cola de controlador de eventos si somos los primeros
			if (! (manejadores de eventos = [tipo])) {
				manipuladores de eventos = [tipo] = [];
				handlers.delegateCount = 0;

				// Sólo utilizar addEventListener / attachEvent si el manejador de eventos especiales devuelve false
				if (! special.setup || special.setup.call (elem, datos, espacios de nombres, eventHandle) === false) {
					// Enlazar el controlador de eventos global para el elemento
					si (elem.addEventListener) {
						elem.addEventListener (tipo, eventHandle, false);

					} Else if (elem.attachEvent) {
						elem.attachEvent ( "on" tipo +, eventHandle);
					}
				}
			}

			si (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Añadir a la lista de manejador del elemento, delegados delante
			si (selector) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} Else {
				handlers.push (handleObj);
			}

			// Realizar un seguimiento de las cuales nunca se han utilizado los eventos, para la optimización del evento
			jQuery.event.global [tipo] = true;
		}

		// Nulidad elem para evitar pérdidas de memoria en el IE
		elem = null;
	},

	// Desata un evento o conjunto de eventos de un elemento
	eliminar: function (elem, tipos, manipulador, selector, mappedTypes) {
		var j, handleObj, tmp,
			origCount, t, eventos,
			especial, manipuladores, tipo,
			espacios de nombres, origType,
			elemData = jQuery.hasData (elem) && jQuery._data (elem);

		if (! elemData ||! (eventos = elemData.events)) {
			regreso;
		}

		// Una vez por cada type.namespace en tipos; tipo puede omitirse
		= tipos (tipos || "") .match (rnotwhite) || [ ""];
		t = types.length;
		mientras que (T-) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			espacios de nombres = (tmp [2] || "") .split ( ".") .Sort ();

			// No enlace todos los eventos (en este espacio de nombres, si la hubiere) para el elemento
			Si (tipo!) {
				para (tipo de eventos) {
					jQuery.event.remove (elem, + Tipo de tipos [t], manipulador, selector, true);
				}
				continuar;
			}

			jQuery.event.special especial = [tipo] || {};
			type = (selector de special.delegateType:? special.bindType) || tipo;
			manejadores de eventos = [tipo] || [];
			tmp = tmp [2] && nueva RegExp ( "(^ | \\)." + namespaces.join ( "\\ (:.?.. * \\ |)") + ". (\\ | $)" );

			// Eliminar eventos que cumplen
			origCount = j = handlers.length;
			while (j--) {
				handleObj = manipuladores [j];

				if ((mappedTypes || origType === handleObj.origType) &&
					(! Manejador || handler.guid === handleObj.guid) &&
					(! Tmp || tmp.test (handleObj.namespace)) &&
					(! || Selector selector selector de handleObj.selector === === || "**" && handleObj.selector)) {
					handlers.splice (j, 1);

					si (handleObj.selector) {
						handlers.delegateCount--;
					}
					si (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// Eliminar controlador de eventos genérico si sacamos algo y no hay más manejadores
			// (Evita potencial de recursión sin fin durante la eliminación de los controladores de eventos especiales)
			si (origCount &&! handlers.length) {
				if (! special.teardown || special.teardown.call (elem, espacios de nombres, elemData.handle) === false) {
					jQuery.removeEvent (elem, tipo, elemData.handle);
				}

				Eliminar citas [tipo];
			}
		}

		// Eliminar el expando si ya no se usa
		if (jQuery.isEmptyObject (eventos)) {
			Eliminar elemData.handle;

			// REMOVEDATA también comprueba el vacío y despeja el vacío si expando
			// Fin de utilizarlo en lugar de borrar
			jQuery._removeData (elem, "eventos");
		}
	},

	gatillo: function (evento, datos, elem, onlyHandlers) {
		mango var, ontype, cur,
			bubbleType, especial, tmp, i,
			eventPath = [elem || documento],
			type = hasOwn.call (evento, "tipo")? event.type: acontecimiento,
			espacios de nombres = hasOwn.call (evento, "nombre")? event.namespace.split ( "."): [];

		act = tmp = elem elem = || documento;

		// No hacer eventos en nodos de texto y comentario
		si (elem.nodeType === === 3 || elem.nodeType 8) {
			regreso;
		}

		// Enfoque / desenfoque transforma a focusIn de entrada / salida; aseguramos que no estamos disparando ellos en este momento
		si (rfocusMorph.test (tipo jQuery.event.triggered +)) {
			regreso;
		}

		si (type.indexOf ( ".")> = 0) {
			// Desencadenante de espacio de nombres; crear una expresión regular para que coincida con el tipo de evento en el mango ()
			espacios de nombres = type.split ( ".");
			type = namespaces.shift ();
			namespaces.sort ();
		}
		ontype = type.indexOf ( ":") <0 && "en" + Tipo;

		// Llamante puede pasar en un objeto jQuery.Event, objeto, o simplemente una cadena tipo de evento
		evento = evento [jQuery.expando]?
			evento:
			jQuery.Event nueva (tipo, typeof caso === "objeto" && evento);

		// Gatillo máscara de bits: 1 y para los manipuladores de nativos; Y 2 para jQuery (siempre es cierto)
		event.isTrigger = onlyHandlers? 2: 3;
		event.namespace = namespaces.join ( ".");
		event.namespace_re = event.namespace?
			nueva RegExp ( "(^ | \\)." + namespaces.join ( "\\ (:.?.. * \\ |)") + ". (\\ | $)"):
			nulo;

		// Limpiar el evento en caso de que se está reutilizando
		event.result = indefinido;
		si (event.target!) {
			event.target = elem;
		}

		// I clonar cualquier Ncoming de datos y anteponer el evento, la creación de la lista arg manejador
		datos = datos == null?
			[Evento]:
			jQuery.makeArray (datos, [evento]);

		// Permitir eventos especiales para diseño fuera de línea
		jQuery.event.special especial = [tipo] || {};
		if (! onlyHandlers && && special.trigger special.trigger.apply (elem, datos) === false) {
			regreso;
		}

		// Determinación de la vía de propagación de eventos de antemano, por eventos del W3C Spec (# 9951)
		// Burbuja hasta documentar, a continuación, a la ventana; pendiente de una var ownerDocument mundial (# 9724)
		if (! onlyHandlers &&! special.noBubble &&! jQuery.isWindow (elem)) {

			bubbleType = special.delegateType || tipo;
			if (! rfocusMorph.test (+ bubbleType tipo)) {
				act = cur.parentNode;
			}
			para (; act; act = cur.parentNode) {
				eventPath.push (act);
				tmp = act;
			}

			// Sólo añadir ventana si llegamos al documento (por ejemplo, no sin formato obj o separado DOM)
			Si (TMP === (documento elem.ownerDocument ||)) {
				eventPath.push (tmp.defaultView || tmp.parentWindow || ventana);
			}
		}

		// manipuladores de fuego en el camino evento
		i = 0;
		while ((act = eventPath [i ++]) &&! event.isPropagationStopped ()) {

			event.type = i> 1?
				bubbleType:
				special.bindType || tipo;

			// Manipulador de jQuery
			handle = (jQuery._data (act, "eventos") || {}) [event.type] && jQuery._data (act, "mango");
			si (mango) {
				handle.apply (act, datos);
			}

			// Manejador nativo
			handle = ontype && act [ontype];
			si (manejar && && handle.apply jQuery.acceptData (act)) {
				event.result = handle.apply (CUR, datos);
				si (event.result === false) {
					event.preventDefault ();
				}
			}
		}
		event.type = tipo;

		// Si nadie impidió que la acción por defecto, hacerlo ahora
		if (! onlyHandlers &&! event.isDefaultPrevented ()) {

			if (! (special._default || special._default.apply (eventPath.pop (), datos) === false) &&
				jQuery.acceptData (elem)) {

				// Llamar a un método DOM nativa en el destino con el mismo nombre que el nombre del evento.
				// No se puede utilizar un .isFunction () visita aquí porque IE6 / 7 carece de esa coherencia.
				// No hacer acciones por defecto en la ventana, que es donde sean variables globales (# 6170)
				si (ontype && elem [tipo] &&! jQuery.isWindow (elem)) {

					// No vuelva a activar un evento OnFoo cuando llamamos a su método foo ()
					tmp = elem [ontype];

					Si (TMP) {
						elem [ontype] = null;
					}

					// Prevenir la re-activación del mismo evento, puesto que ya burbujear encima
					jQuery.event.triggered = tipo;
					tratar {
						elem [tipo] ();
					} Catch (e) {
						// IE <9 matrices en el enfoque / desenfoque al elemento oculto (# 1486, # 12518)
						// Sólo reproducible en WinXP IE8 nativa, no IE9 en modo IE8
					}
					jQuery.event.triggered = indefinido;

					Si (TMP) {
						elem [ontype] = tmp;
					}
				}
			}
		}

		volver event.result;
	},

	expedición: function (event) {

		// Hacer un jQuery.Event escritura desde el objeto de evento nativo
		evento = jQuery.event.fix (evento);

		var i, ret, handleObj, emparejado, j,
			handlerQueue = [],
			args = slice.call (argumentos),
			Manipuladores = (jQuery._data (esto, los "eventos") || {}) [event.type] || [],
			jQuery.event.special especial = [event.type] || {};

		// Utilizar el jQuery.Event solución de opinión en lugar de la (sólo lectura) evento nativa
		args [0] = evento;
		event.delegateTarget = presente;

		// Llamar al gancho preDispatch para el tipo de mapeado, y dejar que la libertad bajo fianza, si se desea
		si (special.preDispatch && special.preDispatch.call (esto, evento) === false) {
			regreso;
		}

		// Determinar los manipuladores
		handlerQueue = jQuery.event.handlers.call (Esto, eventos, controladores);

		// delegados ejecutar primero; es posible que quieran detener la propagación por debajo de nosotros
		i = 0;
		while ((emparejado = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matched.elem;

			j = 0;
			while ((handleObj = matched.handlers [j ++]) &&! event.isImmediatePropagationStopped ()) {

				// Se cumpla la condición debe o bien 1) no tienen ningún espacio de nombres o
				// 2) tienen espacio de nombres (s) un subconjunto o igual a los del caso límite (ambos pueden tener ningún espacio de nombres).
				if (! event.namespace_re || event.namespace_re.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}). || manejar handleObj.handler)
							• Aplicar (matched.elem, args);

					si (r! == undefined) {
						if ((event.result = ret) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// Llamar al gancho postDispatch para el tipo de mapeado
		si (special.postDispatch) {
			special.postDispatch.call (esto, evento);
		}

		volver event.result;
	},

	Manipuladores: function (event), Manipuladores {
		var sel, handleObj, partidos, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			act = event.target;

		// Encuentra los manipuladores de delegado
		// Negro hoyos SVG <uso> árboles de instancia (# 13180)
		// Evitar la falta de clic izquierdo burbujeo en Firefox (# 3861)
		si (delegateCount && && cur.nodeType (! event.button || event.type! == "clic")) {

			/ * Jshint eqeqeq: false * /
			para (; act = presente;! act = || cur.parentNode esto) {
				/ * Jshint eqeqeq: true * /

				// No marque los no-elementos (# 13208)
				// No procesar clics en elementos deshabilitados (# 6911, # 8165, # 11382, # 11764)
				si (=== cur.nodeType 1 && (cur.disabled! == true || event.type! == "clic")) {
					partidos = [];
					for (i = 0; i <delegateCount; i ++) {
						handleObj = manipuladores [i];

						// No entrar en conflicto con las propiedades Object.prototype (# 13203)
						sel = handleObj.selector + "";

						si (partidos [SEL] === indefinidos) {
							partidos [SEL] = handleObj.needsContext?
								jQuery (sel, este) .index (act)> = 0:
								jQuery.find (sel, esto, nula, [act]) .length;
						}
						si (partidos [SEL]) {
							matches.push (handleObj);
						}
					}
					si (matches.length) {
						handlerQueue.push ({elem: cur, manipuladores: Partidos});
					}
				}
			}
		}

		// Añadir los controladores restantes (directamente determinada)
		si (delegateCount <handlers.length) {
			handlerQueue.push ({elem: esto, los manipuladores: handlers.slice (delegateCount)});
		}

		volver handlerQueue;
	},

	fijar: function (event) {
		si (evento [jQuery.expando]) {
			evento de retorno;
		}

		// Crear una copia modificable del objeto de evento y normalizar algunas propiedades
		var i, apoyo, copiar,
			type = event.type,
			originalEvent = evento,
			fixHook = this.fixHooks [tipo];

		if (! fixHook) {
			this.fixHooks [tipo] = = fixHook
				rmouseEvent.test (tipo)? this.mouseHooks:
				rkeyEvent.test (tipo)? this.keyHooks:
				{};
		}
		copiar = fixHook.props? this.props.concat (fixHook.props): this.props;

		evento = new jQuery.Event (originalEvent);

		i = copy.length;
		mientras yo-- ) {
			prop = copiar [i];
			evento [prop] = originalEvent [prop];
		}

		// Ayuda: IE <9
		// Propiedad de destino Fix (# 1925)
		si (event.target!) {
			event.target = originalEvent.srcElement || documento;
		}

		// Ayuda: Chrome 23+, Safari?
		// Objetivo no debe ser un nodo de texto (# 504, # 13143)
		si (=== event.target.nodeType 3) {
			event.target = event.target.parentNode;
		}

		// Ayuda: IE <9
		// Para ratón / eventos clave, metakey == false si no está definida (# 3368, # 11328)
		event.metaKey = !! event.metaKey;

		volver fixHook.filter? fixHook.filter (evento, originalEvent): evento;
	},

	// Incluye algunos apoyos de eventos compartidos por KeyEvent y MouseEvent
	apoyos: "altKey burbujas cancelable ctrlKey currentTarget eventPhase metakey relatedTarget shiftKey vista timeStamp objetivo que" .split ( ""),

	fixHooks: {},

	keyHooks: {
		apoyos: .split "char charCode clave keyCode" ( ""),
		Filtro: function (event, original) {

			// Añade que durante los eventos clave
			si (event.which == null) {
				event.which = original.charCode! = null? original.charCode: original.keyCode;
			}

			evento de retorno;
		}
	},

	mouseHooks: {
		Objetos: "botones botón clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement" .split ( ""),
		Filtro: function (event, original) {
			var cuerpo, eventDoc, doc,
				= botón original.button,
				fromElement = original.fromElement;

			// Calcular pageX / Y si faltan y clientX / Y disponible
			if (! event.pageX == null && original.clientX = null) {
				eventDoc = event.target.ownerDocument || documento;
				doc = eventDoc.documentElement;
				= eventDoc.body cuerpo;

				event.pageX = original.clientX + (doc && && || cuerpo doc.scrollLeft body.scrollLeft || 0) - (doc && || doc.clientLeft cuerpo && || body.clientLeft 0);
				event.pageY = original.clientY + (doc && && || cuerpo doc.scrollTop body.scrollTop || 0) - (doc && && || doc.clientTop cuerpo body.clientTop || 0);
			}

			// Añadir relatedTarget, si es necesario
			if (! event.relatedTarget && fromElement) {
				event.relatedTarget = fromElement === event.target? original.toElement: fromElement;
			}

			// Añade que por clic: 1 === dejaron; 2 === media; 3 === derecha
			// Nota: botón no está normalizado, por lo que no lo uso
			Si (botón! event.which &&! == undefined) {
				event.which = (botón 1 y 1: (botón y 2 de 3: botón (4 y 2:??? 0)));
			}

			evento de retorno;
		}
	},

	especial: {
		carga: {
			// Prevenir desencadena eventos image.load de burbujeo a window.load
			noBubble: true
		},
		atención: {
			// Fuego evento nativo si es posible de manera desenfoque / secuencia de enfoque es correcto
			gatillo: function () {
				si (esto! == safeActiveElement () && this.focus) {
					tratar {
						this.focus ();
						falso retorno;
					} Catch (e) {
						// Ayuda: IE <9
						// Si el error en el enfoque de elemento oculto (# 1486, # 12518),
						// Dejar que .trigger () ejecutar los controladores
					}
				}
			},
			delegateType: "focusin"
		},
		difuminar: {
			gatillo: function () {
				si (esto === safeActiveElement () && this.blur) {
					this.blur ();
					falso retorno;
				}
			},
			delegateType: "focusOut"
		},
		haga clic en: {
			// Para casilla, evento nativa fuego para comprobar el estado será justo
			gatillo: function () {
				si (jQuery.nodeName (esto "entrada") && this.type === "casilla de verificación" && this.click) {
					this.click ();
					falso retorno;
				}
			},

			// Para mantener la coherencia entre navegadores, no dispare .click nativa () en los enlaces
			_default: function (event) {
				volver jQuery.nodeName (event.target, "a");
			}
		},

		beforeunload: {
			postDispatch: function (event) {

				// Ayuda: Firefox 20+
				// Firefox no alerta si el campo returnValue no se ha establecido.
				si (event.result! == indefinido && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simular: función (tipo, elem, acontecimiento, burbuja) {
		// Cuestas en una reunión de donantes para simular una diferente.
		// OriginalEvent falso para evitar stopPropagation del donante, pero si el
		// Evento simulado por defecto impide a continuación, hacemos lo mismo en el donante.
		var e = jQuery.extend (
			nueva jQuery.Event (),
			evento,
			{
				Tipo: tipo,
				isSimulated: true,
				originalEvent: {}
			}
		);
		si (burbuja) {
			jQuery.event.trigger (e, null, elem);
		} Else {
			jQuery.event.dispatch.call (elem, e);
		}
		si (e.isDefaultPrevented ()) {
			event.preventDefault ();
		}
	}
};

jQuery.removeEvent = document.removeEventListener?
	función (elem, tipo, mango) {
		si (elem.removeEventListener) {
			elem.removeEventListener (tipo, manejar, false);
		}
	}:
	función (elem, tipo, mango) {
		var name = "on" + Tipo;

		si (elem.detachEvent) {

			// # 8545, # 7054, evitando pérdidas de memoria para eventos personalizados en IE6-8
			// DetachEvent necesita la propiedad en el elemento, por el nombre de ese evento, para exponer correctamente a GC
			si (typeof elem [nombre] === strundefined) {
				elem [nombre] = null;
			}

			elem.detachEvent (nombre, mango);
		}
	};

jQuery.Event = function (src, utilería) {
	// Permitir creación de instancias y sin la "nueva" palabra clave
	if (! (esto instanceof jQuery.Event)) {
		volver nuevos jQuery.Event (src, apoyos);
	}

	// Objeto de evento
	si (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;

		// Eventos burbujeando el documento pueden haber sido marcados como impedido
		// Por un manejador inferiores en el árbol; reflejar el valor correcto.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === sin definir &&
				// Ayuda: IE <9, Android <4.0
				src.returnValue === falsa?
			returnTrue:
			falso retorno;

	// Tipo de evento
	} Else {
		this.type = src;
	}

	// Poner propiedades previstos expresamente en el objeto de evento
	if (apoyos) {
		jQuery.extend (esto, los apoyos);
	}

	// Crear una marca de tiempo si el evento entrante no tiene una
	this.timeStamp = src && src.timeStamp || jQuery.now ();

	// Marcar como fijo
	esta [jQuery.expando] = true;
};

// JQuery.Event se basa en DOM3 Eventos según lo especificado por las correspondencias con ECMAScript Idioma
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function () {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if (! e) {
			regreso;
		}

		// Si existe preventDefault, ejecutarlo en el evento original
		si (e.preventDefault) {
			e.preventDefault ();

		// Ayuda: IE
		// Establecer lo contrario, la propiedad returnValue del evento original en false
		} Else {
			e.returnValue = false;
		}
	},
	stopPropagation: function () {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if (! e) {
			regreso;
		}
		// Si existe stopPropagation, ejecutarlo en el evento original
		si (e.stopPropagation) {
			e.stopPropagation ();
		}

		// Ayuda: IE
		// Establecer la propiedad cancelBubble del evento original a la verdadera
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function () {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		si (e && e.stopImmediatePropagation) {
			e.stopImmediatePropagation ();
		}

		this.stopPropagation ();
	}
};

// Crear MouseEnter / dejar eventos mouseover el uso de cheques de entrada / salida y hora del evento
jQuery.each ({
	MouseEnter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, La función (orig, fix) {
	jQuery.event.special [orig] = {
		delegateType: fijar,
		bindType: fijar,

		manejar: function (event) {
			ret var,
				target = este,
				= event.relatedTarget relacionados,
				handleObj = event.handleObj;

			// Para mousenter / salir de llamar al controlador si está relacionado está fuera del objetivo.
			// Nota: No se relatedTarget si el ratón hacia la izquierda / entró en la ventana del navegador
			if (! || relacionados (relacionado! == objetivo &&! jQuery.contains (objetivo, relacionado))) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply (Esto, argumentos);
				event.type = punto de referencia;
			}
			ret regresar;
		}
	};
});

// IE presentar delegación
if (!) {support.submitBubbles

	jQuery.event.special.submit = {
		configuración: function () {
			// Sólo se necesita esto para la forma delegado enviar eventos
			si (jQuery.nodeName (esto, "forma")) {
				falso retorno;
			}

			// Lazy-agregar un controlador de presentar cuando una forma descendiente potencialmente puede presentarse
			jQuery.event.add (esto "click._submit keypress._submit", la función (e) {
				// Nombre de nodo de verificación evita un accidente relacionado con el VML en Internet Explorer (# 9807)
				var elem = e.target,
					form = jQuery.nodeName (elem, "entrada") || jQuery.nodeName (elem, "botón")? elem.form: indefinido;
				si (forma &&! jQuery._data (forma, "submitBubbles")) {
					jQuery.event.add (forma, "submit._submit", function (event) {
						event._submit_bubble = true;
					});
					jQuery._data (forma, "submitBubbles", true);
				}
			});
			// Devuelve definirse, ya que no es necesario un detector de eventos
		},

		postDispatch: function (event) {
			// Si formulario se ha enviado por el usuario, el evento de burbujas por el árbol
			si (event._submit_bubble) {
				Eliminar event._submit_bubble;
				si (this.parentNode &&! event.isTrigger) {
					jQuery.event.simulate ( "submit", this.parentNode, acontecimiento, true);
				}
			}
		},

		desmontaje: function () {
			// Sólo se necesita esto para la forma delegado enviar eventos
			si (jQuery.nodeName (esto, "forma")) {
				falso retorno;
			}

			// Eliminar los manipuladores de delegados; CleanData finalmente recoge enviar adjuntos por encima de los manipuladores
			jQuery.event.remove (esto "._submit");
		}
	};
}

// IE delegación de cambio y corrección casilla / radio
if (!) {support.changeBubbles

	jQuery.event.special.change = {

		configuración: function () {

			si (rformElems.test (this.nodeName)) {
				// IE no se dispara el cambio de un cheque / radio hasta que la falta de definición; desencadenarla en tecleo
				// Después de un propertyChange. Coma el desenfoque-cambio en special.change.handle.
				// Esto todavía dispara onchange un segundo tiempo para el check / radio después de la falta de definición.
				si (this.type "casilla de verificación" === === || this.type "radio") {
					jQuery.event.add (esto "propertychange._change", function (event) {
						si (event.originalEvent.propertyName === "marcado") {
							this._just_changed = true;
						}
					});
					jQuery.event.add (esto "click._change", function (event) {
						si (this._just_changed &&! event.isTrigger) {
							this._just_changed = false;
						}
						// Permitir desencadenados, los eventos de cambio simulado (# 11500)
						jQuery.event.simulate ( "cambio", esto, caso, true);
					});
				}
				falso retorno;
			}
			// Delegada evento; lazy-agregar un controlador de cambio en los insumos descendientes
			jQuery.event.add (esto "beforeactivate._change", la función (e) {
				var elem = e.target;

				si (rformElems.test (elem.nodeName) &&! jQuery._data (elem, "changeBubbles")) {
					jQuery.event.add (elem, "change._change", function (event) {
						si (this.parentNode &&! event.isSimulated &&! event.isTrigger) {
							jQuery.event.simulate ( "cambio", this.parentNode, acontecimiento, true);
						}
					});
					jQuery._data (elem, "changeBubbles", true);
				}
			});
		},

		manejar: function (event) {
			var elem = event.target;

			// Swallow eventos de cambio de casilla de verificación nativo / radio, que ya les disparan por encima de
			si (esto! == || elem event.isSimulated || || event.isTrigger (elem.type! == "radio" && elem.type! == "casilla de verificación")) {
				volver event.handleObj.handler.apply (este, argumentos);
			}
		},

		desmontaje: function () {
			jQuery.event.remove (esto "._change");

			volver rformElems.test (this.nodeName!);
		}
	};
}

// Crear "burbujeo" enfocar y desenfocar eventos
if (!) {support.focusinBubbles
	jQuery.each ({enfoque: "focusin", falta de definición: "focusOut"}, la función (orig, fix) {

		// Adjuntar un único controlador de captura de los documentos mientras alguien quiere focusin / focusOut
		manejador var = function (event) {
				jQuery.event.simulate (fix, event.target, jQuery.event.fix (evento), true);
			};

		jQuery.event.special [FIX] = {
			configuración: function () {
				var doc = this.ownerDocument || esta,
					concede = jQuery._data (doc, FIX);

				if (! adjunta) {
					doc.addEventListener (orig, manipulador, true);
				}
				jQuery._data (doc, arreglo, (agregados || 0) + 1);
			},
			desmontaje: function () {
				var doc = this.ownerDocument || esta,
					concede = jQuery._data (doc, fix) - 1;

				if (! adjunta) {
					doc.removeEventListener (orig, manipulador, true);
					jQuery._removeData (doc, fix);
				} Else {
					jQuery._data (doc, arreglar, se une);
				}
			}
		};
	});
}

jQuery.fn.extend ({

	en: la función (tipos, selector, datos, fn, / * * INTERNO / uno) {
		Tipo var, origFn;

		// Los tipos pueden ser un mapa de tipos / manipuladores
		if (typeof tipos === "objeto") {
			// (Tipos de objetos, selector, datos)
			si (typeof selector! == "cadena") {
				// (Tipos de objetos, datos)
				datos = datos || selector;
				selector = indefinido;
			}
			para (tipo de tipos) {
				this.on (tipo, selector, los datos, los tipos de [tipo], uno);
			}
			devolver este;
		}

		si (datos == null && fn == null) {
			// (Tipos, fn)
			fn = selector;
			datos = selector = indefinido;
		} Else if (fn == null) {
			si (selector typeof === "cadena") {
				// (Tipos, selector, fn)
				fn = datos;
				datos = sin definir;
			} Else {
				// (Tipos, datos, fn)
				fn = datos;
				datos = selector;
				selector = indefinido;
			}
		}
		Si (fn === false) {
			fn = returnFalse;
		} Else if (! Fn) {
			devolver este;
		}

		si (una === 1) {
			origFn = fn;
			fn = function (event) {
				// Se puede utilizar un conjunto vacío, ya que el evento contiene información
				jQuery () fuera (evento).;
				volver origFn.apply (este, argumentos);
			};
			// Uso mismo GUID que realiza la llamada puede eliminar utilizando origFn
			fn.guid = origFn.guid || (OrigFn.guid = jQuery.guid ++);
		}
		volver this.each (function () {
			jQuery.event.add (esto, tipos, fn, de datos, de selección);
		});
	},
	uno: function (tipos, selector, datos, fn) {
		volver this.on (tipos, selector, datos, fn, 1);
	},
	OFF: La función (tipos, selector, fn) {
		var handleObj, el tipo;
		si (tipos && && types.preventDefault types.handleObj) {
			// (Evento) envió jQuery.Event
			handleObj = types.handleObj;
			jQuery (types.delegateTarget) .OFF (
				handleObj.namespace? handleObj.origType + "." + HandleObj.namespace: handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			devolver este;
		}
		if (typeof tipos === "objeto") {
			// (Tipo-objeto [, selector])
			para (tipo de tipos) {
				this.off (tipo, selector, tipos [tipo]);
			}
			devolver este;
		}
		si (Selector Selector === === falsa || typeof "función") {
			// (Tipos [,] Lit)
			fn = selector;
			selector = indefinido;
		}
		Si (fn === false) {
			fn = returnFalse;
		}
		volver this.each (function () {
			jQuery.event.remove (esto, tipos, fn, selector);
		});
	},

	desencadenante: la función (tipo, datos) {
		volver this.each (function () {
			jQuery.event.trigger (tipo, datos, este);
		});
	},
	triggerHandler: función (tipo, datos) {
		var = elem esta [0];
		si (elem) {
			volver jQuery.event.trigger (tipo, datos, elem, true);
		}
	}
});


función createSafeFragment (documento) {
	Lista var = nodeNames.split ( "|"),
		safeFrag = document.createDocumentFragment ();

	si (safeFrag.createElement) {
		while (List.length) {
			safeFrag.createElement (
				list.pop ()
			);
		}
	}
	volver safeFrag;
}

nombres de nodo var = "abbr | artículo | lado | audio | BDI | lona | datos | lista de datos | detalles | figcaption | cifra | pie de página |" +
		"Cabecera | hgroup | marca | metros | nav | Salida | progreso | sección | Resumen | tiempo | video",
	rinlinejQuery = / jQuery \ d + = "(nula ?: | \ d +)" / g,
	rnoshimcache = new RegExp ( "<(?:" + + nombres de los nodos ") [\\ s />]", "i"),
	rleadingWhitespace = / ^ \ s + /,
	rxhtmlTag = / <(?! área | br | col | embed | h | img | entrada | enlaces | meta | param) (([\ w:] +) [^>] *) \ /> / gi,
	rtagName = / <([\ w:] +) /,
	rtbody = / <tbody / i,
	? RHTML = / <| & # \ w +; /,
	rnoInnerhtml = / <(guión ?: | estilo | enlace) / i,
	// Comprobado = "marcado" o verificado
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = / ^ $ | \ / (?: java | ECMA) script / i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = / ^ \ s * <! (: \ [| - CDATA \ [| (?: \] \?)] | -)> \ s * $ / g,

	// Tenemos que cerrar estas etiquetas para apoyar XHTML (# 13200)
	wrapMap = {
		opción: [1, "<select múltiple '' múltiples =>", "</ select>"],
		leyenda: [1, "<fieldset>", "</ fieldset>"],
		zona: [1, "<mapa>", "</ map>"],
		param: [1, "<objeto>", "</ object>"],
		culata en T: [1, "<table>", "</ table>"],
		tr: [2, "<table> <tbody>", "</ tbody> </ table>"],
		Col: [2, "<table> <tbody> </ tbody> <colgroup>", "</ colgroup> </ table>"],
		td: [3, "<table> <tbody> <tr>", "</ tr> </ tbody> </ table>"],

		// IE6-8 no puede serializar de enlace, la escritura, el estilo, o cualquier html5 etiquetas (NoScope),
		// A menos envuelto en un div con caracteres no separación en frente de ella.
		_default: support.htmlSerialize? [0, "", ""]: [1, "X <div>", "</ div>"]
	},
	safeFragment = createSafeFragment (documento),
	fragmentDiv = safeFragment.appendChild (document.createElement ( "div"));

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = = wrapMap.tfoot wrapMap.colgroup = = wrapMap.caption wrapMap.thead;
wrapMap.th = wrapMap.td;

función getAll (contexto, etiqueta) {
	elems var, elem,
		i = 0,
		encontrado = typeof context.getElementsByTagName! == strundefined? context.getElementsByTagName (etiqueta || "*"):
			typeof context.querySelectorAll! == strundefined? context.querySelectorAll (etiqueta || "*"):
			indefinido;

	si se encuentra ) {
		para (que se encuentra = [], elems = || context.childNodes contexto;! (elem = elems [i]) = null; i ++) {
			if (! etiqueta || jQuery.nodeName (elem, etiqueta)) {
				found.push (elem);
			} Else {
				jQuery.merge (que se encuentra, getAll (elem, etiqueta));
			}
		}
	}

	variable de devolución === indefinido || && etiqueta jQuery.nodeName (contexto, etiqueta)?
		jQuery.merge ([contexto], que se encuentra):
		encontró;
}

// Se utiliza en buildFragment, fija la propiedad defaultChecked
función fixDefaultChecked (elem) {
	si (rcheckableType.test (elem.type)) {
		= Elem.defaultChecked elem.checked;
	}
}

// Ayuda: IE <8
// La manipulación de tablas requiere un tbody
función manipulationTarget (elem, contenido) {
	volver jQuery.nodeName (elem, "tabla") &&
		jQuery.nodeName (11 content.nodeType == contenido:!? content.firstChild, "tr")?

		elem.getElementsByTagName ( "tbody") [0] ||
			elem.appendChild (elem.ownerDocument.createElement ( "tbody")):
		elem;
}

// Reemplazar / restaurar el atributo tipo de elementos de script para la manipulación segura DOM
función disableScript (elem) {
	elem.type = (jQuery.find.attr (elem, "tipo") == null!) + "/" + elem.type;
	Elem del retorno;
}
función restorescript (elem) {
	partido var = rscriptTypeMasked.exec (elem.type);
	si (el partido) {
		elem.type = partido [1];
	} Else {
		elem.removeAttribute ( "tipo");
	}
	Elem del retorno;
}

// guiones Marcar como ya ha sido evaluado
función setGlobalEval (elems, refElements) {
	elem var,
		i = 0;
	para (; (elem = elems [i]) = null;! i ++) {
		jQuery._data (elem! ", globalEval", refElements || jQuery._data (refElements [i], "globalEval"));
	}
}

función cloneCopyEvent (src, dest) {

	si (dest.nodeType! == 1 ||! jQuery.hasData (src)) {
		regreso;
	}

	Tipo var, I, L,
		OldData = jQuery._data (src),
		curData = jQuery._data (dest, OldData),
		eventos = oldData.events;

	if (eventos) {
		Eliminar curData.handle;
		curData.events = {};

		para (tipo de eventos) {
			for (i = 0, l = eventos [tipo] .length; i <l; i ++) {
				jQuery.event.add (dest, tipo, eventos [tipo] [i]);
			}
		}
	}

	// hacer públicos los datos clonados objeto una copia del original
	si (curData.data) {
		curData.data = jQuery.extend ({}, curData.data);
	}
}

fixCloneNodeIssues función (src, dest) {
	var nombreNodo, correo, los datos;

	// No necesitamos hacer nada por falta de elementos
	si (dest.nodeType! == 1) {
		regreso;
	}

	nodeName = dest.nodeName.toLowerCase ();

	// IE6-8 copia los eventos ligados a través de attachEvent utilizando cloneNode.
	if (! support.noCloneEvent && dest [jQuery.expando]) {
		datos = jQuery._data (dest);

		para (e en data.events) {
			jQuery.removeEvent (dest, e, data.handle);
		}

		// Los datos de eventos se hace referencia en lugar de copiar si la expando se copia también
		dest.removeAttribute (jQuery.expando);
	}

	// IE deja en blanco contenidos al clonar secuencias de comandos, y trata de evaluar el texto establecido recientemente
	si (nombreNodo === "guión" && dest.text! == src.text) {
		disableScript (dest) .text = src.text;
		restorescript (dest);

	// IE6-10 clona incorrectamente hijos de elementos de objeto utilizando classid.
	// IE10 lanza NoModificationAllowedError si el padre es nulo, # 12132.
	} Else if (nombreNodo === "objeto") {
		si (dest.parentNode) {
			dest.outerHTML = src.outerHTML;
		}

		// Este camino parece inevitable en IE9. Cuando se clona un objeto
		// Elemento en IE9, la estrategia outerHTML anterior no es suficiente.
		// Si el src tiene innerHTML y el destino no lo hace,
		// Copiar el src.innerHTML en el dest.innerHTML. # 10324
		si (support.html5Clone && (src.innerHTML &&! jQuery.trim (dest.innerHTML))) {
			dest.innerHTML = src.innerHTML;
		}

	} Else if (nombreNodo === "entrada" && rcheckableType.test (src.type)) {
		// IE6-8 deja de persistir el estado de activación de una casilla de verificación clonado
		// O botón de radio. Lo que es peor, IE6-7 fallar para dar el elemento clonado
		// Un aspecto comprobado si no se establece también el valor defaultChecked

		dest.defaultChecked = = dest.checked src.checked;

		// IE6-7 se confunden y terminan estableciendo el valor de un clonado
		botón de selección para una cadena vacía en lugar de "en la" casilla de verificación // /
		si (dest.value! == src.value) {
			dest.value = src.value;
		}

	// IE6-8 no puede devolver la opción seleccionada en el valor predeterminado seleccionado
	// estatales cuando las opciones de clonación
	} Else if ( "opción" nombreNodo ===) {
		dest.defaultSelected = = dest.selected src.defaultSelected;

	// IE6-8 no puede establecer la defaultValue al valor correcto cuando
	// Clonación de otros tipos de campos de entrada
	} Else if (nombreNodo === "entrada" || nombreNodo === "área de texto") {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend ({
	clon: function (elem, dataAndEvents, deepDataAndEvents) {
		destElements var, nodo, clon, i, srcElements,
			inpage = jQuery.contains (elem.ownerDocument, elem);

		si (jQuery.isXMLDoc support.html5Clone || (elem) ||! rnoshimcache.test ( "<" + + elem.nodeName ">")) {
			clon = elem.cloneNode (true);

		// Es decir, <= 8 correctamente no clon individual, de nodos de elementos desconocidos
		} Else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild (clon = fragmentDiv.firstChild);
		}

		if ((! support.noCloneEvent ||! support.noCloneChecked) &&
				(Elem.nodeType === === 1 || elem.nodeType 11) &&! JQuery.isXMLDoc (elem)) {

			// Evitamos Arden aquí por razones de rendimiento: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll (clon);
			srcElements = getAll (elem);

			// Reparar todas las incidencias de clonación de IE
			for (i = 0; (nodo = srcElements [i]) = null;! i ++) {
				// Asegúrese de que el nodo de destino no es nulo; Correcciones # 9587
				si (destElements [i]) {
					fixCloneNodeIssues (nodo, destElements [i]);
				}
			}
		}

		// Copiar los eventos desde el original a la copia
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll (elem);
				destElements = destElements || getAll (clon);

				for (i = 0;! (nodo = srcElements [i]) = null; i ++) {
					cloneCopyEvent (nodo, destElements [i]);
				}
			} Else {
				cloneCopyEvent (elem, clon);
			}
		}

		// Preservar la escritura de la historia de la evaluación
		destElements = getAll (clon, "script");
		si (destElements.length> 0) {
			setGlobalEval (destElements, inpage && getAll (elem, "script")!);
		}

		destElements = srcElements = nodo = null;

		// Devolver el conjunto clonado
		clon de retorno;
	},

	buildFragment: function (elems, el contexto, las secuencias de comandos, la selección) {
		var j, elem, contiene,
			tmp, etiqueta, tbody, abrigo,
			l = elems.length,

			// Asegurar que un fragmento de seguridad
			segura = createSafeFragment (contexto),

			nodos = [],
			i = 0;

		para (; i <l; i ++) {
			elem = elems [i];

			si (elem elem || === 0) {

				// Añadir nodos directamente
				si (jQuery.type (elem) === "objeto") {
					jQuery.merge (nodos, elem.nodeType [elem]:? elem);

				// Convertir no HTML en un nodo de texto
				} Else if (! Rhtml.test (elem)) {
					nodes.push (context.createTextNode (elem));

				// Convertir HTML en nodos DOM
				} Else {
					tmp = tmp || safe.appendChild (context.createElement ( "div"));

					// Deserializar una representación estándar
					tag = (rtagName.exec (elem) || [ "", ""]) [1] .tolowercase ();
					envuelva = wrapMap [tag] || wrapMap._default;

					tmp.innerHTML = envolver [1] + elem.replace (rxhtmlTag, "<$ 1> </ $ 2>") + envolver [2];

					// Descender a través de envolturas para el contenido correcto
					j = envolver [0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Añadir manualmente el espacio en blanco que conduce eliminado por el IE
					if (! support.leadingWhitespace && rleadingWhitespace.test (elem)) {
						nodes.push (context.createTextNode (rleadingWhitespace.exec (elem) [0]));
					}

					// Eliminar autoinserted <tbody> a partir de fragmentos de tabla de IE
					si (support.tbody!) {

						// Cadena era un <table>, * puede * tener espurios <tbody>
						elem = === etiqueta de "mesa" &&! rtbody.test (elem)?
							tmp.firstChild:

							// Cadena era un desnudo <culata en T> o <tfoot>
							envuelva [1] === "<table>" &&! rtbody.test (elem)?
								tmp:
								0;

						j = elem && elem.childNodes.length;
						while (j--) {
							si (jQuery.nodeName ((tbody = elem.childNodes [j]), "tbody") && tbody.childNodes.length!) {
								elem.removeChild (tbody);
							}
						}
					}

					jQuery.merge (nodos, tmp.childNodes);

					// Reparación # 12392 de WebKit y el IE> 9
					tmp.textContent = "";

					// Reparación # 12392 para oldIE
					while (tmp.firstChild) {
						tmp.removeChild (tmp.firstChild);
					}

					// Recuerda el contenedor de nivel superior para una limpieza adecuada
					tmp = safe.lastChild;
				}
			}
		}

		// Reparación # 11356: elementos claros de fragmento
		Si (TMP) {
			safe.removeChild (tmp);
		}

		// Cambiar defaultChecked de las radios y casillas de verificación
		// A punto de ser anexado al DOM en IE 6/7 (# 8060)
		if (! support.appendChecked) {
			jQuery.grep (getAll (nodos, "entrada"), fixDefaultChecked);
		}

		i = 0;
		while ((elem = nodos [i ++])) {

			// # 4087 - Si los elementos de origen y de destino son los mismos, y esto es
			// Ese elemento, no hacen nada
			si (la selección && jQuery.inArray (elem, la selección)! == -1) {
				continuar;
			}

			contiene = jQuery.contains (elem.ownerDocument, elem);

			// Agregar a fragmentarse
			tmp = getAll (safe.appendChild (elem), "script");

			// Preservar la escritura de la historia de la evaluación
			si (contiene) {
				setGlobalEval (tmp);
			}

			// ejecutables de captura
			if (scripts) {
				j = 0;
				while ((elem = tmp [j ++])) {
					si (rscriptType.test (elem.type || "")) {
						scripts.push (elem);
					}
				}
			}
		}

		tmp = null;

		volver sano;
	},

	CleanData: function (elems, / * interna * / acceptData) {
		var elem, el tipo, la identificación, datos,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			especial = jQuery.event.special;

		para (; (elem = elems [i]) = null;! i ++) {
			si (acceptData || jQuery.acceptData (elem)) {

				id = elem [internalKey];
				Identificación de datos = && caché [id];

				if (datos) {
					if (data.events) {
						para (tipo de data.events) {
							si (especial [tipo]) {
								jQuery.event.remove (elem, tipo);

							// Este es un atajo para evitar la sobrecarga de jQuery.event.remove
							} Else {
								jQuery.removeEvent (elem, tipo, data.handle);
							}
						}
					}

					// Eliminar caché sólo si no se ha quitado todavía por jQuery.event.remove
					si (caché [id]) {

						Eliminar caché [id];

						// IE no nos permite eliminar las propiedades expando de nodos,
						// Ni tiene una función removeAttribute en los nodos del documento;
						// Hay que manejar todos estos casos
						si (deleteExpando) {
							Eliminar elem [internalKey];

						} Else if (typeof elem.removeAttribute! == Strundefined) {
							elem.removeAttribute (internalKey);

						} Else {
							elem [internalKey] = null;
						}

						deletedIds.push (id);
					}
				}
			}
		}
	}
});

jQuery.fn.extend ({
	texto: función (valor) {
		de acceso (esto, la función (valor de retorno) {
			valor de retorno === indefinido?
				jQuery.text (este):
				this.empty () append ((esta [0] && esta [0] documento .ownerDocument ||) .createTextNode (valor)).;
		}, Null, el valor, arguments.length);
	},

	anexar: function () {
		volver this.domManip (argumentos, la función (elem) {
			si (1 this.nodeType === === this.nodeType || 11 || this.nodeType === 9) {
				target = var manipulationTarget (esto, elem);
				target.appendChild (elem);
			}
		});
	},

	Anteponer: function () {
		volver this.domManip (argumentos, la función (elem) {
			si (1 this.nodeType === === this.nodeType || 11 || this.nodeType === 9) {
				target = var manipulationTarget (esto, elem);
				target.insertBefore (elem, target.firstChild);
			}
		});
	},

	antes: function () {
		volver this.domManip (argumentos, la función (elem) {
			si (this.parentNode) {
				this.parentNode.insertBefore (elem, este);
			}
		});
	},

	después: function () {
		volver this.domManip (argumentos, la función (elem) {
			si (this.parentNode) {
				this.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	},

	eliminar: function (selector, keepData / * Sólo para uso interno * /) {
		elem var,
			elems = Selector? jQuery.filter (selector, este): esto,
			i = 0;

		para (; (elem = elems [i]) = null;! i ++) {

			if (! keepData && elem.nodeType === 1) {
				jQuery.cleanData (getAll (elem));
			}

			si (elem.parentNode) {
				si (keepData && jQuery.contains (elem.ownerDocument, elem)) {
					setGlobalEval (getAll (elem, "script"));
				}
				elem.parentNode.removeChild (elem);
			}
		}

		devolver este;
	},

	vacío: function () {
		elem var,
			i = 0;

		para (; (elem = esta [i]) = null;! i ++) {
			// Eliminar nodos de elemento y evitar pérdidas de memoria
			si (elem.nodeType === 1) {
				jQuery.cleanData (getAll (elem, false));
			}

			// Eliminar cualquier resto de nodos
			while (elem.firstChild) {
				elem.removeChild (elem.firstChild);
			}

			// Si se trata de una selección, asegurar que se visualiza vacío (# 12336)
			// Ayuda: IE <9
			si (elem.options && jQuery.nodeName (elem, "seleccionar")) {
				elem.options.length = 0;
			}
		}

		devolver este;
	},

	clon: función (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null? falsas: dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null? dataAndEvents: deepDataAndEvents;

		volver this.map (function () {
			volver jQuery.clone (esto, dataAndEvents, deepDataAndEvents);
		});
	},

	HTML: function (valor) {
		de acceso (esto, la función (valor de retorno) {
			var = elem esta [0] || {},
				i = 0,
				l = this.length;

			si (valor === indefinido) {
				volver elem.nodeType === 1?
					elem.innerHTML.replace (rinlinejQuery ","):
					indefinido;
			}

			// A ver si podemos tomar un atajo y sólo tiene que utilizar innerHTML
			si (valor typeof === "cadena" &&! rnoInnerhtml.test (valor) &&
				(Support.htmlSerialize ||! Rnoshimcache.test (valor)) &&
				(Support.leadingWhitespace ||! RleadingWhitespace.test (valor)) &&
				! WrapMap [(rtagName.exec (valor) || [ "", ""]) [1] .tolowercase ()]) {

				valor = value.replace (rxhtmlTag, "<$ 1> </ $ 2>");

				tratar {
					para (; i <l; i ++) {
						// Eliminar nodos de elemento y evitar pérdidas de memoria
						elem = esta [i] || {};
						si (elem.nodeType === 1) {
							jQuery.cleanData (getAll (elem, false));
							elem.innerHTML = valor;
						}
					}

					elem = 0;

				// Si se utiliza innerHTML lanza una excepción, utilice el método de respaldo
				} Catch (e) {}
			}

			si (elem) {
				. This.empty () append (valor);
			}
		}, Null, el valor, arguments.length);
	},

	Vuelvaa: function () {
		arg var = argumentos [0];

		// Realizar los cambios, en sustitución de cada elemento de contexto con el nuevo contenido
		this.domManip (argumentos, la función (elem) {
			arg = this.parentNode;

			jQuery.cleanData (getAll (este));

			si (arg) {
				arg.replaceChild (elem, este);
			}
		});

		// Fuerza de eliminación si no hay contenido nuevo (por ejemplo, a partir de argumentos vacíos)
		arg && (arg.length || arg.nodeType) volver? esto: this.remove ();
	},

	separar: la función (selector) {
		volver this.remove (selector, true);
	},

	domManip: la función de devolución de llamada, (args) {

		// Acople todas las matrices anidadas
		args = concat.apply ([], args);

		var primero, nodo, hasScripts,
			guiones, doc, fragmento,
			i = 0,
			l = this.length,
			set = este,
			iNoClone = l - 1,
			valor = args [0],
			isFunction = jQuery.isFunction (valor);

		// Podemos fragmentos no cloneNode que contienen comprobarse, en WebKit
		si (isFunction ||
				(L> 1 && valor typeof === "cadena" &&
					! Support.checkClone && rchecked.test (valor))) {
			volver this.each (function (índice) {
				var = auto set.eq (índice);
				si (isFunction) {
					args [0] = value.call (esto, índice, self.html ());
				}
				self.domManip (args, devolución de llamada);
			});
		}

		si (l) {
			= fragmento jQuery.buildFragment (args, esta [0] .ownerDocument, falso, este);
			= primera fragment.firstChild;

			si (=== fragment.childNodes.length 1) {
				fragmento = primero;
			}

			si (primera) {
				guiones = jQuery.map (getAll (fragmento de "script"), disableScript);
				hasScripts = scripts.length;

				// Utilizar el fragmento original para el último elemento en lugar de la primera, ya que puede acabar
				// Vaciamiento de forma incorrecta en ciertas situaciones (# 8070).
				para (; i <l; i ++) {
					nodo = fragmento;

					si (i! == iNoClone) {
						= nodo jQuery.clone (nodo, true, true);

						// Mantener las referencias a las escrituras clonados para la restauración más adelante
						if (hasScripts) {
							jQuery.merge (scripts, getAll (nodo, "script"));
						}
					}

					callback.call (esto [i], nodo, i);
				}

				if (hasScripts) {
					doc = guiones [scripts.length - 1] .ownerDocument;

					// volver a habilitar los scripts
					jQuery.map (scripts, restorescript);

					// Evaluar las secuencias de comandos ejecutables en la inserción primer documento
					for (i = 0; i <hasScripts; i ++) {
						= nodo guiones [i];
						si (rscriptType.test (node.type || "") &&
							! JQuery._data (nodo "globalEval") && jQuery.contains (doc, nodo)) {

							si (node.src) {
								// Opcional AJAX dependencia, pero no va a ejecutar secuencias de comandos si no está presente
								si (jQuery._evalUrl) {
									jQuery._evalUrl (node.src);
								}
							} Else {
								jQuery.globalEval ((node.text || || node.textContent node.innerHTML || "") .Colocar (rcleanScript, ""));
							}
						}
					}
				}

				// Reparación # 11809: Evitar fugas de memoria
				= fragmento de primera = null;
			}
		}

		devolver este;
	}
});

jQuery.each ({
	appendTo: "añadir",
	Prefijopara: "anteponer",
	insertBefore: "antes",
	InsertAfter: "después",
	replaceAll: "Vuelvaa"
}, La función (nombre, original) {
	jQuery.fn [nombre] = function (selector) {
		elems var,
			i = 0,
			ret = [],
			inserte = jQuery (selector),
			última insert.length = - 1;

		para (; i <= último; i ++) {
			elems = i === pasado? esto: this.clone (true);
			jQuery (inserte [i]) [Original] (elems);

			// Los navegadores modernos pueden aplicar colecciones jQuery como matrices, pero necesita un oldIE .get ()
			push.apply (ret, elems.get ());
		}

		volver this.pushStack (retirado);
	};
});


iframe var,
	elemdisplay = {};

/ **
 * Recuperar la pantalla real de un elemento
 * @ Param {string} Nombre del elemento nombreNodo
 * @ Param {Object} objeto Document doc
 * /
// Llamado sólo desde dentro defaultDisplay
actualDisplay función (nombre, doc) {
	var estilo,
		elem = jQuery (doc.createElement (nombre)) .appendTo (doc.body),

		// GetDefaultComputedStyle podría ser utilizado de forma fiable sólo en elemento adjunto
		display = window.getDefaultComputedStyle && (estilo = window.getDefaultComputedStyle (elem [0]))?

			// El uso de este método es una solución temporal (más como optmization) hasta que venga algo mejor,
			// Ya que fue retirado de especificación y admite sólo en FF
			style.display: jQuery.css (elem [0], "pantalla");

	// No tenemos los datos almacenados en el elemento,
	// Fin de utilizar "separar" método de manera tan rápida para deshacerse del elemento
	elem.detach ();

	visualización de retorno;
}

/ **
 * Trate de determinar el valor de visualización por defecto de un elemento
 * @ Param {cadena} nombreNodo
 * /
función defaultDisplay (nodeName) {
	var doc = documento,
		display = elemdisplay [nombreNodo];

	si (la pantalla!) {
		display = actualDisplay (nombreNodo, doc);

		// Si la forma más sencilla falla, leer desde dentro de un iframe
		si (visualización === "ninguna" ||! pantalla) {

			// Usar el iframe ya creado, si es posible
			iframe = (iframe || jQuery ( "<iframe frameborder =" 0 "width =" 0 "height =" 0 "/>")) appendTo (doc.documentElement).;

			// Siempre escriba un nuevo esqueleto HTML para WebKit y Firefox no se atoran en la reutilización
			doc = (iframe [0] .contentWindow || iframe [0] .contentDocument) .document;

			// Ayuda: IE
			doc.write ();
			doc.close ();

			display = actualDisplay (nombreNodo, doc);
			iframe.detach ();
		}

		// Almacena la pantalla predeterminada correcta
		elemdisplay [nombreNodo] = pantalla;
	}

	visualización de retorno;
}


(Function () {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function () {
		si (shrinkWrapBlocksVal! = null) {
			volver shrinkWrapBlocksVal;
		}

		// Se puede cambiar posteriormente si es necesario.
		shrinkWrapBlocksVal = false;

		// Minified: var b, c, d
		var div, el cuerpo del recipiente;

		document.getElementsByTagName cuerpo = ( "cuerpo") [0];
		if (! || cuerpo! body.style) {
			// Prueba disparó demasiado pronto o en un entorno sin soporte, salida.
			regreso;
		}

		// Preparar
		div = document.createElement ( "div");
		= contenedor document.createElement ( "div");
		container.style.cssText = "position: absolute; border: 0; anchura: 0; altura: 0; top: 0; left: -9999px";
		body.appendChild (contenedor) .appendChild (div);

		// Ayuda: IE6
		// Comprobar si los elementos de diseño con envoltorios de plástico a sus hijos
		si (typeof div.style.zoom! == strundefined) {
			// Cambiar CSS: caja de tamaño; monitor; margen; frontera
			div.style.cssText =
				// Ayuda: Firefox <29, Android 2.3
				// Cuadro de dimensionamiento del proveedor de prefijo
				"Webkit-box-calibrado: el contenido de la caja; -moz-box-calibrado: el contenido de la caja;" +
				"Caja de tamaño: el contenido de la caja; display: block; margin: 0; border: 0;" +
				"Padding: 1px; anchura: 1px; zoom: 1";
			div.appendChild (document.createElement ( "div")) .style.width = "5px";
			! ShrinkWrapBlocksVal = div.offsetWidth == 3;
		}

		body.removeChild (contenedor);

		volver shrinkWrapBlocksVal;
	};

}) ();
var rmargin = (/ ^ margen /);

var rnumnonpx = new RegExp ( "^ (" + pnum + ") (?! px) [az%] + $", "i");



GetStyles var, curCSS,
	rPosition = / ^ (arriba | right | Bajo | izquierda) $ /;

si (window.getComputedStyle) {
	GetStyles = function (elem) {
		volver elem.ownerDocument.defaultView.getComputedStyle (elem, null);
	};

	curCSS = function (elem, nombre, calcula) {
		var ancho, anchoMin, anchoMax, ret,
			style = elem.style;

		computado = computarizada || GetStyles (elem);

		// GetPropertyValue sólo es necesaria para .css ( "filtro") en IE9, véase # 12537
		ret = computarizada? computed.getPropertyValue (nombre) || computarizada [nombre]: indefinido;

		si (calculado) {

			si (r === "" &&! jQuery.contains (elem.ownerDocument, elem)) {
				ret = jQuery.style (elem, nombre);
			}

			// Un homenaje al "truco impresionante por Dean Edwards"
			// Chrome <17 y Safari 5.0 utiliza "valor computado" en lugar de "valor usado" para el margen derecha
			// Safari 5.1.7 (al menos) devuelve el porcentaje de un conjunto más amplio de valores, pero la anchura parece ser los píxeles de forma fiable
			// Esto es en contra del proyecto de especificaciones CSSOM: http://dev.w3.org/csswg/cssom/#resolved-values
			si (rnumnonpx.test (RET) && rmargin.test (nombre)) {

				// Recuerda los valores originales
				width = style.width;
				anchoMin = style.minWidth;
				anchoMax = style.maxWidth;

				// Poner en los nuevos valores para obtener un valor calculado a cabo
				style.minWidth = = style.maxWidth style.width = ret;
				ret = computed.width;

				// Revertir los valores modificados
				style.width = ancho;
				style.minWidth = anchoMin;
				style.maxWidth = anchoMax;
			}
		}

		// Ayuda: IE
		// Devuelve el valor IE zIndex como un entero.
		ret retorno === indefinido?
			ret:
			ret + "";
	};
} Else if (document.documentElement.currentStyle) {
	GetStyles = function (elem) {
		volver elem.currentStyle;
	};

	curCSS = function (elem, nombre, calcula) {
		var izquierda, rs, rsLeft, ret,
			style = elem.style;

		computado = computarizada || GetStyles (elem);
		ret = computarizada? computarizada [nombre]: indefinido;

		// Evitar el establecimiento de ret cadena vacía aquí
		// Por lo que no el valor predeterminado Auto
		si (r == null && && estilo de estilo de [nombre]) {
			ret = estilo de [nombre];
		}

		// Desde el truco impresionante por Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// Si no estamos tratando con un número regular de píxeles
		// Pero un número que tiene un final extraño, tenemos que convertirlo en píxeles
		// atributos pero no la posición CSS, como los que son proporcionales al elemento padre en vez
		// Y no podemos medir el padre en vez, ya que podría provocar un problema "apilamiento muñecas"
		si (rnumnonpx.test (RET) &&! rposition.test (nombre)) {

			// Recuerda los valores originales
			izquierda = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Poner en los nuevos valores para obtener un valor calculado a cabo
			si (rsLeft) {
				rs.left = elem.currentStyle.left;
			}
			style.left = nombre === "fontSize"? "1 em": ret;
			ret = style.pixelLeft + "px";

			// Revertir los valores modificados
			style.left = izquierda;
			si (rsLeft) {
				rs.left = rsLeft;
			}
		}

		// Ayuda: IE
		// Devuelve el valor IE zIndex como un entero.
		ret retorno === indefinido?
			ret:
			ret + "" || "auto";
	};
}




addGetHookIf función (conditionFn, hookFn) {
	// Define el gancho, comprobaremos en la primera ejecución, si es realmente necesario.
	regreso {
		obtener: function () {
			condición var = conditionFn ();

			Si (null == condición) {
				// La prueba no estaba preparada en este punto; atornille el gancho este momento
				// Pero puedes volver a intentarlo cuando se necesite la próxima vez.
				regreso;
			}

			si (condición) {
				// Gancho no es necesario (o no es posible utilizarlo debido a la falta de dependencia),
				// Eliminarlo.
				// Dado que no existen otros ganchos para marginRight, retire todo el objeto.
				Eliminar this.get;
				regreso;
			}

			// Hook necesario; redefinir de manera que la prueba de apoyo no se ejecuta de nuevo.

			volver (this.get = hookFn) • Aplicar (Esto, argumentos);
		}
	};
}


(Function () {
	// Minified: var b, c, d, e, f, g, h, i
	var div, estilo, una, pixelPositionVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal;

	// Preparar
	div = document.createElement ( "div");
	div.innerHTML = "<tipo 'casilla' de entrada = /> </ link> <table> </ table> <a href='/a'> un </a>";
	a = div.getElementsByTagName ( "a") [0];
	estilo = a a.style &&;

	// fin anticipado en limitado (sin navegador) ambientes
	si (estilo!) {
		regreso;
	}

	style.cssText = "float: left; opacidad: 0.5";

	// Ayuda: IE <9
	// Asegúrese de que existe elemento de opacidad (en oposición a un filtrado)
	support.opacity = style.opacity === "0.5";

	// Verificar estilo existencia de flotación
	// (IE utiliza styleFloat en lugar de cssFloat)
	support.cssFloat = !! style.cssFloat;

	div.style.backgroundClip = "Content-caja";
	div.cloneNode (verdadero) .style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "el contenido de la caja";

	// Ayuda: Firefox <29, Android 2.3
	// Cuadro de dimensionamiento del proveedor de prefijo
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
		style.WebkitBoxSizing === "";

	jQuery.extend (apoyo, {
		reliableHiddenOffsets: function () {
			si (reliableHiddenOffsetsVal == null) {
				computeStyleTests ();
			}
			volver reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function () {
			si (boxSizingReliableVal == null) {
				computeStyleTests ();
			}
			volver boxSizingReliableVal;
		},

		pixelPosition: function () {
			si (pixelPositionVal == null) {
				computeStyleTests ();
			}
			volver pixelPositionVal;
		},

		// Ayuda: Android 2.3
		reliableMarginRight: function () {
			si (reliableMarginRightVal == null) {
				computeStyleTests ();
			}
			volver reliableMarginRightVal;
		}
	});

	computeStyleTests function () {
		// Minified: var b, c, d, j
		var div, cuerpo, contenedor, contenido;

		document.getElementsByTagName cuerpo = ( "cuerpo") [0];
		if (! || cuerpo! body.style) {
			// Prueba disparó demasiado pronto o en un entorno sin soporte, salida.
			regreso;
		}

		// Preparar
		div = document.createElement ( "div");
		= contenedor document.createElement ( "div");
		container.style.cssText = "position: absolute; border: 0; anchura: 0; altura: 0; top: 0; left: -9999px";
		body.appendChild (contenedor) .appendChild (div);

		div.style.cssText =
			// Ayuda: Firefox <29, Android 2.3
			// Cuadro de dimensionamiento del proveedor de prefijo
			"Webkit-box-dimensionamiento: frontera-box; -moz-box-dimensionamiento: frontera-box"; +
			"Caja-dimensionamiento: frontera-box; display: block; margin-top: 1%; la parte superior: 1%;" +
			"Border: 1px; padding: 1px; anchura: 4 píxeles; position: absolute";

		// Ayuda: IE <9
		// Supongamos que los valores razonables en ausencia de getComputedStyle
		pixelPositionVal = boxSizingReliableVal = false;
		reliableMarginRightVal = true;

		// Buscar getComputedStyle por lo que este código no se ejecuta en IE <9.
		si (window.getComputedStyle) {
			pixelPositionVal = (window.getComputedStyle (div, null) || {}) .TOP == "1%"!;
			boxSizingReliableVal =
				(Window.getComputedStyle (div, null) || {width: "4PX"}) .width === "4PX";

			// Ayuda: Android 2.3
			// Div con un ancho explícita y sin margen derecha de forma incorrecta
			// Obtiene margen derecha calculada en base a la anchura de recipiente (# 3333)
			// WebKit Bug 13343 - getComputedStyle devuelve un valor incorrecto para el margen derecha
			contenidos = div.appendChild (document.createElement ( "div"));

			// Cambiar CSS: caja de tamaño; monitor; margen; frontera; relleno
			contents.style.cssText = = div.style.cssText
				// Ayuda: Firefox <29, Android 2.3
				// Cuadro de dimensionamiento del proveedor de prefijo
				"Webkit-box-calibrado: el contenido de la caja; -moz-box-calibrado: el contenido de la caja;" +
				"Caja de tamaño: el contenido de la caja; display: block; margin: 0; border: 0; padding: 0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				! ParseFloat (((window.getComputedStyle contenidos, nulos) || {}) .marginRight);
		}

		// Ayuda: IE8
		// Comprobar si celdas de la tabla todavía tienen offsetWidth / Altura cuando se hayan establecido
		// Para mostrar: ninguno y todavía hay otras celdas de la tabla visible en una
		// Fila de la tabla; si es así, offsetWidth / altura no son fiables para su uso cuando
		// Determinar si un elemento se ha ocultado directamente utilizando
		// Display: none (que todavía es seguro de usar compensaciones si un elemento primario es
		// oculto; gafas de seguridad Don y ver el bug # 4512 para más información).
		div.innerHTML = "<table> <tr> <td> </ td> <td> t </ td> </ tr> </ table>";
		contenidos div.getElementsByTagName = ( "TD");
		Contenido [0] .style.cssText = "margin: 0; border: 0; padding: 0; display: none";
		reliableHiddenOffsetsVal = Contenido [0] .offsetHeight === 0;
		si (reliableHiddenOffsetsVal) {
			Contenido [0] .style.display = "";
			Contenido [1] .style.display = "none";
			reliableHiddenOffsetsVal = Contenido [0] .offsetHeight === 0;
		}

		body.removeChild (contenedor);
	}

}) ();


// Un método para el bombeo de forma rápida en las propiedades CSS de entrada / salida para obtener cálculos correctos.
jQuery.swap = function (elem, opciones de devolución de llamada, args) {
	var ret, nombre,
		edad = {};

	// Recuerda los viejos valores, y inserte las nuevas
	para (nombre en opciones) {
		edad [nombre] = elem.style [nombre];
		elem.style [nombre] = opciones de [nombre];
	}

	ret = callback.apply (elem, args || []);

	// Revertir los viejos valores
	para (nombre en opciones) {
		elem.style [nombre] = edad [nombre];
	}

	ret regresar;
};


var
		Ralpha = / alfa \ ([^)] * \) / i,
	ropacity = / opacidad \ s * = \ s * ([^)] *) /,

	// Swappable si la pantalla no es ninguno o se inicia con mesa excepto "tabla", "table-cell", o "tabla-caption"
	// Aquí para ver los valores de indicación: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp ( "^ (" + pnum + ") (. *) $", "i"),
	rrelNum = new RegExp ( "^ ([+ -]) = (" + pnum + ")", "i"),

	cssShow = {position: "absoluta", la visibilidad: "oculta", la pantalla: "bloque"},
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "MS"];


// Devuelve una propiedad CSS asignada a una propiedad potencialmente proveedor prefijado
función vendorPropName (estilo, nombre) {

	// Acceso directo para nombres que no se prefija proveedor
	si (nombre de estilo) {
		Nombre del retorno;
	}

	// Comprobar si hay nombres de proveedores prefijado
	var capName = name.charAt (0) .toUpperCase () + name.slice (1),
		origName = nombre,
		i = cssPrefixes.length;

	mientras yo-- ) {
		name = cssPrefixes [i] + capName;
		si (nombre de estilo) {
			Nombre del retorno;
		}
	}

	volver origName;
}

MostrarOcultar función (elementos, espectáculo) {
	var pantalla, elem, oculto,
		Los valores = [],
		index = 0,
		longitud = elements.length;

	para (; index <longitud; índice ++) {
		elem = elementos [índice];
		si (elem.style!) {
			continuar;
		}

		Los valores [índice] = jQuery._data (elem, "olddisplay");
		display = elem.style.display;
		si (mostrar) {
			// Cambiar la visualización en línea de este elemento para saber si es
			// Está oculto por las normas o no en cascada
			if (! valores [Índice] && pantalla === "ninguna") {
				elem.style.display = "";
			}

			// Fije los elementos que han sido anulados con display: none
			// En una hoja de estilo a lo que el navegador por defecto es de estilo
			// Para tal elemento
			si (elem.style.display === "" && isHidden (elem)) {
				Los valores [índice] = jQuery._data (elem, "olddisplay", defaultDisplay (elem.nodeName));
			}
		} Else {
			hidden = isHidden (elem);

			si (pantalla de visualización &&! == "ninguna" ||! oculto) {
				jQuery._data (elem, "olddisplay", oculto pantalla:? jQuery.css (elem, "pantalla"));
			}
		}
	}

	// Establecer la pantalla de la mayoría de los elementos en un segundo bucle
	// Para evitar el reflujo constante
	para (índice = 0; index <longitud; índice ++) {
		elem = elementos [índice];
		si (elem.style!) {
			continuar;
		}
		if (! espectáculo || elem.style.display === "ninguna" || elem.style.display === "") {
			elem.style.display = mostrar? Los valores [índice] || "" : "ninguna";
		}
	}

	elementos de retorno;
}

función setPositiveNumber (elem, valor, reste) {
	var = coincide rnumsplit.exec (valor);
	partidos de vuelta?
		// Guardia contra indefinido "sustraer", por ejemplo, cuando se utiliza como en cssHooks
		Math.max (0, coincide con [1] - (restar || 0)) + (coincidencias [2] || "px"):
		valor;
}

función augmentWidthOrHeight (elem, nombre, adicional, isBorderBox, estilos) {
	var i = === extra ( "frontera" isBorderBox:? "contenido")?
		// Si ya tenemos la medida correcta, evitar el aumento
		4:
		// Inicializar lo contrario para las propiedades horizontales o verticales
		nombrar === "ancho"? 1: 0,

		val = 0;

	para (; i <4; i + = 2) {
		// Ambos modelos de cajas excluyen margen, por lo que añadir que si queremos que
		si (extra === "margen") {
			val = + jQuery.css (elem, extra + cssExpand [i], verdaderos, estilos);
		}

		si (isBorderBox) {
			// Frontera-box incluye el relleno, por lo que eliminar si queremos que el contenido
			si (extra === "contenido") {
				val - = jQuery.css (elem, "relleno" + cssExpand [i], verdaderos, estilos);
			}

			// En este punto, extra no es la frontera ni margen, por lo que eliminar fronteras
			si (extra! == "margen") {
				val - = jQuery.css (elem, "frontera" + cssExpand [i] + "Ancho", verdaderos, estilos);
			}
		} Else {
			// En este punto, extra no es el contenido, por lo que añadir el relleno
			val = + jQuery.css (elem, "relleno" + cssExpand [i], verdaderos, estilos);

			// En este punto, extra no es ni el contenido de relleno, por lo que añadir frontera
			si (extra! == "relleno") {
				val = + jQuery.css (elem, "frontera" + cssExpand [i] + "Ancho", verdaderos, estilos);
			}
		}
	}

	volver val;
}

función getWidthOrHeight (elem, nombre, extra) {

	// Inicia con la propiedad de desplazamiento, que es equivalente al valor de la caja frontera
	var valueIsBorderBox = true,
		val = nombre === "ancho"? elem.offsetWidth: elem.offsetHeight,
		estilos = GetStyles (elem),
		isBorderBox = support.boxSizing && jQuery.css (elem, "boxSizing", falsos, estilos) === "border-box";

	// Algunos elementos no html devuelven indefinido para offsetWidth, por lo que comprobar NULL / indefinido
	// SVG - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	si (val <= 0 || val == null) {
		// Caer de nuevo a computado css entonces no cotizados, si es necesario
		val = curCSS (elem, nombre, estilos);
		si (val <0 || val == null) {
			val = elem.style [nombre];
		}

		// Unidad computarizada no es píxeles. Deténgase aquí y volver.
		si (rnumnonpx.test (val)) {
			volver val;
		}

		// Necesitamos el cheque por el estilo en el caso de un navegador que devuelve valores poco fiables
		// Para getComputedStyle silencio cae de nuevo a la elem.style fiable
		valueIsBorderBox = isBorderBox && (support.boxSizingReliable () || val === elem.style [nombre]);

		// Normalizar "", auto, y prepararse para el suplemento
		val = parseFloat (val) || 0;
	}

	// Utilizar el modelo de caja de dimensionamiento activa para añadir / restar estilos irrelevantes
	retorno (val +
		augmentWidthOrHeight (
			elem,
			nombre,
			|| adicional (? "Frontera" isBorderBox: "contenido"),
			valueIsBorderBox,
			estilos
		)
	) + "Px";
}

jQuery.extend ({
	// Añadir ganchos en las propiedades de estilo para anular el valor por defecto
	// Comportamiento de obtener y establecer una propiedad de estilo
	cssHooks: {
		opacidad: {
			obtener: function (elem, computada) {
				si (calculado) {
					// Siempre debemos obtener un número de vuelta de la opacidad
					var ret = curCSS (elem, "opacidad");
					ret volver === ""? "1": ret;
				}
			}
		}
	},

	// No añada automáticamente "px" a estas propiedades posiblemente-unitless
	cssNumber: {
		"ColumnCount": true,
		"FillOpacity": true,
		"FlexGrow": true,
		"FlexShrink": true,
		"FontWeight": true,
		"LineHeight": true,
		"Opacidad": true,
		"Orden": true,
		"huérfanos": true,
		"viudas": true,
		"ZIndex": true,
		"Zoom": true
	},

	// Añadir en propiedades cuyos nombres desea fijar antes
	// Configurar u obtener el valor
	cssProps: {
		// Normalizar la propiedad CSS float
		"Flotar": support.cssFloat? "CssFloat": "styleFloat"
	},

	// Obtener y establecer la propiedad de estilo en un nodo DOM
	estilo: function (elem, nombre, valor, extra) {
		// No establezca los estilos en los nodos de texto y comentario
		if (! elem || 3 || elem.nodeType === === elem.nodeType 8 ||! elem.style) {
			regreso;
		}

		// Asegurarnos de que estamos trabajando con el nombre correcto
		var ret, tipo, ganchos,
			origName = jQuery.camelCase (nombre),
			style = elem.style;

		name = jQuery.cssProps [origName] || (JQuery.cssProps [origName] = vendorPropName (estilo, origName));

		// Obtiene el gancho para la versión con el prefijo
		// Seguido de la versión sin prefijo
		ganchos = jQuery.cssHooks [nombre] || jQuery.cssHooks [origName];

		// Comprobar si estamos estableciendo un valor
		si (valor == undefined) {
			type = valor typeof;

			// Convertir cadenas de números relativos (+ = o - =) a números relativos. # 7345
			Si (tipo === "cadena" && (r = rrelNum.exec (valor))) {
				valor = (r [1] + 1) * ret [2] + parseFloat (jQuery.css (elem, nombre));
				// Corrige el bug # 9237
				type = "número";
			}

			// Asegúrese de que los valores nulos y Nan no están ajustadas. Ver: # 7116
			si (valor == null || valor! == valor) {
				regreso;
			}

			// Si un número se aprobó en, añadir 'px' a la (a excepción de ciertas propiedades CSS)
			Si (tipo === "número" &&! jQuery.cssNumber [origName]) {
				valor = + "px";
			}

			// # 8908 Correcciones, se puede hacer más correctamente especificando el set en cssHooks,
			// Pero significaría para definir ocho (para cada propiedad problemática) idénticas funciones
			if (! support.clearCloneStyle && valor === "" && name.indexOf ( "fondo") === 0) {
				estilo de [nombre] = "hereda";
			}

			// Si se proporcionó un gancho, utilice ese valor, si no acaba de establecer el valor especificado
			if (! ganchos ||! ( "set" en ganchos) || (valor = hooks.set (elem, valor, extra))! == undefined) {

				// Ayuda: IE
				// Swallow errores de valores CSS válidos '' (# 5509)
				tratar {
					estilo de [nombre] = valor;
				} Catch (e) {}
			}

		} Else {
			// Si un gancho fue proporcionada obtener el valor no calculado a partir de ahí
			si ganchos (&& "get" en ganchos && (r = hooks.get (elem, falsa, extra))! == undefined) {
				ret regresar;
			}

			// De lo contrario, acaba de obtener el valor del objeto de estilo
			estilo de [nombre] volver;
		}
	},

	CSS: function (elem, nombre, adicional, estilos) {
		var num, val, ganchos,
			origName = jQuery.camelCase (nombre);

		// Asegurarnos de que estamos trabajando con el nombre correcto
		name = jQuery.cssProps [origName] || (JQuery.cssProps [origName] = vendorPropName (elem.style, origName));

		// Obtiene el gancho para la versión con el prefijo
		// Seguido de la versión sin prefijo
		ganchos = jQuery.cssHooks [nombre] || jQuery.cssHooks [origName];

		// Si un gancho fue proporcionada obtener el valor calculado a partir de ahí
		si ganchos (&& "get" en ganchos) {
			val = hooks.get (elem, cierto, extra);
		}

		// De lo contrario, si una forma de obtener el valor calculado existe, que el uso
		si (val === indefinido) {
			val = curCSS (elem, nombre, estilos);
		}

		// Convertir "normal" con el valor calculado
		si (val === "normal" && nombre en cssNormalTransform) {
			val = cssNormalTransform [nombre];
		}

		// Retorno, la conversión a número si forzado o se proporcionó un calificador y Val se ve numérica
		si (extra === "" || adicional) {
			num = parseFloat (val);
			volver === adicional cierto || jQuery.isNumeric (num)? num || 0: val;
		}
		volver val;
	}
});

jQuery.each ([ "altura", "ancho"], la función (i, nombre) {
	jQuery.cssHooks [nombre] = {
		obtener: function (elem, computado, extra) {
			si (calculado) {
				// Ciertos elementos pueden tener información dimensión si nos mostramos de forma invisible ellas
				// Sin embargo, debe tener un estilo de visualización actual que se beneficiaría de esta
				volver rdisplayswap.test (jQuery.css (elem, "pantalla")) && elem.offsetWidth === 0?
					jQuery.swap (elem, cssShow, function () {
						volver getWidthOrHeight (elem, nombre, extra);
					}):
					getWidthOrHeight (elem, nombre, extra);
			}
		},

		set: function (elem, valor adicional) {
			estilos var = && GetStyles extra (elem);
			volver setPositiveNumber (elem, valor adicional?
				augmentWidthOrHeight (
					elem,
					nombre,
					extra,
					support.boxSizing && jQuery.css (elem, "boxSizing", falsos, estilos) === "frontera-box",
					estilos
				): 0
			);
		}
	};
});

si (support.opacity!) {
	jQuery.cssHooks.opacity = {
		obtener: function (elem, computada) {
			// IE utiliza filtros para la opacidad
			volver Se ropacity.test ((calculado && elem.currentStyle elem.currentStyle.filter:? elem.style.filter) || "")?
				(0,01 * parseFloat (RegExp $ 1).) + "":
				computarizada? "1": "";
		},

		set: function (elem, valor) {
			estilo var = elem.style,
				currentStyle = elem.currentStyle,
				opacidad = jQuery.isNumeric (valor)? "Alfa (opacidad =" + valor * 100 + ")": "",
				filtrar = currentStyle && currentStyle.filter || style.filter || "";

			// IE tiene problemas con la opacidad si no tiene el diseño
			// Forzarlo ajustando el nivel de zoom
			style.zoom = 1;

			// Si el valor de opacidad a 1, y no existen otros filtros - intento de eliminar filtro de atributos # 6652
			// Si el valor === "", a continuación, eliminar la opacidad en línea # 12685
			if ((valor> = 1 || valor === "") &&
					jQuery.trim (filter.replace (Ralpha, "")) === "" &&
					style.removeAttribute) {

				// Configuración style.filter en null, "" y "" todavía dejan "filtro" en el cssText
				// Si el "filtro" está presente en todos, ClearType está deshabilitada, queremos evitar esto
				// Style.removeAttribute es decir, sólo, pero lo que al parecer es esta ruta de código ...
				style.removeAttribute ( "filtrar");

				// Si no hay un estilo filtro aplicado en una regla CSS u opacidad línea definida, hemos terminado
				si (valor === "" || currentStyle &&! currentStyle.filter) {
					regreso;
				}
			}

			// de lo contrario, establecer nuevos valores de filtro
			style.filter = ralpha.test (filtro)?
				filter.replace (Ralpha, opacidad):
				Filtro + "" + opacidad;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf (support.reliableMarginRight,
	función (elem, computarizada) {
		si (calculado) {
			// WebKit Bug 13343 - getComputedStyle devuelve un valor incorrecto para el margen derecha
			// Trabajo alrededor fijando temporalmente la visualización de elementos de inline-block
			volver jQuery.swap (elem, { "pantalla": "inline-block"},
				curCSS, [elem, "marginRight"]);
		}
	}
);

// Estos ganchos son utilizados por animado a ampliar propiedades
jQuery.each ({
	margen: "",
	relleno: "",
	ancho del borde"
}, La función (prefijo, sufijo) {
	jQuery.cssHooks [prefijo + sufijo] = {
		ampliar: la función (valor) {
			var i = 0,
				= {} Expandidas,

				// Asume un solo número, si no una cadena
				= Valor partes typeof === "cadena"? value.split ( ""): [valor];

			para (; i <4; i ++) {
				expandida [+ prefijo cssExpand [i] + sufijo] =
					partes [i] || partes [i - 2] || partes [0];
			}

			volver expandida;
		}
	};

	if (! rmargin.test (prefijo)) {
		jQuery.cssHooks [prefijo + sufijo] = .set setPositiveNumber;
	}
});

jQuery.fn.extend ({
	CSS: function (nombre, valor) {
		de acceso (esto, la función (elem, nombre, el valor de retorno) {
			var estilos, len,
				mapa = {},
				i = 0;

			si (jQuery.isArray (nombre)) {
				estilos = GetStyles (elem);
				len = name.length;

				para (; i <len; i ++) {
					mapa [nombre [i]] = jQuery.css (elem, nombre [i], falsos, estilos);
				}

				Mapa de retorno;
			}

			valor de volver! == indefinido?
				jQuery.style (elem, nombre, valor):
				jQuery.css (elem, nombre);
		}, Nombre, valor, arguments.length> 1);
	},
	espectáculo: function () {
		volver MostrarOcultar (esto, true);
	},
	ocultar: function () {
		volver MostrarOcultar (este);
	},
	basculante: function (estado) {
		si (typeof estado === "booleano") {
			Estado de volver? this.show (): this.hide ();
		}

		volver this.each (function () {
			si (isHidden (este)) {
				jQuery (este) .show ();
			} Else {
				jQuery (este) .hide ();
			}
		});
	}
});


funcionar Tween (elem, opciones, apoyo, extremo, aliviando) {
	volver nueva Tween.prototype.init (elem, opciones, apoyo, extremo, aliviando);
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function (elem, opciones, apoyo, extremo, facilitando, unidad) {
		this.elem = elem;
		this.prop = puntal;
		this.easing = flexibilización || "oscilación";
		this.options = opciones;
		this.start = = this.now this.cur ();
		this.end = final;
		this.unit = unidad || (JQuery.cssNumber [prop] "": "px"?);
	},
	cur: function () {
		ganchos var = Tween.propHooks [this.prop];

		volver ganchos && hooks.get?
			hooks.get (este):
			Tween.propHooks._default.get (this);
	},
	ejecutar: la función (por ciento) {
		var alivió,
			ganchos = Tween.propHooks [this.prop];

		si (this.options.duration) {
			this.pos = = aliviaron jQuery.easing [this.easing] (
				por ciento, this.options.duration * por ciento, 0, 1, this.options.duration
			);
		} Else {
			this.pos = = aliviaron por ciento;
		}
		this.now = (this.end - this.start) * + aliviado this.start;

		si (this.options.step) {
			this.options.step.call (this.elem, this.now, este);
		}

		si (ganchos) && hooks.set {
			hooks.set (this);
		} Else {
			Tween.propHooks._default.set (this);
		}
		devolver este;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_defecto: {
		obtener: function (interpolación) {
			var result;

			si (tween.elem [tween.prop]! = null &&
				(! Tween.elem.style || tween.elem.style [tween.prop] == null)) {
				volver tween.elem [tween.prop];
			}

			// Pasar una cadena vacía como un 3er parámetro para Css serán automáticamente
			// Intentar una parseFloat y el repliegue a una cadena si falla el análisis sintáctico
			// Así, los valores simples como "10px" se analizan en Float.
			// valores complejos tales como "rotar (1 rad)" se devuelven como es.
			resultado = jQuery.css (tween.elem, tween.prop, "");
			// Las cadenas vacías, null, indefinidos y "auto" se convierten en 0.
			volver! resultar || === resultado "auto"? 0: resultado;
		},
		set: function (interpolación) {
			// Uso de gancho paso para volver compat - cssHook utilizar si es que hay - si es usar .style
			// Disponibles y utilizar las propiedades de fricción cuando estén disponibles
			si (jQuery.fx.step [tween.prop]) {
				jQuery.fx.step [tween.prop] (interpolación);
			} Else if (tween.elem.style && (tween.elem.style [jQuery.cssProps [tween.prop]]! = Null || jQuery.cssHooks [tween.prop])) {
				jQuery.style (tween.elem, tween.prop, tween.now + tween.unit);
			} Else {
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
};

// Ayuda: IE <= 9
// Enfoque basado en pánico a poner las cosas en los nodos desconectados

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function (interpolación) {
		si (tween.elem.nodeType && tween.elem.parentNode) {
			tween.elem [tween.prop] = tween.now;
		}
	}
};

jQuery.easing = {
	lineal: función (p) {
		p regresar;
	},
	oscilación: function (p) {
		devolver 0,5 - Math.cos (p * Math.PI) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Volver Compat <punto 1.8 de extensión
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = / ^ (?: basculante | mostrar | ocultar) $ /,
	rfxnum = new RegExp ( "^ (?: ([+ -]) = |) (" + pnum + ") ([az] *%) $", "i"),
	RRUN = / queueHooks $ /,
	animationPrefilters = [defaultPrefilter],
	tweeners = {
		"*": [Función (prop, valor) {
			var = entre this.createTween (prop, valor),
				target = tween.cur (),
				partes rfxnum.exec = (valor),
				= unidad de piezas && partes [3] || (JQuery.cssNumber [prop] "?": "Px"),

				// Es necesario partir cómputo del valor de los posibles desajustes de la unidad
				start = (jQuery.cssNumber [prop] || unidad! == "px" && + objetivo) &&
					rfxnum.exec (jQuery.css (tween.elem, prop)),
				escala = 1,
				maxIterations = 20;

			si (inicio && iniciar [3]! == unidad) {
				// confianza de unidades reportadas por jQuery.css
				unidad = Unidad || iniciar [3];

				// Asegúrese de que actualizamos las propiedades de interpolación más adelante
				partes = partes || [];

				// Iterativa aproximada de un punto de partida distinto de cero
				start = + objetivo || 1;

				do {
					// Si iteración anterior llevado a cero, doble hasta que consigamos algo * *
					// Utilizar una cadena para duplicar el factor para que no nos vemos accidentalmente escala como a continuación sin cambios
					escala = escala || "0.5";

					// Ajustar y aplicar
					start = inicio / escala;
					jQuery.style (tween.elem, apoyo, start + unidad);

				// Escala de actualización, la tolerancia cero o NaN de tween.cur ()
				// Y romper el bucle si la escala es sin cambios o perfecto, o si le hemos tenido suficiente
				} While (== escala (escala = tween.cur () / objetivo) && escala == 1 && --maxIterations!);
			}

			// Actualizar las propiedades de interpolación
			si (partes) {
				start = Tween.start = + comenzar || + Objetivo || 0;
				tween.unit = unidad;
				// Si a + = / - = contador fue proporcionada, que estamos haciendo una animación relativa
				tween.end = partes [1]?
					Inicio + (partes [1] + 1) * partes [2]:
					+ Partes [2];
			}

			interpolación de retorno;
		}]
	};

// Las animaciones creadas de forma sincrónica se ejecutarán de forma sincrónica
createFxNow función () {
	setTimeout (function () {
		fxNow = indefinido;
	});
	volver (fxNow = jQuery.now ());
}

// Generar parámetros para crear una animación estándar
GenFX de función (tipo, includeWidth) {
	var que,
		attrs = {height: Tipo},
		i = 0;

	// Si incluimos ancho, valor del paso 1 es hacer todos los valores cssExpand,
	// Si no incluimos ancho, valor de paso es de 2 a saltar sobre Izquierda y Derecha
	includeWidth = includeWidth? 1: 0;
	para (; i <4; i + = 2 - includeWidth) {
		que es = cssExpand [i];
		attrs [+ "margen", que attrs] = [ "relleno" + cual] = tipo;
	}

	si (includeWidth) {
		Tipo attrs.opacity = = attrs.width;
	}

	attrs regresar;
}

createTween función (valor, apoyo, animación) {
	entre var,
		de recogida = (tweeners [prop] || []) .concat (tweeners [ "*"]),
		index = 0,
		longitud = collection.length;
	para (; index <longitud; índice ++) {
		if ((interpolación = colección [índice] .call (animación, apoyo, valor))) {

			// Hemos terminado con esta propiedad
			interpolación de retorno;
		}
	}
}

función defaultPrefilter (elem, puntales, se decanta) {
	/ * Validthis jshint: true * /
	var apoyo, valor, de palanca, tween, ganchos, oldfire, pantalla, checkDisplay,
		anim = este,
		orig = {},
		style = elem.style,
		oculto = elem.nodeType && isHidden (elem),
		DataShow = jQuery._data (elem, "fxshow");

	// Cola de la manija: falsas promesas
	si (opts.queue!) {
		ganchos = jQuery._queueHooks (elem, "FX");
		si (hooks.unqueued == null) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function () {
				if (! hooks.unqueued) {
					oldfire ();
				}
			};
		}
		hooks.unqueued ++;

		anim.always (function () {
			// Hacer esto se asegura de que el manejador completa se llamará
			// Antes de esto completa
			anim.always (function () {
				hooks.unqueued--;
				if (! jQuery.queue (elem, "FX") .length) {
					hooks.empty.fire ();
				}
			});
		});
	}

	// Pase desbordamiento de altura / anchura
	si (elem.nodeType === 1 && ( "altura" en los apoyos || "ancho" en los apoyos)) {
		// Asegúrese de que nada se escapa
		// Registro de todos los atributos de 3 desbordamiento porque el IE no lo hace
		// Cambiar el atributo de desbordamiento cuando Desbordamiento y
		// OverflowY se establece en el mismo valor
		opts.overflow = [style.overflow, style.overflowX, style.overflowY];

		// Establecer propiedad de presentación de inline-block de altura / anchura
		// Animaciones de elementos en línea que están teniendo anchura / altura animados
		display = jQuery.css (elem, "pantalla");

		// Pantalla por defecto de prueba si la pantalla es actualmente "ninguno"
		checkDisplay = === pantalla "ninguno"?
			jQuery._data (elem, "olddisplay") || defaultDisplay (elem.nodeName): pantalla;

		si (checkDisplay === "en línea" && jQuery.css (elem, "flotar") === "ninguna") {

			// elementos a nivel de línea aceptan inline-block;
			// elementos en bloque deben estar en línea con el diseño
			if (! support.inlineBlockNeedsLayout || defaultDisplay (elem.nodeName) === "en línea") {
				style.display = "inline-block";
			} Else {
				style.zoom = 1;
			}
		}
	}

	si (opts.overflow) {
		style.overflow = "oculto";
		if (! support.shrinkWrapBlocks ()) {
			anim.always (function () {
				style.overflow = opts.overflow [0];
				style.overflowX = opts.overflow [1];
				style.overflowY = opts.overflow [2];
			});
		}
	}

	// Mostrar ocultar pase /
	para (prop en los apoyos) {
		valor = apoyos [prop];
		si (rfxtypes.exec (valor)) {
			eliminar los apoyos [prop];
			de palanca basculante = || === valor "alternar";
			si (valor === (oculto "ocultar": "mostrar")) {

				// Si hay DataShow sobrantes de una piel parado o espectáculo y vamos a proceder con espectáculo, debemos pretender ser ocultado
				si (valor === "espectáculo" && && DataShow DataShow [prop]! == undefined) {
					escondido = true;
				} Else {
					continuar;
				}
			}
			orig [prop] = DataShow && DataShow [prop] || jQuery.style (elem, apoyo);

		// Cualquier valor que no sea fx nos impide restaurar el valor de visualización original
		} Else {
			display = indefinido;
		}
	}

	if (! jQuery.isEmptyObject (orig)) {
		si (data show) {
			si ( "oculto" en DataShow) {
				hidden = dataShow.hidden;
			}
		} Else {
			DataShow = jQuery._data (elem, "fxshow", {});
		}

		// Estado de la tienda si su conmutador - permite .Stop () alternar () "revertir".
		si (conmutación) {
			dataShow.hidden = hidden!;
		}
		si (oculto) {
			jQuery (elem) .show ();
		} Else {
			anim.done (function () {
				jQuery (elem) .hide ();
			});
		}
		anim.done (function () {
			prop var;
			jQuery._removeData (elem, "fxshow");
			para (prop en original) {
				jQuery.style (elem, apoyo, orig [prop]);
			}
		});
		para (prop en original) {
			interpolación = createTween (oculto DataShow [prop]: 0, apoyo, anim?);

			if (! (prop en DataShow)) {
				DataShow [prop] = Tween.start;
				si (oculto) {
					tween.end = Tween.start;
					Tween.start = prop === "ancho" || prop === "altura"? 1: 0;
				}
			}
		}

	// Si se trata de un NOOP como .hide (). Ocultar (), restaurar un valor de visualización sobrescribe
	} Else if ((=== pantalla "ninguna" defaultDisplay (elem.nodeName):? Pantalla) === "en línea") {
		style.display = pantalla;
	}
}

función propFilter (puntales, specialEasing) {
	Índice var, nombre, aliviando, valor, ganchos;

	// CamelCase, specialEasing y ampliar pase cssHook
	para (índice de apoyos) {
		name = jQuery.camelCase (índice);
		flexibilización = specialEasing [nombre];
		valor = apoyos [index];
		si (jQuery.isArray (valor)) {
			flexibilización = valor [1];
			valor = apoyos [índice] = valor [0];
		}

		si (índice! == nombre) {
			apoyos [nombre] = valor;
			eliminar los apoyos [index];
		}

		ganchos = jQuery.cssHooks [nombre];
		si ganchos (&& "expandir" en ganchos) {
			valor = hooks.expand (valor);
			eliminar los apoyos [nombre];

			// No del todo $ .extend, este planteo sobrescribir las claves que ya están presentes.
			// También - la reutilización de "índice" desde arriba porque tenemos el "nombre" correcta
			para (índice de valor) {
				if (! (índice de apoyos)) {
					apoyos [índice] = valor [índice];
					specialEasing [índice] = aliviando;
				}
			}
		} Else {
			specialEasing [nombre] = aliviando;
		}
	}
}

Animación de función (elem, propiedades, opciones) {
	var result,
		detenido,
		index = 0,
		longitud = animationPrefilters.length,
		diferida = jQuery.Deferred (). Siempre (function () {
			// No coinciden en el elem: Selector de animación
			Eliminar tick.elem;
		}),
		tick = function () {
			si (detenido) {
				falso retorno;
			}
			var = horaActual fxNow || createFxNow (),
				restante = Math.max (0, animation.duration animation.startTime + - horaActual),
				// Arcaica error grave no permitirá que utilicemos 1 - (0,5 || 0) (# 12497)
				temp = restante / animation.duration || 0,
				ciento = 1 - temporal,
				index = 0,
				longitud = animation.tweens.length;

			para (; index <longitud; índice ++) {
				animation.tweens [índice] .run (por ciento);
			}

			deferred.notifyWith (elem, [animación, ciento, restante]);

			si (porcentaje <1 && longitud) {
				volver restante;
			} Else {
				deferred.resolveWith (elem, [animación]);
				falso retorno;
			}
		},
		animación = deferred.promise ({
			elem: elem,
			apoyos: jQuery.extend ({}), propiedades,
			opta: jQuery.extend (verdadera, {specialEasing: {}}, opciones),
			originalProperties: propiedades,
			originalOptions: opciones,
			horaInicio: fxNow || createFxNow (),
			Duración: options.duration,
			preadolescentes: [],
			createTween: function (prop, final) {
				var = entre jQuery.Tween (elem, animation.opts, apoyo, extremo,
						animation.opts.specialEasing [prop] || animation.opts.easing);
				animation.tweens.push (interpolación);
				interpolación de retorno;
			},
			parada: la función (gotoEnd) {
				Índice var = 0,
					// Si vamos a la final, queremos ejecutar todos los preadolescentes
					// De lo contrario nos saltamos esta parte
					longitud = gotoEnd? animation.tweens.length: 0;
				si (detenido) {
					devolver este;
				}
				detenido = true;
				para (; index <longitud; índice ++) {
					animation.tweens [índice] .run (1);
				}

				// Determinación cuando jugamos el último fotograma
				// De lo contrario, rechazar
				si (gotoEnd) {
					deferred.resolveWith (elem, [animación, gotoEnd]);
				} Else {
					deferred.rejectWith (elem, [animación, gotoEnd]);
				}
				devolver este;
			}
		}),
		apoyos = animation.props;

	propFilter (puntales, animation.opts.specialEasing);

	para (; index <longitud; índice ++) {
		resultado = animationPrefilters [índice] .call (animación, elem, apoyos, animation.opts);
		si (resultado) {
			return resultado;
		}
	}

	jQuery.map (puntales, createTween, animación);

	si (jQuery.isFunction (animation.opts.start)) {
		animation.opts.start.call (elem, animación);
	}

	jQuery.fx.timer (
		jQuery.extend (tic, {
			elem: elem,
			anim: animación,
			cola: animation.opts.queue
		})
	);

	// Adjuntar devoluciones de llamada de opciones
	animation.progress retorno (animation.opts.progress)
		.done (animation.opts.done, animation.opts.complete)
		.fail (animation.opts.fail)
		.always (animation.opts.always);
}

jQuery.Animation = jQuery.extend (Animación, {
	tweener: function (puntales, de devolución de llamada) {
		if (jQuery.isFunction (apoyos)) {
			devolución de llamada = apoyos;
			apoyos = [ "*"];
		} Else {
			apoyos = props.split ( "");
		}

		prop var,
			index = 0,
			longitud = props.length;

		para (; index <longitud; índice ++) {
			prop = apoyos [Índice];
			tweeners [prop] = tweeners [prop] || [];
			tweeners [prop] .unshift (devolución de llamada);
		}
	},

	prefiltro: function (devolución de llamada, anteponga) {
		si (anteponer) {
			animationPrefilters.unshift (devolución de llamada);
		} Else {
			animationPrefilters.push (devolución de llamada);
		}
	}
});

jQuery.speed = function (velocidad, lo que facilita, fn) {
	var opt = velocidad && typeof velocidad === "objeto"? jQuery.extend ({}, velocidad): {
		completar: fn || ! Fn && aliviar ||
			jQuery.isFunction && velocidad (velocidad),
		Duración: velocidad,
		aliviando: fn && aliviar || aliviando &&! jQuery.isFunction (alivio) && aliviando
	};

	opt.duration = jQuery.fx.off? 0: typeof opt.duration === "número"? opt.duration:
		opt.duration en jQuery.fx.speeds? jQuery.fx.speeds [opt.duration]: jQuery.fx.speeds._default;

	// Normalizar opt.queue - verdadero / indefinido / null -> "fx"
	si (opt.queue == null || opt.queue === true) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function () {
		si (jQuery.isFunction (opt.old)) {
			opt.old.call (this);
		}

		si (opt.queue) {
			jQuery.dequeue (esto, opt.queue);
		}
	};

	opt regresar;
};

jQuery.fn.extend ({
	fadeTo: function (velocidad, a, facilitando, de devolución de llamada) {

		// Mostrar los elementos ocultos después de ajustar la opacidad a 0
		volver this.filter Css (isHidden) ( "opacidad", 0) .show ()

			// Animar al valor especificado
			. .end () Animar ({opacidad: a}, velocidad, facilitando, de devolución de llamada);
	},
	animar: function (prop, velocidad, facilitando, de devolución de llamada) {
		var = jQuery.isEmptyObject vacío (prop),
			optall = jQuery.speed (velocidad, facilitando, de devolución de llamada),
			doAnimation = function () {
				// Operar en una copia de prop por lo que no se perderá por la flexibilización en la propiedad
				var = anim Animación (esto, jQuery.extend ({}, prop), optall);

				// Animaciones vacíos, o acabado resuelve de inmediato
				if (empty || jQuery._data (esto, "terminar")) {
					anim.stop (true);
				}
			};
			doAnimation.finish = doAnimation;

		volver vacíos || optall.queue === falsa?
			this.each (doAnimation):
			this.queue (optall.queue, doAnimation);
	},
	parada: la función (tipo, clearQueue, gotoEnd) {
		var stopQueue = function (ganchos) {
			parada var = hooks.stop;
			Eliminar hooks.stop;
			stop (gotoEnd);
		};

		si (typeof tipo! == "cadena") {
			gotoEnd = clearQueue;
			clearQueue = tipo;
			type = indefinido;
		}
		si (clearQueue && tipo! == false) {
			this.queue (tipo || "FX", []);
		}

		volver this.each (function () {
			var quitar de la cola = true,
				index = tipo! = tipo nula && + "queueHooks",
				temporizadores = jQuery.timers,
				datos = jQuery._data (este);

			si (índice) {
				si (datos [índice] && datos [índice] .Stop) {
					stopQueue (datos [índice]);
				}
			} Else {
				para (índice de datos) {
					si (datos [índice] && datos [índice] .Stop && rrun.test (índice)) {
						stopQueue (datos [índice]);
					}
				}
			}

			para (índice = timers.length; index--;) {
				si (temporizadores [índice] .ELEM === esta && (tipo == null || temporizadores [índice] .queue === tipo)) {
					temporizadores [índice] .anim.stop (gotoEnd);
					quitar de la cola = false;
					timers.splice (índice, 1);
				}
			}

			// Iniciar la siguiente en la cola si el último paso no fue forzado
			// Temporizadores actualmente llamarán sus devoluciones de llamada completos, que quitar de la cola
			// Pero sólo si fueran gotoEnd
			si (dequeue ||! gotoEnd) {
				jQuery.dequeue (esto, tipo);
			}
		});
	},
	Acabado: función (tipo) {
		si (el tipo! == false) {
			type = Tipo || "Fx";
		}
		volver this.each (function () {
			Índice var,
				datos = jQuery._data (este),
				= cola de datos [+ tipo "cola"],
				ganchos = [tipo de datos + "queueHooks"],
				temporizadores = jQuery.timers,
				longitud = Cola? queue.length: 0;

			// Habilitar el indicador de acabado de los datos privados
			data.finish = true;

			// Vaciar la cola de primera
			jQuery.queue (este, tipo, []);

			si (ganchos) && hooks.stop {
				hooks.stop.call (esto, true);
			}

			// Buscar cualquier animaciones activas, y acabar con ellos
			para (índice = timers.length; index--;) {
				si (temporizadores [índice] .ELEM === esta && temporizadores [índice] .queue === tipo) {
					temporizadores [índice] .anim.stop (true);
					timers.splice (índice, 1);
				}
			}

			// Buscar cualquier animaciones en la cola antigua y acabar con ellos
			para (índice = 0; index <longitud; índice ++) {
				si (cola [índice] && cola [índice] .finish) {
					Cola [índice] .finish.call (este);
				}
			}

			// Desactivar el acabado de la bandera
			Eliminar data.finish;
		});
	}
});

jQuery.each ([ "cambiar", "espectáculo", "ocultar"], la función (i, nombre) {
	var = cssFn jQuery.fn [nombre];
	jQuery.fn [nombre] = function (velocidad, facilitando, de devolución de llamada) {
		velocidad de retorno == null || velocidad typeof === "booleano"?
			cssFn.apply (este, argumentos):
			this.animate (GenFX (nombre, cierto), la velocidad, facilitando, de devolución de llamada);
	};
});

// Generar accesos directos para las animaciones personalizadas
jQuery.each ({
	slideDown: GenFX ( "show"),
	slideUp: GenFX ( "ocultar"),
	slideToggle: GenFX ( "cambiar"),
	fadeIn: {opacidad: "espectáculo"},
	FadeOut: {opacidad: "ocultar"},
	fadeToggle: {opacidad: "cambiar"}
}, la función (nombre, apoyos) {
	jQuery.fn [nombre] = function (velocidad, facilitando, de devolución de llamada) {
		volver this.animate (puntales, velocidad, facilitando, de devolución de llamada);
	};
});

jQuery.timers = [];
jQuery.fx.tick = function () {
	var temporizador,
		temporizadores = jQuery.timers,
		i = 0;

	fxNow = jQuery.now ();

	para (; i <timers.length; i ++) {
		temporizador temporizadores = [i];
		// Comprueba el temporizador ya no se ha eliminado
		if (! temporizador () && temporizadores [i] === temporizador) {
			timers.splice (i--, 1);
		}
	}

	si (timers.length!) {
		jQuery.fx.stop ();
	}
	fxNow = indefinido;
};

jQuery.fx.timer = function (temporizador) {
	jQuery.timers.push (temporizador);
	si (temporizador ()) {
		jQuery.fx.start ();
	} Else {
		jQuery.timers.pop ();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function () {
	if (! timerId) {
		timerId = setInterval (jQuery.fx.tick, jQuery.fx.interval);
	}
};

jQuery.fx.stop = function () {
	clearInterval (timerId);
	timerId = null;
};

jQuery.fx.speeds = {
	reducir la velocidad: 600,
	rápida: 200,
	// Velocidad predeterminada
	_default: 400
};


// Basado fuera del plugin por Clint Helfers, con el permiso.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function (tiempo, tipo) {
	tiempo = jQuery.fx? jQuery.fx.speeds [tiempo] || tiempo tiempo;
	type = Tipo || "Fx";

	volver this.queue (tipo, función (próximos, ganchos) {
		var timeout = setTimeout (próxima, tiempo);
		hooks.stop = function () {
			clearTimeout (tiempo de espera);
		};
	});
};


(Function () {
	// Minified: var a, b, c, d, e
	var entrada, div, seleccionar una, optar;

	// Preparar
	div = document.createElement ( "div");
	div.setAttribute ( "className", "t");
	div.innerHTML = "<tipo 'casilla' de entrada = /> </ link> <table> </ table> <a href='/a'> un </a>";
	a = div.getElementsByTagName ( "a") [0];

	// En primer lote de pruebas.
	seleccione = document.createElement ( "select");
	opt = select.appendChild (document.createElement ( "opción"));
	entrada = div.getElementsByTagName ( "entrada") [0];

	a.style.cssText = "top: 1px";

	// Prueba setAttribute en clase camelCase. Si funciona, necesitamos attrFixes al hacer get / setAttribute (IE6 / 7)
	support.getSetAttribute = div.className == "t"!;

	// Obtener la información de estilo de getAttribute
	// (IE utiliza .cssText en su lugar)
	support.style = /top/.test (a.getAttribute ( "estilo"));

	// Asegúrese de que las URLs no son manipulados
	// (IE se normaliza de forma predeterminada)
	support.hrefNormalized = a.getAttribute ( "href") === "/ a";

	// Comprobar el valor de la casilla / radio predeterminado ( "" en WebKit, "sobre" en otra parte)
	support.checkOn = !! input.value;

	// Asegúrese de que la opción seleccionada por defecto tiene una propiedad seleccionada de trabajo.
	// (WebKit defecto es false en lugar de la verdadera, es decir, demasiado, si es en un optgroup)
	support.optSelected = opt.selected;

	// Las pruebas de apoyo enctype en un formulario (# 6743)
	. Support.enctype = !! document.createElement ( "forma") enctype;

	// Asegúrese de que las opciones dentro selecciona con discapacidad no están marcados como discapacitados
	// (WebKit los marca como personas con discapacidad)
	select.disabled = true;
	! = Support.optDisabled opt.disabled;

	Sólo IE8: // Ayuda
	// Comprobar si podemos confiar en getAttribute ( "valor")
	entrada = document.createElement ( "entrada");
	input.setAttribute ( "valor", "");
	support.input = input.getAttribute ( "valor") === "";

	// Comprobar si hay una entrada mantiene su valor después de convertirse en una radio
	input.va lue = "t";
	input.setAttribute ( "tipo", "radio");
	support.radioValue = input.value === "t";
}) ();


var rreturn = / \ r / g;

jQuery.fn.extend ({
	val: función (valor) {
		var ganchos, ret, isFunction,
			elem = esta [0];

		si (arguments.length!) {
			si (elem) {
				ganchos = jQuery.valHooks [elem.type] || jQuery.valHooks [elem.nodeName.toLowerCase ()];

				si ganchos (&& "get" en ganchos && (r = hooks.get (elem, "valor"))! == undefined) {
					ret regresar;
				}

				ret = elem.value;

				volver typeof ret === "cadena"?
					// manejar los casos más comunes de cuerda
					ret.replace (rreturn ","):
					// Tramitar los asuntos en que el valor es nulo / o número undef
					ret nula ==? "": Ret;
			}

			regreso;
		}

		isFunction = jQuery.isFunction (valor);

		volver this.each (function (i) {
			val var;

			si (this.nodeType! == 1) {
				regreso;
			}

			si (isFunction) {
				val = value.call (esto, i, jQuery (este) .val ());
			} Else {
				val = valor;
			}

			// Tratar nula / sin definir como ""; convertir los números de secuencia
			si (val == null) {
				val = "";
			} Else if (typeof val === "número") {
				val + = "";
			} Else if (jQuery.isArray (val)) {
				val = jQuery.map (val, función (valor) {
					valor de retorno == null? "": Valor + "";
				});
			}

			ganchos = jQuery.valHooks [this.type] || jQuery.valHooks [this.nodeName.toLowerCase ()];

			// Si se vuelve a establecer indefinidos, caer de nuevo a ajuste normal
			if (! ganchos ||! ( "set" en ganchos) || hooks.set (esto, val, "valor") === indefinido) {
				this.value = val;
			}
		});
	}
});

jQuery.extend ({
	valHooks: {
		opción: {
			obtener: function (elem) {
				var = val jQuery.find.attr (elem, "valor");
				volver val! = null?
					val:
					// Ayuda: IE10-11 +
					// Option.text lanza excepciones (# 14686, # 14858)
					jQuery.trim (jQuery.text (elem));
			}
		},
		seleccionar: {
			obtener: function (elem) {
				var valor, opción,
					Opciones = elem.options,
					index = elem.selectedIndex,
					uno = elem.type === "seleccione uno" || índice <0,
					= valores de uno? nulo : [],
					max = uno? index + 1: options.length,
					i = índice <0?
						max:
						uno ? Índice: 0;

				// Bucle a través de todas las opciones seleccionadas
				para (; i <max; i ++) {
					opción = opciones [i];

					// OldIE no actualización seleccionada después de un reinicio forma (# 2551)
					if ((i || option.selected === índice) &&
							// No vuelva opciones que están discapacitados o personas con discapacidad en un optgroup
							(?! Support.optDisabled option.disabled: option.getAttribute ( "desactivado") === null) &&
							(! Option.parentNode.disabled ||! JQuery.nodeName (option.parentNode, "optgroup"))) {

						// Obtener el valor específico para la opción
						valor = jQuery (opcional) .val ();

						// No necesitamos una matriz para una selecciona
						si uno ) {
							valor de retorno;
						}

						// Multi-Selecciona devolver una matriz
						values.push (valor);
					}
				}

				los valores de retorno;
			},

			set: function (elem, valor) {
				var optionset, opción,
					Opciones = elem.options,
					Los valores jQuery.makeArray = (valor),
					i = options.length;

				mientras yo-- ) {
					opción = opciones [i];

					si (jQuery.inArray (jQuery.valHooks.option.get (opcional), los valores)> = 0) {

						// Ayuda: IE6
						// Cuando se añade nuevo elemento de opción de casilla para seleccionar necesitamos
						// Fuerza de reflujo del nodo recién añadido con el fin de retardo solución
						// De propiedades de inicialización
						tratar {
							option.selected = optionset = true;

						} captura ( _ ) {

							// Sólo se ejecutará en IE6
							option.scrollHeight;
						}

					} Else {
						option.selected = false;
					}
				}

				// Navegadores Fuerza se comporten consistentemente cuando se establece el valor no coincidente
				if (! optionset) {
					elem.selectedIndex = -1;
				}

				opciones de retorno;
			}
		}
	}
});

// Las radios y las casillas de verificación de captador / definidor
jQuery.each ([ "radio", "casilla de verificación"], function () {
	jQuery.valHooks [esto] = {
		set: function (elem, valor) {
			si (jQuery.isArray (valor)) {
				retorno (elem.checked = jQuery.inArray (jQuery (elem) .val (), valor)> = 0);
			}
		}
	};
	if (! support.checkOn) {
		jQuery.valHooks [esto] .get = function () {elem
			// Ayuda: Webkit
			// "" Se devuelve en lugar de "sobre" si no se especifica un valor
			volver elem.getAttribute ( "valor") === nula? "On": elem.value;
		};
	}
});




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = / ^ (comprobado ?: | seleccionado) $ / i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend ({
	attr: function (nombre, valor) {
		regresar de acceso (esto, jQuery.attr, nombre, valor, arguments.length> 1);
	},

	removeAttr: function (nombre) {
		volver this.each (function () {
			jQuery.removeAttr (esto, nombre);
		});
	}
});

jQuery.extend ({
	attr: function (elem, nombre, valor) {
		var ganchos, ret,
			nType = elem.nodeType;

		// No reciben atributos / set de texto, comentarios y nodos atributo
		if (! elem || 3 || nType === === nType 8 || nType === 2) {
			regreso;
		}

		// Retorno a apuntalar cuando no se admiten atributos
		si (typeof elem.getAttribute === strundefined) {
			volver jQuery.prop (elem, nombre, valor);
		}

		// Todos los atributos son minúsculas
		// Coge el gancho necesario si hay uno definido
		si (nType! == 1 ||! jQuery.isXMLDoc (elem)) {
			name = name.toLowerCase ();
			ganchos = jQuery.attrHooks [nombre] ||
				(JQuery.expr.match.bool.test (nombre) boolHook: nodeHook?);
		}

		si (valor == undefined) {

			si (valor === null) {
				jQuery.removeAttr (elem, nombre);

			} Else if (ganchos && "set" en ganchos && (r = hooks.set (elem, valor, nombre)) == indefinido) {
				ret regresar;

			} Else {
				elem.setAttribute (nombre, valor + "");
				valor de retorno;
			}

		} Else if (ganchos && "get" en ganchos && (r = hooks.get (elem, nombre)) == null) {
			ret regresar;

		} Else {
			ret = jQuery.find.attr (elem, nombre);

			// Atributos inexistentes devuelven null, se normaliza en undefined
			volver ret == null?
				indefinido:
				retirado;
		}
	},

	removeAttr: function (elem, valor) {
		var name, propName,
			i = 0,
			attrNames = valor && value.match (rnotwhite);

		si (elem.nodeType attrNames && === 1) {
			while ((name = attrNames [i ++])) {
				propName = jQuery.propFix [nombre] || nombre;

				// Atributos Boolean reciben un tratamiento especial (# 10870)
				si (jQuery.expr.match.bool.test (nombre)) {
					// Establecer la propiedad correspondiente a falso
					si (getSetInput && || getSetAttribute! ruseDefault.test (nombre)) {
						elem [propName] = false;
					// Ayuda: IE <9
					// También clara defaultChecked / defaultSelected (en su caso)
					} Else {
						elem [jQuery.camelCase ( "default-" + nombre)] =
							elem [propName] = false;
					}

				// Ver # 9699 para la explicación de este enfoque (ajuste en primer lugar, a continuación, la eliminación)
				} Else {
					jQuery.attr (elem, nombre, "");
				}

				elem.removeAttribute (? getSetAttribute nombre: propName);
			}
		}
	},

	attrHooks: {
		tipo: {
			set: function (elem, valor) {
				if (! valor support.radioValue && === "radio" && jQuery.nodeName (elem, "entrada")) {
					// Ajuste del tipo en un botón de opción después de que el valor se restablece el valor en IE6-9
					// Valor de reset a los valores predeterminados en el tipo de caso se establece después de valor durante la creación
					var = val elem.value;
					elem.setAttribute ( "tipo", valor);
					si (val) {
						elem.value = val;
					}
					valor de retorno;
				}
			}
		}
	}
});

// Gancho para atributos booleanos
boolHook = {
	conjunto: function (elem, valor, nombre) {
		si (valor === false) {
			// Eliminar los atributos booleanos cuando se establece en false
			jQuery.removeAttr (elem, nombre);
		} Else if (getSetInput && || getSetAttribute! RuseDefault.test (nombre)) {
			// IE <8 * necesita la propiedad * Nombre
			elem.setAttribute (getSetAttribute && jQuery.propFix [nombre] || nombre, nombre!);

		// Usar defaultChecked y defaultSelected para oldIE
		} Else {
			elem [jQuery.camelCase ( "default-" + nombre)] = elem [nombre] = true;
		}

		Nombre del retorno;
	}
};

// Obtiene booleanos especialmente
jQuery.each (jQuery.expr.match.bool.source.match (/ \ w + / g), función (i, nombre) {

	var = captador attrHandle [nombre] || jQuery.find.attr;

	attrHandle [nombre] = getSetInput && getSetAttribute || ! RuseDefault.test (nombre)?
		función (elem, nombre, isXML) {
			var ret, manejar;
			if (! isXML) {
				// Evitar un bucle infinito eliminando temporalmente esta función desde el captador
				handle = attrHandle [nombre];
				attrHandle [nombre] = ret;
				ret = captador (elem, nombre, isXML)! = null?
					name.toLowerCase ():
					nulo;
				attrHandle [nombre] = mango;
			}
			ret regresar;
		}:
		función (elem, nombre, isXML) {
			if (! isXML) {
				volver elem [jQuery.camelCase ( "default-" + nombre)]?
					name.toLowerCase ():
					nulo;
			}
		};
});

// Fijar attroperties OLDIE
if (! getSetInput ||! getSetAttribute) {
	jQuery.attrHooks.value = {
		conjunto: function (elem, valor, nombre) {
			si (jQuery.nodeName (elem, "entrada")) {
				// No vuelve de manera que también se utiliza setAttribute
				elem.defaultValue = valor;
			} Else {
				// Usar nodeHook si está definido (# 1954); de lo contrario está bien setAttribute
				volver nodeHook && nodeHook.set (elem, valor, nombre);
			}
		}
	};
}

// IE6 / 7 no son compatibles obtener / establecer algunos atributos con get / setAttribute
if (! getSetAttribute) {

	// Usa esto para cualquier atributo en IE6 / 7
	// Esto soluciona casi todos los temas IE6 / 7
	nodeHook = {
		conjunto: function (elem, valor, nombre) {
			// Establecer el existente o crear un nuevo nodo de atributo
			var ret = elem.getAttributeNode (nombre);
			si (r) {
				elem.setAttributeNode (
					(R = elem.ownerDocument.createAttribute (nombre))
				);
			}

			ret.value = valor + = "";

			// Anular asociación con elementos clonados utilizando también setAttribute (# 9646)
			si (nombre === "valor" || valor === elem.getAttribute (nombre)) {
				valor de retorno;
			}
		}
	};

	// Algunos atributos se construyen con valores vacíos cuerdas cuando no está definido
	attrHandle.id = attrHandle.name = = attrHandle.coords
		función (elem, nombre, isXML) {
			ret var;
			if (! isXML) {
				retorno (RET = elem.getAttributeNode (nombre)) && ret.value! == ""?
					ret.value:
					nulo;
			}
		};

	// Valor de Fijación de recuperación en un botón requiere este módulo
	jQuery.valHooks.button = {
		obtener: function (elem, nombre) {
			var ret = elem.getAttributeNode (nombre);
			si (r && ret.specified) {
				ret.value regresar;
			}
		},
		conjunto: nodeHook.set
	};

	// Establecer contenteditable en false en el traslado (# 10429)
	// Configuración de cadena vacía emite un error como un valor no válido
	jQuery.attrHooks.contenteditable = {
		conjunto: function (elem, valor, nombre) {
			nodeHook.set (elem, valor === "" falsa: valor, nombre);
		}
	};

	// Anchura y altura para automóviles en lugar de 0 en la cadena vacía Conjunto (Bug # 8150)
	// Esto es de mudanzas
	jQuery.each ([ "ancho", "altura"], la función (i, nombre) {
		jQuery.attrHooks [nombre] = {
			set: function (elem, valor) {
				si (valor === "") {
					elem.setAttribute (nombre, "auto");
					valor de retorno;
				}
			}
		};
	});
}

si (support.style!) {
	jQuery.attrHooks.style = {
		obtener: function (elem) {
			// Devolver indefinida en el caso de la cadena vacía
			// Nota: IE las mayúsculas los nombres de propiedades CSS, pero si tuviéramos que .tolowercase ()
			// .cssText, Que destruiría caso senstitivity en la URL de, al igual que en el "fondo"
			volver elem.style.cssText || indefinido;
		},
		set: function (elem, valor) {
			volver (elem.style.cssText = valor + "");
		}
	};
}




var rfocusable = / ^ (entrada ?: | selecto | área de texto botón | | objeto) $ / i,
	rclickable = / ^ (un ?: | área) $ / i;

jQuery.fn.extend ({
	Objeto: la función (nombre, valor) {
		regresar de acceso (esto, jQuery.prop, nombre, valor, arguments.length> 1);
	},

	removeProp: function (nombre) {
		name = jQuery.propFix [nombre] || nombre;
		volver this.each (function () {
			// Try / catch controla los casos en que se resiste IE (como la eliminación de una propiedad en la ventana)
			tratar {
				esta [nombre] = indefinido;
				Eliminar esta [nombre];
			} Catch (e) {}
		});
	}
});

jQuery.extend ({
	propFix: {
		"Para": "htmlFor",
		"Clase": "className"
	},

	prop: function (elem, nombre, valor) {
		var ret, ganchos, notxml,
			nType = elem.nodeType;

		// No consiguen / propiedades establecidas en el texto, comentarios y nodos atributo
		if (! elem || 3 || nType === === nType 8 || nType === 2) {
			regreso;
		}

		! = Notxml nType == 1 || ! JQuery.isXMLDoc (elem);

		si (notxml) {
			// Nombre Fix y poner los ganchos
			name = jQuery.propFix [nombre] || nombre;
			ganchos = jQuery.propHooks [nombre];
		}

		si (valor == undefined) {
			volver ganchos && "establecidos" en ganchos && (r = hooks.set (elem, valor, nombre))! == indefinido?
				ret:
				(Elem [nombre] = valor);

		} Else {
			ganchos volver && "llegar" en ganchos && (r = hooks.get (elem, nombre))! == null?
				ret:
				elem [nombre];
		}
	},

	propHooks: {
		tabIndex: {
			obtener: function (elem) {
				// Elem.tabIndex no siempre devuelve el valor correcto cuando no se ha establecido explícitamente
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Utilizar la recuperación atributo adecuado (# 12072)
				var tabindex = jQuery.find.attr (elem, "tabindex");

				tabindex volver?
					parseInt (índice de tabulación, 10):
					rfocusable.test (elem.nodeName) || rclickable.test (elem.nodeName) && elem.href?
						0:
						-1;
			}
		}
	}
});

// Algunos atributos requieren un llamado especial en IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! support.hrefNormalized) {
	// Propiedad href / src debería obtener la URL completa normalizada (# 10299 / # 12915)
	jQuery.each ([ "href", "src"], la función (i, nombre) {
		jQuery.propHooks [nombre] = {
			obtener: function (elem) {
				volver elem.getAttribute (nombre, 4);
			}
		};
	});
}

// Ayuda: Safari, IE9 +
// mis-informes de la propiedad predeterminada seleccionada de una opción
// Acceso a selectedIndex propiedad la fija de los padres
if (! support.optSelected) {
	jQuery.propHooks.selected = {
		obtener: function (elem) {
			var = elem.parentNode padres;

			si (padre) {
				parent.selectedIndex;

				// Asegúrese de que también funciona con optgroups, véase # 5701
				si (parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each ([
	"TabIndex",
	"solo lectura",
	"longitud máxima",
	"CellSpacing",
	"CellPadding",
	"ROWSPAN",
	"Colspan",
	"Usemap",
	"Frontera del marco",
	"ContentEditable"
], Function () {
	jQuery.propFix [this.toLowerCase ()] = presente;
});

// IE6 / 7 enctype llamada codificación
si (support.enctype!) {
	jQuery.propFix.enctype = "codificación";
}




var = rclass / [\ t \ r \ n \ f] / g;

jQuery.fn.extend ({
	addClass: función (valor) {
		var clases, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceder = valor typeof === "cadena" && valor;

		si (jQuery.isFunction (valor)) {
			volver this.each (function (j) {
				jQuery (este) .addClass (value.call (esto, j, this.className));
			});
		}

		si (proceder) {
			// La disyunción aquí es para una mejor compresión (ver removeClass)
			clases = (valor || "") .match (rnotwhite) || [];

			para (; i <len; i ++) {
				elem = esta [i];
				act = elem.nodeType === 1 && (elem.className?
					( "" + Elem.className + "") .Colocar (rclass ","):
					""
				);

				si (act) {
					j = 0;
					while ((= clazz clases [j ++])) {
						si (cur.indexOf ( "" + clazz + "") <0) {
							act + = + clazz "";
						}
					}

					// Sólo se asignará si es diferente para evitar la representación que no sean necesarios.
					finalValue = jQuery.trim (act);
					si (elem.className! == finalValue) {
						elem.className = finalValue;
					}
				}
			}
		}

		devolver este;
	},

	removeClass: función (valor) {
		var clases, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceder = arguments.length === 0 || typeof valor === "cadena" && valor;

		si (jQuery.isFunction (valor)) {
			volver this.each (function (j) {
				jQuery (este) .removeClass (value.call (esto, j, this.className));
			});
		}
		si (proceder) {
			clases = (valor || "") .match (rnotwhite) || [];

			para (; i <len; i ++) {
				elem = esta [i];
				// Esta expresión está aquí para una mejor compresión (ver addClass)
				act = elem.nodeType === 1 && (elem.className?
					( "" + Elem.className + "") .Colocar (rclass ","):
					""
				);

				si (act) {
					j = 0;
					while ((= clazz clases [j ++])) {
						// Eliminar todas las instancias * *
						mientras que (cur.indexOf ( "" + clazz + "")> = 0) {
							act = cur.replace ( "" + clazz + "", "");
						}
					}

					// Sólo se asignará si es diferente para evitar la representación que no sean necesarios.
					finalValue = valor? jQuery.trim (act): "";
					si (elem.className! == finalValue) {
						elem.className = finalValue;
					}
				}
			}
		}

		devolver este;
	},

	toggleClass: función (valor, stateVal) {
		Tipo var = valor typeof;

		si (typeof stateVal === "booleano" && tipo === "cadena") {
			volver stateVal? this.addClass (valor): this.removeClass (valor);
		}

		si (jQuery.isFunction (valor)) {
			volver this.each (function (i) {
				jQuery (este) .toggleClass (value.call (esto, i, this.className, stateVal), stateVal);
			});
		}

		volver this.each (function () {
			Si (tipo === "cadena") {
				// Cambiar los nombres de clases individuales
				var className,
					i = 0,
					self = jQuery (este),
					nombres de las clases = value.match (rnotwhite) || [];

				while ((className = nombres de las clases [i ++])) {
					// Comprobar cada className dado, lista separada por espacios
					si (self.hasClass (className)) {
						self.removeClass (className);
					} Else {
						self.addClass (className);
					}
				}

			// Cambia nombre de la clase entera
			} Else if (tipo === === strundefined || tipo "boolean") {
				si (this.className) {
					// Almacenar className si se establece
					jQuery._data (esto "__className__", this.className);
				}

				// Si el elemento tiene un nombre de clase o si estamos pasó "falsa",
				// Continuación, retire todo el nombre de la clase (si había uno, lo anterior guardado).
				// De lo contrario traer de vuelta todo lo que se guardó anteriormente (si acaso),
				// Volver a caer en la cadena vacía si no se almacena.
				this.className = this.className || === valor falso? "": JQuery._data (esto "__className__") || "";
			}
		});
	},

	hasClass: function (Selector) {
		var className = "" + + selector de "",
			i = 0,
			l = this.length;
		para (; i <l; i ++) {
			si (esto [i] .nodeType === 1 && ( "" + esta [i] .className + "") .Colocar (rclass, "") .indexOf (className)> = 0) {
				return true;
			}
		}

		falso retorno;
	}
});




// Devolver jQuery para los atributos de sólo la inclusión


jQuery.each (( "desenfoque enfoque focusin carga focusOut de cambio de tamaño de descarga de desplazamiento clic dblclick" +
	"Mousedown mouseup mousemove por encima del ratón mouseout MouseEnter mouseleave" +
	"El cambio seleccionar presentar pulsación de tecla contextual keydown error keyup"). Split ( ""), la función (i, nombre) {

	// Evento identificador de enlace
	jQuery.fn [nombre] = función (fn) de datos, {
		arguments.length> 0 volver?
			this.on (nombre, nulos, datos, fn):
			this.trigger (nombre);
	};
});

jQuery.fn.extend ({
	libración: function (fnOver, fnOut) {
		volver this.mouseenter (fnOver) .mouseleave (fnOut || fnOver);
	},

	bind: function (tipos, datos, fn) {
		volver this.on (tipos, nulos, datos, fn);
	},
	unbind: función (fn), tipos {
		volver this.off (tipos, null, fn);
	},

	delegado: function (selector, tipos, datos, fn) {
		volver this.on (tipos, selector, datos, fn);
	},
	undelegate: function (selector, tipos, fn) {
		// (Espacio de nombres) o (selector, tipos [,] Lit)
		volver arguments.length === 1? this.off (selector, "**"): this.off (tipos, selector || "**", fn);
	}
});


var nonce = jQuery.now ();

var RQUERY = (/ \ /?);



rvalidtokens var = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function (datos) {
	Intentará analizar // usando el analizador JSON nativo primera
	si (window.JSON && window.JSON.parse) {
		// Ayuda: Android 2.3
		// Fallo Solución de entrada nula cadena fundido
		volver window.JSON.parse (datos + "");
	}

	var requireNonComma,
		profundidad = null,
		str = jQuery.trim (datos + "");

	// Guardia contra la entrada no válida (y posiblemente peligroso) al asegurar que no queda nada
	// Después de retirar símbolos válidos
	str regresar &&! jQuery.trim (str.replace (rvalidtokens, la función (token, coma, abrir, cerrar) {

		// Terminación Fuerza si vemos una coma fuera de lugar
		si (coma requireNonComma &&) {
			profundidad = 0;
		}

		// Realizar hay más reemplazos después de regresar a la profundidad más externa
		si (profundidad === 0) {
			rendimiento simbólico;
		}

		// Comas no debe seguir "[", "{" o ","
		requireNonComma = abierta || coma;

		// Determinar nueva profundidad
		// Matriz / objeto abierto ( "[" o "{"): profundidad + = true - falsa (incremento)
		// Matriz / objeto cercano ( "]" o "}"): profundidad + = false - verdadero (decremento)
		// otros casos ( "," o primitiva): profundidad + = true - verdadero (elenco numérico)
		! + = Profundidad de cerca - abierto!;

		// Eliminar este token
		regreso "";
	}))?
		(Función ( "retorno" + str)) ():
		jQuery.error ( "JSON no válido:" + datos);
};


// Cross-browser análisis XML
jQuery.parseXML = function (datos) {
	var xml, tmp;
	if (! || de datos de datos typeof! == "cadena") {
		return null;
	}
	tratar {
		si (window.DOMParser) {// Estándar
			tmp = new DOMParser ();
			xml = tmp.parseFromString (datos, "text / xml");
		} Else {// IE
			xml = new ActiveXObject ( "Microsoft.XMLDOM");
			xml.async = "true";
			xml.loadXML (datos);
		}
	} Catch (e) {
		xml = indefinido;
	}
	if (! xml ||! xml.documentElement || xml.getElementsByTagName ( "parsererror") .length) {
		jQuery.error ( "XML no válido:" + datos);
	}
	xml regresar;
};


var
	// Localización del documento
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	RTS = / ([? &]) _ = [^ &] * /,
	rheaders = / ^ (*.?):? [\ t] * ([^ \ r \ n] *) \ r $ / mg, // IE deja un carácter \ r al EOL
	// # 7653, # 8125, # 8152: detección de protocolo local
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = / ^ (GET ?: | HEAD) $ /,
	rprotocol = / ^ \ / \ //,
	rurl = / ^ ([\ w + -.] +:) (: \ / \ / (: [^ \ / #?] * @ |) ([^ \ / #:?]? *) (?: : (\ d +) |) |) /,

	/ * Prefiltros
	 * 1) Son útiles para introducir tipos de datos personalizados (ver ajax / jsonp.js para un ejemplo)
	 * 2) Estos se llaman:
	 * - Antes de solicitar un transporte
	 * - DESPUÉS param serialización (s.data es una cadena si es cierto s.processData)
	 * 3) El tipo de datos es clave
	 * 4) el símbolo comodín "*" se puede utilizar
	 * 5) La ejecución se iniciará con tipoDatos transporte y luego continuar hacia abajo para "*" si es necesario
	 * /
	prefiltros = {},

	/ * Transporta fijaciones
	 * 1) El tipo de datos es clave
	 * 2) el símbolo comodín "*" se puede utilizar
	 * 3) la selección se iniciará con tipoDatos transporte y luego ir a "*" si es necesario
	 * /
	transporta = {},

	// Evitar secuencia de Char-prólogo comentario (# 10098); debe apaciguar pelusa y evadir la compresión
	ALLTYPES = "* /" concat ( "*").;

// # 8138, IE puede lanzar una excepción al acceder
// Un campo de window.location si document.domain se ha establecido
tratar {
	ajaxLocation = location.href;
} Catch (e) {
	// Usar el atributo href de un elemento A
	// Desde IE modificarlo dado document.location
	ajaxLocation = document.createElement ( "a");
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Ubicación del segmento en partes
ajaxLocParts = rurl.exec (ajaxLocation.toLowerCase ()) || [];

// Base "constructor" de jQuery.ajaxPrefilter y jQuery.ajaxTransport
addToPrefiltersOrTransports de función (estructura) {

	// DataTypeExpression es opcional y por defecto "*"
	función de retorno (dataTypeExpression, func) {

		si (typeof dataTypeExpression! == "cadena") {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		tipoDatos var,
			i = 0,
			Tipos de Datos = dataTypeExpression.toLowerCase (). partido (rnotwhite) || [];

		si (jQuery.isFunction (func)) {
			// Para cada tipoDatos en el dataTypeExpression
			while ((= tipo de datos Tipos de datos [i ++])) {
				// Prefijo si así lo solicita
				si (dataType.charAt (0) === "+") {
					tipoDatos = dataType.slice (1) || "*";
					(Estructura [tipoDatos] = estructura [tipoDatos] || []) unshift (func.);

				// De lo contrario anexar
				} Else {
					. (Estructura [tipoDatos] = estructura [tipoDatos] || []) empujar (func);
				}
			}
		}
	};
}

// Función de inspección Base de prefiltros y transportes
inspectPrefiltersOrTransports de función (estructura, Opciones, originalOptions, jqXHR) {

	var inspeccionado = {},
		seekingTransport = (estructura === transportes);

	función de inspeccionar (tipoDatos) {
		var seleccionado;
		inspeccionado [tipoDatos] = true;
		jQuery.each (estructura [tipoDatos] || [], la función (_, prefilterOrFactory) {
			var = dataTypeOrTransport prefilterOrFactory (opciones, originalOptions, jqXHR);
			si (typeof dataTypeOrTransport === "cadena" &&! seekingTransport &&! inspeccionados [dataTypeOrTransport]) {
				options.dataTypes.unshift (dataTypeOrTransport);
				Comprobar (dataTypeOrTransport);
				falso retorno;
			} Else if (seekingTransport) {
				! Devolver (selected = dataTypeOrTransport);
			}
		});
		de retorno seleccionado;
	}

	volver inspeccionar (options.dataTypes [0]) || ! Inspeccionado [ "*"] && inspeccionar ( "*");
}

// Extender un especial para opciones ajax
// Que tiene opciones "planos" (no ser profunda extendida)
// # 9887 Correcciones
ajaxExtend función (objetivo, src) {
	var profunda, llave,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	para (clave en src) {
		si (src [clave]! == undefined) {
			(? FlatOptions [clave] objetivo: (|| profunda (deep = {}))) [clave] = src [clave];
		}
	}
	si (profundidad) {
		jQuery.extend (verdadero, objetivo, profundidad);
	}

	objetivo de rentabilidad;
}

/ * El manejo de las respuestas a una petición AJAX:
 * - El tipo de datos se encuentra a la derecha (media entre tipo de contenido y tipoDatos esperado)
 * - Devuelve la respuesta correspondiente
 * /
ajaxHandleResponses de función (s, jqXHR, respuestas) {
	var firstDataType, ct, finalDataType, tipo,
		contents = s.contents,
		Tipos de Datos = s.dataTypes;

	// Eliminar tipoDatos automática y obtener de tipo de contenido en el proceso
	mientras que (tipos de datos [0] === "*") {
		dataTypes.shift ();
		si (ct === indefinido) {
			ct = s.mimeType || jqXHR.getResponseHeader ( "Content-Type");
		}
	}

	// Comprobar si estamos tratando con un contenido de tipo conocido
	si (ct) {
		para (tipo de contenido) {
			si (Contenido [Tipo] && contenidos [tipo] .test (ct)) {
				dataTypes.unshift (tipo);
				descanso;
			}
		}
	}

	// Cheque para ver si tenemos una respuesta para el tipo de datos esperado
	if (tipos de datos [0] en las respuestas) {
		finalDataType = tipos de datos [0];
	} Else {
		// Intenta tipos de datos convertibles
		para (tipo de respuestas) {
			if (! tipos de datos [0] || s.converters [+ "tipo" + tipos de datos [0]]) {
				finalDataType = tipo;
				descanso;
			}
			if (! firstDataType) {
				firstDataType = tipo;
			}
		}
		// O sólo tiene que utilizar primero
		finalDataType = finalDataType || firstDataType;
	}

	// Si encontramos un tipo de datos
	// Añadimos el tipo de datos de la lista si es necesario
	// Y devolver la respuesta correspondiente
	si (finalDataType) {
		si (finalDataType! == tipos de datos [0]) {
			dataTypes.unshift (finalDataType);
		}
		respuestas [] finalDataType regresar;
	}
}

/ * Las conversiones de cadena dado la petición y la respuesta original
 * También define los campos responseXXX en la instancia jqXHR
 * /
ajaxConvert funcionar (s, respuesta, jqXHR, IsSuccess) {
	var CONV2, corriente, conv, tmp, anterior,
		convertidores = {},
		// Trabajar con una copia de los tipos de datos en caso de que necesitemos modificarlo para la conversión
		Tipos de Datos = s.dataTypes.slice ();

	// Crear convertidores mapa con llaves convertidas a mayúsculas
	if (tipos de datos [1]) {
		para (conv en s.converters) {
			convertidores [conv.toLowerCase ()] = s.converters [conv];
		}
	}

	dataTypes.shift actual = ();

	// Convertir a cada tipoDatos secuencial
	mientras que (actual) {

		si (s.responseFields [actual]) {
			jqXHR [s.responseFields [actual]] = respuesta;
		}

		// Aplicar el dataFilter si la hubiere
		if (! prev && && IsSuccess s.dataFilter) {
			respuesta = s.dataFilter (respuesta, s.dataType);
		}

		prev = corriente;
		dataTypes.shift actual = ();

		si (actual) {

			// No solamente hay trabajo por hacer si tipoDatos actual no es automática
			si (=== actual "*") {

				prev = corriente;

			// Convertir respuesta si tipoDatos anterior no es automático y se diferencia del actual
			} Else if (ant! == "*" && Ant actual ==) {

				// Busque un convertidor directo
				conv = convertidores [ant + "" + actual] || convertidores [ "*" + actual];

				// Si ninguno encontró, buscar un par
				si (CONV) {
					(para CONV2 en convertidores) {

						// Si la corriente de salidas CONV2
						tmp = conv2.split ( "");
						si (tmp [1] === actual) {

							// Si prev se puede convertir a la entrada aceptada
							conv = convertidores [ant + "" + tmp [0]] ||
								convertidores [ "*" + tmp [0]];
							si (CONV) {
								// Condensar convertidores de equivalencia
								si (conv === true) {
									conv = convertidores [CONV2];

								// De lo contrario, introduzca el tipo de datos intermedia
								} Else if (convertidores [CONV2]! == True) {
									actual = tmp [0];
									dataTypes.unshift (tmp [1]);
								}
								descanso;
							}
						}
					}
				}

				// Aplicar convertidor (si no una equivalencia)
				si (conv! == true) {

					// A menos errores se permite que la burbuja, la captura y devolverlos
					si (conv && s [ "lanza"]) {
						respuesta = conv (respuesta);
					} Else {
						tratar {
							respuesta = conv (respuesta);
						} Catch (e) {
							volver {Estado: "parsererror", error: conv? e: "Sin la conversión de" + ant + "a" +} actual;
						}
					}
				}
			}
		}
	}

	volver {Estado: "éxito", los datos: Respuesta};
}

jQuery.extend ({

	// Contador para sostener el número de consultas activas
	activa: 0,

	// Cache encabezado Last-Modified para la siguiente petición
	última modificación: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		escriba: "GET",
		isLocal: rlocalProtocol.test (ajaxLocParts [1]),
		mundial: true,
		processData: true,
		asíncrono: true,
		contentType: "application / x-www-form-urlencoded; charset = UTF-8",
		/ *
		Tiempo de espera: 0,
		datos: null,
		Tipo de datos: null,
		nombre de usuario: null,
		contraseña: null,
		cache: null,
		Lanza: falso,
		tradicional: falso,
		encabezados: {},
		* /

		Acepta: {
			"*": todos los tipos,
			texto: "text / plain",
			html: "text / html",
			xml: "application / xml, text / xml",
			JSON: "application / json, text / javascript"
		},

		Contenido: {
			xml: / xml /,
			html: / html /,
			JSON: / JSON /
		},

		responseFields: {
			xml: "responseXML",
			texto: "responseText",
			JSON: "responseJSON"
		},

		// convertidores de datos
		// Teclas de la fuente separada (o captatodos "*") y de destino tipos con un solo espacio
		convertidores: {

			// Convertir nada al texto
			"* Texto": Cadena,

			// Texto a HTML (true = sin transformación)
			"Html texto": true,

			// Evaluar el texto como una expresión JSON
			"Texto JSON": jQuery.parseJSON,

			// Analizar el texto como XML
			"XML de texto": jQuery.parseXML
		},

		// Las opciones que no se deben extender profunda:
		// Puede añadir sus propias opciones de personalización aquí si
		// Y cuando cree que no debería haber
		// Extendida profunda (ver ajaxExtend)
		flatOptions: {
			url: true,
			contexto: true
		}
	},

	// Crea un total de ajustes hechos y derechos objeto en blanco
	// Con ambas ajaxSettings y campos de ajustes.
	// Si se omite objetivo, escribe en ajaxSettings.
	ajaxSetup: función (objetivo, ajustes) {
		configuración de volver?

			// Construir un objeto de ajustes
			ajaxExtend (ajaxExtend (objetivo, jQuery.ajaxSettings), los ajustes):

			// ajaxSettings Extendiendo
			ajaxExtend (jQuery.ajaxSettings, objetivo);
	},

	ajaxPrefilter: addToPrefiltersOrTransports (prefiltros),
	ajaxTransport: addToPrefiltersOrTransports (transportes),

	// Método Main
	Ajax: function (url, opciones) {

		// Si url es un objeto, simular pre-1.5 de la firma
		si (typeof url === "objeto") {
			Opciones = url;
			url = indefinido;
		}

		// opciones fuerza a tener un objeto
		options = Opciones || {};

		var // entre dominios de detección de Vars
			partes,
			// Variable de bucle
			yo,
			// URL sin param anti-caché
			cacheURL,
			// cabeceras de la respuesta string
			responseHeadersString,
			// Manipulador de tiempo de espera
			timeoutTimer,

			// Para saber si le serán enviados los eventos globales
			fireGlobals,

			transporte,
			// cabeceras de respuesta
			responseHeaders,
			// Crear objeto las opciones finales
			s = jQuery.ajaxSetup ({}), opciones,
			// Contexto devoluciones de llamada
			callbackContext = s.context || s,
			// Contexto de eventos globales es callbackContext si se trata de un nodo DOM o una colección de jQuery
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery)?
				jQuery (callbackContext):
				jQuery.event,
			// Deferreds
			diferida = jQuery.Deferred (),
			completeDeferred = jQuery.Callbacks ( "una vez que la memoria"),
			// devoluciones de llamada de estado-dependiente
			statuscode = s.statusCode || {},
			// Encabezados (que son enviados todos a la vez)
			requestHeaders = {},
			requestHeadersNames = {},
			// El estado jqXHR
			Estado = 0,
			// Mensaje de aborto por defecto
			strAbort = "cancelado",
			// Xhr falso
			jqXHR = {
				readyState: 0,

				// Construye encabezados de tabla hash si es necesario
				getResponseHeader: function (clave) {
					partido var;
					si (=== estado 2) {
						if (! responseHeaders) {
							responseHeaders = {};
							while ((partido = rheaders.exec (responseHeadersString))) {
								responseHeaders [partido [1] .tolowercase ()] = partido [2];
							}
						}
						partidos responseHeaders = [key.toLowerCase ()];
					}
					volver partido == null? null: partido;
				},

				// Cadena Raw
				getAllResponseHeaders: function () {
					=== devolver el estado 2? responseHeadersString: null;
				},

				// Almacena en caché la cabecera
				setRequestHeader: function (nombre, valor) {
					var = lname name.toLowerCase ();
					si (estado) {
						name = requestHeadersNames [lname] = requestHeadersNames [lname] || nombre;
						requestHeaders [nombre] = valor;
					}
					devolver este;
				},

				// Anula cabecera de la respuesta de tipo de contenido
				overrideMimeType: función (tipo) {
					si (estado) {
						s.mimeType = tipo;
					}
					devolver este;
				},

				// devoluciones de llamada de estado-dependiente
				statuscode: function (mapa) {
					código var;
					si (mapa) {
						si (estado <2) {
							para (código en el mapa) {
								// Lazy-agregar la nueva llamada de retorno de una manera que conserva los viejos
								statuscode [code] = [statuscode [code], mapa [code]];
							}
						} Else {
							// Ejecutar las devoluciones de llamada apropiados
							jqXHR.always (mapa [jqXHR.status]);
						}
					}
					devolver este;
				},

				// Cancelar la solicitud
				abortar: function (statusText) {
					var = finalText statusText || strAbort;
					si (transporte) {
						transport.abort (finalText);
					}
					hecho (0, finalText);
					devolver este;
				}
			};

		// Adjuntar deferreds
		deferred.promise (jqXHR) = integro completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Eliminar carácter almohadilla (# 7531; y la promoción de cadena)
		// Añadir el protocolo si no se proporciona (# 5866: IE7 problema con las URL de protocolo-menos)
		// Manejar url Falsy en la configuración del objeto (# 10093: coherencia con la firma de edad)
		// También usamos el parámetro url si está disponible
		s.url = ((url || || s.url ajaxLocation) + "") .Colocar (rhash, "") .Colocar (rprotocol, ajaxLocParts [1] + "//");

		// Opción Alias ​​método para escribir como por boleto # 12004
		s.type = options.method || options.type || s.method || s.type;

		// Lista de tipos de datos Extraer
		s.dataTypes = jQuery.trim (s.dataType || "*") .tolowercase (). partido (rnotwhite) || [ ""];

		// A petición de varios dominios está en orden cuando tenemos un protocolo: desajuste puerto: host
		si (s.crossDomain == null) {
			= partes rurl.exec (s.url.toLowerCase ());
			s.crossDomain = !! (partes &&
				(partes [1] == ajaxLocParts [1] || partes [2]! == ajaxLocParts [2] ||
					(Partes [3] || (partes [1] === "http:"? "80": "443")) ==!
						(AjaxLocParts [3] || (ajaxLocParts [1] === "http:"? "80": "443")))
			);
		}

		// Convertir los datos si no está ya una cadena
		si (s.data && && s.processData typeof s.data! == "cadena") {
			s.data = jQuery.param (s.data, s.traditional);
		}

		// Aplicar prefiltros
		inspectPrefiltersOrTransports (prefiltros s, opciones, jqXHR);

		// Si la solicitud fue abortado en el interior de un prefiltro, se detiene allí
		si (=== estado 2) {
			volver jqXHR;
		}

		// Podemos disparar eventos globales a partir de ahora si se le pide
		fireGlobals = s.global;

		// Atento a un nuevo conjunto de solicitudes
		(si fireGlobals && jQuery.active ++ === 0) {
			jQuery.event.trigger ( "ajaxStart");
		}

		// Mayúsculas el tipo
		s.type = s.type.toUpperCase ();

		// Determina si la solicitud tiene contenido
		s.hasContent = rnoContent.test (s.type!);

		// Guardar la dirección URL en el caso que estamos jugando con el Si-Modified-Since
		// Y / o Si-None-Match cabecera más adelante
		cacheURL = s.url;

		// Más de manejo para las solicitudes sin contenido opciones
		if (! s.hasContent) {

			// Si se dispone de datos, añadir datos a url
			si (s.data) {
				cacheURL = (s.url + = (rquery.test (cacheURL) "&":) + s.data? "?");
				// # 9682: eliminar datos de manera que no se utiliza en un reintento eventual
				Eliminar s.data;
			}

			// Añadir anti-caché en la url si es necesario
			si (s.cache === false) {
				s.url = rts.test (cacheURL)?

					// Si ya existe un parámetro '_', establezca su valor
					cacheURL.replace (RTS, "$ 1_ =" + nonce ++):

					// De lo contrario añadir uno hasta el final
					cacheURL + (?: "?" rquery.test (cacheURL) "Y") + "_ =" + nonce ++;
			}
		}

		// Establecer el If-Modified-Since encabezado y o / If-None-Match, si está en modo ifModified.
		si (s.ifModified) {
			si (jQuery.lastModified [cacheURL]) {
				jqXHR.setRequestHeader ( "If-Modified-Since", jQuery.lastModified [cacheURL]);
			}
			si (jQuery.etag [cacheURL]) {
				jqXHR.setRequestHeader ( "If-None-Match", jQuery.etag [cacheURL]);
			}
		}

		// Establecer la cabecera correcta, si se están enviando datos
		si (s.data && && s.hasContent s.contentType! == false options.contentType ||) {
			jqXHR.setRequestHeader ( "Content-Type", s.contentType);
		}

		// Establecer la cabecera Acepta para el servidor, dependiendo del tipo de datos
		jqXHR.setRequestHeader (
			"Aceptar",
			s.dataTypes [0] [&& s.accepts s.dataTypes [0]]?
				s.accepts [s.dataTypes [0]] + (s.dataTypes [0] == "*" "," + + ALLTYPES "; q = 0,01":!? ""):
				s.accepts [ "*"]
		);

		// Compruebe si hay opción de encabezados
		para (i en s.headers) {
			jqXHR.setRequestHeader (i, s.headers [i]);
		}

		// Permitir encabezados personalizados / tipos MIME y aborto temprano
		si (s.beforeSend && (s.beforeSend.call (callbackContext, jqXHR, s) === === estado falso || 2)) {
			// Abortar si no se hace ya y devolución
			jqXHR.abort volver ();
		}

		// Abortar ya no es una cancelación
		strAbort = "abortar";

		// Instalar devoluciones de llamada en deferreds
		para (i en {éxito: 1, error: 1, completa: 1}) {
			jqXHR [i] (s [i]);
		}

		// Obtener el transporte
		transporte = inspectPrefiltersOrTransports (transportes, s, opciones, jqXHR);

		// Si no hay transporte, nos auto-aborto
		if (! transporte) {
			hecho (-1, "no hay transporte");
		} Else {
			jqXHR.readyState = 1;

			// Enviar evento global
			if (fireGlobals) {
				globalEventContext.trigger ( "ajaxSend", [jqXHR, s]);
			}
			// Se acabó el tiempo
			si (s.async && s.timeout> 0) {
				timeoutTimer = setTimeout (function () {
					jqXHR.abort ( "tiempo de espera");
				}, S.timeout);
			}

			tratar {
				Estado = 1;
				Transport.send (requestHeaders, hecho);
			} Catch (e) {
				// Propagar excepción, ya que el error si no se hace
				si (estado <2) {
					hecho (-1, e);
				// Simplemente volver a lanzar otra manera
				} Else {
					tirar de correo;
				}
			}
		}

		// Devolución de llamada para cuando todo se hace
		función de estado, hecho (nativeStatusText, respuestas cabeceras) {
			var IsSuccess, el éxito, el error, la respuesta, modificado,
				statusText = nativeStatusText;

			// Llama una vez
			si (=== estado 2) {
				regreso;
			}

			// Estado está "hecho" ahora
			Estado = 2;

			// Tiempo de espera Claro si es que existe
			si (timeoutTimer) {
				clearTimeout (timeoutTimer);
			}

			// Desreferencia transporte para la recogida de basura temprano
			// (No importa cuánto tiempo se utilizará el objeto jqXHR)
			transport = indefinido;

			// cabeceras de respuesta de la caché
			responseHeadersString = cabeceras || "";

			// Conjunto readyState
			jqXHR.readyState = Estado> 0? 4: 0;

			// Determinar si tiene éxito
			IsSuccess = Estado de> = 200 && estado <300 || === Estado 304;

			// Obtener datos de respuesta
			if (respuestas) {
				respuesta = ajaxHandleResponses (s, jqXHR, las respuestas);
			}

			// Convertir no importa qué (que los campos responseXXX manera siempre se establecen)
			respuesta = ajaxConvert (s, respuesta, jqXHR, IsSuccess);

			// Si tiene éxito, manejar el tipo de encadenamiento
			si (IsSuccess) {

				// Establecer el If-Modified-Since encabezado y o / If-None-Match, si está en modo ifModified.
				si (s.ifModified) {
					modificado jqXHR.getResponseHeader = ( "Last-Modified");
					si (modificado) {
						jQuery.lastModified [cacheURL] = modificada;
					}
					modificado jqXHR.getResponseHeader = ( "etag");
					si (modificado) {
						jQuery.etag [cacheURL] = modificada;
					}
				}

				// Si hay contenido
				si (estado === 204 === || s.type "cabeza") {
					statusText = "nocontent";

				// Si no se modifica
				} Else if (=== estado 304) {
					statusText = "notmodified";

				// Si tenemos datos, vamos a convertirlo
				} Else {
					statusText = response.state;
					= éxito response.data;
					error = response.error;
					! IsSuccess = error;
				}
			} Else {
				// Extraemos de error de statusText
				// Entonces normalizar statusText y el estado de no-aborta
				error = statusText;
				si (estado ||! statusText) {
					statusText = "error";
					si (estado <0) {
						estado = 0;
					}
				}
			}

			// conjunto de datos para el objeto xhr falsa
			jqXHR.status = Estado;
			jqXHR.statusText = (nativeStatusText || statusText) + "";

			// El éxito / error
			si (IsSuccess) {
				deferred.resolveWith (callbackContext, [éxito, statusText, jqXHR]);
			} Else {
				deferred.rejectWith (callbackContext, [jqXHR, statusText, el error]);
			}

			// devoluciones de llamada de estado-dependiente
			jqXHR.statusCode (statuscode);
			statuscode = indefinido;

			if (fireGlobals) {
				globalEventContext.trigger (IsSuccess "ajaxSuccess": "ajaxError",
					[JqXHR, s, IsSuccess? el éxito: error]);
			}

			// completa
			completeDeferred.fireWith (callbackContext, [jqXHR, statusText]);

			if (fireGlobals) {
				globalEventContext.trigger ( "ajaxComplete", [jqXHR, s]);
				// Manejar el contador global AJAX
				if (! (--jQuery.active)) {
					jQuery.event.trigger ( "ajaxStop");
				}
			}
		}

		volver jqXHR;
	},

	getJSON: function (url, de datos, de devolución de llamada) {
		volver jQuery.get (url, de datos, de devolución de llamada, "json");
	},

	getScript: function (url, callback) {
		volver jQuery.get (url, indefinido, devolución de llamada, "script");
	}
});

jQuery.each ([ "get", "post"], la función (i, método) {
	jQuery [método] = function (url, de datos, de devolución de llamada, tipo) {
		// Cambiar argumentos si se omite el argumento de datos
		si (jQuery.isFunction (datos)) {
			type = Tipo || llamar de vuelta;
			= devolución de llamada de datos;
			datos = sin definir;
		}

		jQuery.ajax devolver ({
			url: url,
			Tipo: método,
			Tipo de datos: tipo,
			de datos: datos,
			el éxito: devolución de llamada
		});
	};
});

// Adjuntar un montón de funciones para el manejo de eventos comunes AJAX
jQuery.each ([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], la función (i, tipo) {
	jQuery.fn [tipo] = función (Fn) {
		volver this.on (tipo, fn);
	};
});


jQuery._evalUrl = function (url) {
	jQuery.ajax devolver ({
		url: url,
		escriba: "GET",
		Tipo de datos: "guión",
		asíncrono: falso,
		mundial: falso,
		"Lanza": true
	});
};


jQuery.fn.extend ({
	wrapAll: function (html) {
		si (jQuery.isFunction (html)) {
			volver this.each (function (i) {
				jQuery (este) .wrapAll (html.call (esto, i));
			});
		}

		si (esta [0]) {
			// Los elementos para envolver alrededor de la meta
			envoltura var = jQuery (html, esta [0] .ownerDocument) .EQ (0) .clone (true);

			si (esto [0] .parentNode) {
				wrap.insertBefore (esto [0]);
			}

			wrap.map (function () {
				var = elem esto;

				mientras que (elem.firstChild && elem.firstChild.nodeType === 1) {
					elem = elem.firstChild;
				}

				Elem del retorno;
			.}) Append (este);
		}

		devolver este;
	},

	wrapInner: function (html) {
		si (jQuery.isFunction (html)) {
			volver this.each (function (i) {
				jQuery (este) .wrapInner (html.call (esto, i));
			});
		}

		volver this.each (function () {
			auto var = jQuery (este),
				contents = self.contenido ();

			si (contents.length) {
				contents.wrapAll (html);

			} Else {
				self.append (html);
			}
		});
	},

	envoltura: function (html) {
		var = isFunction jQuery.isFunction (html);

		volver this.each (function (i) {
			jQuery (este) .wrapAll (isFunction html.call (esto, i):? html);
		});
	},

	desenvolver: function () {
		volver this.parent (). each (function () {
			if (! jQuery.nodeName (este "cuerpo")) {
				jQuery (este) .replaceWith (this.childNodes);
			}
		}).fin();
	}
});


jQuery.expr.filters.hidden = function (elem) {
	// Ayuda: Opera <= 12.12
	// Opera dice offsetWidths y offsetHeights inferior a cero en algunos elementos
	volver elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
		(! Support.reliableHiddenOffsets () &&
			((Elem.style && elem.style.display) || jQuery.css (elem, "pantalla")) === "ninguna");
};

jQuery.expr.filters.visible = function (elem) {
	volver jQuery.expr.filters.hidden (elem)!;
};




var = R20 / 20% / g,
	rbracket = / \ [\] $ /,
	rCRLF = / \ r? \ n / g,
	rsubmitterTypes = / ^ (?: presentar botón | | imagen | restablecer | archivo) $ / i,
	rsubmittable = / ^ (entrada ?: | selecto | área de texto | keygen) / i;

buildParams función (prefijo, obj, tradicional, añadir) {
	var name;

	si (jQuery.isArray (obj)) {
		// Serialice elemento de la matriz.
		jQuery.each (obj, la función (i, v) {
			si (tradicional || rbracket.test (prefijo)) {
				// Tratar a cada elemento de la matriz como un escalar.
				añadir (prefijo, v);

			} Else {
				// Ropa interior no puede escalar (array u objeto), codificar su índice numérico.
				buildParams ( "["? + (v typeof === "objeto" i "") + "] + prefijo", v, tradicional, añado);
			}
		});

	} Else if (! && Tradicional jQuery.type (obj) === "objeto") {
		// Serialice tema objeto.
		para (nombre en obj) {
			buildParams (prefijo + "[" + nombre + "]", obj [nombre], tradicional, añadir);
		}

	} Else {
		// Serialice elemento escalar.
		añadir (prefijo, obj);
	}
}

// Serialice una serie de elementos de formulario o un conjunto de
// clave / valor en una cadena de consulta
jQuery.param = function (a, tradicional) {
	prefijo var,
		s = [],
		añadir = function (clave, valor) {
			// Si el valor es una función, invocarlo y devolver su valor
			valor = jQuery.isFunction (valor)? valor (): (valor == null "": valor?);
			s [s.length] = encodeURIComponent (clave) + "=" + encodeURIComponent (valor);
		};

	// Establecer tradicional a la verdad para jQuery <= 1.3.2 comportamiento.
	si (=== tradicional indefinido) {
		= tradicionales jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// Si una matriz se aprobó en, asumir que es un conjunto de elementos de formulario.
	si (jQuery.isArray (a) || (a.jquery &&! jQuery.isPlainObject (a))) {
		// Serialice los elementos del formulario
		jQuery.each (a, function () {
			añadir (this.name, this.value);
		});

	} Else {
		// Si tradicional, codificar la "vieja" (el camino 1.3.2 o más viejos
		// Lo hizo), de lo contrario codificar params de forma recursiva.
		para (prefijo en a) {
			buildParams (prefijo, un [prefijo], tradicional, añadir);
		}
	}

	// Devolver la serialización resultante
	s.join volver ( "Y") .Colocar (r20, "+");
};

jQuery.fn.extend ({
	serializar: function () {
		volver jQuery.param (this.serializeArray ());
	},
	serializeArray: function () {
		volver this.map (function () {
			// Se puede añadir propHook de "elementos" para filtrar o agregar elementos de formulario
			elementos var = jQuery.prop (esto "elementos");
			elementos de retorno? jQuery.makeArray (elementos): este;
		})
		.Filter (function () {
			Tipo var = this.type;
			// Usar .is ( ": desactivado") de modo que los trabajos fieldset [Disabled]
			volver this.name && jQuery (este) .is ( ": desactivado")! &&
				rsubmittable.test (this.nodeName) &&! rsubmitterTypes.test (tipo) &&
				(This.checked || rcheckableType.test (tipo)!);
		})
		.map (function (i, elem) {
			var = val jQuery (este) .val ();

			volver val == null?
				nulo :
				jQuery.isArray (val)?
					jQuery.map (val, función (val) {
						retorno {nombre: elem.name, valor: val.replace (rCRLF, "\ r \ n")};
					}):
					{Nombre: elem.name, valor: val.replace (rCRLF, "\ r \ n")};
		}).obtener();
	}
});


// Crear el objeto de solicitud
// (Esto todavía está unido a ajaxSettings para compatibilidad con versiones anteriores)
! JQuery.ajaxSettings.xhr = == window.ActiveXObject indefinido?
	// Ayuda: IE6 +
	function () {

		// XHR no puede acceder a los archivos locales, siempre utilizar ActiveX para ese caso
		volver! this.isLocal &&

			// Ayuda: IE7-8
			// OldIE XHR no soporta métodos no RFC2616 (# 13240)
			// Ver http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// Y http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Aunque este cheque por seis métodos en lugar de ocho
			// Desde IE también no soporta "traza" y "conectar"
			/ ^ (Get | post | cabeza | puesto | Eliminar | opciones) $ / i.test (this.type) &&

			createStandardXHR () || createActiveXHR ();
	}:
	// Para todos los demás navegadores, use el objeto XMLHttpRequest norma
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr ();

// Ayuda: IE <10
// solicitudes abiertas deben ser abortados de forma manual en la descarga (# 5280)
si (window.ActiveXObject) {
	jQuery (ventana) .en ( "descarga", function () {
		for (var clave en xhrCallbacks) {
			xhrCallbacks [clave] (no definido, true);
		}
	});
}

// Determinar las propiedades de apoyo
support.cors = !! xhrSupported && ( "withCredentials" en xhrSupported);
xhrSupported = = support.ajax !! xhrSupported;

// Crear el transporte si el navegador puede proporcionar una xhr
si (xhrSupported) {

	jQuery.ajaxTransport (function () {opciones
		// Dominio Cruz sólo se permite si es compatible a través de XMLHttpRequest
		if (! options.crossDomain || support.cors) {

			var devolución de llamada;

			regreso {
				enviar: función (cabeceras, completa) {
					i var,
						xhr = options.xhr (),
						id = ++ xhrId;

					// Abrir el socket
					xhr.open (options.type, options.url, options.async, options.username, options.password);

					// Aplicar los campos personalizados si se proporciona
					if (options.xhrFields) {
						para (i en options.xhrFields) {
							XHR [i] = options.xhrFields [i];
						}
					}

					// Invalidar tipo MIME si es necesario
					si (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType (options.mimeType);
					}

					// X-Requested-With cabecera
					// Para las solicitudes de varios dominios, ya que las condiciones para una verificación previa son
					// Similar a un puzzle, simplemente nunca se propuso que para estar seguro.
					// (Que siempre se puede ajustar en función de cada solicitud o incluso utilizando ajaxSetup)
					// Para las solicitudes del mismo dominio, no va a cambiar ya a disposición de cabecera.
					if (! options.crossDomain &&! cabeceras [ "X-Requested-Con"]) {
						cabeceras [ "X-Solicitados-Con"] = "XMLHttpRequest";
					}

					// establecer cabeceras
					para (i en las cabeceras) {
						// Ayuda: IE <9
						ActiveXObject de // IE lanza una excepción "No coinciden los tipos" cuando se configura
						// Encabezado de solicitud a un valor nulo.
						//
						// Para mantener consistente con otras implementaciones XHR, convertir el valor
						// Para cuerdas e ignorar `undefined`.
						si (cabeceras [i] == undefined) {
							xhr.setRequestHeader (i, encabezados [i] + "");
						}
					}

					// No enviar la solicitud
					// Esto puede provocar una excepción que es en realidad
					// Maneja en jQuery.ajax (por lo que no try / catch aquí)
					xhr.send ((options.hasContent && options.data) || null);

					// Oyente
					devolución de llamada = function (_, isAbort) {
						var estado, statusText, las respuestas;

						// Nunca fue llamado y se aborta o completa
						si (devolución de llamada && (=== isAbort || xhr.readyState 4)) {
							// Limpiar
							eliminar xhrCallbacks [ID];
							devolución de llamada = indefinido;
							xhr.onreadystatechange = jQuery.noop;

							// Abortar manualmente si es necesario
							si (isAbort) {
								si (xhr.readyState! == 4) {
									xhr.abort ();
								}
							} Else {
								respuestas = {};
								estado = xhr.status;

								// Ayuda: IE <10
								// Acceso a responseText-datos binarios se produce una excepción
								// (# 11426)
								si (typeof xhr.responseText === "cadena") {
									responses.text = xhr.responseText;
								}

								// Firefox lanza una excepción al acceder
								// StatusText de solicitudes entre dominios defectuosos
								tratar {
									statusText = xhr.statusText;
								} Catch (e) {
									// Normalizamos con Webkit dando una statusText vacía
									statusText = "";
								}

								// Estado del filtro de comportamientos no estándares

								// Si la solicitud es local y tenemos datos: asumir un éxito
								// (Éxito sin datos no recibirán una notificación, que es lo mejor que
								// Puede hacer implementaciones actuales dados)
								if (! options.isLocal estado && &&! options.crossDomain) {
									estado = responses.text? 200: 404;
								// IE - # 1450: 1223 devuelve a veces, cuando debería ser 204
								} Else if (=== estado 1223) {
									estado = 204;
								}
							}
						}

						// Llamar completa si es necesario
						if (respuestas) {
							completas (de estado, statusText, respuestas xhr.getAllResponseHeaders ());
						}
					};

					si (options.async!) {
						// Si estamos en modo de sincronización encendamos la devolución de llamada
						llamar de vuelta();
					} Else if (xhr.readyState === 4) {
						// (IE6 y IE7) si está en la memoria caché y ha sido
						// Recuperado directamente necesitamos para disparar la devolución de llamada
						setTimeout (devolución de llamada);
					} Else {
						// Añadir a la lista de rellamadas XHR activos
						xhr.onreadystatechange = xhrCallbacks [id] = devolución de llamada;
					}
				},

				abortar: function () {
					si (devolución de llamada) {
						devolución de llamada (no definido, true);
					}
				}
			};
		}
	});
}

// Funciones para crear las XHR
createStandardXHR función () {
	tratar {
		volver nueva window.XMLHttpRequest ();
	} Catch (e) {}
}

createActiveXHR función () {
	tratar {
		volver nueva window.ActiveXObject ( "Microsoft.XMLHTTP");
	} Catch (e) {}
}




// Instalar tipoDatos guión
jQuery.ajaxSetup ({
	Acepta: {
		guión: "text / javascript, application / javascript, application / ECMAScript, application / x-ecmascript"
	},
	Contenido: {
		secuencia de comandos: / (?: java | ECMA) script /
	},
	convertidores: {
		"Secuencia de comandos de texto": función (texto) {
			jQuery.globalEval (texto);
			Texto del retorno;
		}
	}
});

// Caso especial de caché de la manija y global
jQuery.ajaxPrefilter ( "guión", la función (s) {
	si (s.cache === indefinido) {
		s.cache = false;
	}
	si (s.crossDomain) {
		s.type = "GET";
		s.global = false;
	}
});

// Transporte truco etiqueta de secuencia de comandos de enlace
jQuery.ajaxTransport ( "guión", la función (s) {

	// Este transporte sólo se ocupa de las peticiones de dominios cruzados
	si (s.crossDomain) {

		var guión,
			= cabeza document.head || jQuery ( "cabeza") [0] || document.documentElement;

		regreso {

			enviar: función (_, devolución de llamada) {

				script = document.createElement ( "script");

				script.async = true;

				si (s.scriptCharset) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Asociar controladores para todos los navegadores
				script.onload = script.onreadystatechange = function (_, isAbort) {

					si (isAbort ||! script.readyState || /loaded|complete/.test (script.readyState)) {

						// Mango pérdida de memoria en el IE
						script.onload = script.onreadystatechange = null;

						// Eliminar el guión
						si (script.parentNode) {
							script.parentNode.removeChild (guión);
						}

						// Desreferencia el guión
						script = NULL;

						// Devolución de llamada si no aborta
						if (! isAbort) {
							devolución de llamada (200, "éxito");
						}
					}
				};

				// errores Circumvent IE6 con elementos de base (# 2709 y # 4378) anteponiendo
				// Usar la manipulación DOM nativa para evitar engaños nuestra domManip AJAX
				head.insertBefore (guión, head.firstChild);
			},

			abortar: function () {
				si (script) {
					script.onload (no definido, true);
				}
			}
		};
	}
});




oldCallbacks var = [],
	? (? = Y | $) | rjsonp = / (=) \ \ \ /??;

// ajustes por defecto JSONP
jQuery.ajaxSetup ({
	jsonp: "callback",
	jsonpCallback: function () {
		var = oldCallbacks.pop de devolución de llamada () || (JQuery.expando + "_" + (nonce ++));
		esta [callback] = true;
		devolución de llamada de retorno;
	}
});

// Detectar, normalizar las opciones e instalar las devoluciones de llamada para solicitudes JSONP
jQuery.ajaxPrefilter ( "jsonp json", la función (s, originalSettings, jqXHR) {

	var callbackName, sobrescrito, responseContainer,
		jsonProp = s.jsonp! == false && (rjsonp.test (s.url)?
			"URL":
			typeof s.data === "cadena" &&! (s.contentType || "") .indexOf ( "application / x-www-form-urlencoded") && rjsonp.test (s.data) && "datos"
		);

	// Manejar si y sólo si el tipo de datos esperado es "jsonp" o tenemos un parámetro para establecer
	si (jsonProp || s.dataTypes [0] === "jsonp") {

		// Obtener el nombre de devolución de llamada, recordando valor preexistente asociada a ella
		callbackName = s.jsonpCallback = jQuery.isFunction (s.jsonpCallback)?
			s.jsonpCallback ():
			s.jsonpCallback;

		// Insertar devolución de llamada en datos de URL o de formulario
		si (jsonProp) {
			s [jsonProp] = s [jsonProp] .Colocar (rjsonp, "$ 1" + callbackName);
		} Else if (s.jsonp! == False) {
			s.url + = (rquery.test (s.url) "y": "?") + s.jsonp + "=" + callbackName;
		}

		// Usar convertidor de datos para recuperar JSON después de la ejecución del script
		s.converters [ "JSON guión"] = function () {
			if (! responseContainer) {
				jQuery.error (callbackName + "no se llama");
			}
			volver responseContainer [0];
		};

		// TipoDatos fuerza JSON
		s.dataTypes [0] = "json";

		// Instalación de devolución de llamada
		sobrescribe = ventana [callbackName];
		ventana [callbackName] = function () {
			responseContainer = argumentos;
		};

		// función de limpieza (se activa después de convertidores)
		jqXHR.always (function () {
			// Restaurar valor preexistente
			ventana [callbackName] = sobrescribe;

			// Guardar en origen como libres
			if (s [callbackName]) {
				// Asegurarse de que la reutilización de las opciones no tornillo cosas
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Guardar el nombre de devolución de llamada para uso futuro
				oldCallbacks.push (callbackName);
			}

			// Llama si se trataba de una función y tenemos una respuesta
			si (responseContainer && jQuery.isFunction (sobrescrito)) {
				sobrescribe (responseContainer [0]);
			}

			responseContainer = sobrescribe = indefinido;
		} );

		// Delegado a la escritura
		volver "guión";
	}
});




// Datos: cadena de html
// Contexto (opcional): Si se especifica, el fragmento se creará en este contexto, por defecto documento
// keepScripts (opcional): Si es verdad, incluirán secuencias de comandos pasados ​​en la cadena html
jQuery.parseHTML = function (datos, el contexto, keepScripts) {
	if (! || de datos de datos typeof! == "cadena") {
		return null;
	}
	si (typeof contexto === "booleano") {
		keepScripts = contexto;
		context = false;
	}
	context = contexto || documento;

	var = analizado rsingleTag.exec (datos),
		guiones = keepScripts && []!;

	// Etiqueta individual
	si (analizar) {
		volver [context.createElement (analizado [1])];
	}

	= analizado jQuery.buildFragment ([los datos], el contexto, las secuencias de comandos);

	if (guiones) && scripts.length {
		jQuery (guiones) .Remove ();
	}

	volver jQuery.merge ([], parsed.childNodes);
};


// Guarde una copia del método de carga de edad
var = _load jQuery.fn.load;

/ **
 * Cargar una URL en una página
 * /
jQuery.fn.load = function (url, params, devolución de llamada) {
	si (typeof url! == "cadena" && _load) {
		volver _load.apply (este, argumentos);
	}

	selector de var, la respuesta, el tipo,
		self = este,
		apagado = url.indexOf ( "");

	si (off> = 0) {
		selector = jQuery.trim (url.slice (apagado, url.length));
		url = url.slice (0, apagado);
	}

	// Si se trata de una función
	si (jQuery.isFunction (params)) {

		// Suponemos que se trata de la devolución de llamada
		devolución de llamada = params;
		params = indefinido;

	// De lo contrario, construir una cadena param
	} Else if (typeof params && params === "objeto") {
		type = "POST";
	}

	// Si tenemos elementos para modificar, hacer la solicitud
	si (self.length> 0) {
		jQuery.ajax ({
			url: url,

			// Si el "tipo" variable es indefinido, a continuación, "GET" se utilizará el método
			Tipo: tipo,
			Tipo de datos: "html",
			datos: params
		}). Hecho (function (responseText) {

			// Guardar la respuesta para su uso en devolución de llamada completa
			respuesta = argumentos;

			self.html (selector?

				// Si se ha especificado un selector, localizar los elementos correctos en un div maniquí
				// No incluir secuencias de comandos para evitar el "permiso denegado 'IE errores
				jQuery ( "<div>") append (jQuery.parseHTML (responseText)) .find (Selector).:

				// En caso contrario utilizar el resultado completo
				responseText);

		}). Completa (&& de devolución de llamada de función (jqXHR, estado) {
			self.each (devolución de llamada, respuesta || [jqXHR.responseText, estado, jqXHR]);
		});
	}

	devolver este;
};




jQuery.expr.filters.animated = function (elem) {
	volver jQuery.grep (jQuery.timers, función (fn) {
		volver elem === fn.elem;
	}).longitud;
};





var = docElem window.document.documentElement;

/ **
 * Obtiene una ventana de un elemento
 * /
función GetWindow (elem) {
	volver jQuery.isWindow (elem)?
		elem:
		elem.nodeType === 9?
			elem.defaultView || elem.parentWindow:
			falso;
}

jQuery.offset = {
	setOffset: function (elem, opciones, i) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			= posición jQuery.css (elem, "posición"),
			curElem = jQuery (elem),
			apoyos = {};

		// Posición establecida en primer lugar, en el caso arriba / izquierda se fijan incluso en elem estática
		si (=== posición "estática") {
			elem.style.position = "relativo";
		}

		curOffset = curElem.offset ();
		curCSSTop = jQuery.css (elem, "superior");
		curCSSLeft = jQuery.css (elem, "izquierda");
		calculatePosition = (posición === posición "absoluta" || === "fijo") &&
			jQuery.inArray ( "auto", [curCSSTop, curCSSLeft])> -1;

		// Tenga que ser capaces de calcular la posición, si bien la parte superior o izquierda es automática y la posición es absoluta o fijo
		si (calculatePosition) {
			curPosition = curElem.position ();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} Else {
			curTop = parseFloat (curCSSTop) || 0;
			curLeft = parseFloat (curCSSLeft) || 0;
		}

		if (jQuery.isFunction (opciones)) {
			Opciones = options.call (elem, i, curOffset);
		}

		si (options.top! = null) {
			props.top = (options.top - curOffset.top) + curTop;
		}
		if (! options.left = null) {
			props.left = (options.left - curOffset.left) + curLeft;
		}

		si (el "uso" en las opciones) {
			options.using.call (elem, apoyos);
		} Else {
			curElem.css (apoyos);
		}
	}
};

jQuery.fn.extend ({
	offset: opciones de función () {
		si (arguments.length) {
			opciones de volver === indefinido?
				esta :
				this.each (función de (i) {
					jQuery.offset.setOffset (esto, las opciones, i);
				});
		}

		var docElem, victoria,
			Caja = {top: 0, izquierda: 0},
			elem = esta [0],
			doc = && elem elem.ownerDocument;

		si (doc!) {
			regreso;
		}

		docElem = doc.documentElement;

		// Asegúrese de que no es un nodo DOM desconectado
		if (! jQuery.contains (docElem, elem)) {
			devuelva la caja;
		}

		// Si no tenemos gBCR, sólo tiene que utilizar 0,0 en lugar del error
		// BlackBerry 5, iOS 3 (iPhone original)
		si (typeof elem.getBoundingClientRect! == strundefined) {
			Caja = elem.getBoundingClientRect ();
		}
		Win = GetWindow (doc);
		regreso {
			arriba: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
			box.left izquierda: + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
		};
	},

	Posición: function () {
		if (! esta [0]) {
			regreso;
		}

		offsetParent var, compensado,
			parentOffset = {top: 0, izquierda: 0},
			elem = esta [0];

		// elementos fijos son desplazadas de la ventana (parentOffset = {top: 0, izquierda: 0}, ya que es su padre solamente desplazamiento
		if ((elem, "posición" jQuery.css) === "fijo") {
			// Suponemos que getBoundingClientRect está disponible cuando la posición calculada es fijo
			offset = elem.getBoundingClientRect ();
		} Else {
			// Obtener * real * offsetParent
			offsetParent = this.offsetParent ();

			// Obtener desplazamientos correctos
			offset = this.offset ();
			if (! jQuery.nodeName (offsetParent [0], "HTML")) {
				parentOffset = offsetParent.offset ();
			}

			// Añadir bordes offsetParent
			parentOffset.top + = jQuery.css (offsetParent [0], "borderTopWidth", true);
			parentOffset.left + = jQuery.css (offsetParent [0], "borderLeftWidth", true);
		}

		// Restar las compensaciones de los padres y de los márgenes de elementos
		// NOTA: Cuando un elemento tiene margen: auto del offsetLeft y marginLeft
		// Son los mismos en Safari causando offset.left para estar incorrectamente 0
		regreso {
			arriba: offset.top - parentOffset.top - jQuery.css (elem, "marginTop", true),
			izquierda: offset.left - parentOffset.left - jQuery.css (elem, "marginLeft", true)
		};
	},

	offsetParent: function () {
		volver this.map (function () {
			var = offsetParent this.offsetParent || docElem;

			mientras que ( "posición" offsetParent && (! jQuery.nodeName (offsetParent, "HTML") && jQuery.css (offsetParent,) === "estática")) {
				offsetParent = offsetParent.offsetParent;
			}
			volver offsetParent || docElem;
		});
	}
});

// Crear métodos scrollLeft y scrollTop
jQuery.each ({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, la función (método, prop) {
	superior var = /Y/.test (prop);

	jQuery.fn [método] = function (val) {
		Acceso de retorno (esto, la función (elem, método, val) {
			victoria var = GetWindow (elem);

			si (val === indefinido) {
				volver a ganar? (Prop en la victoria)? ganar [prop]:
					win.document.documentElement [método]:
					elem [método];
			}

			si (ganar) {
				win.scrollTo (
					!parte superior ? val: jQuery (win) .scrollLeft (),
					parte superior ? val: jQuery (win) .scrollTop ()
				);

			} Else {
				elem [método] = val;
			}
		}, El método, val, arguments.length, null);
	};
});

// Añadir los mejores cssHooks / izquierda utilizando jQuery.fn.position
// Webkit error: https://bugs.webkit.org/show_bug.cgi?id=29084
// Devuelve getComputedStyle ciento cuando se especifican para arriba / izquierda / abajo / derecha
// En lugar de hacer el módulo css dependen del módulo de compensación, que sólo comprueban aquí
jQuery.each ([ "arriba", "izquierda"], la función (i, apoyo) {
	jQuery.cssHooks [prop] = addGetHookIf (support.pixelPosition,
		función (elem, computarizada) {
			si (calculado) {
				computado = curCSS (elem, apoyo);
				// Si curCSS vuelve porcentaje, de reserva para compensar
				Retorno rnumnonpx.test (calculado)?
					jQuery (elem) .position () [prop] + "px":
					computarizada;
			}
		}
	);
});


// crear métodos innerHeight, innerWidth, altura, anchura, y outerHeight outerWidth
jQuery.each ({Altura: "altura", Ancho: "anchura"}, la función (nombre, tipo) {
	jQuery.each ({padding: "interior" + nombre, contenido: Tipo ",": "externa" + nombre}, la función (defaultExtra, nombreFunc) {
		// Margen es sólo para outerHeight, outerWidth
		jQuery.fn [nombreFunc] = function (margen, valor) {
			var = chainable arguments.length && (defaultExtra || margen typeof! == "booleano"),
				defaultExtra adicional = || (Margen === === verdadero valor || cierto "margen": "frontera");

			de acceso (esto, la función (elem, tipo, valor de retorno) {
				var doc;

				si (jQuery.isWindow (elem)) {
					// A partir del 5/8/2012 esto va a producir resultados incorrectos para Mobile Safari, pero hay
					// No es mucho lo que podemos hacer. Ver solicitud de extracción en esta dirección URL para la discusión:
					// https://github.com/jquery/jquery/pull/764
					elem.document.documentElement [ "cliente" + nombre] volver;
				}

				// Obtener anchura o la altura del documento
				si (=== elem.nodeType 9) {
					doc = elem.documentElement;

					// De cualquier desplazamiento [Ancho / Alto] o compensar [Ancho / Alto] o cliente [Ancho / Alto], lo que sea mayor
					// Por desgracia, esto hace que el bug # 3838 en IE6 / sólo el 8, pero actualmente no hay buena manera pequeña, para fijarlo.
					Math.max volver (
						elem.body [ "scroll" + nombre], doc [ "scroll" + nombre],
						elem.body [ "compensada" + nombre], doc [ "compensar" + nombre],
						doc [ "cliente" + nombre]
					);
				}

				valor de retorno === indefinido?
					// Obtener anchura o altura sobre el elemento, requirente, pero no forzar parseFloat
					jQuery.css (elem, tipo, extra):

					// Conjunto de anchura o altura sobre el elemento
					jQuery.style (elem, tipo, valor adicional);
			}, Tipo, chainable? margen: undefined, chainable, null);
		};
	});
});


// El número de elementos contenidos en el conjunto de elementos emparejados
jQuery.fn.size = function () {
	volver this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Se registra como un módulo llamado AMD, ya que jQuery se puede concatenar con otra
// archivos que pueden hacer uso de definir, pero no a través de una secuencia de comandos que concatenación adecuada
// Comprende módulos AMD anónimos. Un llamado AMD es más segura y robusta
// Forma de registrar. jQuery minúsculas se utiliza porque los nombres de módulo AMD son
// Deriva de los nombres de archivo, y jQuery se entrega normalmente en una minúscula
// nombre del archivo. Para ello, después de crear el global, de modo que si un módulo de AMD quiere
// Llamar noConflict para ocultar esta versión de jQuery, que va a funcionar.

// Tenga en cuenta que para la máxima portabilidad, las bibliotecas que no son jQuery debe
// Declararse como módulos anónimos, y evitar el establecimiento de un global si una
// AMD cargador está presente. jQuery es un caso especial. Para más información, ver
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

si (typeof definir === "función" && define.amd) {
	define ( "jQuery", [], function () {
		jQuery regresar;
	});
}




var
	// Mapa sobre jQuery en caso de sobrescritura
	_jQuery = window.jQuery,

	// Mapa sobre el $ en el caso de sobrescritura
	. _ $ = $ Ventana;

jQuery.noConflict = function (profundidad) {
	si (ventana. === $ jQuery) {
		. Ventana $ = _ $;
	}

	si (window.jQuery && profunda === jQuery) {
		window.jQuery = _jQuery;
	}

	jQuery regresar;
};

// Exponer jQuery y los identificadores $, incluso en
// AMD (# 7102 # comentario: 10, https://github.com/jquery/jquery/pull/557)
// y CommonJS para emuladores navegador (# 13566)
si (typeof noGlobal === strundefined) {
	window.jQuery = $ = ventana de jQuery.;
}




jQuery regresar;

}));