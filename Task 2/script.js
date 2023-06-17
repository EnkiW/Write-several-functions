function MathH(x, Znak, y) {
    let result;
    switch (Znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            return 'Введіть число!';
    }
    return result;
}

// Приклад використання:
// let x = 10;
// let y = 5;
// let Znak = '-';
//
// let result = MathH(x, Znak, y);
// console.log(result);
// Відповідь: 10 - 5 = 5