let val;

val = document.all;
val = document.head;
val = document.links;


let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));

})


//console.log(scriptsArr);