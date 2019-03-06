/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
*/

/*
 Вырезать строку(первый аргумент), если она длиннее заданной максимльной длины строки(второй аргумент).
 Вернуть строку.
*/


// Решение 1 (es5)
// Решение через через `for` и `slice`.

// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + '...'
//   }
//   return str;
// }
// truncateString(`A-tisket a-tasket A green and yellow basket`, 8);


// Решение 2 (es6)
// Решения в одну строчку нет).

const truncateString = (str, num) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }
  return str;
};
truncateString(`A-tisket a-tasket A green and yellow basket`, 8);


