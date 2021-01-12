const title= document.getElementById('t');
const list= document.getElementById('l');
const slist= document.getElementById('sl');
const link= document.getElementById('link');

//----Creacion de un elemento en el DOM----//
const item=document.createElement('li');//.createElement('elemento')-> Crea un elemento en el DOM
item.textContent='Lunes';//.textContent='Conenido'-> Se agrega conenido al elemento seleccionado
list.appendChild(item);//parent.appendChild(elemento)->agrega el elemento al Documento HTML desde Js asociandolo con una etiquea que lo contenga (paren)


link.innerHTML ='<p>link</p>';//.innerHTML-> Permie escribir HTML en un elemento

/*
Fragmen
Seccion del documeno que puede tener almacenado uno o varios nodos.
Mejora el rendimiento del ordenador
*/
const days=['monday','tuesday','wednesday','thursday','freeday','saurday','sunday'];
const fragment = document.createDocumentFragment();
//document.createDocumentFragment()->Se crea el fragmento en donde se almacenara el nodo

for(let day of days){
 const selec=document.createElement('option');
 selec.setAttribute('value',day);
 selec.textContent=day;
 //creacin del elemento  su conenido
 fragment.appendChild(selec);
 //se guarda el elemento con su contenido en el fragmento
}
slist.appendChild(fragment);
//asigna TODO el conenido del fragmento al elemento select (slis)

/*
poco o nada remonendado:

const days=['monday','tuesday','wednesday','thursday','freeday','saurday','sunday'];
const fragment = document.createDocumentFragment();

for(let day of days){
 const selec=document.createElement('option');
 selec.setAttribute('value',day);
 selec.textContent=day;
 slist.appendChild(selec);
}

si se quiere agregar el conenido del array days como elemenos opion del selec, se tienen que crear dichos elementos a parir 
de un bucle (para maor eficiencia), sin embargo si se agrgan deesa
manera cada elemento se cargara uno despues del otro hasa erminar.
*/
