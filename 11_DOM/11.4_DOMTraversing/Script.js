const ref=document.getElementById('ref');
const v=document.getElementById('v');

//---Elemento padre a partir de una referencia---
console.log(ref.parentNode);//element.parentNode-> Devuelve el padre del element sea un elemento o no
v.textContent = ref.parentNode.localName;//experimento
console.log(ref.parentElement);//elemen.parentElement-> devuelve el elemnto padre de element

//---Elemento hijo a partir de una referencia---
console.log(ref.childNodes);//element.childNode-> devuelve todos los hijos del element sean elementos o no
console.log(ref.children);//element.children-> devuelve todos los elementos hijos de element
console.log(ref.firstChild);//element.firstChild-> devuelve el primer hijo sea elemento o no
console.log(ref.firstElementChild);//element.firstElementChild-> devuelve el primer elemento hijo del element
console.log(ref.lastChild);//element.lastChild-> devuelve el ultimo hijo de element
console.log(ref.lastElementChild);//element.lastElementChild-> devuelve el ultimo elemento hijo de element
console.log(ref.hasChildNodes());//.hasChildNodes()-> devuelve True si element tiene hijos o false si no

//---Elemento hermano a partir de una referencia---
console.log(ref.nextSibling);//element.nextSibling->Devuelve el siguiene hermano de element sea elemeno o no
console.log(ref.nextElementSibling);//element.nextElementSibling-> devuelve el siguiene elemeno hermano de element
console.log(ref.previousSibling);//element..previousSibling-> devuelve el anterior hermano de element
console.log(ref.previousElementSibling);//element.previousElementSibling-> devuelve el anterior elemento hermano de element 
