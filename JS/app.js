//to print on console 
console.log("Hello , I m learnig JS");

//literals
let pencil = 5 ;
let pen = 10 ;

// let total = "Total item :" + (pencil + pen);
//we use `` backtick to simplify stirng outputs  and template literals 
let total = `Total item are ${pencil + pen}`;
console.log(total);

//Airthmetic operators
let a = 10 ;
let b = 5 ;
console.log(a+b) ;
console.log(a-b) ;
console.log(a/b) ;
console.log(a%b) ;
console.log(a**b) ;

//Create a traffic light system using if else statement
let color = "red" ; // yellow green
if(color === "red")
{
    console.log("Stop") ;
}
else if(color == "yellow")
    console.log("Get ready") ;
else
    console.log("Go") ;

//Qn2 A good string is a string which starts with letter a and has length greater than 3
let str = "apple" ;
if(str[0] === 'a' && str.length > 3)
{
    console.log("Good String") ;
}

//Alert - this displays an alert msg on the browser
alert("Somethig is wrong") ;

//prompt - this takes input from the user using a dialog box
let name = prompt("Enter your name:") ;
console.log(name) ;

//to print an error msg in the console
console.error("Danger!Something is wrong") ;
//to print a warning msg in the console
console.warn("Warning!") ;
