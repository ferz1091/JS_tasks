/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

function forEach(arr, cb) {
    if (arguments.length !== 2) throw new Error('Must be 2 arguments');
    if (!Array.isArray(arr)) throw new Error('1st argument must be an array');
    if (typeof cb !== 'function') throw new Error('2nd argument must be a callback');
    for (let counter = 0; counter < arr.length; counter++) {
        cb(arr[counter], counter, arr)
    }
};
// Решение
const result = forEach(array, function (item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});