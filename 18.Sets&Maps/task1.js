// # Задача 1

// Создать класс `DB` который будет имплементировать `CRUD` модель.

// - В качестве структуры данных использовать`Map`.
// - Метод`create`:
// -   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
// - -   возвращает`id`
//     - -   при создании пользователя генерирует уникальный`id`, который является ключом для объекта пользователя в структуре`Map`
//         - Метод`read`:
// -   -   принимает идентификатор пользователь
//     - -   если такого пользователя нет возвращать`null`
//         - -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
// - -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
// - Метод`readAll`:
// -   -   возвращает массив пользователей
//     - -   генерировать ошибку если в метод `readAll` передан параметр
//         - Метод`update`:
// -   -   обновляет пользователя
//     - -   принимает 2 обязательных параметра
//         - -   генерирует ошибку если передан несуществующий`id`
//             - -   генерирует ошибку если передан `id` с типом не строка
//                 - -   генерирует ошибку если второй параметр не валидный
//                     - Метод`delete`:
// -   -   удаляет пользователя
//     - -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный`id`

class DB {
    constructor() {
        this.dataBase = new Map();
    }
    generateId() {
        let id = Math.floor(Math.random() * 100);
        if (this.dataBase.has(id)) {
            this.generateId()
        }
        else {
            return id + '';
        }
    }
    create(obj) {
        if (typeof obj.name !== 'string' || typeof obj.age !== 'number' || typeof obj.country !== 'string' || typeof obj.salary !== 'number');
        let id = this.generateId();
        this.dataBase.set(id, obj);
        return id;
    }
    read(id) {
        if (arguments.length === 0 || typeof id !== 'string') throw new Error('Requires 2 arguments in method "read"');
        if (!this.dataBase.has(id)) return null
        else {
            return {...this.dataBase.get(id), id: id};
        }
    }
    readAll() {
        if (arguments.length > 0) throw new Error('readALL ERROR');
        return this.dataBase;
    }
    update(id, obj) {
        if (!this.dataBase.has(id) || typeof id !== 'string') throw new Error('Id is not valide');
        if (typeof obj !== 'object') throw new Error('2nd argument must be an object');
        this.dataBase.set(id, {...this.dataBase.get(id), ...obj});
    }
    delete(id) {
        if (!this.dataBase.has(id)) throw new Error('Id is not valide');
        this.dataBase.delete(id);
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
console.log(customers);
db.update(id, { age: 22 }); // id
db.delete(id); // true
console.log(customer);
