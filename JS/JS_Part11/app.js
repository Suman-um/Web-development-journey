//async keyword automatically returns a promise 

async function greet()  
{
    //abc.abc() // throws an error 
    //throw "some random error" //throws an random error ;
  return "Hello" ; //returns a promise
}

greet().then((result)=>
    {
         console.log("promise was resolved") ;
         console.log("result :" , result) ;
    } )
.catch((err)=>
{
    console.log(err) ;
})

//await keyword - to make wait a function 
//can be used only in async 

function getNum()
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(()=>
        {
            let num = Math.floor(Math.random() * 10) + 1 ;
            console.log(num);
            resolve() ;
        },1000) ;
    });
}

async function demo ()
{
  await getNum() ;
  await getNum() ;
  await getNum() ;
}


//Application Programming Interface - API
//Mostly we will be using web 
//client requests the data 
//api endpoint will be in the form of an url - where u send the request
//it returns in the form of json format (most of the cases) 

//SOME FREE APIs
//https://catfact.ninja/fact
//boredapi.com/api/activity
//dog.ceo
//google map apis


//JSON - Javascript  object notation - www.json.org
//Every key defined is a string in JSON (not in case of JS object)
//"length" : 46  ;

let jsonRes = `{"fact":"A cat cannot see directly under its nose.","length":41}` ;
let validRes = JSON.parse(jsonRes) ; //to parse the json response into js object
console.log(validRes) ;
console.log(validRes.fact) ;

//JSON.strigify //JS object to JSON

//Tools to test API - hoppscotch , Postman

//AJAX - Asyncronous javascript XML 

//HTTP VERBS
//GET - to retrieve information
//PUT - to send info
//DELETE - to delete an info

//STATUS 
//200 - OK
//404 - Not found
//400 - Bad request
//500 - Internet server error

//ADD MORE INFORMATION IN the String  -
//www.google.com\search?q="mango" 
//www.google.com\search?q="harry+potter"

