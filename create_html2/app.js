// Create element
//
let li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add attribute
li.setAttribute('title','New Item');

//Create text node and append
li.appendChild(document.createTextNode('Papa World'));

//Create new link element

let link = document.createElement('a');
link.className = 'delete-item secondary-content';

// Add icon to html
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);