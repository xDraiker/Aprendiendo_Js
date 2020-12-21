let x=[]; //Array vacio
let a=[1,2,3,4,5,5];//array inicializado 
let b=['a','b','c','d','e'];

console.log(a);//imprime el array
console.log(a[3]);//iprime un subindice del array
console.log(b);
console.log(b[3]);
//Propiedad
console.log(a.length);//.length -> devuelve la cantidad de subindices del array
console.log(b.length);
//Metodos
console.log(Array.isArray(b));//Array.isArray(elemento) -> Devuelve true o false si el elemnto enre () es un array o no
console.log(a.shift(x));//.shift(array)-> Recorta y devuelve el primer elemeno del array
console.log(a);
console.log(a.pop(x));//.pop(array)->Recorta y devuelve el ultimo elemento del array 
console.log(a);
a.push(5); //.push(n elementos)-> añade n elementos al final del array 
console.log(a);
a.unshift(1);//.unshift(n elementos)->añade n elementos al inicio del array
console.log(a);
console.log(a.indexOf(5));//.indexOf(elemento)->Devuelve el primer sub indice donde se encuenra el elemento especificado 
console.log(a.lastIndexOf(5));//.lastIndexOf(elemeno)-> Devuelve elultimo sub indice donde se encuenra el elemento especificado 
console.log(b.reverse());//.reverse()->Invierte el horden de los elemenos del array
console.log(b.join('*'));//.join()->Convierte el array en sring y lo devuelve con el separador especificado enre elemenos
b.splice(0,5,'A','B','C','D','E');
/*.splice(a,b,item(s))-> Remplaza elemenos del arrego por unos especificados
a y b -> eliminan elemenos del arreglo donde:
a=elemento de inicio (para eliminar)
b=cuantos elemenos se eliminaran a partir del elemeno a
item=Item o items que se agregaran el el espacio de los iems eliminados */
console.log(b);
console.log(b.slice(1,4));
/*.slice(a,b)-> Exrae una pare del arreglo
desde el indice a al indice b
not. el indice en que ermina no se incluye en la exraccion.
*/