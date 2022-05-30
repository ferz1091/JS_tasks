// # Задача 1

// Создайте класс `Customers` который умеет работать с механизмом `for of`.

// Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.

// Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

// **Обратите внимание**:

// 1. Использование генераторов **запрещено**.
// 2. Использование посторонних библиотек **запрещено**
// 3. У класса `Customers` **должен** быть метод `Symbol.iterator`

// Пример использования:

class Customers {
    db = [];
    add(obj) {
        if (typeof obj !== 'object' || obj.name === undefined) throw new Error('Error');
        this.db.push(obj);
    }
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i = this.checkVerified(i);
                const done = i >= this.db.length;
                const value = !done ? this.db[i++] : undefined;
                return {
                    done,
                    value
                }
            }
        }
    }
    getVerified(id) {
        if (typeof this.db[id] === 'undefined') return false;
        return this.db[id].verified === true ? true : false;
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
customers.add({name: 'Artem'});

for (const customer of customers) {
    console.log(customer);
}

// // В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }

