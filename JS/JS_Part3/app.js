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

//To add or update a value
twitterPost.username = "@suraj" ;
//to add new value
twitterPost.gender = "female" ;