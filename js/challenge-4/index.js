/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

/*
 Вернуть самое длинное слово в введенном предложении.
 Ответ должен быть ввиде числа.
*/


// Решение 1 (es5)
// Первое что приходит на ум это конечно использовать метод `sort`.
// function findLongestWordLength(str) {
//   return str.split(" ").sort(function (a,b) {return b.length - a.length})[0].length;
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dog");


// Решение 2 (es5)
// Данное решение решает задачу, но правда кода очень много получается.
// function findLongestWordLength(str) {
//   var strArray = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strArray.length; i++){
//     if(strArray[i].length > longestWord){
//       longestWord = strArray[i].length;
//     }
//   }
//   return longestWord;
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dog");


// Решение 3 (es6)
// И снова решение в одну строку использовав методы `split` и `sort`
// const findLongestWordLength = (str) => (str.split(` `).sort((a,b) => {return b.length - a.length})[0].length);
// findLongestWordLength(`The quick brown fox jumped over the lazy dog`);


// Решение 4 (es6)
// И снова решение в одну строку использовав методы `split` и `reduce`, для многих начинающих разработчиков метод `reduce` достаточно сложный для понимания.
const findLongestWordLength = (str) => (str.split(` `).reduce((longest, currentWord) => {
  return currentWord.length > longest.length ? currentWord : longest;
}, ``)).length;
findLongestWordLength(`The quick brown fox jumped over the lazy dog`);
