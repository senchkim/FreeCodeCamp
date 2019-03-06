/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

/*
 Удалить из массива все ложные(false) значения.
 Ложные значения в JS - `null`, `0`, ` `, `ubdefined`, `NaN`.
 Подсказка: Попытайтесь сконвертировать каждое значение в Булев тип.
*/


// Решение 1 (es5)
// Решение с ипользованием цикла for, обычный перебор массива, затем проверка на false, и затем создание массива с новыми элементами.

// function bouncer(arr) {
//   var newArr = [];
//   for(var elem of arr) {
//     if(elem) newArr.push(elem);
//   }
//   return newArr;
// }
//
// bouncer([7, "ate", "", false, 9]);


// Решение 2 (es6)
// Решения в одну строчку).

const bouncer = (arr) => (arr.filter(Boolean));
bouncer([7, "ate", "", false, 9]);

