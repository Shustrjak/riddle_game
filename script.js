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
        } else if (num < number) {
            alert('Загаданное число больше');
        } else if (num == number) {
            alert('Вы угадали');
            let conf = confirm('Сыграем еще?')
            if (conf == false) {
                alert('Игра окончена');
                window.close();
            } else{
                hideNumber(number);
            }
            return;
        } else {
            alert('введите число!');
        }
        
        hideNumber(number);
    }
    hideNumber(number);
    
}

riddle(rand());
