// # Задача 2

// Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

// Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

// **Обратите внимание**:

// 1. Функция `getCustomers` должна возвращать промис;
// 2. Использование `async & await` **запрещено**;
// 3. Использование посторонних библиотек **запрещено**;
// 4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
// 5. Склеивание происходит **только** для объектов с флагом `verified: true`.

// **Пример использования**:

function getCustomers(a, b) {
    let result = {...a};
    const promise = new Promise(function(resolve, reject) {
        for (let i = 0; i < a.length; i++) {
            if (a[i].verified === true) {
                for (let j = 0; j < b.length; j++) {
                    if (a[i].id === b[j].id) {
                        Object.assign(a[i], b[j]);
                        break;
                    }
                    else if (j === b.length - 1) {
                        reject(Error(`We don't have information about country for this customer: ${a[i].name}`))
                    }
                }
            };
        }
        resolve (result);
    })
    return promise;
}

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))