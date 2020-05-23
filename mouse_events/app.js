let clearBtn = document.querySelector('.clear-tasks');
let card = document.querySelector('.card');
let heading = document.querySelector('h5');

//Click
clearBtn.addEventListener('click',runEvent);

//Double click
clearBtn.addEventListener('dblclick',runEvent);

//Mouseover
clearBtn.addEventListener('mouseover',runEvent);

// Event handler 
function runEvent(e){

    console.log(`Event Type: ${e.type}`);
}