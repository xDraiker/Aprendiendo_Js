//Aributos de etiquetas HTML desde Js
const title = document.getElementById('t1');
const form = document.getElementById('nom');

console.log(title);
console.log(form);

console.log(form.getAttribute('type'));
//.getAttribute('atributo')->Devuelve el valor del atributo especificado
//elemento.getAttribute('atributo')
form.setAttribute('type','number');
//.setAttribute('aributo','nuevo atributo')-> puedes cambiar el valor de un aributo en una etiquea HTML desde 
//elemento.setAttribute('aributo','nuevo atributo')

//Not. para que funcionen los dos comandos aneriores se tienen que acceder a cada elemento con .getElementById
console.log(form.getAttribute('type'));

//clases de HTML desde Js
title.classList.add('titulo');//.classList.add('class')-> añade una o varias clases denro del () al elemento HTML
console.log(title);
title.classList.remove('titulo');//.classList.remove('class')->Elimina la o las clases denro de los () de la etiqueTa HTML
console.log(title);
console.log(title.classList.contains('t1'));
//elemento.classList.contains('class')-> verifica si la clase ('class') exise en el elemento (true=existe, false=noexiste)
title.classList.replace('t1','t');
//.classList.replace('oldclass','newclass')->Remplaza una calase con otra
console.log(title);

//Atributos "directos"
console.log(nom.value);
//elemento.artibuto del elemento-> Se puede acceder al valor de un atributo del elemento de manera direca poniendo el elemeto seguido de un . y el nombre del elemento a acceder
//estos atributos se pueden visualizar desde la consola del navegador, despleando el elemento
