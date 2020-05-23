//dom.js
/**
parent.children - is a nodelist of elements
parent.firstElementChild - is 1 elementnode
parent.lastElementChild - is 1 elementnode
node.nextElementSibling - is 1 elementnode
node.previousElementSibling - is 1 elementnode
node.parentNode - is 1 elementnode
parent.contains(node) - returns Boolean

 **/

let main = document.querySelector('.main');

let c = main.children;
let c2 = main.childNodes;

let ul = main.children[1];
let h2 = main.firstElementChild;
let ul2 = h2.nextElementSibling;
let h2a = ul2.previousElementSibling;


 let lis = ul.children;
 let firstli = lis[0]; //ul.firstElementChild
 let value_firstli = firstli.textContent;

 console.log(value_firstli);



