let div = document.querySelector("div") ;
let ul = document.querySelector("ul") ;
let li = document.querySelectorAll("li") ; 

//Event bubbling 
div.addEventListener("click" , function(e)
{
  console.log("div clicked") ;
}) ;

//to stop bubbling we use stop propagation 
ul.addEventListener("click" , function(e)
{
  e.stopPropagation() ;
  console.log("ul clicked") ;
}) ;

for(lis of li)
{
    lis.addEventListener("click" , function(e)
    {
        console.log("li was clicked") ;
    }) ;
} 