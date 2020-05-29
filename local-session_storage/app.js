// // set local storage item

// /**
//  local storage - the storage will stay until you manually clear out through settings or through program

//  session storage - it will clear once the browser is closed
//  **/    

//  //set local storage item
//  localStorage.setItem('name','John');

//   //set session storage item
// sessionStorage.setItem('name','Ivann');

// // remove from local storage
// //localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');


// //clear localstorage
// localStorage.clear();
// console.log(name);



let form = document.querySelector('form');
form.addEventListener('submit',function(ev){
    const task = document.getElementById('task').value;
    
    //console.log(task);

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        //console.log(tasks);
        

    }
    tasks.push(task);
    

    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Task Saved');


     ev.preventDefault();

});

