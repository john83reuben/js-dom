let val;

let list = document.querySelector('ul.collection');
let listItem = document.querySelector('li.collection-item');

//val = listItem;

//get child nodes -- THis is node list

val = list.childNodes;
val = list.childNodes[7].nodeName;
val = list.childNodes[7].nodeType;


//get children -- this is HTML collection

val = list.children;
val = list.children[0];
list.children[1].textContent = 'Papa';

//Children of children

val = list.children[3].children;

//First Child and Last Child
val = list.firstChild; //gives the first node
val = list.lastChild;
val = list.firstElementChild; //gives the first child element
val = list.lastElementChild;


// get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next siblings

val = listItem.nextSibling;
val = listItem.nextElementSibling;

console.log(val);