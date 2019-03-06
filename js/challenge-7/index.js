/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
*/

/*
 Повторить заданную строку str, num - количество раз.
 Возвращает пустую строку, если num - не положительное число.
*/


// Решение 1 (es5)
// Решение через метод `repeat` **Задание не засчитается

// function repeatStringNumTimes(str, num) {
//   if(num < 0) return "";
//   return str.repeat(num);
// }
//
// repeatStringNumTimes("abc", 3);


// Решение 2 (es5)
// Решение через цикл `for`

// function repeatStringNumTimes(str, num) {
//   var result = "";
//   if(num < 0) return "";
//   for(var i = 0; i < num; i++) {
//     result += str;
//   }
//   return result;
// }
//
// repeatStringNumTimes("abc", 3);


// Решение 3 (es5)

// function repeatStringNumTimes(str, num) {
//   if(num < 0) return "";
//   if(num === 1) return str;
//   return str + repeatStringNumTimes(str,num -1);
// }
//
// repeatStringNumTimes("abc", 3);


// Решение 4 (es6)
// Как всегда решение в одну строчку. **Хотя данное решение не подойдет для решения задачи.

const repeatStringNumTimes = (str, num) => num < 0 ? `` : str.repeat(num);
repeatStringNumTimes(`abc`, 3);
