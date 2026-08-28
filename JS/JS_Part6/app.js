//Array Higher order Methods
//for each - not used much but we use for - of 
let arr = [ 1 , 2 ,3 , 4, 5] ;
function print (el)
{
    console.log(el) ;
}

arr.forEach(print) ;

//Print using arrow functions
let students = [
{ 
    name : "Suman",
    marks : 98 ,
} ,
{
    name : "Suraj" ,
    marks : 87 ,
} ,
 {
    name : "Sandesh" ,
    marks : 97 ,
 }
] ;

students.forEach((stu)=>
{
  console.log(stu.marks) ;
});

//Map
//let newarr = arr.map(some function definition or name)

let array = [ 7,8,9,10] ;

let newarr = array.map((ele) =>
{
  return ele*2 ;
} 
);
console.log(newarr) ;

//calculate gpa from marks
let gpa = students.map((el) =>
{
  return el.marks/10 ;
}
) ;
console.log(gpa) ;

//Filter function 
//let newarr = arr.filter(some definition or function)
//to filter a specific condition - even number 
let nums = [1 ,2 ,5 ,7 ,6 ,8 ,9,10] ; 
let even  = nums.filter((num) =>
{
  return num %2 == 0 ;
}
) ;
console.log(even) ;


//Every - returns boolean value - true or false
//true  - if every element in the array gives true for the condition 

[2,4,6].every((el)=> el%2==0) ; //true 
[2,3,4,6].every((el) => el%2 == 0) ; //false

//some - logical or 
//every - logical and 

//reduce - reduces the array to a singel value 
let numbers = [ 1 ,2 ,4, 5, 6] ;
//reduce consists of two parameters - accumulator and element
let sum = numbers.reduce((res ,el) => res+el) ;
console.log(sum) ;

[4,5,6,7].reduce((res ,el) => res+el) ;

//find maximum element

// let max = -1 ;
// for(let i=0 ; i<numbers.length ; i++)
// {
//     if(max < numbers[i])
//     {
//         max = numbers[i] ;
//     }
// }
// console.log(max) ;

//using reduce function 
let max = numbers.reduce((maxi , el) =>
{
  if(maxi < el)
    return el ;
  else
  {
    return maxi ;
  }
}) ;


//Q1. Check if all numbers in the array are multiples of 10 or not
let num = [ 5 ,6, 10 , 20 , 30] ;
let ans = num.every((el) => el%10==0) ;
console.log(ans) ;

//Q2. Create a function to find the minimum number in an array
let min = numbers.reduce((mini , el) =>
{
  if(mini > el)
    return el ;
  else
  {
    return mini;
  }
}) ; // min = 1 

//Default parameters - to be taken if not entered the parameters

function sumOfNum(a ,b = 2)
{
  return a+b ;
}
console.log(sumOfNum(2)) ;

// function sumOfNum(a = 1 , b) ; //throws error default values are written
//at the end

//minimum function usecase without spread 
let arre = [1 ,2, 3, 4, 0 ,5 ,7, 2] ;
console.log(Math.min(arre)); //does not take a whole array as the arguement
//you have to write it as
console.log(Math.min(arre[0] , arre[1] , arre[2])) ;


//but using spread function
Math.min(...arre) ;

//individually printing each element
console.log(...arre) ;

//Using in array Literals
let arrey = [ 1, 3, 8,9] ;
let newarrey = [...arrey] ;

const data = 
{
  email : "suman@gmail.com" ,
  passw : "@124" 
} ;
let dataCopy = [... data] ;




