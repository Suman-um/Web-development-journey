//this - keyword refers to an object that is executing current piece of code 

const stu = 
{
    name : "Suman" ,
    grade : 8.38 ,
    sem : 7 ,
    eng : 56 ,
    math : 67 ,
    hindi : 78 ,

    getAvg()
    {
        console.log(this) ;
        let avg = (this.eng + this.math + this.hindi) / 3 ; 
        console.log(avg) ;
        console.log(`${this.name} got avg marks of ${avg}`) ;
    }
}

stu.getAvg() ; 

function avg()
{
    console.log(this) ; //A default window object is created - higher level of object 
    //whenever a html page is opened an window object is created.
}

avg() ;

//Try and catch - To prevent errors and handle exceptions
//              - Whenever you write a long code You need to look after the exceptions

console.log("Hello") ;
console.log("Hello") ;
console.log("Hello") ;
// console.log(a) ;  //Anything below after the error is not executed - to prevent these
                 // we use try and catch exceptions

console.log("Hello") ;
console.log("Hello") ;
console.log("Hello") ;
console.log("Hello") ;

// a = 5 ;
try{
    console.log(a) ;
}
catch(e) { //e helps to print in an error format 
    console.log("Variable is not defined") ;
    console.log(e) ;
}

//Arrow functions
const sum = (a , b) =>
{
    console.log(a + b) ;
} ; 
 
const cube = (c) =>
{
    return c*c*c  ;
}

//Implicit return - automatic return - when there is a single task to be done  

const mul = (a , b) => (a*b)

//SetTimeout setTimeout(fn , time(in milliseconds)) 
//used for api calling and requests
console.log("Hi! There!") ;
setTimeout( ()=>{  //define an arrow function here 
    console.log("En madati pa!") ;
} , 4000) ; //4 sec  it will print the above fn after 4 seconds

console.log("Yakoo!" );


