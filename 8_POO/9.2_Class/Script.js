//Una clase sirve como una planilla de objetos
//declaracion de una clase
class Animal{
    constructor(nombre,terreno,dieta,desplazamiento){//funcion construcora
        this.nombre=nombre
        this.terreno=terreno
        this.dieta=dieta
        this.desplazamiento=desplazamiento

        this.daos=`El/La ${nombre} es un animal ${terreno} que tiene una alimenacion ${dieta} y se desplaza ${desplazamiento}`
    }
    //una funcion denro de una clase es un metodo
    //el metodo se escrive dentro de la clase y fuera del constructor
    //la esructura de un metodo es: N. del metodo (){} 
    mini(){
        return `El ${this.nombre} es ${this.dieta}`
    //devido a que las propiedades que tiene el objeo no estan declaradas fuera del consrucor se utiliza this. para referenciarlo
    }
}
//constructor(Parametros bace del objeto)-> esa funcion siepre se tiene que nombrar "constructor", sus parametros serviran como plantilla de un objeto
//this.->asocial las propiedades del objeto con las propiedades enviadas por el paramero
//con this, ambien se pueden agrgar parametros no espesificados en el consructor

//declaracion de un objeo a partir de una clase
//const objeto = new clase (propiedades);
const pez = new Animal('Goldfish','acuaico','omnivoro','nadando')
const anfibio = new Animal('Rana','anfibio','insectivora','nadando y salando')
console.log(pez);
console.log(anfibio);

//llamar un metodo de un objeto de una clase :) 
console.log(pez.mini());
//llamando una propiedad del objeto
console.log(anfibio.daos);

//not. al crear un objeo con una clase, este se utiliza como un objeto normal