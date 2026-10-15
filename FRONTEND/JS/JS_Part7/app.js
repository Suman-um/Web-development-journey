//innertext //innerhtml //innerContent
//getElementById 
//get ElementByClassName 
//get ElementByTagName
//document.querySelector

//data manipulation
let para = document.querySelector('p') ;
para.innerText = "abc" ;
para.innerText = "Hi! Im Peter Parker";
para.innerHTML = "<b>Hi! Im Peter Parker</b>";


//obj.getAttribute('attributeName') //getAttribute
//obj.style 
heading = document.querySelector('h1') ;
heading.style.color = "green" ; //inline style 

//obj.classList.add('className') //add class
heading.classList.add('highlight') ;

//heading.classList.remove('highlight') ; //remove class
//heading.classList.toggle('highlight') ;
//heading.classList.contains('highlight') ; // true 

//Navigation 
//obj.parentElement //parent element
//obj.children //child elements
//obj.nextElementSibling //next sibling
//obj.previousElementSibling //previous sibling
//obj.childElementCount //child element count


// add elements
let newP = document.createElement('p') ;
console.dir(newP) ;
newP.innerText = "This is a new paragraph" ;

//to insert
let bo = document.querySelector('body') ;
bo.appendChild(newP) ;

let button = document.createElement('button') ;
button.innerText = "Click me" ;
button.appendChild(para) ;
