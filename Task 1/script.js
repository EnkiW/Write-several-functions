function calculate(numbers) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === 'number') {
            sum += numbers[i];
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    return sum / count;
}

// Приклад використання:
// let arr = [1, 2, 3, 4, 5, 6];
// let fin = calculate(arr);
// console.log(fin);
