/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

function createArray(value, l) {
    if (arguments.length !== 2) throw new Error('Must be 2 arguments');
    if (typeof l !== 'number') throw new Error('2nd argument must be a number');
    if (typeof value === 'number' || typeof value === 'string' || typeof value === 'object') {
        return new Array(l).fill(value);
    }
    else throw new Error('1st argument must be a number, string, object or array');
}
// Решение

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
