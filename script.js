'use strict';


let rand = function rand() {
    return Math.floor(Math.random() * 100) + 1;
};
console.log('rand: ', rand());




function hiddenNumber(number) {
    const num = parseInt(prompt('Угадайте число от 1 до 100'));
    while (num > number) {
        alert('Загаданное число меньше');
    }
    while (num < number) {
        alert('Загаданное число больше');
    }
    while (num == number) {
        alert('Вы угадали');
        return;
    }
    
    
}
hiddenNumber(rand());










// const title = confirm("Угадай число от 1 до 100");
// function cancelParams(title) {
//     if (title == false) {
//         window.close();
//     } else{
//     let rand = function rand() {
//         return Math.floor(Math.random() * 100) + 1;
//     };
//     console.log('rand:', rand());
// }

// }


// function isNumber(num){
//     return !isNaN(parseInt(num)) && isFinite(num) && num !== null;
// }
// let hiddenNumber = parseInt(prompt('Напиши загаданное число?'));

// function getNumber(num) {
//     if (!isNumber(num) === !isNumber(rand())) {
//         return console.log('вы угадали');
//     } else{
//         return parseInt(prompt('Напиши загаданное число?'));
//     }
// }

// getNumber(hiddenNumber);



// функцияОбертка() {
//     return функцияРекурсии {
//         какой то код
//         функцияРекурсии(); // это рекурсия
//     }
// }

// const переменная = функцияОбертка(); //это замыкание
// переменная(передаемВЗамыканиеЧисло);