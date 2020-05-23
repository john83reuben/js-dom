//dom.js
/**
 document.createElement(tagname) - returns 1 element node
 document.createTextNode(text) - returns 1 text node
 parent.appendChild(node) - adds child to parent
 parent.removeChild(node) - removes node from parent

 element.innerHTML
 element.textContent
 **/

 let main = document.querySelector('.main');
 let h2 = main.querySelector('h2');
 //console.log(h2);
 h2.textContent = "Loading Movies";


 let p = main.querySelector('p');
 p.textContent = "Hello Ivann";
 p.innerHTML = "Ivann John is the <b> greatest<b>";


 let ul = document.createElement('ul');
 main.appendChild(ul);

 movies.forEach(function(item) {
     let li = document.createElement('li');
     let text = document.createTextNode(item);
     li.appendChild(text);
     ul.appendChild(li);
     
 });

 main.removeChild(ul);