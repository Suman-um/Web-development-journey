//Functions - console.log() . arr.push() , arr.pop() 

//Practice Qns
//1.Write a function to print a poem 

function printPoem()
{
    console.log("Twinkle, twinkle, little star,How I wonder what you are!Up above the world so high,Like a diamond in the sky.");
}

printPoem() ;


//2.Create a function to roll a dice and always display the value from 1 to 6 

function rollDice()
{
    let rand = Math.floor(Math.random() * 6) + 1 ; // 1 to 6 ;
    console.log(rand) ;
}
rollDice() ;
rollDice() ;
rollDice() ;
rollDice() ; //if there are four players 


//Functions with arguements 
function printName(name)
{
    console.log(name) ;
}

printName("Suman") ;

function printInfo(name , age)
{
    console.log(`${name}'s age is ${age}`);
}
printInfo("Suman" , 21) ;

//3.Create a function to print multiplication table

function printTable(n)
{
    for(let i=1 ; i<=10 ; i++)
    {
        console.log(n*i) ;
    }
}

printTable(5);

//return keyword
function sum(a , b)
{
    return a+b ;
    //function ends here 
    console.log("heloo"); //not executed
}
let ans = sum(3,4) ;
console.log(ans) ;

//Scope - Block , Function and Lexical 
// let sum = 54 //Global Scope 
function findSum()
{
    let sum = a + b ; //Function scope - more specific 
}
console.log(sum) ; //Not accessable 

//Block Scope - {} , for loops
//Lexical Scope
function outerfunc(){
    let x = 5 ;
    let y = 6 ;
    function innerfunc()
    {
        console.log(x) ;
        console.log(y) ;
    }
    // let x = 5 ; Prints x and y if declared after also 
    // let y = 6 ;
}

innerfunc() //Throws error

//Function expressions - another way of defining a function
const sum = function(a,b)
{
    return a + b ;
}
console.log(sum)  //prints a function
//How to call?
sum(1,2) ;

//Higher Order Functions
//A function can do one or both - 
//1.takes one or multiple functions as arguments
//2.returns a function


//One function as arguments
function multipleG (func , n) //function and n 
{
    for(let i=0 ; i<n ; i++)
    {
        func() ;
    }
}

let greet  = function()
{
    console.log("Greet") ;
}
multipleG(greet , 2) ; //call greet function two times 


//Returns a function

function OddorEvenFactory(request)
{
  if(request == "odd")
  {
    return function(n)
    {
        console.log(!n%2 ==0) ;
    }
  }
  else if(request == "even")
  {
    return function(n)
    {
        console.log(n%2 ==0)
    }
  }
  else 
  {
    console.log("Wrong request")
  }
}

OddorEvenFactory(odd) ;

//Methods  - Functions that can be perfomed on an object
const calculator = //Object created //left name //right function definition 
{

  num  : 55 ,
  add : function(x ,y)
  {
    return x + y;
  } ,
  sub : function(x ,y)
  {
    return x-y ;
  } ,
  mutliply : function(x , y)
  {
    return x * y ;
  }

} ;

console.log(calculator.add(5,6)) ;
console.log(calculator.mutliply(5,7)) ;

//Methods (shorhand) - directly writing the function definition

const calci = 
{
    add(a,b)
    {
        return a + b ;
    } ,
    sub(a ,b)
    {
        return a-b ;
    }
} ;

