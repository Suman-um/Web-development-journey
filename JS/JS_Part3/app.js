//Object Literals - used to store data in key-value pairs
//property - key , value pair
//Objects are the collection of properties

let delhi = 
{
    name : "delhi" , //Property name and value ;
    longitude : 24.5 , 
} ;

let student = 
{
    name : "Suman" ,
    Rollno : 123 ,
}

//clarity is more in object literals and there is no order in object literals
let stu= ["Suman" , 123 , 45.6] ;


//Task - Create a thread or a twitter post using object literals - Pratical Exmaple

let twitterPost = 
{
    username : "sum_un" ,
    content : "I got a job at Google" ,
    likes :  5 ,
    comments : ["Congratulations" , "Well done" , "Good job"] ,
    reposts : 7 ,
    tags :  ["@aditya" , "@googleindia" , "@beingcute"]
};

//Get values - Two syntax 
twitterPost["username"] ;
twitterPost.username ; //Better 

//JS automatically converts objects into strings
//even if we made number as a key it is converted into string
let obj = 
{
    1 : "a" ,
    2 : "b" ,
    null : "c"
} ;

//1 2 and null are automatically converted into strings
obj[1] //a 
obj[2] //b 
console.log(obj[1]) ;

//To update a value
twitterPost.username = "@suraj" ;
//to add new value - same procedure 
twitterPost.gender = "female" ;
//to delete 
delete twitterPost.gender


//Objects of Objects -to store information of mutliple students

let stus = 
{
    aman :
    {
        grade : 4 ,
        cgpa : 7.8 
    } ,
    geeta :{
        grade : 6,
        cgpa : 8
    } ,
    sandu :
    {
        grade : 9 ,
        cgpa : 7 
    } ,
} ;

//Array of Objects
let stus = 
[
   
    {
        name : "aman" ,
        grade : 4 ,
        cgpa : 7.8 
    } ,
     
    {
        name : "geeta" ,
        grade : 6,
        cgpa : 8
    } ,
     
    {
        name : "sandu" ,
        grade : 9 ,
        cgpa : 7 
    } ,
 ] ;

 //Math - Object in JS which is a collection of properties - Math.PI and Math.E and
 //  methods like max , ceil , sqrt , floor , random (gives values from 0 to 1) ,abs
 
//Qn - Generate a random number from 1 to 10 
Math.floor(Math.random() * 10) + 1 ;
//We did +1 to make it a range from 1 to 10 
