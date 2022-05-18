/**
 * Задача 8.
 *
 * Дан массив с числами `[1, 2, 3]`.
 * Создайте функцию `f`, которая принимает массив в качестве параметра,
 * а затем последовательно выводит на экран его элементы.
 *
 * Условия:
 * - Входной параметр должен быть не пустым массивом;
 * - Обязательно использовать рекурсию;
 * - Использовать цикл запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
function f (arr) {
    if (!Array.isArray(arr)) throw new Error('Error: parameter type should be an array');
    if (!arr.length) throw new Error('Error: parameter can\'t be an empty');
    let temp = [...arr];
    console.log(temp[0]);
    temp.splice(0, 1);
    if (temp.length === 0) return 1;
    f(temp);
}
/* не удалять */
f([1, 2, 3]);
// 1
// 2
// 3
f(1, 2, 3); // Error: parameter type should be an array
f('Content'); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty



exports.f = f;
/* не удалять */
