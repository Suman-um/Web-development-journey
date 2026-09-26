//FIRST API CALL
let url = "https://catfact.ninja/fact" ; //free api
fetch(url) ; //returns a promise ;

fetch(url)
.then((response)=>
{
  console.log(response) ;
  console.log(response.json()); //to get the exact object returned 
}).then((data)=>
{
  console.log(data.fact) ; //the exact fact data
}).
catch((err)=>
{
    console.log(err) ;
});

