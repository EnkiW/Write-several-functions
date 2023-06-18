function Array() {
    let rows = parseInt(prompt('Введіть кількість рядків:'));
    let cols = parseInt(prompt('Введіть кількість стовпців:'));
    let array = [];
    for (let i = 0; i < rows; i++) {
        let inner = [];
        for (let j = 0; j < cols; j++) {
            let value = prompt('Введіть значення для елемента ( ' + i + ' - ' + j + ' ) ');
            inner.push(value);
        }
        array.push(inner);
    }
    return array;
}

// Приклад використання:
let twoDArray = Array();
console.log(twoDArray);
