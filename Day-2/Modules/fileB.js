function fileB() {
  console.log("File B func called");
}

let strB = "from File B";

module.exports = {
  fileB,
  strB,
};
