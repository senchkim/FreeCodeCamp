/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/

/*
Найти факториал указанного целого числа. (думаю что найти информацию что такое факториал не составит труда!)
В функцию будут передаваться только целые числа, большие или равные нулю.
*/


// Решение 1 (es5)
// Итеративный метод
// function factorialize(num) {
//   var result = 1;
//   for (var i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }
//
// factorialize(5);


// Решение 2 (es5)
// Рекурсивный метод
// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * factorialize(num - 1);
//   }
// }
//
// factorialize(5);


// Решение 3 (es6)
// Элегантное решение в одну строчку.
const factorialize = (num) => (num ? num * factorialize(num-1) : 1 );
factorialize(5);
