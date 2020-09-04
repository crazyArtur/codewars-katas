/*
8 kyu
"Total amount of points"

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/
const games = [
  "3:1",
  "2:2",
  "0:1",
  "3:1",
  "2:2",
  "0:1",
  "3:1",
  "2:2",
  "0:1",
  "1:1",
];

function points(games) {
  var points = 0;
  for (let i = 0; i < 10; i++) {
    let x = games[i].split(":")[0];
    let y = games[i].split(":")[1];
    if (x > y) points += 3;
    if (x == y) points++;
  }
  console.log(parseInt(points));

  parseInt(games, 10);
}

var points = 0;
for (let i = 0; i < 10; i++) {
  if (games[i].split(":")[0] > games[i].split(":")[1]) points += 3;
  if (games[i].split(":")[0] == games[i].split(":")[1]) points++;
}
console.log(points);

var a = games[0].split(":");

console.log(parseInt("0xF"));
console.log(parseInt("015", 8));
// console.log(a[0]);
// console.log("Length = ", games.length);

// var b = a[0] - a[1];

// console.log(b);
