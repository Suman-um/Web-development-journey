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
//let newarr = arr.filter(sone definition or function)
let nums = [1 ,2 ,5 ,7 ,6 ,8 ,9,10] ;
let even  = nums.filter((num) =>
{
  return num %2 == 0 ;
}
) ;
console.log(even) ;
