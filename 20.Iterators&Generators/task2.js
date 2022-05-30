// # Задача 2

// Улучшите класс `Customers` добавив функцию генератор.

// **Обратите внимание**:

// 1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.

// Пример использования:

class Customers {
    db = [];
    add(obj) {
        if (typeof obj !== 'object' || obj.name === undefined) throw new Error('Error');
        this.db.push(obj);
    }
    *[Symbol.iterator]() {
        let result = [];
        for (let i = 0; i < this.db.length; i++) {
            let temp = this.getVerified(i);
            if (typeof temp !== 'undefined') {
                result.push(temp);
            }
        }
        for (let item of result) {
            yield item;
        }
    }
    getVerified(id) {
        if (typeof this.db[id] === 'undefined') return false;
        return this.db[id].verified === true ? this.db[id] : undefined;
    }
    checkVerified(i) {
        if (i >= this.db.length - 1) {
            return this.getVerified(i) ? i : this.db.length; 
        }
        for (let k = i; k <= this.db.length; k++) {
            if (this.getVerified(k) === true) {
                return k;
            }

        }
    }
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// // В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }