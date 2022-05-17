/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 */

const array = [1, 2, -4, 3, -9, -1, 7];

// Решение
function isPositive(num) {
    return typeof num === 'number' ? num > 0 : 'Error: parameter type is not a Number';
}
let result = [];
for (let item of array){
    if (isPositive(item)) result.push(item);
} 
/* не удалять */
console.log(result);
console.log(isPositive(-3)); // false
console.log(isPositive(3)); // true
console.log(isPositive('s')); // Error: parameter type is not a Number

exports.isPositive = isPositive;
/* не удалять */
