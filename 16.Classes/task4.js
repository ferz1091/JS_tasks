/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

class Stringer {
    reverse(str) {
        return str.split('').reverse().join('');
    }
    uppercaseFirst(str) {
        let first = str[0].toUpperCase();
        return first + str.slice(1);
    }
    uppercaseAll(str) {
        let arr = str.split(' ');
        return arr.map((item) => item = item[0].toUpperCase() + item.slice(1)).join(' ');
    }
}

// Решение

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;