/*
 No Story
No Description
Only by Thinking and Testing
Look at result of testcase, guess the code!

//The method is similar, but the results are different.
Test.assertSimilar([1, 2, 3].join(1),      "11213", "")
Test.assertSimilar([1, 2, 3].Join(1),      [1, 1, 2, 1, 3], "")
Test.assertSimilar([1, 2, 3].join([1]),    "11213", "")
Test.assertSimilar([1, 2, 3].Join([1]),    [1, 1, 2, 1, 3], "")
Test.assertSimilar([1, 2, 3].join("1"),    "11213", "")
Test.assertSimilar([1, 2, 3].Join("1"),    [1, "1", 2, "1", 3], "")
Test.assertSimilar([1, 2, 3].join(true),    "1true2true3", "")
Test.assertSimilar([1, 2, 3].Join(true), [1, true, 2, true, 3], "")
Test.assertSimilar([1, 2, 3].join({}),    "1[object Object]2[object Object]3", "")
Test.assertSimilar([1, 2, 3].Join({}), [1, {}, 2, {}, 3], "")
Test.assertSimilar([1, 2, 3].join([1, 2]), "11,221,23", "")
Test.assertSimilar([1, 2, 3].Join([1, 2]), [1, 1, 2, 2, 1, 2, 3], "")
//click "Submit" try more testcase...
*/

var tab = [1,2,4];

let check = tab.join({});

console.log(check);