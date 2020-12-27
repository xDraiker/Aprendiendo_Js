const x=[-2,7,5,1];

console.log(x);
console.log(...x);//...array->spread operaior
//Devuelve cada elemento del arra por separado

//pasar elementos de un array como raramero
let n=[7,2,9];
const suma = (a,b,c) =>{
    console.log(a+b+c);
}
suma(...n);

//añadir un arra a oro con  ...
let user=['paco','pepe','juan'];
let newuser=['diego','armando','javier'];

user.push(...newuser);
console.log(user);

//copear array
let ar1=[1,3,6,4];
let ar2=[];
let ar3=[5,3,7,9,0,2];

console.log(ar2=[...ar1])

//concatenar array
let arcon=ar1.concat(ar3,ar2);
console.log(arcon);
let arcon2=[...ar1,...ar3,...ar2];
console.log(arcon2);

//pasar un numero de parameros indeterminados a una funcion
const indeterminado = (...y)=>{
    console.log(y);
}
indeterminado(1,2,3,4,5,6,7,8,9,);

//eliminar elementos duplicados de un array
console.log(new Set(arcon));//elementos guardados en un objeto Set
let z=[...new Set(arcon)];
console.log(z);//elementos guardados en un array
