// # Задача 8

// Напишите код, который посчитает сумму всех парных элементов в массиве.В суммировании участвуют только элементы больше 3.

// Использовать встроенные методы массивов — нельзя.

const array = [1, 2, 3, 4, 5, 6];

let sum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 3 && array[i] % 2 == 0) sum += array[i];
};

console.log(sum);