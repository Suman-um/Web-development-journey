//THIS IS A SPECIAL FILE THAT WILL EXPORT ALL THE FRUITS IN A SINGLE FILE
//  SO THAT WE CAN IMPORT IT IN A SINGLE LINE IN OTHER FILES

const banana = require('./banana') ;
const mango = require('./mango') ;
const orange = require('./orange') ;

const fruits = [banana , mango , orange] ;
//Export all the three at once in the form of the array so that 
// we can import it in a single line in other files
module.exports = fruits ;