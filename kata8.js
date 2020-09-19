/*
7 kyu

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, 
containing distinct letters, each taken only once - coming from s1 or s2.

EXAMPLES
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  // var re = new RegExp(s1[0], "g");
  var string = "";
  // s1 = s1.replace(re, "");
  // s2 = s2.replace(re, "");

  do {
    if (s1.length > 0) {
      string = string.concat(s1[0]);
      var re = new RegExp(s1[0], "g");
      s1 = s1.replace(re, "");
      s2 = s2.replace(re, "");
    } else {
      string = string.concat(s2[0]);
      var re = new RegExp(s2[0], "g");
      s2 = s2.replace(re, "");
    }

  } while (s1.length > 0 || s2.length > 0)

  console.log(string.split('').sort().join(''));

}
var s3 = "yzsuiabbcc";
var s4 = "xwxwxxrrrrxxw";
longest(s3, s4);

// var s1 = "abcdef";
// // let re = /a/gi;
// console.log(s1);

// var string = s1[0];
// // var re = /${s1[0]}/gi;
// do {
//   var re = new RegExp(s1[0], "g");

//   // console.log(s1.replace(re, ""));

//   s1 = s1.replace(re, "");
//   console.log(s1);
// } while (s1.length > 0)

var s1 = "hola!";
var s2 = " soy de masovia!";

// console.log(s1);
// console.log(s2);
// console.log(s1 + s2);

const long = (s1, s2) => [new Set(s1 + s2)].sort().join('');

console.log(long(s3, s4));

console.log(s3);
console.log(...s3);
console.log([...s3]);

for (let it of s2) {
  console.log(it);
}