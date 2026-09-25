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

//await keyword
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