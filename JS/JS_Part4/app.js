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

//
