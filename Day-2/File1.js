console.log("Calling File1")

function file1(){
    console.log("calling function 1");
}

var y = 25;

module.exports = {
    x: file1,
    y: y,
}

// module.exports = {
//     file1,
//     y,
// }