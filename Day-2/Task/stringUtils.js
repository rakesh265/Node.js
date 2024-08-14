
let capitalizeFirstLetter = (str) => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};


let reverseString = (str) => {
  if (str.length === 0) return str;
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};


let countVowels = (str) => {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
};


module.exports = {
    capitalizeFirstLetter,
    reverseString,
    countVowels,
}