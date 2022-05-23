/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 * 
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 * 
 * Первая коллбек-функция не принимает параметров.
 * 
 * После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

function calculate(...funcs) {
    let arr = [];
    for (let func of funcs) {
        if (typeof func !== 'function') return false;
    };
    for (let counter = 0; counter < funcs.length; counter++) {
        if (counter == 0) {
            arr[counter] = funcs[counter]();
        }
        else {
            arr[counter] = funcs[counter](arr[counter - 1]);
        }
    }
    return arr[arr.length - 1];
};
// Решение

const result = calculate(
    () => {
        return 7;
    },
    prevResult => {
        return prevResult + 4;
    },
    prevResult => {
        return prevResult * 5;
    },
);

console.log(result); // 55

exports.calculate = calculate;
