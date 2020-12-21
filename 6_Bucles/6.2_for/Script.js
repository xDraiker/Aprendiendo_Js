let names=['Juan','Pepe','Pancho','Apa']

//for normal
for(let i=0;i<5;i++){
    console.log(i);
}
//---for of---
//Puede devolver los elementos de un array asignando cada elemento a una variable
//for(let variable of array)
for(let name of names){
    console.log(name);
}
//---for in---
//Puede devolver los sub indices de cada elemento en un array asignando cada subindice a una variable
//for(let variable in array)
for(let name in names){
    console.log(name);
}
//not. Su uso es mejor con objetos
//breack
for(let i=0;i<5;i++){
    console.log(i);
    if(i==2)
        break;
}
//continue
for(let j=0;j<6;j++){
    if(j%2==0){
        continue;
    }
    console.log(j);
}