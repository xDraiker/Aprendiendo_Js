
const text = document.getElementById('t');
const sub = document.getElementById('s');
const button = document.getElementById('b');

text.addEventListener('keyup',(e) =>{
    console.log(e);
});
//el objeto eveno esta siempre que exista un eveno (da problemas en algunos navegadores).
//se puede acceder pasando un parametro al call back e imprimiendo dicho paramero

sub.addEventListener('click',(e) =>{
    e.preventDefault();
    console.log('Go');
    b.click();
});
//.preventDefault()->propiedad del objeto event que evita el comportamiento por defecto de un evento
b.addEventListener('click',(e) =>{
    text.value='pulsase Go';
});
//pasando un evento como propiedad al elemento se puede forzar la activacion del evento
//elemento.evento ();
