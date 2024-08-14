function fileA() {
  console.log("File A func called");
}

var strA = "from File A";

module.exports = {
  fileA,
  strA,
};
