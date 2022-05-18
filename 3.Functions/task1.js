/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
function f(num) {
    if (typeof num !== 'number') {
        throw new Error('Error: parameter is not a number type');
    }
    else {
        return num **3;
    }
}
/* не удалять */
console.log(f(2)); // 8
console.log(f('Content')); // Error: parameter is not a number type

exports.f = f;
/* не удалять */

