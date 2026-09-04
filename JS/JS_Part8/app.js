let btn = document.querySelector("button") ;

// btn.onclick = function() 
// {
//     alert("Button was clicked! Welcome to the new page") ;
// };

function sayHello()
{
    alert("Helloooo!") ;
}

function sayHello2()
{
    alert("Helloooo2!") ;
}
// btn.onclick = sayHello ;

let btns = document.querySelectorAll("button") ;
// for(let b of btns)
// {
//     b.onclick = sayHello ;
//     //not sayHello() because we don't want to call the function, we want to assign it as a callback;
    
//     b.onclick = sayHello2 ; // both of them do not execute for onclick 
// }

//for multiple values or functions to be executed, we can use addEventListener
for(let b of btns)
{
    b.addEventListener("click" , sayHello) ;
    b.addEventListener("click" , sayHello2) ;
}

