const figlet = require('figlet'); //for package name u need not to 
//give the path of the package but for local 
//files you need to give the path of the file.


figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});