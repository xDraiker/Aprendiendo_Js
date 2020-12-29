//Acceder a nodos del DOM
//nodo en DOM = elementos en documento HTML

const title=document.getElementById('t'); 
//document.getElementById('id')->Accede a un elemento de HTML desde Js a ravez del ID
//Siempre que se accede a un elemento (nodo) del DOM se tiene que uzar una consante y denro de los () deve de escribirse el ID como un sring

console.log(t);
title.textContent = 'Cmabiando el titulo desde Js';
//.textContent->Propiedadd que lee o edita el conenido de un nodo del DOM
//elemeno.textContent = 'nuevo valor'->cambia el valor del nodo del DOM
//elemeno.textContent->Devuelve el conenido del elementon en HTML

const subt = document.querySelector('h2');
//document.querySelector('Selecor CSS')-> Accede al primer elementto que coincida con el selecor CSS
const div = document.querySelector('.box');
const sp = div.querySelector('span');
//Not. Sepuede acceder a un elemeno desde el elemento que lo conenga, siempre  cuando el se haya axedido al elemento contenedor con .querySelector
console.log(subt);
console.log(sp.textContent);

//Se puede acceder a un nodo de manera escalonada primero con un .getElementById y despues con tantos .querySelector como se quiera seleccionar el nodo 
const a=document.getElementById('article').querySelector('.lorem').querySelector('.link');
console.log(a.textContent);

const p = document.querySelectorAll('.parrafo');
//.querySelectorAll('selecttor CSS')->Accede a todos los elementos que coincidan con el selecor CSS (devuelve una nodlist)
console.log(p);
//cambio de estilo desde Js (aplicar estilos desde Js es poco recomendado)
p[0].style.color='tomato';
//se puede acceder a cada elemento del nodlist como si fuera un arregolo, pero !!!NO ES UN ARREGLO¡¡¡, 

//Convertir un nodelist en arreglo
const pa=Array.from(p);
console.log(pa);

pa.map(pa => pa.style.color='blue');//comprobar que el nodelis se convirtio en array