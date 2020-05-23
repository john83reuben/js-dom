// document.querySelector('.clear-tasks').addEventListener('click',function(e){

//     console.log('Hello Ivan');

//     e.preventDefault();
// });

// or you can do as below - named function

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){

    //console.log('Hello Ivan');

    let val;

    // Event Object target element
    val = e.target;
    val = e.target.innerText = " Hi John";
    //val = e.target.innerHTML = '<i class="fa fa-remove"></i>';

    console.log(val);

    e.preventDefault();
}

