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
    return typeof num == 'number' ? num ** 3 : 'Error: parameter is not a number type'; 
};
/* не удалять */
console.log(f(2)); // 8
console.log(f('Content')); // Error: parameter is not a number type

exports.f = f;
/* не удалять */

