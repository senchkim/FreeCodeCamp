/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
If no element passes the test, return undefined.
*/

/*
 Создайте функцию которая просматривает массив(первый аргумент) и возвращет первый элемент массива, который проходит проверку истинности(второй аргумент).
 Если не один элемент не удовлетворяет условию, то возвращать undefined.
*/


// Решение 1 (es5)
// Решение через через for.

// function findElement(arr, func) {
//
//   for (var i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return arr[i];
//     }
//   }
// }
//
// findElement([1, 2, 3, 4], num => num % 2 === 0);


// Решение 2 (es6)
// Решения в одну строчку, используя метод filter.

const findElement = (arr, func) => (arr.filter(func)[0]);
findElement([1, 2, 3, 4], (num) => num % 2 === 0);

