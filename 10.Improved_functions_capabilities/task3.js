/**
 * Задача 3.
 *
 * Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
 * Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
 *
 * После отлова ошибки перейдите к выполнению следующего коллбека.
 *
 * Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`:
 * - свойство `value` содержит результат вычисления всех функций из цепочки;
 * - свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
 *     - index — индекс коллбека, на котором ошибка была возбуждена;
 *     - name — имя ошибки;
 *     - message — сообщение ошибки.
 *
 * Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
 *
 * Поэтому, для продолжения цепочки выполнения
 * необходимо брать результат последней успешно выполненной функции-коллбека.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией.
 */

function calculateAdvanced(...funcs) {
    let arr = [];
    let errors = [];
    for (let func of funcs) {
        if (typeof func !== 'function') return false;
    };
    for (let counter = 0; counter < funcs.length; counter++) {
        try {
            if (counter == 0) {
                if (funcs[counter]() === undefined) {
                    arr[counter] = null;
                    throw new Error(`callback at index ${counter} did not return any value.`)
                }
            }
            else {
                arr[counter] = arr[counter - 1] === null ? funcs[counter](arr.reduce((acc, item) => item === null ? acc : item)) : funcs[counter](arr[counter - 1]);
                if (funcs[counter](arr[counter - 1]) === undefined) {
                    throw new Error(`callback at index ${counter} did not return any value.`)
                }
            }
        }
        catch (error) {
            errors.push({ index: counter, name: error.name, message: error.message });
        }
        if (arr[counter] === undefined) arr[counter] = null;
    }
    return {value: arr.reduce((acc, item) => item === null ? acc : item), errors};
};
// Решение
debugger;
const result = calculateAdvanced(
    () => { },
    () => {
        return 7;
    },
    () => { },
    prevResult => {
        return prevResult + 4;
    },
    () => {
        throw new RangeError('Range is too big.');
    },
    prevResult => {
        return prevResult + 1;
    },
    () => {
        throw new ReferenceError('ID is not defined.');
    },
    prevResult => {
        return prevResult * 5;
    },
);

console.log(result);


// Функция вернёт:
// { value: 60,
//     errors:
//      [ { index: 0,
//          name: 'Error',
//          message: 'callback at index 0 did not return any value.' },
//        { index: 2,
//          name: 'Error',
//          message: 'callback at index 2 did not return any value.' },
//        { index: 4, name: 'RangeError', message: 'Range is too big.' },
//        { index: 6,
//          name: 'ReferenceError',
//          message: 'ID is not defined.' } ] }