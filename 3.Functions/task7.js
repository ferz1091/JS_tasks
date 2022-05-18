/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение
function getDivisors(num) {
    let result = [];
    if (num === 0) throw new Error('Error: parameter can\'t be a 0');
    if (typeof num !== 'number') throw new Error('Error: parameter type is not a Number');
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) result.push(i);
    }
    return result;
}
/* не удалять */
console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors('Content')); // Error: parameter type is not a Number
console.log(getDivisors(0)); // Error: parameter can't be a 0

exports.getDivisors = getDivisors;
/* не удалять */
