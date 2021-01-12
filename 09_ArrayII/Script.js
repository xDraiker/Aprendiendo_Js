let c='Hola que hace';
let a=[];
let x=[9,43,49,132,67];
let b=['Js','PHP','HTML','CSS'];

console.log(c.split(' '));//.split('') ->Crea un arreglo con los elemenos de una cadena, con (' ') crea un arrar con los elementos de la cadena separados por ' '.
a=Array.from(c);
console.log(a);//Array.from(Iterable) ->Conviere un elemeno iterable en un array 
console.log(a.sort());//.sort([Calback])-> ordena los elementos del array segun su valor unicode. Si se le agrega una funcion/Calback se ordenan los elemementos segun dicha funcion
console.log(x.sort((a,b)=>a-b));//.sort((parameros) => algoritmo)
x.forEach((x,index) => console.log(`El No. ${x} esta en la posicion ${index} del arreglo`));
//.forEach((calback,[index]) ->Recorre (enlista) los subindices del array (mas facil que un ciclo for)
console.log(b.some(b => b.length>2));//almenos un elemento
console.log(b.every(b => b.length>2));//todos los elementos
//.some(calbak)/.every(calbak)->devuelve true o false si se cumple la condicion con almenos uno o todos los elemenos respecivamente del arreglo
console.log(x.map(x => x+2));//.map(calbak)->le aplica el algoritmo a cada elemento del arreglo
console.log(x.filter(x => x%2!=0));//.filter(calbak)->filtra los elementos del array se gun el calbak
console.log(x.reduce((a,b) => a+b));//x.reduce(calbak)->reduce los elementos de un arreglo a uno solo segun el calbak