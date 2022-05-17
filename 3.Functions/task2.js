/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
function f(...num) {
    let result = 0;
    for (let item of num) {
        if (typeof item !== 'number') return 'Error: all parameters should be a Number type';
        result += item;
    }
    return result;
}
/* не удалять */
console.log(f(1, 2, 3)); // 6
console.log(f(1, 1, 1, 1, 1, 1, 1, 1)); // 8
console.log(f(1, 2, 's', 4)); // Error: all parameters should be a Number type

exports.f = f;
/* не удалять */