'use strict';


let rand = function rand() {
    return Math.floor(Math.random() * 100) + 1;
};
// const isNumber = function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
// };
function riddle (number){
    const hiddenNumber = number;
    console.log('hiddenNumber: ', hiddenNumber);
    function hideNumber(number) {
        const num = prompt('Угадайте число от 1 до 100');
        
        if (num > number) {
            alert('Загаданное число меньше');
            hideNumber(number);
        }else if (num < number) {
            alert('Загаданное число больше');
            hideNumber(number);
        } else if (num == number) {
            alert('Вы угадали');
            if (confirm('Сыграем еще?') == true) {
                hideNumber(number);
            } else {
                window.close();
            }
        } else {
            alert('введите число!');
        }
        hideNumber(hiddenNumber);
    }
    hideNumber(number);
    
}

riddle(rand());
