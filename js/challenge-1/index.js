/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

/*
Задача довольно проста сделать функцию по переводу температуры Цельсии в Фаренгейт.
*/


// Решение 1 (es5)
// function convertToF(celsius) {
//   let fahrenheit = celsius * 9 / 5 + 32;
//   return fahrenheit;
// }
//
// convertToF(30);


// Решение 2 (es6) ==> Решение в одну строку
const convertToF = (celsius) => (celsius * 9 / 5 + 32);
convertToF(30);
