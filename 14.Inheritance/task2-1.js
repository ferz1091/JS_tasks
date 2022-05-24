/**
 * Задача 1.
 *
 * Добавьте всем функциям в прототип метод delay(ms).
 *
 * При вызове этого метода, функция, на которой этот метод вызывают,
 * должна быть вызвана отложено, через указанное количество миллисекунд.
 *
 * Если функция, на которой вызывается метод delay(ms) нуждается в аргументах,
 * то их нужно пробросить в аргументы функции, которую возвращает метод delay(ms).
 *
 * func.delay(1000)('value 1', 'value 2').
 *
 * В примере выше аргументы 'value 1' и 'value 2' станут первым и вторым
 * аргументами для функции func.
 *
 * Условия:
 * - количество миллисекунд указывается в первом аргументе метода delay(ms);
 * - возвращаемая методом delay функция должна быть необязательной;
 * - в реализации метода delay(ms) обязательно использовать setTimeout.
 */

const obj = {
    delay(time) {
        if (this.prototype.constructor.length > 0) {
            return (...args) => {
                setTimeout(() => {
                    this.prototype.constructor(...args);
                }, time);
            }
        }
        else {
            setTimeout(() => {
                this.prototype.constructor();
            }, time);
        }
    }
};

function sayHello() {
    console.log('Hello!');
}
Object.setPrototypeOf(sayHello, obj);
sayHello.delay(1000); /* Выведет "Hello!" через 1 секунду */

function sum(a, b) {
    console.log(a + b);
}
Object.setPrototypeOf(sum, obj);
sum.delay(1000)(5, 2); /* Выведет 7 через 1 секунду. */