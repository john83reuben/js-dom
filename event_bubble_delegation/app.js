// Event Bubbling

// document.querySelector('.card-title').addEventListener('click',function(){

//     console.log('card-title');

// });

// document.querySelector('.card-content').addEventListener('click',function(){

//     console.log('card-content');

// });

// document.querySelector('.card').addEventListener('click',function(){

//     console.log('card');

// });
// document.querySelector('.col').addEventListener('click',function(){

//     console.log('col');

// });


// Event Delegation

const deleteItem = document.querySelector('.delete-item').parentElement.parentElement;

deleteItem.addEventListener('click',delItem);

function delItem(ev){
    // if(ev.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete-item');
    // }

        if(ev.target.parentElement.classList.contains('delete-item')){
        console.log('delete-item');
        ev.target.parentElement.parentElement.remove();
    }
   

   

}