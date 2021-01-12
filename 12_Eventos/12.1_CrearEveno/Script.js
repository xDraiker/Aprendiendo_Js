const boton=document.getElementById('button');
const box=document.getElementById('box');
const l=document.getElementById('in');


/*
Se pueden crearSelectores de clases en CSS pra posteriormente agregar o remplazar
dicha clase a un elemento/etiqueta desde Js para aplicarle dicho estilo.
Los estilos aplicados directamene desde Js con .style tienen un maor peso que los 
esilos aplicados desde un documneto CSS 
*/
boton.addEventListener('click',()=>{
    box.classList.replace('b','g');
    //aplicando estilo pormedio de clases y un documento CSS (Buena pracica)
});

boton.addEventListener('dblclick',()=>{
    box.style.background='gray';
    //aplicacion de un esilo desde Js (Poco recomendado, Solo usar como ultimo recurso)
});

box.addEventListener('mouseenter',()=>{
    box.classList.replace('b','r');
});
box.addEventListener('mouseleave',()=>{
    box.classList.replace('r','b');
});

box.addEventListener('mousedown',()=>{
    console.log('push box');
});
box.addEventListener('mouseup',()=>{
    console.log('click box');
});

box.addEventListener('mousemove',()=>{
    console.log('moviendo en box');
});

//eventos de eclado

l.addEventListener('keydown',()=>{
    console.log('tecleando');
});

l.addEventListener('keypress',()=>{
    console.log('Precionando una tecla');
});
l.addEventListener('keyup',()=>{
    console.log('Solando una tecla');
});

/*
eventos con raon:
*click->se dispara al hacer click e el elemento
*dblclick->se dispara al hacer dobleclick en el elemento
*mouseenter->Dispara el evento cuando el cursor esta en el area del elemento 
*mouseleave->Dispara el evento cuando el cursor esta fuera del area del elemento
*mousedown->se dspara al precionar encima del elemento
*mouseup->Se dispara al hacer clic en el elemento
*mousemove->se dispara cuando el raon se mueve en el area del elemento

eventos con eclado:

*keydown->Se dispara cuando se teclea una caracer o ecla especial
*keypress->Se dispara cuando se preciona una tecla
*keyup->Se dispara cuando se suelta una tecla
*/