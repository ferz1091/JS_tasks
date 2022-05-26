// # Задача 2

// Улучшить класс `DB` из предыдущей задачи.

// - Добавить метод`find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
//     - Генерировать ошибку, если query не валидный
//         - Поля`name` и `country` ищут 100 % совпадение
//             - Поля`age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя - бы один из них
//                 - Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса

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
            return { ...this.dataBase.get(id), id: id };
        }
    }
    readAll() {
        if (arguments.length > 0) throw new Error('readALL ERROR');
        return this.dataBase;
    }
    update(id, obj) {
        if (!this.dataBase.has(id) || typeof id !== 'string') throw new Error('Id is not valide');
        if (typeof obj !== 'object') throw new Error('2nd argument must be an object');
        this.dataBase.set(id, { ...this.dataBase.get(id), ...obj });
    }
    delete(id) {
        if (!this.dataBase.has(id)) throw new Error('Id is not valide');
        this.dataBase.delete(id);
    }
    find(obj) {
        let result = [];
        if (typeof obj !== 'object') throw new Error('Query is not valide');
        for (let item of this.dataBase) {
            if (typeof obj.name === 'string') {
                if (obj.name !== item[1].name) continue;
            }
            if (typeof obj.country === 'string') {
                if (obj.country !== item[1].country) continue;
            }
            if (typeof obj.age !== 'undefined') {
                if (typeof obj.age.min === 'undefined') {
                    if (obj.age.max < item[1].age) continue;
                }
                if (typeof obj.age.max === 'undefined') {
                    if (obj.age.min > item[1].age) continue;
                }
                if (typeof obj.age.max !== 'undefined' && typeof obj.age.min !== 'undefined') {
                    if (obj.age.min > item[1].age || obj.age.max < item[1].age) continue;
                }
            }
            if (typeof obj.salary !== 'undefined') {
                if (typeof obj.salary.min === 'undefined') {
                    if (obj.salary.max < item[1].salary) continue;
                }
                if (typeof obj.salary.max === 'undefined') {
                    if (obj.salary.min > item[1].salary) continue;
                }
                if (typeof obj.salary.min !== 'undefined' && typeof obj.salary.max !== 'undefined') {
                    if (obj.salary.min > item[1].salary || obj.salary.max < item[1].salary) continue;
                }
            }
            result.push(item[1]);
        }
        return result;
    }
}

const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};
const person1 = {
    name: 'Marcos', // обязательное поле с типом string
    age: 25, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};
const db = new DB();
const id = db.create(person);
db.create(person1);
const customers = db.find(query); // массив пользователей
console.log(customers);