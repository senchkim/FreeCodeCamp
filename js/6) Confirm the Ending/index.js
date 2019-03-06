/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

/*
 Нужно проверить заканчивается ли первая строка (str), заданной второй сторокой(target).
 Эту задачу можно решить методом ES2015 `.endsWith()`.
 Но советуем использовать один из методов подстроки в языке JavaScript.
*/


// Решение 1 (es5)
// Решение через метод `endWidth()`. **Задание не зачтется, потому что решение через данный метод запрещено!
// function confirmEnding(str, target) {
//   return str.endsWith(target);
// }
// confirmEnding("Bastian", "n");

// Решение 2 (es5)
// Решение через `substr`
// function confirmEnding(str, target) {
//   return str.substr(-target.length) === target;
// }
// confirmEnding("Bastian", "n");


// Решение 3 (es6)
// Как всегда решение в одну строчку.
const confirmEnding = (str, target) => (str.substr(-target.length) === target);
confirmEnding(`Bastian`, `n`);
