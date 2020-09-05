/*
8 kyu

Complete the function which converts hex number (given as a string) to a decimal number.
*/

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

// var hexString = "a";
// var hexString = "10";
// var hexString = "FF";
var hexString = "-c";
// var hexString = "a";
console.log(parseInt(hexString, 16));
