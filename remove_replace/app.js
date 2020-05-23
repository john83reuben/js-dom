// Replace Element

//Create new h2 element

let newHeading = document.createElement('h2');

//Add class

newHeading.id ='task-title';

//Create text for newHeading

newHeading.appendChild(document.createTextNode('My Task List'));

//Get old heading

let oldHeading = document.getElementById('task-title');

// Parent

let cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading,oldHeading);


//Remove element

let lis = document.querySelectorAll('li');
let list = document.querySelector('ul');

//Remove list item

lis[0].remove();


// Remove child

list.removeChild(lis[3]);


// Classes and Attr

let firstLi = document.querySelector('li:first-child');
let link = firstLi.children[0];

let val;

//classes

val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add('test');
link.classList.remove('test');
val = link;


//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href','https://www.google.com');
link.setAttribute('title','Google');
val = link;
console.log(val);