// # Задача 3

// Перепишите код, заменив оператор `switch` на оператор `if..else`:

const value = 'c';

// switch (value) {
//     case 'a':
//         console.log('a');
//         break;

//     case 'b':
//     case 'c':
//     case 'd':
//     case 'e':
//         console.log('others');
//         break;

//     default:
//         console.log('unknown');
// }

if (value == 'a') {
    console.log('a');
}
else if (value == 'b' || value == 'c' || value == 'd' || value == 'e') {
    console.log('others');
}
else {
    console.log('unknown');
};