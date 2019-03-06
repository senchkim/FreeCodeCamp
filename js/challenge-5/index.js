/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

/*
 Возвращает массив, состоящий из наибольшего числа из каждого предоставленного вложенного массива.
 Ну и предлагают решить задачу через цикл for, заполняя затем через push массив - пересобранных значений.
*/


// Решение 1 (es5)
// Решение через цикл for.
// function largestOfFour(arr) {
//   var maxNumbers = [];
//   for (var i = 0; i < arr.length; i++) {
//     var tempMaxArr = arr[i][0];
//     for (var j = 0; j < arr[i].length; j++) {
//       var currentElement = arr[i][j];
//       if(currentElement >= tempMaxArr) {
//         tempMaxArr = currentElement;
//       }
//     }
//     maxNumbers.push(tempMaxArr);
//   }
//   return maxNumbers;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Решение 2 (es5)
// Решение через `apply`
// function largestOfFour(arr) {
//   var emptyArr = [];
//   for (var i = 0; i < arr.length; ++i)
//     emptyArr.push(
//       Math.max.apply(Math, arr[i])
//     );
//   return emptyArr;
// }
//
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Решение 3 (es6)
// Как всегда решение в одну строчку.
let largestOfFour = (arr) => arr.map((x) => Math.max(...x));
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
