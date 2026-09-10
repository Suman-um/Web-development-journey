let inp = document.querySelector("input") ;
let btn = document.querySelector("button") ;
let ul = document.querySelector("ul") ;

btn.addEventListener("click" , function(e)
{
  let item = document.createElement("li") ;
  item.innerText = inp.value ;
  ul.appendChild(item) ; 
  inp.value = "" ;

  let delBtn = document.createElement("button") ;
  delBtn.innerText = "delete" ;
  delBtn.classList.add("delete") ;
  item.appendChild(delBtn) ;
}) ;

let delBtns = document.querySelectorAll(".delete") ;


//event delegation 
// for(del of delBtns)
// {
//    del.addEventListener("click" , function(e)
//    {
//    let par = this.parentElement ;
//    par.remove() ;

//    }) ;
// }

//Above doesnt work when new btns are added

ul.addEventListener("click" , function(e)
{
    console.log(e.target) ;
    console.dir(e.target.nodeName) ; //BUTTON  - the name of the element
    // what is triggering the action 
    if(e.target.nodeName == "BUTTON")
    {
        let listItem = e.target.parentElement ;
        listItem.remove() ;
    }
}) ;

