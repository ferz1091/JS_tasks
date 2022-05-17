// # Задача 9

// Отсортируйте массив по убыванию.

// Использовать встроенные методы массивов — нельзя.

const arr = [1, 2, 3, 4, 5, 6];

let temp;
for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= i + 1 && j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            };
        };
    };
};

console.log(arr);