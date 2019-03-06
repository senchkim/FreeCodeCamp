/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

/*
 Напишите функцию которая проверяет тип данных `boolean` если ОК ==> верните true или false.
 Любой другой тип данных должен возвращать false.
*/


// Решение 1 (es5)
// Решение через `typeof`.

// function booWho(bool) {
//   return (typeof (bool) === 'boolean');
// }
// booWho(true);


// Решение 2 (es6)
// Решения в одну строчку, используя typeof.

const booWho = (bool) => (typeof (bool) === `boolean`);
booWho(true);

