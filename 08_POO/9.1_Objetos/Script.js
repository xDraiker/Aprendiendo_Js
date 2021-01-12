//Declaracion de un objeto
const pez={
    nombre: ('Goldfish'),
     Ev:10,
     Especies: ['Cola de velo','Oranda']
}
//Visualizacion de un Objeto {}
console.log(pez);
//elemento de un objeto
console.log(pez.nombre);
console.log(pez['nombre']);

//obtencion de las claves
for(let p in pez){
    console.log(p);
}
//inprecion del conenido del objeo
for(let p in pez){
    console.log(pez[p]);
}
//obtencion de un array perteneciene a un objeto
for(let e of pez.Especies){
    console.log(e);
}
console.log(`Los pescados ${pez.nombre}, tienen una esperanza de vida de ${pez.Ev} años. Algunas de sus especies son ${pez.Especies.join(', ')}`)