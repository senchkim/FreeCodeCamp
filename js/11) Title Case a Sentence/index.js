/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

/*
 Напишите функцию которая возращает строку в которой каждое слово с большой буквы.
 Убедитесь что другие буквы с маленькой буквы.
*/


// Решение 1 (es5)
// Решение с ипользованием методов для работы со строкой.

// function titleCase(str) {
//   str = str.toLowerCase().split(` `);
//   for(var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(` `);
// }
//
// titleCase("I'm a little tea pot");


// Решение 2 (es5)
// Решение с ипользованием метода map.

// function titleCase(str) {
//   return str.toLowerCase().split(` `).map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(` `);
// }
//
// titleCase("I'm a little tea pot");


// Решение 3 (es6)
// Решения в одну строчку.

const titleCase = (str) => (str.toLowerCase().split(` `).map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(` `));
titleCase(`I'm a little tea pot`);


