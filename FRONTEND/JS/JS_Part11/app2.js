//FIRST API CALL
// let url = "https://catfact.ninja/fact" ; //free api
// fetch(url) ; //returns a promise ;

// fetch(url)
// .then((response)=>
// {
//   console.log(response) ;
//   return response.json(); //to get the exact object returned 
// })
// .then((data)=>
// {
//   console.log(data.fact) ; //the exact fact data
// }).
// catch((err)=>
// {
//     console.log(err) ;
// });



// ----------------------------------------------------------



//API CALL using await and async

// let url = "https://catfact.ninja/fact" ; //storing api url inside the url
// fetch(url) ; // fetch is asyncronous it does not give you the data immediately it returns
// //a promise
// async function getcat()
// {
//   try{
//      let ans = await fetch(url); //ans = response object
//   console.log("Response object : ",ans) ;
//   let data = await ans.json()  //the actual json data 
//   console.log("The exact json data inside : " ,data) ; 
//   console.log("Fact : " ,data.fact) ; //the exact fact what you are looking for
// }
// catch(e){
//    console.log("error =" , e) ;
// }
//   }



// --------------------------------------------------------


//AXIOS - LIBRARY TO MAKE HTTP REQUESTS

//there is no need to parse the data like in fetch function (ans.json() then data.fact) axios.get() will get the 
//exact data 

//API CALL using await and async

// let url = "https://catfact.ninja/fact" ; //storing api url inside the url
// async function getcat()
// {
//   try{
//      let res = await axios.get(url); //ans = response object
//      //console.log(res) ; 
//      console.log(res.data.fact);

// }
// catch(e){
//    console.log("error =" , e) ;
// }
//   }




// ----------------------------------------------------------------


  //LINING ALL HTML + JS 


let btn = document.querySelector("#but") ;

btn.addEventListener("click" , async()=>
{
  let fact = await getcat() ;
  //console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact ;
}) ;


let url = "https://catfact.ninja/fact" ; //storing api url inside the url
async function getcat()
{
  try{
     let res = await axios.get(url); //ans = response object
     return res.data.fact;

}
catch(e){
   return "No Fact Found" ;
}
 }

//PRINTING A DOG IMAGE ON the SCREEN

let btn2 = document.querySelector("#butn") ;

btn2.addEventListener("click" , async()=>
{
  let link = await getImage() ;
  //console.log(fact);
  let imag = document.querySelector("#imag");
  imag.setAttribute("src" , link);
  console.log(link) ;
}) ;


let url2 = "https://dog.ceo/api/breeds/image/random" ; //storing api url inside the url
async function getImage()
{
  try{
     let res = await axios.get(url2); //ans = response object
     return res.data.message;
}
catch(e){
   return "No Image Found" ;
}
 }


 // PASS HEADERS ALONG WITH URL 
let url3 = "https://icanhazdadjoke.com/" ; //storing api url inside the url
async function getJoke()
{
  try{
    const config = {headers : {Accept : application/json}} // if you want in json format 
     let resu = await axios.get(url3 , config); //ans = response object
     console.log(resu.data);
}
catch(e){
   return "No Joke Found" ;
}
} 


  
