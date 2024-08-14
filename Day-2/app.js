// console.log("Calling App.js");


// console.log(module.exports); --> {}


/*/* Ways to access the Modules */

// require("./File1");
// console.log(y);
// file1() //--> this throws an error when you try to access func from another module directly.

// const obj= require("./File1");
// obj.x();
// console.log(obj.y);

// const {file1, y} = require("./File1");
// file1();
// console.log(y);

// import {a} from "./File2.js"  //--> when use es6 import and export by placing the type module in the package.json.
// console.log(a);


// If there are n number of modules 

// const {fileC} = require("./Modules")

// fileC()


// Task
const str = "rakesh"

const {capitalizeFirstLetter, reverseString, countVowels} = require("./Task/stringUtils");

console.log(capitalizeFirstLetter(str));
console.log(reverseString(str));
console.log(countVowels(str));


