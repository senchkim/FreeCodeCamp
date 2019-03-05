/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

/*
Функция на вход принимает строку, на выходе отдает строку наоборот.
Например: hello ==> olleh.
*/

// Решение 1 (es5)
// Согласитесь решение достаточно неудобное!

// function reverseString(str) {
//   var strArray = str.split("");
//   var reverseStrArray = strArray.reverse();
//   var reversedString = reverseStrArray.join("");
//   return reversedString;
// }
//
// reverseString("hello");


// Решение 2 (es6)
// Решение данной Задачи в одну строку.

const reverseString = (str) => (str.split(``).reverse().join(``));
reverseString("hello");


// Решение 3 (es5)
// Теоретически можно через цикл for решить данную задачу, решение выглядит громоздким.

// function reverseString(str) {
//   var string = "";
//   for(var i = str.length - 1; i >= 0; i--) {
//     string += str[i];
//   }
//   return string;
// }
//
// reverseString("hello");
