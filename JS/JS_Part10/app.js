//JS is single threaded
// let a = 25 ;
// let b = 10 ;
// console.log(a) ;
// console.log(b) ;
// console.log(a+b) ;


//syncronous 
//to manage the functions to get executed concurrently they use 
setTimeout(() =>
{
  console.log("Helloooo!") ;
} , 2000) ;
setTimeout(() =>
{
  console.log("Helloooo brother!") ;
} , 2000) ;

console.log("hii") ;

//Asyncronys

//Call Back Hell - call back nesting

let h1 = document.querySelector("h1") ;

function changeColor(color , delay , nextColor)
{
  setTimeout(() =>
  {
       h1.style.color = color ;
       if(nextColor) nextColor() ;
  } , delay) ;

}

changeColor("red" , 1000 , () =>
{
  changeColor("yellow" , 1000 , ()=>
  {
    changeColor("green" , 1000, ()=>
    {

    } )
  })
}) ;

// function saveToDb(data)
// {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
//   if(internetSpeed > 4)
//   {
//     console.log("Good to go");
//   }
//   else
//   {
//     console.log("Weak connection") ;
//   }
// }

//instead of directing writing the log you write a function to return.

function saveToDb(data , success, failure)
{
  let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
  if(internetSpeed > 4)
  {
    success() ;
  }
  else
  {
    failure() ;
   }
}

saveToDb(
  "apna college" , ()=>
  {
    console.log("good to go , data saved") ;
    //after saving you can save 2nd data too
    saveToDb("hellooo")
     , ()=>
     {
      console.log("data2 saved");
     } , 
     ()=>
     {
      console.log("not saved") ;
     }
  } ,
  () =>
  {
    console.log("weak connection") ;
  }
);

//the above code is very confusing 

//Promises - it is an object that containes two properties - resolve and reject
//there are three states - fullfilled, reject , pendiing
function saveToDb(data , success, failure)
{
  return new Promise((success , failure) => // (resolve , reject)
  {
      let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
      if(internetSpeed > 4)
      {
         success("success : data is saved") ;
      }
     else
     {
       failure("failure : data not saved") ;
     }
  });
  
}

//then and catch methods --- if fulfilled - then 
                      // --- if rejected  - catch

let request = saveToDb("Suman student") // req = promise
request.then(() =>
{
  console.log("Data saved move to next task") ;
  console.log(request) ;
})
.catch(() =>
{
  console.log("Solve the error asap") ;
  console.log(request) ;
});

//Promise Chaining

let request = saveToDb("Suman student") // req = promise
request.then(() =>
{
  console.log("Data saved move to next task") ;
  console.log(request) ;
  saveToDb("hello world") ;
})
request.then(()=>
{ 
   console.log("data2 saved") ;
}) 
.catch(() =>
{
  console.log("Solve the error asap") ;
  console.log(request) ;
});

//still a better way
let request = saveToDb("Suman student") // req = promise
request.then((result) =>
{
  console.log("Data saved move to next task") ;
  console.log(request) ;
  console.log(result) ;
  return saveToDb("hello world") ;
})
request.then((result)=>
{ 
   console.log("data2 saved") ;
   console.log(result) ;
   return saveToDb("Hello gotonext") ;
}) 
request.then((result)=>
{
  console.log("data3 saved") ;
  console.log(result) ;
})
.catch((error) =>
{
  console.log("Solve the error asap") ;
  console.log(request) ;
  console.log(error) ;
});






