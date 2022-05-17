// # Задача 10

// Отсортируйте массив по возрастанию.

// Использовать встроенные методы массивов — нельзя.

const arr = [6, 5, 4, 3, 2, 1];

let temp;
for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= i + 1 && j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            };
        };
    };
};

console.log(arr);