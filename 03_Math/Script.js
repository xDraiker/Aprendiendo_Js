let x=-7;
let y=2.65;
let z=4;

//propiedades de Math
console.log(Math.E);//Math.E -> explesa la constante e de manera mas precisa.
console.log(Math.PI);//Math.PI -> explesa la constante PI de manera mas precisa.

//metodos de Math
console.log(`El numero absoluto de ${x} es |${Math.abs(x)}|`);//{Math.abs(n) -> Devuelve el valor absoluo de n
console.log(Math.ceil(y));//.ceil(n) -> redondea el numero n
console.log(Math.floor(y));//Math.floor(n) -> "Redondea" n al numero menor mas cercano
console.log(Math.round(y));//.round(n) -> Redindea al numero enero mas sercano despues del puno decimal
console.log(Math.pow(x,z));//Math.pow(n,^n) -> Eleva un numero n a ^n potencia
console.log(Math.random());//.random() -> Genera un numero random de 0 a 1
console.log(Math.sign(x));//.sign(x) -> Devuelve el signo del numero n
console.log(Math.sqrt(z));//.sqrt(n) -> Devuelve la raiz cuadrada de n

//numero random de ciero rango
console.log(Math.round(Math.random()*(10-0)+0));
//random()*(nmayor-nmenor)+nmenor -> formula para obtener un numero random de n rango