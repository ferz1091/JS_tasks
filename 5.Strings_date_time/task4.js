/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

const PRICE = '$120';

// Решение
function extractCurrencyValue(str) {
   if (typeof str !== 'string') throw new Error('Must be a string');
   return Number(str.replace(/\D/g, ''));
   // return Number(str.slice(1));
};

console.log(extractCurrencyValue(PRICE)); // 120
exports.extractCurrencyValue = extractCurrencyValue;