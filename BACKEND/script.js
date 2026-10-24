// for(let i=0 ; i<process.argv.length ; i++)
// {
//     console.log(process.argv[i]) ;
// }

//Node REPL 
// let n = 5 ;
// for(let i=0 ; i<n ; i++)
// {
//    console.log(i) ;
// }

// Process - the object that provides information about and control over the current Node.js process.

// process.argv - returns an array containing command-line args 
// passed in Nodjs was launched.Node

//console.log(process.argv) ;

//Basics of Node JS


const math = require('./math') ;

console.log(math) ;
console.log(math.sum(2,3)) ;
console.log(math.mul(2,3)) ;
console.log(math.g) ;
console.log(math.pi) ;  

// require - is a function that is used to include modules that exist in separate files. 
// It reads a JavaScript file, executes the file,
//  and then proceeds to return the exports object.

// modules.exports - a special object which is included in every JS file 
// in the Node.js application by default.

