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

// for(let b of btns)
// {
//     b.addEventListener("click" , sayHello) ;
//     b.addEventListener("click" , sayHello2) ;
// }

//Activity - Generate a random colour whenever you click on the button

let gbtn = document.querySelector("button") ;

gbtn.addEventListener("click" , function()
{
  console.log("Button was clicked!") ;
  let h3 = document.querySelector("h3") ;
  let randomColor = getRandomColor() ;
  h3.innerText = randomColor ;
  let div = document.querySelector("div") ;
  div.style.backgroundColor = `rgb${randomColor}` ;
}) ;

function getRandomColor()
{
    let red = Math.floor(Math.random() * 255) ;
    let green = Math.floor(Math.random() * 255) ;
    let blue = Math.floor(Math.random() * 255) ;

    let color = `(${red} , ${green} , ${blue})` ;
    return color ;
}





