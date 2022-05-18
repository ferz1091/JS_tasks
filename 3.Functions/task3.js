/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
function f(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') throw new Error('Error: all parameters type should be a Number');
    return (a - b) / c;
}

/* не удалять */
console.log(f(9, 3, 2)); // 3
console.log(f('s', 9, 3)); // 'Error: all parameters type should be a Number'

exports.f = f;
/* не удалять */