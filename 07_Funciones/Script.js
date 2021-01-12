let a=parseInt(prompt('Ingresa un numero'));//prompt('mensaje')->activa una ventana emergente en la pajina par pedir un dato (String)
let b=parseInt(prompt('Ingresa un numero'));//parseInt(String)->Psa un numero streng a un numero del tipo entero (int)

//Funcion "simple"
/*
const suma=(x,y)=> x+y; //const N. de la funcion = (parametros n) => ejcucion de la funcon;

console.log(suma(a,b));//N. de la funcion(parameros)-> mandar a llamar a la funcion
*/
const numero = (n1,n2) =>{
    if(n1%2==0 && n2%2==0){
       return 1;
    }else if(n1%2!=0 && n2%2!=0){
        return 2;
    }else{
        return 3;
    }
}

switch (numero(a,b)){
    case 1: 
        console.log(`${a} y ${b} son pares`);
    break;
    case 2: 
        console.log(`${a} y ${b} son inpares`);
    break;
    default:
        console.log(`${a} o ${b} es inpares`);
    break;
}
//si se abren las {} en una funcion se tiene que uzar el reurn valor;