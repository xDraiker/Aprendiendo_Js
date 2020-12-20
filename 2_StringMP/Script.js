let cadena="Hola que hace";
let c=" Segunda ";

console.log(cadena.length);
//.length -> devuelve el numero de caracteres en la cadena
console.log(cadena.toUpperCase());
// .toUpperCase() -> Escribe la cadena en mausculas 
console.log(cadena.toLowerCase());
// .toLowerCase() -> Escribe la cadena en minusculas 
console.log(cadena.indexOf("a"));
//.indexOf("caracter") -> indica en que pocicion de la cadena se encuenra el caracter (Solo devuelve la posicion del primer caracter que encuenra)
console.log(cadena.replace("que","k"));
//.replace("string","String a remplazar") -> Remplasa un fragmeno de la cadena por uno espesificado (Solo aplica el cambio al primer segmento de la cadena que coincida)
console.log(cadena.substring(0,4));
//.substring(inicio,[fin]) -> regresa el fragmento de la cadena que se especifica con las pociciones dentro de ()
console.log(cadena.slice(-18,4));
//.slice(inicio,[fin])-> Es parecido al anterior solo que acepta numeros negativos (los numeros negaivos hacen referencia a la cadena de izquierda a derecha)
console.log(c.trim());
//c.trim() -> elimina los espacios anes y despues de la cadena
console.log(cadena.startsWith("H",0));
//.startsWith("Sring",[inicio]) -> True o False si la cadena empieza o no con el esring que se especifica en la posicion que se indica
console.log(cadena.endsWith("a",4));
//.endsWith("string",[final]) -> Lo mismo que el anerior pero en vez del sring del comienzo es el sring del final
console.log(cadena.includes("H",0));
//.includes("String",[inicio]) -> Regresa true o false encaso de encontrar o no el string especificado desde la pocicion indicada
console.log(c.repeat(2));
//.repeat(n) -> Repite n veces la cadena

//Temple String y concaenacion
let n="ocurrio";
let a="frace";

console.log("NO se me "+n+" una "+a+" coerente");//concaenacion
console.log(`No se me ${n} una ${a} coerente`);//Temple String
//en el templestring con ${} se puede insertar cualquier cosa valida en Js 