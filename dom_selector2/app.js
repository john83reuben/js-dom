// // document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items[1]);

// //getElements specific to a blog tag

// let listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// //document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);

// //Convert HTML collections into array

// lis = Array.from(lis);

// lis.forEach(function(li,index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// })
// console.log(lis);


//document.getSelectorAll

let itemsAgain =  document.querySelectorAll('ul.collection li.collection-item');
console.log(itemsAgain);

itemsAgain.forEach(function(item,index){

    item.textContent = `${index}: Ivann`;

})