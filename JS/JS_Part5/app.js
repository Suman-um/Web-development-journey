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

