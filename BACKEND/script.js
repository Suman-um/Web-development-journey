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


const math = require('./math') ; // to take the functions here 

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

//How to export and require from other directories in Node JS

const fs = require("./Fruits") ; // to take the fruits functions here
console.log(fs) ;
//to be specific we can also do this
console.log(fs[0].name) ;


// NPM - Node Package Manager - standard package manager for NodeJS

//When you hit npm install <package_name> , it will create a node_modules folder(dependencies installed) ,package-lock (it records the exact version of the package 
// installed) , package.json file
//  in your project directory and download the package there.

//package.json - contains descriptive and functional metadata about a project. 
// It is used to give information to npm that allows it to identify the project 
// as well as handle the project's dependencies.

//How to recover the node modules folder if it is deleted -
// by using the command npm install in the project directory where package.json file is present.
//Whatever dependencies are mentioned in the package.json file will be installed in 
// the node_modules folder again.