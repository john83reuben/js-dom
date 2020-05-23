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

let section = document.querySelector('.section');

    //Create ul element
    let ul = document.createElement('ul');
    section.appendChild(ul);

    //Create li element
    let li = document.createElement('li');
    //Create text node element
    let text = document.createTextNode("Hello");
    li.appendChild(text);
    ul.appendChild(li);
    //Create a class for li
    li.className = 'section-item';
    