/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

function myFilter(arr, cb) {
    if (arguments.length !== 2) throw new Error('Must be 2 arguments');
    if (!Array.isArray(arr)) throw new Error('1st argument must be an array');
    if (typeof cb !== 'function') throw new Error('2nd argument must be a callback');
    let result = [];
    for (let item of arr) {
        if (cb(item)) result.push(item);
    }
    return result;
};

console.log(myFilter(array, (value) => typeof value === 'string'));