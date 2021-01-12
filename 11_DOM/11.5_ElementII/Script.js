const list=document.getElementById('list');
const newE=document.createElement('li');

newE.textContent='NewR'

//--Inserar elemnto--
//list.insertBefore(newE,list.children[0]);
//elemnt.insertBefore(NewElement,ReferentElement)-> inserta el nuevo elemento antes del elemento de referencia

//list.insertAdjacentElement("beforebegin",newE);
//element.insertAdjacentElement('position',new elemet)-> inserta el nuevo elemento en la poscicion seleccionada
/*
position
beforebegin-> hermano anterior del element
afterbegin-> primer hijo de element
beforeend-> ultimo hijo de element
afterend-> siguiente hermano de element
*/

//list.insertAdjacentHTML('beforeend','<p>Parrafo</p>');
//element.insertAdjacentHTML('position','HTML')-> Inserta un elemento html en la posicion seleccionada

//list.insertAdjacentText('beforeend','texto');
//element.insertAdjacentText('position','tex')-> inserta texto en la posicion seleccionada

//--Remplazar elemento--
//list.replaceChild(newE,list.children[0]);
//elemt.replaceChild(elemet1,elemt2)-> remplaza el element2 por el element1

//Metodos que no odos los novegadores soportan (explore)

//list.before(newE);
//elemt.before(new element)-> Inserta el nuevo elemento como hermano anterior de element
//list.prepend(newE);
//elemt.prepend(new element)-> Inserta el nuevo elemento como el primer hijo de element
//list.append(newE);
//elemt.append(new element)-> Inserta el nuevo elemento como el ultimo hijo de element
//list.after(newE);
//elemt.after(new element)-> Inserta el nuevo elemento como el siguiente hermano de element

//--Remplazar un elemento con otro
list.children[0].replaceWith(newE);
//elemt1.replaceWith(elemnt2)-> Remplaza el element1 con el elemnt2

//---Clonar elementos--
//list.after(list.cloneNode(true));
//elent.cloneNode(true/false)-> cona el elemento con sus hijos (true) o no (false)

//---eliminar un elemento---
//list.remove();
//element.remove()-> elimina el element 
list.removeChild(list.children[0]);
//element.removeChild(Eelento hijo)-> remueve el elemento hijo del element
