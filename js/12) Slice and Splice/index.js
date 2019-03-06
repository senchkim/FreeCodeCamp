/*
You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array.
The input arrays should remain the same after the function runs.
*/

/*
 Дано 2 массива и счетчик.
 Используйте методы Slice и Splice для копирования каждого элемента первого массива во второй массив по порядку.
 Начните вставку элементов с индекса n второго массива.
 На выходе должен быть массив.
 Исходные массивы не должны быть изменены.
*/


// Решение 1 (es5)
// Решение с ипользованием методов Slice и Splice.

// function frankenSplice(arr1, arr2, n) {
//   let newArr = arr2.slice();
//   let lengthArr1 = arr1.length;
//   while (lengthArr1 > 0) {
//     newArr.splice(n, 0, arr1[--lengthArr1]);
//   }
//   return newArr;
// }
// frankenSplice([1, 2, 3], [4, 5, 6], 1);


// Решение 2 (es6)
// Решения в одну строчку нет) использован оператор spread.

const frankenSplice = (arr1, arr2, n) => {
  const array = [...arr2];
  array.splice(n, 0, ...arr1);
  return array;
};
frankenSplice([1, 2, 3], [4, 5, 6], 1);


