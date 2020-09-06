/*
8 kyu

Remove n exclamation marks in the sentence from left to right. n is positive integer.

EXAMPLES
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

function remove(s, n) {
  for (let i = 0; i < s.length && n > 0; i++, n--) {
    s = s.replace("!", "");
  }
  return s;
}

remove("!!!Hi !!hi!!! !hi", 100);
