function remove(str, lettersToRemove) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (lettersToRemove.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    return result;
}

// Приклад використання:
let str = ' lms schqweool';
let lettersToRemove = ['q', 'w', 'e'];

let res = remove(str, lettersToRemove);
console.log(res);
