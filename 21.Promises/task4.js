// # Задача 4

const { type } = require('os');
const { json } = require('stream/consumers');

// Создайте класс `Countries` который при создании своего экземпляра принимает один параметр в с типом строка. Этот параметр будет служить API эндпоинтом.

// У класса `Countries` должен быть один метод `send` который должен возвращать промис.

// А принимает метод `send` один параметр который должен быть по типу `number` и который потом будет использоваться как значение для `GET` query-параметра `size`.

// **Обратите внимание**:

// 1. Метод `send` должен возвращать промис.
// 2. Использование `async & await` внутри класса **запрещено**.
// 3. Использование посторонних библиотек кроме библиотеки `fetch` **запрещено**
// 4. Если сервер ответил статус кодом `200` промис **должен** возвращать массив который содержит список объектов-стран.
// 5. В том случае если сервер ответил статус кодом не `200` промис **должен** генерировать ошибку с текстом `We have error, status code: ${statusCode}`
// 6. Генерировать ошибку если `url` по типу не строка.
// 7. Генерировать ошибку если методу `send` передать по типу не число.

// **В результате такой код должен работать**:

const get = require('./node_modules/fetch/lib/fetch').fetchUrl;
const url = 'https://dummyjson.com/posts';

class Countries {
    constructor(endPoint) {
        if (typeof endPoint !== 'string') throw new Error('endPoint must be a string');
        this.endPoint = endPoint;
    }
    send(num) {
        if (typeof num !== 'number') throw new Error('It must be a number');
        return new Promise((resolve, reject) => {
            get(url + `?limit=${num}`, (error, meta, body) => {
                if (error) reject(`We have error, status code: ${error}`);
                resolve(JSON.parse(body));
            })
        })
    }
}


const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // массив стран
    } catch (error) {
        console.log(error);
    }
})();